import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useLang } from "@/contexts/LangContext";
import { seoHead } from "@/lib/seo";
import { useState } from "react";
import { ARTICLES, formatDate } from "@/lib/articles";

export const Route = createFileRoute("/blog")({
  head: ({ match }) => seoHead({
    path: "/blog",
    search: match.search,
    title: {
      de: "Blog — IT, KI & Sicherheit aktuell · vuxuantiep.de",
      en: "Blog — IT, AI & Security · vuxuantiep.de",
      vi: "Blog — IT, AI & Bảo mật · vuxuantiep.de",
    },
    description: {
      de: "Aktuelle Artikel zu KI und Sicherheit, Microsoft 365, openDesk & Nubus, lokaler KI, WebAssembly, Kali Linux und dem IT-Freelancer-Markt. Aus der Praxis, ohne Hype.",
      en: "Articles on AI, LLMs, cloud architecture, and modern web technologies. Hands-on, no hype.",
      vi: "Bài viết về AI, LLM, kiến trúc đám mây và công nghệ web hiện đại. Từ thực tiễn, không thổi phồng.",
    },
  }),
  component: Blog,
});

function Blog() {
  const { t, lang } = useLang();
  const pick = (l: { de: string; en: string; vi: string }) => (lang === "EN" ? l.en : lang === "VI" ? l.vi : l.de);
  const all = t("Alle", "All", "Tất cả");
  const [tag, setTag] = useState<string | null>(null);
  const [q, setQ] = useState("");

  const [featured, ...rest] = ARTICLES;
  // Älterer Langform-Artikel mit eigener Seite
  const gpu = {
    tag: "GPU · Self-Hosting",
    date: "2026-07-26",
    title: t("Lokale LLMs trainieren mit eigenem GPU-Server", "Training local LLMs on your own GPU server", "Huấn luyện LLM cục bộ với máy chủ GPU riêng"),
    excerpt: t(
      "Welche GPU für lokales Training taugt, wie das Projekt technisch aufgesetzt wird und wie die Hardware optimal ausgelastet wird.",
      "Which GPU makes sense for local training, how to set it up and how to keep the hardware utilized.",
      "GPU nào phù hợp để huấn luyện cục bộ, cách thiết lập và cách tận dụng tối đa phần cứng."
    ),
  };

  const tags = Array.from(new Set(ARTICLES.map((a) => a.tag)));
  const needle = q.trim().toLowerCase();
  const matches = (text: string) => !needle || text.toLowerCase().includes(needle);
  const posts = rest.filter((a) => (!tag || a.tag === tag) && matches(`${pick(a.title)} ${pick(a.excerpt)} ${a.tag}`));
  const showFeatured = (!tag || featured.tag === tag) && matches(`${pick(featured.title)} ${pick(featured.excerpt)} ${featured.tag}`);
  const showGpu = !tag && matches(`${gpu.title} ${gpu.excerpt} ${gpu.tag}`);

  return (
    <div className="min-h-screen">
      <Nav />

      <section className="mx-auto max-w-6xl px-4 pt-16 pb-10 sm:px-6 md:pt-20">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Blog · Journal</div>
        <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight">
          {t("IT, KI & Sicherheit –", "IT, AI & security –", "IT, AI & bảo mật –")}<br />{t("aktuell eingeordnet.", "put into context.", "góc nhìn cập nhật.")}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          {t(
            "Aktuelle Themen aus der Praxis: KI-Sicherheit, Microsoft 365, souveräne Arbeitsplätze mit openDesk & Nubus, lokale KI, WebAssembly, Kali Linux und der IT-Freelancer-Markt.",
            "Current topics from practice: AI security, Microsoft 365, sovereign workplaces with openDesk & Nubus, local AI, WebAssembly, Kali Linux and the IT freelance market.",
            "Chủ đề thời sự từ thực tế: bảo mật AI, Microsoft 365, môi trường làm việc tự chủ với openDesk & Nubus, AI cục bộ, WebAssembly, Kali Linux và thị trường IT freelancer."
          )}
        </p>

        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {[null, ...tags].map((tg) => (
              <button
                key={tg ?? "all"}
                type="button"
                onClick={() => setTag(tg)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${tag === tg ? "bg-primary text-primary-foreground" : "bg-surface text-muted-foreground hover:text-foreground"}`}
              >
                {tg ?? all}
              </button>
            ))}
          </div>
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t("Artikel suchen…", "Search articles…", "Tìm bài viết…")}
              className="w-full rounded-full bg-surface py-2.5 pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>
      </section>

      {showFeatured && (
        <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
          <Link to="/blog/$slug" params={{ slug: featured.slug }} className="group block rounded-3xl bg-gradient-to-br from-[var(--beige)] to-[var(--surface)] p-7 md:p-10">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-full bg-primary px-2.5 py-0.5 font-medium text-primary-foreground">{t("Neu", "New", "Mới")}</span>
              <span className="text-muted-foreground">{featured.tag} · {formatDate(featured.date, lang)} · {featured.readMin} min</span>
            </div>
            <h2 className="mt-4 text-2xl font-semibold group-hover:text-primary md:text-4xl">{pick(featured.title)}</h2>
            <p className="mt-4 max-w-3xl text-muted-foreground">{pick(featured.excerpt)}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
              {t("Artikel lesen", "Read article", "Đọc bài viết")} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group flex flex-col rounded-3xl bg-surface p-6 transition-colors hover:bg-[var(--beige)]">
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">{p.tag}</span>
                <span>{formatDate(p.date, lang)}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold group-hover:text-primary">{pick(p.title)}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{pick(p.excerpt)}</p>
              <div className="mt-5 inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground">
                {t("Weiterlesen", "Continue reading", "Đọc tiếp")} <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
          {showGpu && (
            <Link to="/blog/lokale-llm-gpu-server" className="group flex flex-col rounded-3xl bg-surface p-6 transition-colors hover:bg-[var(--beige)]">
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">{gpu.tag}</span>
                <span>{formatDate(gpu.date, lang)}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold group-hover:text-primary">{gpu.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{gpu.excerpt}</p>
              <div className="mt-5 inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground">
                {t("Weiterlesen", "Continue reading", "Đọc tiếp")} <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          )}
        </div>
        {!showFeatured && posts.length === 0 && !showGpu && (
          <p className="mt-6 text-muted-foreground">{t("Keine Artikel gefunden.", "No articles found.", "Không tìm thấy bài viết.")}</p>
        )}
      </section>

      <Footer />
    </div>
  );
}
