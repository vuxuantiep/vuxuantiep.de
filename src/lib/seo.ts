// Zentrale SEO-Helfer: canonical, hreflang und lokalisierte Meta-Tags pro Route.
// Sprachversionen werden über den Query-Parameter ?lang=en|vi adressiert,
// Deutsch (Default) läuft ohne Parameter.

export const SITE_URL = "https://vuxuantiep.de";

export type LangParam = "en" | "vi" | undefined;

interface LocalizedText {
  de: string;
  en: string;
  vi: string;
}

/** Liest den lang-Query-Parameter aus dem (untypisierten) Router-Search-Objekt. */
export function langFromSearch(search: unknown): LangParam {
  const value = (search as { lang?: string } | undefined)?.lang;
  return value === "en" || value === "vi" ? value : undefined;
}

function urlFor(path: string, lang: LangParam): string {
  return lang ? `${SITE_URL}${path}?lang=${lang}` : `${SITE_URL}${path}`;
}

function pick(text: LocalizedText, lang: LangParam): string {
  return lang === "en" ? text.en : lang === "vi" ? text.vi : text.de;
}

/**
 * Erzeugt meta + links für den Route-Head:
 * - Title & Description in der Sprache der aufgerufenen URL
 * - selbstreferenzierender canonical (jede Sprachversion ist ihr eigenes Original)
 * - hreflang für de/en/vi plus x-default (→ deutsche Version)
 */
export function seoHead(options: {
  path: string;
  search: unknown;
  title: LocalizedText;
  description: LocalizedText;
  noindex?: boolean;
}) {
  const lang = langFromSearch(options.search);
  const meta: Record<string, string>[] = [
    { title: pick(options.title, lang) },
    { name: "description", content: pick(options.description, lang) },
    { property: "og:url", content: urlFor(options.path, lang) },
  ];
  if (options.noindex) {
    meta.push({ name: "robots", content: "noindex" });
  }
  return {
    meta,
    links: [
      { rel: "canonical", href: urlFor(options.path, lang) },
      { rel: "alternate", hreflang: "de", href: urlFor(options.path, undefined) },
      { rel: "alternate", hreflang: "en", href: urlFor(options.path, "en") },
      { rel: "alternate", hreflang: "vi", href: urlFor(options.path, "vi") },
      { rel: "alternate", hreflang: "x-default", href: urlFor(options.path, undefined) },
    ],
  };
}
