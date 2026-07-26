import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { motion, useScroll, useSpring } from "motion/react";
import { useState } from "react";
import { useLang, type Language } from "../../contexts/LangContext";
import { Sheet, SheetClose, SheetContent, SheetTitle } from "@/components/ui/sheet";

/** Kompassrose als Wortmarke-Icon — Anlehnung an alte Seekarten/Kontore. */
function CompassRose({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.2" />
      <path d="M16 4 L18.5 14 L16 16 L13.5 14 Z" fill="currentColor" />
      <path d="M16 28 L18.5 18 L16 16 L13.5 18 Z" fill="currentColor" opacity="0.5" />
      <path d="M4 16 L14 13.5 L16 16 L14 18.5 Z" fill="currentColor" opacity="0.7" />
      <path d="M28 16 L18 13.5 L16 16 L18 18.5 Z" fill="currentColor" opacity="0.7" />
      <circle cx="16" cy="16" r="1.6" fill="currentColor" />
    </svg>
  );
}

function NavLink({
  to,
  href,
  activeExact,
  children,
}: {
  to?: string;
  href?: string;
  activeExact?: boolean;
  children: React.ReactNode;
}) {
  const className =
    "relative py-1 text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full [&.active]:after:w-full";
  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link
      to={to!}
      activeOptions={activeExact ? { exact: true } : undefined}
      activeProps={{ className: "active" }}
      className={className}
    >
      {children}
    </Link>
  );
}

export function Nav() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const LangButton = ({ code }: { code: Language }) => (
    <button
      onClick={() => setLang(code)}
      className={`px-2 py-1 rounded transition-colors ${lang === code ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
    >
      {code}
    </button>
  );

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]"
        style={{ scaleX }}
      />
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute inset-0 z-[-1] bg-[radial-gradient(var(--color-accent)_1px,transparent_1px)] [background-size:18px_18px] opacity-[0.06]"></div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 relative z-10">
        <Link to="/" className="flex items-center gap-3">
          <CompassRose className="h-8 w-8 text-primary shrink-0" />
          <span className="leading-tight">
            <span className="block font-display text-2xl italic font-medium tracking-wide text-foreground">
              Vu Xuan Tiep
            </span>
            <span className="block text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              {t("Digitale Lösungen. Menschlich gedacht.", "Digital solutions. Humanly conceived.", "Giải pháp số. Tư duy con người.")}
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <NavLink to="/" activeExact>
            {lang === "DE" ? "Startseite" : lang === "EN" ? "Home" : "Trang chủ"}
          </NavLink>
          <NavLink href="/#leistungen">
            {lang === "DE" ? "Leistungen" : lang === "EN" ? "Services" : "Dịch vụ"}
          </NavLink>
          <NavLink to="/portfolio">
            {lang === "DE" ? "Projekte" : lang === "EN" ? "Projects" : "Dự án"}
          </NavLink>
          <NavLink to="/blog">AI-News</NavLink>
          <NavLink to="/kontakt">
            {lang === "DE" ? "Kontakt" : lang === "EN" ? "Contact" : "Liên hệ"}
          </NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-xs font-medium bg-surface/50 rounded-md p-1 border border-border">
            <LangButton code="DE" />
            <LangButton code="EN" />
            <LangButton code="VI" />
          </div>
          <Link
            to="/kontakt"
            className="rounded-full bg-[linear-gradient(180deg,var(--primary-hover),var(--primary))] px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[0_0_15px_oklch(0.581_0.109_169_/_35%),0_8px_20px_rgba(0,0,0,0.18)] ring-1 ring-[var(--color-accent)]/40 transition-all hover:-translate-y-0.5 hover:shadow-[0_0_20px_oklch(0.581_0.109_169_/_45%),0_10px_24px_rgba(0,0,0,0.22)]"
          >
            {lang === "DE" ? "Lass uns sprechen" : lang === "EN" ? "Let's talk" : "Cùng trò chuyện"}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground hover:text-foreground md:hidden"
          aria-label={t("Menü öffnen", "Open menu", "Mở menu")}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>

    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="right" className="flex flex-col gap-8">
        <SheetTitle className="flex items-center gap-2 font-display text-lg italic">
          <CompassRose className="h-7 w-7 text-primary" />
          Vu Xuan Tiep
        </SheetTitle>

        <nav className="flex flex-col gap-1 text-base">
          <SheetClose asChild>
            <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-foreground" }} className="rounded-md px-2 py-2.5 text-muted-foreground hover:bg-surface hover:text-foreground transition-colors">
              {t("Start", "Home", "Trang chủ")}
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <a href="/#leistungen" className="rounded-md px-2 py-2.5 text-muted-foreground hover:bg-surface hover:text-foreground transition-colors">
              {t("Leistungen", "Services", "Dịch vụ")}
            </a>
          </SheetClose>
          <SheetClose asChild>
            <Link to="/portfolio" activeProps={{ className: "text-foreground" }} className="rounded-md px-2 py-2.5 text-muted-foreground hover:bg-surface hover:text-foreground transition-colors">
              {t("Projekte", "Projects", "Dự án")}
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link to="/blog" activeProps={{ className: "text-foreground" }} className="rounded-md px-2 py-2.5 text-muted-foreground hover:bg-surface hover:text-foreground transition-colors">
              AI-News
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link to="/kontakt" activeProps={{ className: "text-foreground" }} className="rounded-md px-2 py-2.5 text-muted-foreground hover:bg-surface hover:text-foreground transition-colors">
              {t("Kontakt", "Contact", "Liên hệ")}
            </Link>
          </SheetClose>
        </nav>

        <div className="flex items-center gap-1.5 text-xs font-medium bg-surface/50 rounded-md p-1 border border-border w-fit">
          <LangButton code="DE" />
          <LangButton code="EN" />
          <LangButton code="VI" />
        </div>

        <SheetClose asChild>
          <Link to="/kontakt" className="rounded-full bg-[linear-gradient(180deg,var(--primary-hover),var(--primary))] px-4 py-2.5 text-center text-sm font-medium text-primary-foreground ring-1 ring-[var(--color-accent)]/40 transition-colors">
            {t("Lass uns sprechen", "Let's talk", "Cùng trò chuyện")}
          </Link>
        </SheetClose>
      </SheetContent>
    </Sheet>
    </>
  );
}
