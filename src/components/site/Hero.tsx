import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { ProjectMedia, useProjects } from "@/components/site/ProjectsShowcase";

/**
 * Hero (Redesign 18.11.2026, Runde 2): kein Portrait mehr auf der Startseite —
 * stattdessen eine Projekt-Galerie. Warmer Verlauf von Creme nach Sand, der
 * nahtlos in den Seitenhintergrund übergeht (keine harte Kante, keine Rahmen).
 * Smartphone: Galerie als horizontal wischbare Reihe; ab lg: 2×2-Mosaik.
 */
export function Hero() {
  const { t } = useLang();
  // Galerie (19.11.2026): alle Projekte, Praxis-Referenzen zuerst. Ab sm blätterbar
  // in Seiten zu je 4 (Pfeile, Punkte, Auto-Weiter alle 7 s, Pause bei Hover);
  // auf dem Smartphone wie bisher horizontal wischbar.
  // BDS Navigator nur auf /portfolio → genau 2 volle Seiten (5 Referenzen + 3 Eigenentwicklungen)
  const projects = useProjects().filter((p) => p.key !== "bds");
  const PER_PAGE = 4;
  const pageCount = Math.ceil(projects.length / PER_PAGE);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || pageCount < 2) return;
    const id = window.setInterval(() => setPage((p) => (p + 1) % pageCount), 7000);
    return () => window.clearInterval(id);
  }, [paused, pageCount]);
  const go = (d: number) => setPage((p) => (p + d + pageCount) % pageCount);

  return (
    <section id="start" className="relative isolate overflow-hidden">
      {/* warmer Hintergrundverlauf, läuft unten in die Seitenfarbe aus */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 85% 20%, oklch(0.93 0.035 75 / 0.9), transparent 70%), radial-gradient(ellipse 60% 50% at 10% 0%, oklch(0.95 0.03 140 / 0.45), transparent 70%), linear-gradient(to bottom, var(--surface), var(--background))",
        }}
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 pt-12 pb-16 sm:px-6 md:pt-20 md:pb-24 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {t("Souverän · Sicher · Skalierbar", "Sovereign · Secure · Scalable", "Tự chủ · An toàn · Mở rộng")}
          </div>
          {/* Positionierung (18.11.2026): nicht „IT allgemein", sondern souveräne KI
              für Unternehmen mit sensiblen Daten — lokal, identitätsgesichert, mit Freigabe. */}
          <h1 className="mt-5 text-[1.75rem] font-semibold leading-[1.15] sm:text-[2rem] md:text-[2.4rem]">
            {t(
              "Sichere IT‑Infrastruktur mit souveränen KI‑Agenten.",
              "Secure IT infrastructure with sovereign AI agents.",
              "Hạ tầng IT an toàn với các AI agent tự chủ."
            )}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {t(
              "Für Unternehmen mit sensiblen Daten: Ich betreue Ihre IT und verbinde lokale KI, sichere Identitäten und Ihren Arbeitsplatz – Microsoft 365 oder openDesk – zu einer Infrastruktur, die in Ihrer Hand bleibt.",
              "For companies with sensitive data: I run your IT and combine local AI, secure identities and your workplace – Microsoft 365 or openDesk – into infrastructure that stays in your hands.",
              "Cho doanh nghiệp có dữ liệu nhạy cảm: tôi vận hành IT và kết hợp AI cục bộ, danh tính an toàn và môi trường làm việc của bạn – Microsoft 365 hoặc openDesk – thành hạ tầng nằm trong tay bạn."
            )}
          </p>
          {/* drei überprüfbare Versprechen statt Schlagworte */}
          <ul className="mt-7 grid gap-2.5 text-[15px] sm:grid-cols-2">
            {[
              t("Auf Wunsch rein lokal – Daten bleiben im Haus", "Fully local on request – data stays in-house", "Chạy hoàn toàn cục bộ nếu muốn – dữ liệu ở lại nội bộ"),
              t("Jeder Zugriff mit Rolle & MFA", "Every access with role & MFA", "Mọi truy cập đều có vai trò & MFA"),
              t("Kritische Aktionen gibt ein Mensch frei", "A human approves critical actions", "Con người phê duyệt thao tác quan trọng"),
              t("Beratung auf Deutsch und Tiếng Việt", "Advice in German and Vietnamese", "Tư vấn bằng tiếng Đức và tiếng Việt"),
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
                <span className="text-foreground/85">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="/kontakt"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-medium text-primary-foreground transition-colors hover:bg-[var(--primary-hover)]"
            >
              {t("Kostenloses Erstgespräch", "Free first call", "Tư vấn miễn phí")} <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/"
              hash="angebote"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-card/70 px-7 text-base font-medium text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              {t("Angebote ansehen", "View offers", "Xem gói dịch vụ")}
            </Link>
          </div>
        </div>

        {/* Projekt- & Referenz-Galerie */}
        <div>
          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="font-medium text-foreground">
              {t("Projekte & Referenzen", "Projects & references", "Dự án & Tham chiếu")}
            </span>
            <Link to="/portfolio" className="inline-flex min-h-10 items-center gap-1 text-primary hover:underline underline-offset-4">
              {t("Alle ansehen", "View all", "Xem tất cả")} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          {/* Smartphone: alle Projekte wischbar */}
          <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 scrollbar-hidden sm:hidden">
            {projects.map((p) => (
              <Link key={p.key} to={p.to} hash={p.hash} className="group relative w-[78%] shrink-0 snap-start overflow-hidden rounded-3xl bg-surface">
                <ProjectMedia project={p} className="aspect-[4/3]" />
                <div className="absolute inset-x-0 bottom-0 px-4 pb-3.5">
                  <div className="text-[15px] font-semibold text-foreground">{p.title}</div>
                  <div className="truncate text-xs text-muted-foreground">{p.tagline}</div>
                </div>
              </Link>
            ))}
          </div>
          {/* ab sm: blätterbare 2×2-Galerie */}
          <div
            className="hidden sm:block"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${page * 100}%)` }}
              >
                {Array.from({ length: pageCount }, (_, pi) => (
                  <div key={pi} className="grid w-full shrink-0 grid-cols-2 gap-3" aria-hidden={pi !== page}>
                    {projects.slice(pi * PER_PAGE, pi * PER_PAGE + PER_PAGE).map((p) => (
                      <Link
                        key={p.key}
                        to={p.to}
                        hash={p.hash}
                        tabIndex={pi === page ? 0 : -1}
                        className="group relative overflow-hidden rounded-3xl bg-surface"
                      >
                        <ProjectMedia project={p} className="aspect-[4/3]" />
                        <div className="absolute inset-x-0 bottom-0 px-4 pb-3.5">
                          <div className="text-[15px] font-semibold text-foreground">{p.title}</div>
                          <div className="truncate text-xs text-muted-foreground">{p.tagline}</div>
                        </div>
                      </Link>
                    ))}
                    {/* freien Platz der letzten Seite mit Link zur Projektseite füllen */}
                    {projects.slice(pi * PER_PAGE, pi * PER_PAGE + PER_PAGE).length < PER_PAGE && (
                      <Link
                        to="/portfolio"
                        tabIndex={pi === page ? 0 : -1}
                        className="group flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-3xl border border-dashed border-primary/30 text-primary transition-colors hover:bg-surface"
                      >
                        <span className="grid h-11 w-11 place-items-center rounded-full bg-card shadow-sm">
                          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                        </span>
                        <span className="text-[15px] font-semibold">{t("Alle Projekte ansehen", "View all projects", "Xem tất cả dự án")}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {pageCount > 1 && (
              <div className="mt-3 flex items-center justify-center gap-3">
                <button type="button" onClick={() => go(-1)} aria-label={t("Vorherige Projekte", "Previous projects", "Dự án trước")} className="grid h-9 w-9 place-items-center rounded-full bg-card text-foreground shadow-sm hover:bg-surface">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                {Array.from({ length: pageCount }, (_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setPage(i)}
                    aria-label={`${t("Seite", "Page", "Trang")} ${i + 1}`}
                    aria-current={i === page}
                    className={`h-2 rounded-full transition-all ${i === page ? "w-6 bg-primary" : "w-2 bg-primary/25 hover:bg-primary/40"}`}
                  />
                ))}
                <button type="button" onClick={() => go(1)} aria-label={t("Nächste Projekte", "Next projects", "Dự án tiếp theo")} className="grid h-9 w-9 place-items-center rounded-full bg-card text-foreground shadow-sm hover:bg-surface">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
