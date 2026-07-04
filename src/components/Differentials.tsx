"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Video, ShieldCheck, Wrench, Clock, CreditCard, ThumbsUp, Medal } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const getDifferentials = (lang: 'pt' | 'en' | 'ar') => [
  { icon: <CheckCircle2 />, title: lang === 'ar' ? "تشخيص دقيق" : lang === 'en' ? "Precise Diagnosis" : "Diagnóstico preciso" },
  { icon: <ThumbsUp />, title: lang === 'ar' ? "شفافية تامة" : lang === 'en' ? "Total Transparency" : "Transparência total" },
  { icon: <Video />, title: lang === 'ar' ? "فيديوهات توضح الخدمة" : lang === 'en' ? "Videos Showing the Service" : "Vídeos mostrando o serviço" },
  { icon: <ShieldCheck />, title: lang === 'ar' ? "ضمان على قطع الغيار والخدمات" : lang === 'en' ? "Warranty on Parts & Services" : "Garantia em peças e serviços" },
  { icon: <Medal />, title: lang === 'ar' ? "محترفون ذوو خبرة" : lang === 'en' ? "Experienced Professionals" : "Profissionais experientes" },
  { icon: <Wrench />, title: lang === 'ar' ? "متخصصون في ناقل الحركة" : lang === 'en' ? "Transmission Specialists" : "Especialistas em Câmbios (Manuais e Automáticos)" },
  { icon: <Clock />, title: lang === 'ar' ? "التسليم في الوقت المحدد" : lang === 'en' ? "On-Time Delivery" : "Entrega no prazo" },
  { icon: <CreditCard />, title: lang === 'ar' ? "سعر عادل وتقسيط" : lang === 'en' ? "Fair Price & Installments" : "Preço justo e Parcelamento" }
];

export default function Differentials() {
  const { t, language } = useLanguage();
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
              {t.differentials.title1} <span className="text-brand">{t.differentials.titleHighlight}</span>
            </h2>
            <div className="w-20 h-1.5 bg-brand mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-400 text-lg">
              {t.differentials.desc}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {getDifferentials(language as any).map((item, index) => (
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
