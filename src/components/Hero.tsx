"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, CheckCircle2, Cog } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden bg-black">
      {/* Background Graphic instead of broken image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-dark-200/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10 grid lg:grid-cols-2 gap-12">
        {/* Content */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block border border-brand/50 bg-brand/10 text-brand px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wide mb-6 uppercase">
              Referência em São Bernardo do Campo
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Especialistas em <span className="text-brand">Câmbio Automático</span> e Mecânica Geral
            </h1>
            
            <p className="text-base md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              Mais de 30 anos de experiência oferecendo diagnóstico preciso, transparência e serviços com garantia para seu veículo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://wa.me/5511965846438?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand hover:bg-brand-hover text-white px-8 py-4 rounded-md font-semibold text-center text-lg transition-colors duration-300"
              >
                Solicitar orçamento
              </a>
              <a
                href="https://maps.google.com/?q=Rua+Miguel+Arco+e+Flexa,+246+-+Vila+Euclides,+São+Bernardo+do+Campo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-white/10 text-white border border-white/20 px-8 py-4 rounded-md font-semibold text-center text-lg transition-colors duration-300"
              >
                Como chegar
              </a>
            </div>

            {/* Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <Star className="text-yellow-500 w-5 h-5 flex-shrink-0" />
                <span className="text-sm md:text-base font-medium text-gray-200">Excelente avaliação Google</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-brand w-5 h-5 flex-shrink-0" />
                <span className="text-sm md:text-base font-medium text-gray-200">Garantia dos serviços</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand w-5 h-5 flex-shrink-0" />
                <span className="text-sm md:text-base font-medium text-gray-200">Atendimento transparente</span>
              </div>
              <div className="flex items-center gap-3">
                <Cog className="text-brand w-5 h-5 flex-shrink-0" />
                <span className="text-sm md:text-base font-medium text-gray-200">Diagnóstico especializado</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
