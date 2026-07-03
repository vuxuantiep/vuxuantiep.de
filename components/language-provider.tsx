'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations } from '@/lib/i18n';

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.DE;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('DE');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('app_lang') as Language;
    if (saved && (saved === 'DE' || saved === 'EN' || saved === 'VI')) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLang(saved);
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('app_lang', newLang);
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    // Return default German if used outside provider or during SSR
    return {
      lang: 'DE' as Language,
      setLang: () => {},
      t: translations.DE
    };
  }
  return context;
}
