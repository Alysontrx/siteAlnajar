"use client";

import { motion } from "framer-motion";
import { Settings, ShieldAlert, Activity, Droplet, Wrench, Zap, Disc, Gauge } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const specialties = [
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Câmbio Automático",
    desc: "Diagnóstico e reparo especializado em transmissões automáticas, garantindo trocas suaves e maior durabilidade."
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Câmbio PowerShift & CVT",
    desc: "Especialistas na manutenção e correção de problemas crônicos em câmbios PowerShift e sistemas CVT."
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Mecânica Geral & Motor",
    desc: "Retífica, revisão completa e reparos avançados de motores nacionais e importados com peças originais."
  },
  {
    icon: <ShieldAlert className="w-8 h-8" />,
    title: "Suspensão e Freios",
    desc: "Segurança em primeiro lugar. Troca de pastilhas, discos, amortecedores e alinhamento de direção."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Injeção Eletrônica",
    desc: "Limpeza de bicos, verificação de sensores e atuadores para economia de combustível e performance."
  },
  {
    icon: <Gauge className="w-8 h-8" />,
    title: "Scanner Automotivo",
    desc: "Equipamentos de última geração para leitura e apagar falhas no módulo de controle eletrônico (ECU)."
  },
  {
    icon: <Droplet className="w-8 h-8" />,
    title: "Troca de Óleo Especializada",
    desc: "Substituição do fluido de câmbio automático por máquina (diálise) e óleo de motor com filtros de alta qualidade."
  },
  {
    icon: <Disc className="w-8 h-8" />,
    title: "Manutenção Preventiva",
    desc: "Revisão por quilometragem para você viajar com segurança e evitar quebras inesperadas."
  }
];

export default function Specialties() {
  const { t, language } = useLanguage();
  return (
    <section id="especialidades" className="py-24 bg-black relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t.specialties.title1} <span className="text-brand">{t.specialties.titleHighlight}</span>
            </h2>
            <div className="w-20 h-1.5 bg-brand mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-400 text-lg">
              {t.specialties.desc}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-100 border border-white/5 hover:border-brand/50 rounded-lg p-8 group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(220,38,38,0.1)]"
            >
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6 text-brand group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-brand transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
