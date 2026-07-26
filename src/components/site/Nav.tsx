import { Link } from "@tanstack/react-router";
import { Menu, Terminal } from "lucide-react";
import { motion, useScroll, useSpring } from "motion/react";
import { useState } from "react";
import { useLang, type Language } from "../../contexts/LangContext";
import { Sheet, SheetClose, SheetContent, SheetTitle } from "@/components/ui/sheet";

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
        className="fixed top-0 left-0 right-0 h-1 bg-[#4ADE80] origin-left z-[60]"
        style={{ scaleX }}
      />
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute inset-0 z-[-1] bg-[radial-gradient(#4ADE80_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
      <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-green-500/10 via-transparent to-green-500/10 opacity-30"></div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 relative z-10">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-transparent border border-primary text-primary">
            <Terminal className="h-4 w-4" />
          </span>
          <span>Vũ xuân Tiệp</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition-colors">
            {lang === "DE" ? "Start" : lang === "EN" ? "Home" : "Trang chủ"}
          </Link>
          <a href="/#leistungen" className="hover:text-foreground transition-colors">
            {lang === "DE" ? "Leistungen" : lang === "EN" ? "Services" : "Dịch vụ"}
          </a>
          <Link to="/portfolio" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition-colors">
            {lang === "DE" ? "Projekte" : lang === "EN" ? "Projects" : "Dự án"}
          </Link>
          <Link to="/blog" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition-colors">AI-News</Link>
          <Link to="/kontakt" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition-colors">
            {lang === "DE" ? "Kontakt" : lang === "EN" ? "Contact" : "Liên hệ"}
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-xs font-medium bg-surface/50 rounded-md p-1 border border-border">
            <LangButton code="DE" />
            <LangButton code="EN" />
            <LangButton code="VI" />
          </div>
          <Link to="/kontakt" className="rounded-md bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20">
            {lang === "DE" ? "Projekt starten" : lang === "EN" ? "Start Project" : "Bắt đầu dự án"}
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
        <SheetTitle className="flex items-center gap-2 font-display text-lg">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-transparent border border-primary text-primary">
            <Terminal className="h-4 w-4" />
          </span>
          Vũ xuân Tiệp
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
          <Link to="/kontakt" className="rounded-md bg-primary/10 border border-primary/20 px-4 py-2.5 text-center text-sm font-medium text-primary transition-colors hover:bg-primary/20">
            {t("Projekt starten", "Start Project", "Bắt đầu dự án")}
          </Link>
        </SheetClose>
      </SheetContent>
    </Sheet>
    </>
  );
}
