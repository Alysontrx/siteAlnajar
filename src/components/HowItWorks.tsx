"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Search, FileText, Wrench, Key } from "lucide-react";

const steps = [
  {
    icon: <CalendarCheck className="w-8 h-8" />,
    title: "1. Você agenda",
    desc: "Entre em contato conosco pelo WhatsApp e reserve o melhor horário para trazer seu veículo."
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "2. Diagnóstico completo",
    desc: "Nossos especialistas realizam testes computadorizados e mecânicos para identificar a raiz do problema."
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "3. Enviamos orçamento",
    desc: "Você recebe o laudo detalhado e o orçamento transparente, sem custos ocultos."
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "4. Executamos o serviço",
    desc: "Após aprovação, iniciamos o reparo enviando vídeos do andamento do trabalho."
  },
  {
    icon: <Key className="w-8 h-8" />,
    title: "5. Carro pronto",
    desc: "Você recebe seu veículo lavado, revisado e com total garantia sobre os serviços prestados."
  }
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-black relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Como <span className="text-brand">Funciona</span>
            </h2>
            <div className="w-20 h-1.5 bg-brand mx-auto mb-6 rounded-full"></div>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-dark-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center bg-dark-100 lg:bg-transparent p-6 lg:p-0 rounded-xl lg:rounded-none border border-white/5 lg:border-none"
              >
                <div className="w-20 h-20 bg-black border-4 border-dark-200 rounded-full flex items-center justify-center text-brand mb-6 shadow-xl relative">
                  {step.icon}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-brand rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
