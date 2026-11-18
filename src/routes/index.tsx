import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUp } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLang } from "@/contexts/LangContext";
import { Hero } from "@/components/site/Hero";
import { AboutSection } from "@/components/site/AboutSection";
import { SkillsServices } from "@/components/site/SkillsServices";
import { ProjectsShowcase } from "@/components/site/ProjectsShowcase";
import { TracePlatform } from "@/components/site/TracePlatform";
import { ExperienceSection } from "@/components/site/ExperienceSection";
import { seoHead } from "@/lib/seo";
import { ARTICLES, formatDate } from "@/lib/articles";

export const Route = createFileRoute("/")({
  head: ({ match }) => seoHead({
    path: "/",
    search: match.search,
    title: {
      de: "IT-Infrastruktur & souveräne KI-Agenten | Vu Xuan Tiep, Hamburg",
      en: "Sovereign AI & Identity Security | Vu Xuan Tiep, Hamburg",
      vi: "AI tự chủ & Bảo mật danh tính | Vu Xuan Tiep, Hamburg",
    },
    description: {
      de: "Lokale KI, sichere Identitäten (Entra ID, Keycloak) und hybrider Arbeitsplatz mit Microsoft 365 oder openDesk – für Unternehmen mit sensiblen Daten.",
      en: "Local AI, secure identities (Entra ID, Keycloak) and a hybrid workplace with Microsoft 365 or openDesk – for companies with sensitive data.",
      vi: "AI cục bộ, danh tính an toàn (Entra ID, Keycloak) và môi trường làm việc lai với Microsoft 365 hoặc openDesk – cho doanh nghiệp có dữ liệu nhạy cảm.",
    },
  }),
  component: Home,
});

interface NewsItem {
  title: string;
  url: string;
}

interface AiNewsItem extends NewsItem {
  source: string;
  publishedAt: string;
  category: string;
}

interface AiNewsPayload {
  updatedAt: string | null;
  items: AiNewsItem[];
}

// ── Vertrauens-Daten: hier echte Werte eintragen ─────────────────────────────
// Quelle der Bewertung (z. B. Google-Unternehmensprofil, ProvenExpert, Kununu).
// Solange sourceUrl leer ist, wird die Bewertung ohne Link angezeigt.
const RATING = {
  value: "4.9/5",
  count: 32,
  sourceLabel: "", // z. B. "Google Bewertungen"
  sourceUrl: "",   // z. B. "https://g.page/r/…"
};

interface Testimonial {
  quote: { de: string; en: string; vi: string };
  name: string;
  role: string;
  company: string;
}

// Testimonials: Einträge befüllen → die Sektion erscheint automatisch auf der
// Startseite. Leere Liste = Sektion bleibt ausgeblendet. Beispiel-Eintrag:
// {
//   quote: {
//     de: "Zitat auf Deutsch …",
//     en: "Quote in English …",
//     vi: "Trích dẫn tiếng Việt …",
//   },
//   name: "Vorname Nachname",
//   role: "CTO",
//   company: "Firma GmbH",
// },
const TESTIMONIALS: Testimonial[] = [];

