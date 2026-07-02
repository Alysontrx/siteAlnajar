"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/translations";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const flags = {
  pt: "https://flagcdn.com/w40/br.png",
  en: "https://flagcdn.com/w40/us.png",
  ar: "https://flagcdn.com/w40/sa.png"
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
        className="flex items-center justify-center w-10 h-10 rounded-full bg-black/50 border border-white/10 hover:bg-white/10 transition-colors text-xl overflow-hidden p-1"
        aria-label="Select Language"
      >
        <img src={flags[language]} alt={language} className="w-full h-full object-cover rounded-full" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 p-1 rounded-lg bg-black/95 border border-white/10 shadow-2xl flex flex-col gap-1 min-w-[60px] z-50"
          >
            {(Object.entries(flags) as [Language, string][]).map(([lang, flag]) => (
              <button
                key={lang}
                onClick={() => handleSelect(lang)}
                className={`p-2 rounded-md hover:bg-brand/20 transition-colors flex justify-center items-center ${
                  language === lang ? "bg-brand/30" : ""
                }`}
              >
                <img src={flag} alt={lang} className="w-6 h-auto rounded-sm" />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
