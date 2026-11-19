import { Link, useRouterState } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useLang, type Language } from "../../contexts/LangContext";
import { Sheet, SheetClose, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Logo } from "@/components/site/Logo";

/**
 * Helle, schlanke Navigation (Apple-Clean): weiß-transluzent mit Blur, wenige
 * Punkte. Unter lg: kompaktes Hamburger-Menü mit großen Touch-Flächen.
 */
// Aktiver Menüpunkt (19.11.2026): dunkle Schrift + goldener Unterstrich (Farbe
// wie der i-Punkt im Logo), damit Besucher sehen, wo sie gerade sind.
const linkBase =
  "relative whitespace-nowrap py-1 text-[15px] transition-colors hover:text-foreground after:absolute after:inset-x-0 after:-bottom-1 after:h-[2px] after:rounded-full after:bg-[oklch(0.8_0.13_80)] after:transition-transform after:duration-300 after:origin-left";
const linkClass = (active: boolean) =>
  `${linkBase} ${active ? "font-medium text-foreground after:scale-x-100" : "text-muted-foreground after:scale-x-0"}`;
const mobileLinkClass = (active: boolean) =>
  `flex min-h-12 items-center rounded-xl px-3 text-lg text-foreground transition-colors hover:bg-surface ${
    active ? "bg-surface font-medium border-l-[3px] border-[oklch(0.8_0.13_80)]" : ""
  }`;

type NavKey = "start" | "ueber" | "trace" | "leistungen" | "projekte" | "blog";

/** Welcher Menüpunkt ist aktiv? Unterseiten nach Pfad, die Startseite nach dem
 *  gerade sichtbaren Abschnitt (Scroll-Spy). */
function useActiveKey(): NavKey | null {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [section, setSection] = useState<NavKey>("start");

  useEffect(() => {
    if (pathname !== "/") return;
    const map: [string, NavKey][] = [
      ["trace-ai", "trace"],
      ["angebote", "leistungen"],
      ["leistungen", "leistungen"],
      ["projekte", "projekte"],
    ];
    const onScroll = () => {
      const line = window.innerHeight * 0.35;
      let current: NavKey = "start";
      for (const [id, key] of map) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= line && r.bottom > line) current = key;
      }
      setSection(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (pathname === "/") return section;
  if (pathname.startsWith("/ueber-mich")) return "ueber";
  if (pathname.startsWith("/portfolio")) return "projekte";
  if (pathname.startsWith("/blog")) return "blog";
  if (pathname.startsWith("/broki")) return "projekte";
  return null;
}

export function Nav() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  const active = useActiveKey();
  const items: { key: NavKey; label: string; to?: string; href?: string }[] = [
    { key: "start", label: t("Start", "Home", "Trang chủ"), to: "/" },
    { key: "ueber", label: t("Über mich", "About", "Về tôi"), to: "/ueber-mich" },
    { key: "trace", label: "TRACE AI", href: "/#trace-ai" },
    { key: "leistungen", label: t("Leistungen", "Services", "Dịch vụ"), href: "/#angebote" },
    { key: "projekte", label: t("Projekte", "Projects", "Dự án"), to: "/portfolio" },
    { key: "blog", label: "Blog", to: "/blog" },
  ];

  const LangSwitch = () => (
    <div className="flex items-center rounded-full bg-surface p-1 text-xs font-medium" role="group" aria-label={t("Sprache", "Language", "Ngôn ngữ")}>
      {(["DE", "EN", "VI"] as Language[]).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`min-h-8 min-w-9 rounded-full px-2 transition-colors ${
            lang === code ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link to="/" className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label={t("Hauptnavigation", "Main navigation", "Điều hướng chính")}>
            {items.map((item) =>
              item.to ? (
                <Link key={item.key} to={item.to} className={linkClass(active === item.key)} aria-current={active === item.key ? "page" : undefined}>
                  {item.label}
                </Link>
              ) : (
                <a key={item.key} href={item.href} className={linkClass(active === item.key)} aria-current={active === item.key ? "location" : undefined}>
                  {item.label}
                </a>
              )
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LangSwitch />
            <Link
              to="/kontakt"
              className="inline-flex min-h-10 items-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              {t("Kontakt", "Contact", "Liên hệ")}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="grid h-11 w-11 place-items-center rounded-full text-foreground hover:bg-surface lg:hidden"
            aria-label={t("Menü öffnen", "Open menu", "Mở menu")}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="flex w-[86vw] max-w-sm flex-col gap-6 bg-background">
          <SheetTitle className="font-normal"><Logo /></SheetTitle>
          <nav className="flex flex-col gap-1">
            {items.map((item) => (
              <SheetClose asChild key={item.key}>
                {item.to ? (
                  <Link to={item.to} className={mobileLinkClass(active === item.key)}>{item.label}</Link>
                ) : (
                  <a href={item.href} className={mobileLinkClass(active === item.key)}>{item.label}</a>
                )}
              </SheetClose>
            ))}
          </nav>
          <LangSwitch />
          <SheetClose asChild>
            <Link
              to="/kontakt"
              className="mt-auto inline-flex min-h-12 items-center justify-center rounded-full bg-primary text-base font-medium text-primary-foreground"
            >
              {t("Kontakt aufnehmen", "Get in touch", "Liên hệ ngay")}
            </Link>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </>
  );
}
