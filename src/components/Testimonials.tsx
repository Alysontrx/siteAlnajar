"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Felipe Souza",
    text: "Excelente atendimento! Fiz o motor do meu Peugeot 206, ficou um brinco, novo de novo. Explicaram cada etapa da manutenção e hoje continuam sendo minha oficina de confiança.",
    rating: 5
  },
  {
    name: "Rafael",
    text: "Melhor oficina mecânica em São Bernardo do Campo. Especializada em câmbio automático, PowerShift e CVT. Atendimento honesto, diagnóstico preciso e entrega no prazo.",
    rating: 5
  },
  {
    name: "Gustavo Benito",
    text: "Mostraram todas as peças com problema, explicaram o defeito e enviaram vídeos durante o serviço. Trabalho excelente.",
    rating: 5
  },
  {
    name: "Alexandre Silva",
    text: "Preço justo, excelente atendimento e serviço de alta qualidade. Ganharam um cliente fiel.",
    rating: 5
  },
  {
    name: "Omar Awad",
    text: "Fiz o câmbio automático, consegui parcelar em 12x sem juros e o carro ficou perfeito.",
    rating: 5
  },
  {
    name: "Isabella Ávila",
    text: "Mesmo fora do horário me ajudaram com guincho e atendimento. Excelente suporte.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-dark-100 relative overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              O que dizem <span className="text-brand">nossos clientes</span>
            </h2>
            <p className="text-gray-400 text-lg">
              A satisfação de quem já confiou o carro à Mecânica Alnajar.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black border border-white/10 p-8 rounded-xl relative hover:border-brand/40 transition-colors"
            >
              <Quote className="text-brand/20 w-16 h-16 absolute top-4 right-4" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              
              <p className="text-gray-300 italic mb-6 relative z-10 line-clamp-4 hover:line-clamp-none transition-all">
                &quot;{item.text}&quot;
              </p>
              
              <div className="font-bold text-white text-lg">
                {item.name}
              </div>
              <div className="text-brand text-sm">Cliente Alnajar</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
