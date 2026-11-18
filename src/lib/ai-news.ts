// Täglicher KI-News-Scraper: sammelt Meldungen aus Hacker News (Algolia API),
// TechCrunch AI und The Verge AI, ordnet sie per Schlagwort-Analyse einer
// Kategorie (= Reiter auf der Startseite) zu und legt sie in Cloudflare KV ab.

export type AiNewsCategory = "agentic" | "llm" | "business" | "security" | "webllm" | "gpu";

export interface AiNewsItem {
  title: string;
  url: string;
  source: string;
  publishedAt: string;
  category: AiNewsCategory;
}

export interface AiNewsPayload {
  updatedAt: string;
  /** Englische Quellen (für EN/VI) */
  items: AiNewsItem[];
  /** Deutsche Quellen (für DE) – seit 18.11.2026 */
  itemsDe?: AiNewsItem[];
}

export interface AiNewsKv {
  get(key: string): Promise<string | null>;
  put(key: string, value: string): Promise<void>;
}

export const AI_NEWS_KV_KEY = "latest";

const MAX_ITEMS_PER_CATEGORY = 10;

// Reihenfolge = Priorität: der erste Treffer bestimmt die Kategorie.
// "gpu" steht bewusst vor "ecommerce"/"llm", damit z.B. "GPU marketplace" oder
// "renting GPUs for LLM training" nicht fälschlich dort landen.
const CATEGORY_MATCHERS: Array<[AiNewsCategory, RegExp]> = [
  ["security", /sicherheit|sicherheitsl|schwachstell|lücke|angriff|datenleck|ransomware|hacker|patch|securit|vulnerab|exploit|breach|malware|phishing|jailbreak|prompt.?injection|cyber|zero.?day|hacked|attack/i],
  ["agentic", /agent|agentisch|autonom|\bmcp\b|tool.?call|langgraph|langchain|crewai|orchestr|copilot|claude code|codex|multi.?step/i],
  ["gpu", /grafikkarte|rechenzentr|ki-chip|\bgpu(s)?\b|\bh100\b|\bh200\b|\ba100\b|\bb200\b|nvidia|compute.?rental|gpu.?cloud|gpu.?cluster|gpu.?marketplace|rent.*gpu|gpu.*rent|vast\.ai|runpod|lambda labs|coreweave|datacenter.?compute|data.?center gpu/i],
  ["webllm", /webllm|web.?assembly|\bwasm\b|webgpu|webnn|transformers\.js|onnx.?(web|runtime)|in.?browser (llm|inference|model)|browser.?based (llm|inference)|client.?side (llm|inference)/i],
  ["llm", /sprachmodell|ki-modell|chatgpt|\bllm\b|\bgpt|claude|gemini|llama|mistral|deepseek|qwen|open.?ai|anthropic|model|transformer|inference|chatbot|benchmark|fine.?tun|reasoning/i],
];

function categorize(title: string): AiNewsCategory {
  for (const [category, pattern] of CATEGORY_MATCHERS) {
    if (pattern.test(title)) return category;
  }
  return "business";
}

function decodeXmlEntities(value: string): string {
  return value
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&amp;/g, "&");
}

function extractTag(block: string, tag: string): string | null {
  const match = block.match(new RegExp(`<${tag}[^>]*>(?:\\s*<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>\\s*)?</${tag}>`));
  return match ? decodeXmlEntities(match[1].trim()) : null;
}

function toIsoDate(value: string | null): string {
  if (value) {
    const date = new Date(value);
    if (!Number.isNaN(date.getTime())) return date.toISOString();
  }
  return new Date().toISOString();
}

async function fetchHackerNews(): Promise<AiNewsItem[]> {
  const since = Math.floor(Date.now() / 1000) - 3 * 24 * 3600;
  // Generische Queries ("AI", "LLM", "AI agent") treffen kaum Security- oder
  // GPU-Markt-Themen – daher zusätzliche, gezielte Suchen für diese Nischen.
  const queries = [
    "AI",
    "LLM",
    "AI agent",
    "AI security",
    "prompt injection",
    "GPU rental",
    "GPU cloud",
    "rent GPU",
    "WebLLM",
    "WebAssembly AI",
    "WebGPU",
  ];
  const items: AiNewsItem[] = [];
  const seen = new Set<string>();

  for (const query of queries) {
    const url =
      `https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(query)}` +
      `&tags=story&hitsPerPage=25&numericFilters=${encodeURIComponent(`created_at_i>${since}`)}`;
    const response = await fetch(url);
    if (!response.ok) continue;
    const data = (await response.json()) as {
      hits?: Array<{ title?: string; url?: string; objectID: string; created_at: string; points?: number }>;
    };
    for (const hit of data.hits ?? []) {
      if (!hit.title || (hit.points ?? 0) < 10) continue;
      const link = hit.url || `https://news.ycombinator.com/item?id=${hit.objectID}`;
      if (seen.has(link)) continue;
      seen.add(link);
      items.push({
        title: hit.title,
        url: link,
        source: "Hacker News",
        publishedAt: toIsoDate(hit.created_at),
        category: categorize(hit.title),
      });
    }
  }
  return items;
}

