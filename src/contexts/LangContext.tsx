import { createContext, useContext, useEffect, ReactNode } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { langFromSearch } from "../lib/seo";

export type Language = "DE" | "EN" | "VI";

interface LangContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (de: string, en: string, vi: string) => string;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
  // Die URL (?lang=en|vi) ist die Quelle der Wahrheit — dadurch rendert schon
  // der Server die richtige Sprache und hreflang-URLs sind echte Sprachversionen.
  const search = useRouterState({ select: (s) => s.location.search });
  const navigate = useNavigate();

  const param = langFromSearch(search);
  const lang: Language = param === "en" ? "EN" : param === "vi" ? "VI" : "DE";

  const setLang = (next: Language) => {
    navigate({
      to: ".",
      search: (prev: Record<string, unknown>) => ({
        ...prev,
        lang: next === "DE" ? undefined : next.toLowerCase(),
      }),
      replace: true,
      resetScroll: false,
    });
  };

  // html[lang] an die aktive Sprache angleichen (Server-Default ist "de")
  useEffect(() => {
    document.documentElement.lang = lang.toLowerCase();
  }, [lang]);

  const t = (de: string, en: string, vi: string) => {
    switch (lang) {
      case "EN": return en;
      case "VI": return vi;
      default: return de;
    }
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (context === undefined) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
}
