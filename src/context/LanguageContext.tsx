"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, translations } from "@/translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.pt;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("alnajar_lang") as Language;
    if (savedLang && ["pt", "en", "ar"].includes(savedLang)) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("alnajar_lang", lang);
    if (lang === "ar") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
  };

  useEffect(() => {
    if (mounted) {
      if (language === "ar") {
        document.documentElement.dir = "rtl";
      } else {
        document.documentElement.dir = "ltr";
      }
    }
  }, [language, mounted]);

  const t = translations[language] || translations.pt;

  if (!mounted) {
    // Avoid hydration mismatch by rendering default or nothing
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
