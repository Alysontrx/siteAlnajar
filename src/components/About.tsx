"use client";

import { motion } from "framer-motion";
import { CheckCircle2, PlayCircle, ShieldCheck, Wrench, Users } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-dark-100 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Quem é a <span className="text-brand">Alnajar?</span>
            </h2>
            <div className="w-20 h-1.5 bg-brand mb-8 rounded-full"></div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Somos uma oficina modelo em São Bernardo do Campo, especializada em <strong>câmbio automático</strong> e <strong>mecânica geral avançada</strong>. Nossa missão é mudar a forma como você cuida do seu carro, trazendo um padrão de concessionária com preços justos.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Trabalhamos com os pilares da <strong>honestidade, transparência e qualidade técnica</strong>. Aqui, você não tem surpresas: realizamos um diagnóstico computadorizado preciso e o orçamento é explicado em detalhes.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand w-6 h-6 flex-shrink-0" />
                <span className="text-lg font-medium">Diagnóstico 100% preciso e transparente</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-brand w-6 h-6 flex-shrink-0" />
                <span className="text-lg font-medium">Garantia total em peças e mão de obra</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="text-brand w-6 h-6 flex-shrink-0" />
                <span className="text-lg font-medium">Atendimento humanizado e personalizado</span>
              </div>
            </div>

          </motion.div>

          {/* Image/Video Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] group">
              <img
                src="/about.png"
                alt="Equipe Mecânica Alnajar trabalhando"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
              
              {/* Fake Video Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-brand/90 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(234,88,12,0.5)]">
                  <PlayCircle className="text-white w-10 h-10 ml-1" />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-lg flex items-center gap-4 max-w-[280px]">
                <div className="bg-brand p-2 rounded-full">
                  <PlayCircle className="text-white w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Acompanhe pelo WhatsApp</p>
                  <p className="text-xs text-gray-300">Enviamos vídeos de cada etapa do serviço.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