function AiNewsTabs({ payload }: { payload: AiNewsPayload | null }) {
  const { t, lang } = useLang();
  const [activeTab, setActiveTab] = useState("agentic");

  const categories: { id: string; label: string }[] = [
    { id: "agentic", label: "Agentic AI" },
    { id: "llm", label: t("LLM & Modelle", "LLMs & Models", "LLM & Mô hình") },
    { id: "business", label: t("KI in Unternehmen", "AI in Business", "AI trong doanh nghiệp") },
    { id: "security", label: "Security" },
    { id: "gpu", label: t("GPU-Markt", "GPU Market", "Thị trường GPU") },
    { id: "webllm", label: "WebLLM & WebAssembly" },
  ];

  // Solange der Feed lädt (payload === null), alle Reiter zeigen; danach nur
  // die, die tatsächlich Meldungen haben — ein Reiter, der immer leer bleibt
  // (z.B. an ruhigen Tagen), wirkt sonst wie ein Fehler.
  const visibleCategories =
    payload === null
      ? categories
      : categories.filter((c) => payload.items.some((item) => item.category === c.id));

  useEffect(() => {
    if (payload !== null && visibleCategories.length > 0 && !visibleCategories.some((c) => c.id === activeTab)) {
      setActiveTab(visibleCategories[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payload]);

  const locale = lang === "DE" ? "de-DE" : lang === "VI" ? "vi-VN" : "en-US";
  const formatDate = (iso: string) => {
    const date = new Date(iso);
    return Number.isNaN(date.getTime())
      ? ""
      : date.toLocaleDateString(locale, { day: "2-digit", month: "2-digit", year: "numeric" });
  };

  const activeItems = (payload?.items ?? []).filter((item) => item.category === activeTab);

  return (
    <div className="rounded-3xl bg-surface p-4 md:p-6 overflow-hidden">
      <div className="scrollbar-hidden flex flex-nowrap overflow-x-auto whitespace-nowrap mb-6 text-xs font-medium border-b border-border">
        {visibleCategories.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={
              tab.id === activeTab
                ? "-mb-px rounded-t-lg border border-border border-b-surface bg-card px-3 py-2 text-primary"
                : "rounded-t-lg border border-transparent px-3 py-2 text-muted-foreground hover:bg-surface/50 hover:text-foreground"
            }
          >
            {tab.label}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="text-sm"
      >
        {payload === null ? (
          <p className="py-4 text-muted-foreground animate-pulse">{t("Lade Live-Feed...", "Loading Live-Feed...", "Đang tải dữ liệu...")}</p>
        ) : activeItems.length === 0 ? (
          <p className="py-4 text-muted-foreground">
            {t("Aktuell keine Meldungen in dieser Kategorie.", "No current news in this category.", "Hiện chưa có tin trong chuyên mục này.")}
          </p>
        ) : (
          activeItems.map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1 py-3 border-b border-border sm:flex-row sm:items-center sm:justify-between sm:gap-4"
            >
              <div className="flex min-w-0 items-center gap-2">
                <span className="shrink-0 h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="line-clamp-2 sm:truncate transition-colors group-hover:text-primary">{item.title}</span>
              </div>
              <span className="shrink-0 text-xs text-muted-foreground">
                {item.source} · {formatDate(item.publishedAt)}
              </span>
            </a>
          ))
        )}
      </motion.div>
    </div>
  );
}

function Home() {
  const { t, lang } = useLang();
  const [aiNews, setAiNews] = useState<AiNewsPayload | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    let cancelled = false;
    fetch("/api/ai-news")
      .then((response) => response.json())
      .then((data: AiNewsPayload) => {
        if (!cancelled && data.items?.length) setAiNews(data);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);


  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <Hero />

      <TracePlatform />

      <SkillsServices />

      <ProjectsShowcase />

      <ExperienceSection />

      <AboutSection />

      {/* Blog - Stacked Row Layout */}
      <section id="journal" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-primary mb-3">
            {t("Journal", "Journal", "Nhật ký")}
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">{t("Gedanken & Architektur", "Thoughts & Architecture", "Suy nghĩ & Kiến trúc")}</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl">
            {t(
              "Aktuelle Themen rund um IT, KI und Sicherheit – eingeordnet aus der Praxis, mit Quellen.",
              "Current topics in IT, AI and security – put into context from practice, with sources.",
              "Chủ đề thời sự về IT, AI và bảo mật – phân tích từ thực tế, kèm nguồn."
            )}
          </p>
        </motion.div>
        
        <div className="flex flex-col gap-4 text-left">
          {ARTICLES.slice(0, 3).map((a) => (
            <Link key={a.slug} to="/blog/$slug" params={{ slug: a.slug }} className="group flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-3xl bg-surface p-6 md:p-7 transition-colors hover:bg-[var(--beige)]">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-primary font-medium">{a.tag}</span>
                  <span>{formatDate(a.date, lang)}</span>
                  <span>· {a.readMin} {t("min", "min", "phút")}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {t(a.title.de, a.title.en, a.title.vi)}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {t(a.excerpt.de, a.excerpt.en, a.excerpt.vi)}
                </p>
              </div>
              <div className="text-sm text-primary font-medium shrink-0 flex items-center gap-1">
                {t("Artikel lesen", "Read article", "Đọc bài viết")} <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Link to="/blog" className="text-base font-medium text-primary hover:underline underline-offset-4 inline-flex min-h-11 items-center gap-2">
            {t("Alle Artikel anzeigen", "View all articles", "Xem tất cả bài viết")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Testimonials — erscheint automatisch, sobald TESTIMONIALS befüllt ist */}
      {TESTIMONIALS.length > 0 && (
        <section id="stimmen" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-widest text-primary">{t("Kundenstimmen", "Testimonials", "Đánh giá khách hàng")}</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold">{t("Was Kunden sagen", "What clients say", "Khách hàng nói gì")}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((item) => (
              <figure key={item.name} className="rounded-xl border border-border bg-surface/50 p-6">
                <blockquote className="text-sm text-muted-foreground leading-relaxed">
                  „{t(item.quote.de, item.quote.en, item.quote.vi)}"
                </blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-medium text-foreground">{item.name}</span>
                  <span className="block text-xs text-muted-foreground">{item.role} · {item.company}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* AI News mit Kategorien-Reitern, befüllt vom täglichen Cron-Scraper */}
      <section id="ai-news" className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-wrap items-end justify-between gap-2 mb-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-primary">AI-News</div>
              <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
                {t("Aktuelles aus der KI-Welt", "Latest from the AI world", "Tin mới từ thế giới AI")}
              </h2>
            </div>
            {aiNews?.updatedAt && (
              <span className="text-xs text-muted-foreground">
                {t("Stand", "Updated", "Cập nhật")}: {new Date(aiNews.updatedAt).toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" })}
                {" · "}
                {t("jeden Morgen automatisch aktualisiert", "refreshed automatically every morning", "tự động cập nhật mỗi sáng")}
              </span>
            )}
          </div>
          <AiNewsTabs payload={aiNews} />
        </motion.div>
      </section>

      <Footer />

      {/* Floating Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-5 z-50 grid h-12 w-12 place-items-center rounded-full bg-card text-foreground border border-border shadow-lg hover:bg-surface transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

