import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "DE" | "EN" | "VI";

interface LangContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (de: string, en: string, vi: string) => string;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("DE");

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
