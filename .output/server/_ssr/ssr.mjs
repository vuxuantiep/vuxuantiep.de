//#region node_modules/.nitro/vite/services/ssr/index.js
var lastCapturedError;
var TTL_MS = 5e3;
function record(error) {
	lastCapturedError = {
		error,
		at: Date.now()
	};
}
if (typeof globalThis.addEventListener === "function") {
	globalThis.addEventListener("error", (event) => record(event.error ?? event));
	globalThis.addEventListener("unhandledrejection", (event) => record(event.reason));
}
function consumeLastCapturedError() {
	if (!lastCapturedError) return void 0;
	if (Date.now() - lastCapturedError.at > TTL_MS) {
		lastCapturedError = void 0;
		return;
	}
	const { error } = lastCapturedError;
	lastCapturedError = void 0;
	return error;
}
function renderErrorPage() {
	return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #111; color: #fff; }
      .secondary { background: #fff; color: #111; border-color: #d1d5db; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
var AI_NEWS_KV_KEY = "latest";
var MAX_ITEMS_PER_CATEGORY = 10;
var CATEGORY_MATCHERS = [
	["security", /securit|vulnerab|exploit|breach|malware|phishing|jailbreak|prompt.?injection|cyber|zero.?day|hacked|attack/i],
	["agentic", /agent|autonom|\bmcp\b|tool.?call|langgraph|langchain|crewai|orchestr|copilot|claude code|codex|multi.?step/i],
	["gpu", /\bgpu(s)?\b|\bh100\b|\bh200\b|\ba100\b|\bb200\b|nvidia|compute.?rental|gpu.?cloud|gpu.?cluster|gpu.?marketplace|rent.*gpu|gpu.*rent|vast\.ai|runpod|lambda labs|coreweave|datacenter.?compute|data.?center gpu/i],
	["webllm", /webllm|web.?assembly|\bwasm\b|webgpu|webnn|transformers\.js|onnx.?(web|runtime)|in.?browser (llm|inference|model)|browser.?based (llm|inference)|client.?side (llm|inference)/i],
	["llm", /\bllm\b|\bgpt|claude|gemini|llama|mistral|deepseek|qwen|open.?ai|anthropic|model|transformer|inference|chatbot|benchmark|fine.?tun|reasoning/i]
];
function categorize(title) {
	for (const [category, pattern] of CATEGORY_MATCHERS) if (pattern.test(title)) return category;
	return "business";
}
function decodeXmlEntities(value) {
	return value.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, "\"").replace(/&#0?39;/g, "'").replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code))).replace(/&#x([0-9a-fA-F]+);/g, (_, code) => String.fromCodePoint(parseInt(code, 16))).replace(/&amp;/g, "&");
}
function extractTag(block, tag) {
	const match = block.match(new RegExp(`<${tag}[^>]*>(?:\\s*<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>\\s*)?</${tag}>`));
	return match ? decodeXmlEntities(match[1].trim()) : null;
}
function toIsoDate(value) {
	if (value) {
		const date = new Date(value);
		if (!Number.isNaN(date.getTime())) return date.toISOString();
	}
	return (/* @__PURE__ */ new Date()).toISOString();
}
async function fetchHackerNews() {
	const since = Math.floor(Date.now() / 1e3) - 72 * 3600;
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
		"WebGPU"
	];
	const items = [];
	const seen = /* @__PURE__ */ new Set();
	for (const query of queries) {
		const url = `https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(query)}&tags=story&hitsPerPage=25&numericFilters=${encodeURIComponent(`created_at_i>${since}`)}`;
		const response = await fetch(url);
		if (!response.ok) continue;
		const data = await response.json();
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
				category: categorize(hit.title)
			});
		}
	}
	return items;
}
async function fetchFeed(feedUrl, source) {
	const response = await fetch(feedUrl, { headers: { "user-agent": "vuxuantiep.de ai-news bot" } });
	if (!response.ok) return [];
	const blocks = (await response.text()).match(/<(?:item|entry)[\s>][\s\S]*?<\/(?:item|entry)>/g) ?? [];
	const items = [];
	for (const block of blocks.slice(0, 20)) {
		const title = extractTag(block, "title");
		if (!title) continue;
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
			category: categorize(title)
		});
	}
	return items;
}
async function scrapeAiNews() {
	const all = (await Promise.allSettled([
		fetchHackerNews(),
		fetchFeed("https://techcrunch.com/category/artificial-intelligence/feed/", "TechCrunch"),
		fetchFeed("https://www.theverge.com/rss/ai-artificial-intelligence/index.xml", "The Verge")
	])).flatMap((result) => result.status === "fulfilled" ? result.value : []);
	const seenTitles = /* @__PURE__ */ new Set();
	const deduped = all.filter((item) => {
		const key = item.title.toLowerCase().replace(/\W+/g, " ").trim();
		if (seenTitles.has(key)) return false;
		seenTitles.add(key);
		return true;
	});
	deduped.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
	const perCategory = /* @__PURE__ */ new Map();
	const items = deduped.filter((item) => {
		const count = perCategory.get(item.category) ?? 0;
		if (count >= MAX_ITEMS_PER_CATEGORY) return false;
		perCategory.set(item.category, count + 1);
		return true;
	});
	return {
		updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
		items
	};
}
async function refreshAiNews(kv) {
	const payload = await scrapeAiNews();
	if (payload.items.length > 0) await kv.put(AI_NEWS_KV_KEY, JSON.stringify(payload));
	return payload;
}
var serverEntryPromise;
async function getServerEntry() {
	if (!serverEntryPromise) serverEntryPromise = import("./server-Dnk3zXaH.mjs").then((m) => m.default ?? m);
	return serverEntryPromise;
}
async function normalizeCatastrophicSsrResponse(response) {
	if (response.status < 500) return response;
	if (!(response.headers.get("content-type") ?? "").includes("application/json")) return response;
	const body = await response.clone().text();
	if (!body.includes("\"unhandled\":true") || !body.includes("\"message\":\"HTTPError\"")) return response;
	console.error(consumeLastCapturedError() ?? /* @__PURE__ */ new Error(`h3 swallowed SSR error: ${body}`));
	return new Response(renderErrorPage(), {
		status: 500,
		headers: { "content-type": "text/html; charset=utf-8" }
	});
}
async function handleAiNewsRequest(env) {
	const headers = {
		"content-type": "application/json; charset=utf-8",
		"cache-control": "public, max-age=300"
	};
	const kv = (env ?? globalThis.__env__)?.AI_NEWS;
	if (!kv) return new Response(JSON.stringify({
		updatedAt: null,
		items: []
	}), { headers });
	try {
		const cached = await kv.get(AI_NEWS_KV_KEY);
		if (cached) return new Response(cached, { headers });
		const payload = await refreshAiNews(kv);
		return new Response(JSON.stringify(payload), { headers });
	} catch (error) {
		console.error("ai-news: request failed", error);
		return new Response(JSON.stringify({
			updatedAt: null,
			items: []
		}), { headers });
	}
}
var server_default = { async fetch(request, env, ctx) {
	if (new URL(request.url).pathname === "/api/ai-news") return handleAiNewsRequest(env);
	try {
		return await normalizeCatastrophicSsrResponse(await (await getServerEntry()).fetch(request, env, ctx));
	} catch (error) {
		console.error(error);
		return new Response(renderErrorPage(), {
			status: 500,
			headers: { "content-type": "text/html; charset=utf-8" }
		});
	}
} };
//#endregion
export { server_default as default, renderErrorPage as t };
