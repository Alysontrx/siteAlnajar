"use client";

import { motion } from "framer-motion";
import { Settings, ShieldAlert, Activity, Droplet, Wrench, Zap, Disc, Gauge } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const getSpecialties = (lang: 'pt' | 'en' | 'ar') => [
  {
    icon: <Settings className="w-8 h-8" />,
    title: lang === 'ar' ? "ناقل الحركة الأوتوماتيكي" : lang === 'en' ? "Automatic Transmission" : "Câmbio Automático",
    desc: lang === 'ar' ? "تشخيص وإصلاح متخصص في نواقل الحركة الأوتوماتيكية لضمان تبديل سلس وعمر أطول." : lang === 'en' ? "Specialized diagnosis and repair for automatic transmissions, ensuring smooth shifts and durability." : "Diagnóstico e reparo especializado em transmissões automáticas, garantindo trocas suaves e maior durabilidade."
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: lang === 'ar' ? "ناقل الحركة PowerShift و CVT" : lang === 'en' ? "PowerShift & CVT Transmission" : "Câmbio PowerShift & CVT",
    desc: lang === 'ar' ? "متخصصون في صيانة وتصحيح المشاكل المزمنة في أنظمة PowerShift و CVT." : lang === 'en' ? "Experts in maintenance and correction of chronic issues in PowerShift and CVT systems." : "Especialistas na manutenção e correção de problemas crônicos em câmbios PowerShift e sistemas CVT."
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: lang === 'ar' ? "الميكانيكا العامة والمحرك" : lang === 'en' ? "General Mechanics & Engine" : "Mecânica Geral & Motor",
    desc: lang === 'ar' ? "إصلاح شامل وصيانة متقدمة للمحركات باستخدام قطع غيار أصلية." : lang === 'en' ? "Complete overhaul and advanced repairs for engines with original parts." : "Retífica, revisão completa e reparos avançados de motores nacionais e importados com peças originais."
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {getSpecialties(language).map((item, index) => (
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
