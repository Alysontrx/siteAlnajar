"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
import { useLanguage } from "@/context/LanguageContext";

export default function InstagramPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    // Show the popup after 5 seconds of the user being on the site
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const getMessage = () => {
    if (language === 'ar') return "تابعنا على إنستغرام لمشاهدة خدماتنا اليومية!";
    if (language === 'en') return "Follow us on Instagram to see our daily work!";
    return "Nos acompanhe no Insta para ver nosso dia a dia!";
  };

  const getButtonText = () => {
    if (language === 'ar') return "تابعنا الآن";
    if (language === 'en') return "Follow Now";
    return "Seguir agora";
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-6 left-4 right-4 md:left-6 md:right-auto z-50 md:w-80 glass bg-dark-200/95 border border-white/10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] p-4 overflow-hidden"
        >
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-transparent pointer-events-none opacity-40 blur-xl"></div>
          
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-start gap-4 relative z-10">
            <div className="w-12 h-12 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
              <InstagramIcon className="w-6 h-6 text-white" />
            </div>
            
            <div className="flex-1 pr-4">
              <h4 className="font-bold text-white mb-1">Instagram</h4>
              <p className="text-sm text-gray-300 mb-3 leading-tight">
                {getMessage()}
              </p>
              
              <a 
                href="https://www.instagram.com/mecanica_alnajar/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsVisible(false)}
                className="inline-block bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm"
              >
                {getButtonText()}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
