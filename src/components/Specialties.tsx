"use client";

import { motion } from "framer-motion";
import { Settings, ShieldAlert, Activity, Droplet, Wrench, Zap, Disc, Gauge } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const getSpecialties = (lang: 'pt' | 'en' | 'ar') => [
  {
    icon: <Settings className="w-8 h-8" />,
    title: lang === 'ar' ? "جميع أنواع نواقل الحركة" : lang === 'en' ? "All Transmission Types" : "Câmbios Automáticos e Automatizados",
    desc: lang === 'ar' ? "متخصصون في جميع أنواع نواقل الحركة: DSG، Easytronic، PowerShift، CVT والمزيد." : lang === 'en' ? "Experts in all transmission types: DSG, Easytronic, PowerShift, CVT, and more." : "Especialistas em todos os tipos de câmbio: Automático convencional, DSG, Easytronic, I-Motion, PowerShift e CVT."
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: lang === 'ar' ? "الميكانيكا العامة والمحرك" : lang === 'en' ? "General Mechanics & Engine" : "Mecânica Geral & Motor",
    desc: lang === 'ar' ? "إصلاح شامل وصيانة متقدمة للمحركات باستخدام قطع غيار أصلية." : lang === 'en' ? "Complete overhaul and advanced repairs for engines with original parts." : "Retífica, revisão completa e reparos avançados de motores nacionais e importados com peças originais."
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: lang === 'ar' ? "الميكانيكا الوقائية" : lang === 'en' ? "Preventive Mechanics" : "Mecânica Preventiva e Corretiva",
    desc: lang === 'ar' ? "صيانة دقيقة لتجنب الأعطال غير المتوقعة." : lang === 'en' ? "Precise maintenance to avoid unexpected breakdowns." : "Cuidamos de tudo para o seu veículo não te deixar na mão, com revisões precisas e completas."
  },
  {
    icon: <ShieldAlert className="w-8 h-8" />,
    title: lang === 'ar' ? "نظام التعليق والفرامل" : lang === 'en' ? "Suspension & Brakes" : "Suspensão e Freios",
    desc: lang === 'ar' ? "الأمان أولاً. استبدال وسادات الفرامل والأقراص وممتصات الصدمات وتوجيه المحاذاة." : lang === 'en' ? "Safety first. Replacement of brake pads, discs, shock absorbers, and alignment." : "Segurança em primeiro lugar. Troca de pastilhas, discos, amortecedores e alinhamento de direção."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: lang === 'ar' ? "الحقن الإلكتروني" : lang === 'en' ? "Electronic Injection" : "Injeção Eletrônica",
    desc: lang === 'ar' ? "تنظيف الفوهات وفحص الحساسات لتحسين الأداء واستهلاك الوقود." : lang === 'en' ? "Injector cleaning and sensor checking for better performance and fuel economy." : "Limpeza de bicos, verificação de sensores e atuadores para economia de combustível e performance."
  },
  {
    icon: <Gauge className="w-8 h-8" />,
    title: lang === 'ar' ? "فحص السيارات بالكمبيوتر" : lang === 'en' ? "Automotive Scanner" : "Scanner Automotivo",
    desc: lang === 'ar' ? "أحدث المعدات لقراءة ومسح الأعطال في وحدة التحكم الإلكترونية (ECU)." : lang === 'en' ? "State-of-the-art equipment to read and clear faults in the electronic control unit (ECU)." : "Equipamentos de última geração para leitura e apagar falhas no módulo de controle eletrônico (ECU)."
  },
  {
    icon: <Droplet className="w-8 h-8" />,
    title: lang === 'ar' ? "تغيير الزيت المتخصص" : lang === 'en' ? "Specialized Oil Change" : "Troca de Óleo Especializada",
    desc: lang === 'ar' ? "استبدال سائل ناقل الحركة الأوتوماتيكي بالآلة وزيت المحرك بفلاتر عالية الجودة." : lang === 'en' ? "Automatic transmission fluid replacement by machine and engine oil with high-quality filters." : "Substituição do fluido de câmbio automático por máquina (diálise) e óleo de motor com filtros de alta qualidade."
  },
  {
    icon: <Disc className="w-8 h-8" />,
    title: lang === 'ar' ? "الصيانة الوقائية" : lang === 'en' ? "Preventive Maintenance" : "Manutenção Preventiva",
    desc: lang === 'ar' ? "مراجعة شاملة لتسافر بأمان وتتجنب الأعطال غير المتوقعة." : lang === 'en' ? "Comprehensive review so you can travel safely and avoid unexpected breakdowns." : "Revisão por quilometragem para você viajar com segurança e evitar quebras inesperadas."
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
          {getSpecialties(language).map((item, index) => {
            // Lógica Bento Box: alguns cards ocupam mais espaço
            const isLarge = index === 0 || index === 3;
            const isTall = index === 5;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group relative overflow-hidden bg-dark-200/50 glass hover:bg-dark-200 transition-all duration-500 rounded-2xl p-8 flex flex-col justify-between border border-white/5 hover:border-brand/40 shadow-lg hover:shadow-[0_0_40px_rgba(234,88,12,0.15)] ${
                  isLarge ? "md:col-span-2" : ""
                } ${isTall ? "md:row-span-2" : ""}`}
              >
                {/* Efeito Hover Glow no card (segue o mouse visualmente via CSS abstrato) */}
                <div className="absolute -inset-full bg-gradient-to-br from-brand/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[spin_10s_linear_infinite] transition-opacity duration-700 pointer-events-none blur-3xl rounded-full"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-xl glass border border-white/10 flex items-center justify-center mb-6 text-brand group-hover:scale-110 group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-md`}>
                    {item.icon}
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className={`font-bold mb-2 text-white group-hover:text-brand transition-colors duration-300 ${isLarge ? 'text-2xl' : 'text-xl'}`}>
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
