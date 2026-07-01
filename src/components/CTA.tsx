"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-brand">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Seu carro merece <span className="text-black">especialistas.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Solicite agora um orçamento e tenha um diagnóstico transparente feito por quem realmente entende de mecânica e câmbio automático.
          </p>
          
          <a
            href="https://wa.me/5511965846438?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black hover:bg-dark-200 text-white px-10 py-5 rounded-lg font-bold text-xl transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            <MessageCircle className="w-6 h-6 text-brand" />
            Falar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
