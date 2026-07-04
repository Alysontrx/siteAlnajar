"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden bg-brand">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/70 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px] opacity-10"></div>
      
      {/* Premium Glow - Animated */}
      <motion.div 
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand/40 to-transparent rounded-full pointer-events-none blur-[100px]"
      />

      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass border border-white/10 p-8 md:p-16 rounded-[2rem] shadow-2xl relative overflow-hidden group"
        >
          {/* Subtle hover gradient inside the card */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              {t.cta.title1} <span className="text-gradient drop-shadow-[0_0_15px_rgba(234,88,12,0.5)]">{t.cta.titleHighlight}</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
              {t.cta.description}
            </p>
            
            <a
              href="https://wa.me/5511965846438?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative inline-flex items-center gap-3 bg-brand hover:bg-white text-white hover:text-black px-10 py-5 rounded-2xl font-black text-xl transition-all duration-500 hover:scale-105 shadow-[0_0_30px_rgba(234,88,12,0.6)] hover:shadow-[0_0_50px_rgba(255,255,255,0.6)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
              <MessageCircle className="w-7 h-7 animate-pulse group-hover/btn:text-brand transition-colors" />
              <span className="relative z-10">{t.cta.btn}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
