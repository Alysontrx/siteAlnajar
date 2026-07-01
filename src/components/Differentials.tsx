"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Video, ShieldCheck, Wrench, Clock, CreditCard, ThumbsUp, Medal } from "lucide-react";

const differentials = [
  { icon: <CheckCircle2 />, title: "Diagnóstico preciso" },
  { icon: <ThumbsUp />, title: "Transparência total" },
  { icon: <Video />, title: "Vídeos mostrando o serviço" },
  { icon: <ShieldCheck />, title: "Garantia em peças e serviços" },
  { icon: <Medal />, title: "Profissionais experientes" },
  { icon: <Wrench />, title: "Especialistas em câmbio automático" },
  { icon: <Clock />, title: "Entrega no prazo" },
  { icon: <CreditCard />, title: "Preço justo e Parcelamento" }
];

export default function Differentials() {
  return (
    <section className="py-24 bg-dark-100 relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Nossos <span className="text-brand">Diferenciais</span>
            </h2>
            <div className="w-20 h-1.5 bg-brand mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-400 text-lg">
              Por que somos a oficina referência em São Bernardo do Campo?
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-6 bg-black border border-white/5 rounded-xl text-center group hover:border-brand/50 transition-colors"
            >
              <div className="w-14 h-14 bg-dark-200 rounded-full flex items-center justify-center text-brand mb-4 group-hover:scale-110 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