// Versteht RSS-2.0-<item>- und Atom-<entry>-Feeds.
async function fetchFeed(feedUrl: string, source: string, relevant?: RegExp): Promise<AiNewsItem[]> {
  const response = await fetch(feedUrl, { headers: { "user-agent": "vuxuantiep.de ai-news bot" } });
  if (!response.ok) return [];
  const xml = await response.text();
  const blocks = xml.match(/<(?:item|entry)[\s>][\s\S]*?<\/(?:item|entry)>/g) ?? [];
  const items: AiNewsItem[] = [];

  for (const block of blocks.slice(0, relevant ? 80 : 20)) {
    const title = extractTag(block, "title");
    if (!title) continue;
    if (relevant && !relevant.test(title)) continue;
    if (/^(anzeige|sponsored|werbung)/i.test(title)) continue; // keine Werbung
    let link = extractTag(block, "link");
    if (!link) {
      const href = block.match(/<link[^>]*href="([^"]+)"/);
      link = href ? decodeXmlEntities(href[1]) : null;
    }
    if (!link || !/^https?:\/\//.test(link)) continue;
    const published = extractTag(block, "pubDate") ?? extractTag(block, "published") ?? extractTag(block, "updated");
    items.push({
      title,
      url: link,
      source,
      publishedAt: toIsoDate(published),
      category: categorize(title),
    });
  }
  return items;
}

// Allgemeine Nachrichtenfeeds (heise, golem, t3n) enthalten auch Themen
// abseits von IT/KI – nur Titel mit diesen Begriffen werden übernommen.
const RELEVANT_DE = /\bKI\b|künstliche intelligenz|\bAI\b|\bLLM|sprachmodell|chatgpt|openai|anthropic|claude|gemini|copilot|mistral|agent|sicherheitsl|schwachstell|lücke|angriff|ransomware|hacker|datenleck|\bgpu|nvidia|rechenzentr|webassembly|open.?source|microsoft 365|entra|cloud|souverän/i;

function rank(all: AiNewsItem[]): AiNewsItem[] {
  const seenTitles = new Set<string>();
  const deduped = all.filter((item) => {
    const key = item.title.toLowerCase().replace(/\W+/g, " ").trim();
    if (seenTitles.has(key)) return false;
    seenTitles.add(key);
    return true;
  });

  deduped.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  const perCategory = new Map<AiNewsCategory, number>();
  return deduped.filter((item) => {
    const count = perCategory.get(item.category) ?? 0;
    if (count >= MAX_ITEMS_PER_CATEGORY) return false;
    perCategory.set(item.category, count + 1);
    return true;
  });
}

const settled = (results: PromiseSettledResult<AiNewsItem[]>[]) =>
  results.flatMap((result) => (result.status === "fulfilled" ? result.value : []));

export async function scrapeAiNews(): Promise<AiNewsPayload> {
  const [en, de] = await Promise.all([
    Promise.allSettled([
      fetchHackerNews(),
      fetchFeed("https://techcrunch.com/category/artificial-intelligence/feed/", "TechCrunch"),
      fetchFeed("https://www.theverge.com/rss/ai-artificial-intelligence/index.xml", "The Verge"),
    ]),
    Promise.allSettled([
      fetchFeed("https://the-decoder.de/feed/", "The Decoder"),
      fetchFeed("https://www.heise.de/security/rss/news-atom.xml", "heise Security"),
      fetchFeed("https://www.heise.de/rss/heise-atom.xml", "heise online", RELEVANT_DE),
      fetchFeed("https://rss.golem.de/rss.php?feed=ATOM1.0", "Golem", RELEVANT_DE),
      fetchFeed("https://t3n.de/rss.xml", "t3n", RELEVANT_DE),
    ]),
  ]);

  return { updatedAt: new Date().toISOString(), items: rank(settled(en)), itemsDe: rank(settled(de)) };
}

export async function refreshAiNews(kv: AiNewsKv): Promise<AiNewsPayload> {
  const payload = await scrapeAiNews();
  if (payload.items.length > 0 || (payload.itemsDe?.length ?? 0) > 0) {
    await kv.put(AI_NEWS_KV_KEY, JSON.stringify(payload));
  }
  return payload;
}
