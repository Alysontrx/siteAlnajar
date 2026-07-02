"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, CheckCircle2, Cog } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden bg-black">
      {/* Background Graphic Premium */}
      <div className="absolute inset-0 z-0">
        {/* Golden/Orange glow for Arab/Premium feel */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/20 rounded-full blur-[150px] -translate-y-1/3 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[120px] translate-y-1/4 -translate-x-1/4"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/80 to-black"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 grid lg:grid-cols-2 gap-12">
        {/* Content */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block border border-brand/50 bg-brand/10 text-brand px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wide mb-6 uppercase shadow-[0_0_15px_rgba(234,88,12,0.3)]">
              {t.hero.badge}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight text-white drop-shadow-2xl">
              {t.hero.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-amber-400">{t.hero.titleHighlight}</span> {t.hero.title2}
            </h1>
            
            <p className="text-base md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://wa.me/5511965846438?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-brand hover:bg-brand-hover text-white px-8 py-4 rounded-md font-bold text-center text-lg transition-all duration-300 shadow-[0_0_20px_rgba(234,88,12,0.5)] hover:shadow-[0_0_30px_rgba(234,88,12,0.8)] hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300 ease-out"></div>
                <span className="relative z-10">{t.hero.quoteBtn}</span>
              </a>
              <a
                href="https://maps.google.com/?q=Rua+Miguel+Arco+e+Flexa,+246+-+Vila+Euclides,+São+Bernardo+do+Campo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-white/10 text-white border border-white/20 px-8 py-4 rounded-md font-semibold text-center text-lg transition-all duration-300 backdrop-blur-sm hover:border-white/40"
              >
                {t.hero.locationBtn}
              </a>
            </div>

            {/* Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-6 border-t border-white/10">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
                <Star className="text-amber-500 w-6 h-6 flex-shrink-0 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                <span className="text-sm md:text-base font-medium text-gray-200">{t.hero.feature1}</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
                <ShieldCheck className="text-brand w-6 h-6 flex-shrink-0 drop-shadow-[0_0_8px_rgba(234,88,12,0.8)]" />
                <span className="text-sm md:text-base font-medium text-gray-200">{t.hero.feature2}</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
                <CheckCircle2 className="text-brand w-6 h-6 flex-shrink-0 drop-shadow-[0_0_8px_rgba(234,88,12,0.8)]" />
                <span className="text-sm md:text-base font-medium text-gray-200">{t.hero.feature3}</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
                <Cog className="text-brand w-6 h-6 flex-shrink-0 drop-shadow-[0_0_8px_rgba(234,88,12,0.8)]" />
                <span className="text-sm md:text-base font-medium text-gray-200">{t.hero.feature4}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
