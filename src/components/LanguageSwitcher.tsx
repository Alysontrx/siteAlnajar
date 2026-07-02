"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/translations";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const flags = {
  pt: "🇧🇷",
  en: "🇺🇸",
  ar: "🇸🇦"
};

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-xl"
        aria-label="Select Language"
      >
        {flags[language]}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 p-1 rounded-lg bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-1 min-w-[60px]"
          >
            {(Object.entries(flags) as [Language, string][]).map(([lang, flag]) => (
              <button
                key={lang}
                onClick={() => handleSelect(lang)}
                className={`p-2 rounded-md hover:bg-brand/20 transition-colors text-xl ${
                  language === lang ? "bg-brand/30" : ""
                }`}
              >
                {flag}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
