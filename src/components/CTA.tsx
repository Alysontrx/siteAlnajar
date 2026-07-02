"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden bg-brand">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
      
      {/* Premium Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-black/40 backdrop-blur-md border border-white/10 p-8 md:p-16 rounded-3xl shadow-2xl"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            {t.cta.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-amber-400">{t.cta.titleHighlight}</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            {t.cta.description}
          </p>
          
          <a
            href="https://wa.me/5511965846438?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-brand to-amber-600 hover:from-amber-500 hover:to-brand text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(234,88,12,0.6)]"
          >
            <MessageCircle className="w-7 h-7 text-white animate-pulse" />
            {t.cta.btn}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
