import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useLang, type Language } from "../../contexts/LangContext";
import { Sheet, SheetClose, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Logo } from "@/components/site/Logo";

/**
 * Helle, schlanke Navigation (Apple-Clean): weiß-transluzent mit Blur, wenige
 * Punkte. Unter lg: kompaktes Hamburger-Menü mit großen Touch-Flächen.
 */
const linkClass =
  "text-[15px] text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground";
const mobileLinkClass =
  "flex min-h-12 items-center rounded-xl px-3 text-lg text-foreground transition-colors hover:bg-surface";

export function Nav() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  const items: { label: string; to?: string; href?: string }[] = [
    { label: t("Über mich", "About", "Về tôi"), to: "/ueber-mich" },
    { label: "TRACE AI", href: "/#trace-ai" },
    { label: t("Leistungen", "Services", "Dịch vụ"), href: "/#leistungen" },
    { label: t("Projekte", "Projects", "Dự án"), to: "/portfolio" },
    { label: "Blog", to: "/blog" },
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

          <nav className="hidden items-center gap-8 lg:flex" aria-label={t("Hauptnavigation", "Main navigation", "Điều hướng chính")}>
            {items.map((item) =>
              item.to ? (
                <Link key={item.label} to={item.to} activeProps={{ className: "active" }} className={linkClass}>
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href} className={linkClass}>
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
            <SheetClose asChild>
              <Link to="/" className={mobileLinkClass}>{t("Start", "Home", "Trang chủ")}</Link>
            </SheetClose>
            {items.map((item) => (
              <SheetClose asChild key={item.label}>
                {item.to ? (
                  <Link to={item.to} className={mobileLinkClass}>{item.label}</Link>
                ) : (
                  <a href={item.href} className={mobileLinkClass}>{item.label}</a>
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
