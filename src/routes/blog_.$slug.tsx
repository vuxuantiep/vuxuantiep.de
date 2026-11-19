import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ExternalLink, Lightbulb } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useLang } from "@/contexts/LangContext";
import { seoHead } from "@/lib/seo";
import { ARTICLES, formatDate, getArticle } from "@/lib/articles";

export const Route = createFileRoute("/blog_/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { slug: article.slug };
  },
  head: ({ match, params }) => {
    const a = getArticle(params.slug);
    if (!a) return {};
    return seoHead({
      path: `/blog/${a.slug}`,
      search: match.search,
      title: {
        de: `${a.title.de} — vuxuantiep.de`,
        en: `${a.title.en} — vuxuantiep.de`,
        vi: `${a.title.vi} — vuxuantiep.de`,
      },
      description: a.excerpt,
    });
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { slug } = Route.useLoaderData();
  const { t, lang } = useLang();
  const a = getArticle(slug)!;
  const pick = (l: { de: string; en: string; vi: string }) => (lang === "EN" ? l.en : lang === "VI" ? l.vi : l.de);
  const others = ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Nav />

      <article className="mx-auto w-full max-w-3xl px-4 pb-16 pt-16 sm:px-6 md:pt-24">
        <Link to="/blog" className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> {t("Alle Artikel", "All articles", "Tất cả bài viết")}
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">{a.tag}</span>
          <span>{formatDate(a.date, lang)}</span>
          <span>· {a.readMin} {t("min Lesezeit", "min read", "phút đọc")}</span>
        </div>

        <h1 className="mt-4 text-[1.75rem] md:text-[2.25rem] font-semibold leading-tight">{pick(a.title)}</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{pick(a.excerpt)}</p>

        {lang !== "DE" && (
          <p className="mt-6 rounded-2xl bg-[var(--beige)] px-4 py-3 text-sm text-foreground/80">
            {t("", "The full article is currently available in German.", "Bài viết đầy đủ hiện có bằng tiếng Đức.")}
          </p>
        )}

        <div className="mt-10 space-y-5 text-[17px] leading-relaxed text-foreground/90">
          {a.body.map((b, i) => {
            if (b.type === "h") return <h2 key={i} className="pt-4 text-2xl font-semibold text-foreground">{b.text}</h2>;
            if (b.type === "ul")
              return (
                <ul key={i} className="space-y-2.5 pl-1">
                  {b.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              );
            if (b.type === "tip")
              return (
                <div key={i} className="flex gap-3 rounded-3xl bg-surface p-5">
                  <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p>{b.text}</p>
                </div>
              );
            return <p key={i}>{b.text}</p>;
          })}
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {t("Quellen", "Sources", "Nguồn")}
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {a.sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-1.5 text-primary hover:underline underline-offset-4">
                  <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {s.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">
            {t("Stand: ", "As of: ", "Cập nhật: ")}{formatDate(a.date, lang)}
          </p>
        </div>
      </article>

      <section className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
        <h2 className="text-2xl font-semibold">{t("Weitere Artikel", "More articles", "Bài viết khác")}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {others.map((o) => (
            <Link key={o.slug} to="/blog/$slug" params={{ slug: o.slug }} className="group flex flex-col rounded-3xl bg-surface p-6 transition-colors hover:bg-[var(--beige)]">
              <span className="text-xs font-medium text-primary">{o.tag}</span>
              <h3 className="mt-2 font-semibold group-hover:text-primary">{pick(o.title)}</h3>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground">
                {t("Lesen", "Read", "Đọc")} <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
