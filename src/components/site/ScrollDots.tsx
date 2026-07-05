import { useEffect, useState } from "react";
import { useLang } from "@/contexts/LangContext";

interface DotSection {
  id: string;
  label: string;
}

export function ScrollDots({ sections }: { sections: DotSection[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const mid = window.innerHeight / 2;
      let current = 0;
      sections.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= mid) current = i;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
        aria-label="Seitenbereiche"
        className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex"
      >
        {sections.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => scrollTo(s.id)}
            aria-label={s.label}
            title={s.label}
            className="group relative flex h-4 w-4 items-center justify-center"
          >
            <span
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? "h-3 w-3 bg-primary shadow-[0_0_10px_rgba(74,222,128,0.7)]"
                  : "h-1.5 w-1.5 bg-muted-foreground/40 group-hover:h-2.5 group-hover:w-2.5 group-hover:bg-primary/70"
              }`}
            />
            <span className="pointer-events-none absolute right-6 whitespace-nowrap rounded-md border border-border bg-surface px-2 py-1 text-[11px] text-foreground opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
              {s.label}
            </span>
          </button>
        ))}
    </nav>
  );
}

export function useScrollDotSections() {
  const { t } = useLang();
  return [
    { id: "start", label: t("Start", "Home", "Trang chủ") },
    { id: "leistungen", label: t("Leistungen", "Services", "Dịch vụ") },
    { id: "tech", label: t("Tech-Stack", "Tech stack", "Công nghệ") },
    { id: "projekte", label: t("Projekte", "Projects", "Dự án") },
    { id: "kontakt", label: t("Kontakt", "Contact", "Liên hệ") },
  ];
}
