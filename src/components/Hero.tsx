"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, CheckCircle2, Cog, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden bg-black">
      {/* Background Graphic Premium */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black">
        {/* Animated Glow Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/15 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-600/10 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4"
        />
        {/* Subtle noise texture for a premium look */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-brand/30 glass text-brand px-5 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wider mb-8 uppercase shadow-[0_0_20px_rgba(234,88,12,0.15)] backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
              {t.hero.badge}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight text-white drop-shadow-2xl"
            >
              {t.hero.title1} <span className="text-gradient font-black">{t.hero.titleHighlight}</span> {t.hero.title2}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed"
            >
              {t.hero.description}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href="https://wa.me/5511965846438?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-brand hover:bg-brand-hover text-white px-8 py-4 rounded-xl font-bold text-center text-lg transition-all duration-300 shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:shadow-[0_0_40px_rgba(234,88,12,0.6)] hover:-translate-y-1 overflow-hidden flex items-center justify-center gap-2"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-out"></div>
                <span className="relative z-10">{t.hero.quoteBtn}</span>
                <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://maps.google.com/?q=Rua+Miguel+Arco+e+Flexa,+246+-+Vila+Euclides,+São+Bernardo+do+Campo"
                target="_blank"
                rel="noopener noreferrer"
                className="glass hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-center text-lg transition-all duration-300 hover:border-white/40 flex items-center justify-center"
              >
                {t.hero.locationBtn}
              </a>
            </motion.div>

            {/* Indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-8 border-t border-white/10"
            >
              {[
                { icon: Star, text: t.hero.feature1, color: "text-amber-500" },
                { icon: ShieldCheck, text: t.hero.feature2, color: "text-brand" },
                { icon: CheckCircle2, text: t.hero.feature3, color: "text-brand" },
                { icon: Cog, text: t.hero.feature4, color: "text-brand" }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.05, x: 5 }} 
                  className="flex items-center gap-4 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-lg glass flex items-center justify-center group-hover:border-brand/50 transition-colors">
                    <feature.icon className={`${feature.color} w-5 h-5 drop-shadow-[0_0_8px_currentColor]`} />
                  </div>
                  <span className="text-sm md:text-base font-medium text-gray-300 group-hover:text-white transition-colors">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
