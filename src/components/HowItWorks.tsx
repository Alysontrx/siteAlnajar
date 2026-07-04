"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Search, FileText, Wrench, Key } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const getSteps = (lang: 'pt' | 'en' | 'ar') => [
  {
    icon: <CalendarCheck className="w-8 h-8" />,
    title: lang === 'ar' ? "1. حدد موعدك" : lang === 'en' ? "1. Schedule" : "1. Você agenda",
    desc: lang === 'ar' ? "اتصل بنا عبر واتساب واحجز أفضل وقت لإحضار سيارتك." : lang === 'en' ? "Contact us via WhatsApp and book the best time to bring your vehicle." : "Entre em contato conosco pelo WhatsApp e reserve o melhor horário para trazer seu veículo."
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: lang === 'ar' ? "2. تشخيص كامل" : lang === 'en' ? "2. Complete Diagnosis" : "2. Diagnóstico completo",
    desc: lang === 'ar' ? "يقوم خبراؤنا بإجراء اختبارات محوسبة وميكانيكية لتحديد سبب المشكلة." : lang === 'en' ? "Our experts perform computerized and mechanical tests to identify the root of the problem." : "Nossos especialistas realizam testes computadorizados e mecânicos para identificar a raiz do problema."
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: lang === 'ar' ? "3. إرسال عرض السعر" : lang === 'en' ? "3. Estimate Sent" : "3. Enviamos orçamento",
    desc: lang === 'ar' ? "تتلقى تقريراً مفصلاً وعرض سعر شفاف بدون تكاليف خفية." : lang === 'en' ? "You receive a detailed report and a transparent estimate with no hidden costs." : "Você recebe o laudo detalhado e o orçamento transparente, sem custos ocultos."
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: lang === 'ar' ? "4. تنفيذ الخدمة" : lang === 'en' ? "4. Service Execution" : "4. Executamos o serviço",
    desc: lang === 'ar' ? "بعد الموافقة، نبدأ الإصلاح ونرسل لك مقاطع فيديو لسير العمل." : lang === 'en' ? "Upon approval, we start the repair and send you videos of the work in progress." : "Após aprovação, iniciamos o reparo enviando vídeos do andamento do trabalho."
  },
  {
    icon: <Key className="w-8 h-8" />,
    title: lang === 'ar' ? "5. سيارة جاهزة" : lang === 'en' ? "5. Car Ready" : "5. Carro pronto",
    desc: lang === 'ar' ? "تستلم سيارتك مغسولة ومفحوصة مع ضمان كامل للخدمات المقدمة." : lang === 'en' ? "You get your vehicle washed, inspected, and fully guaranteed." : "Você recebe seu veículo lavado, revisado e com total garantia sobre os serviços prestados."
  }
];

export default function HowItWorks() {
  const { t, language } = useLanguage();
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
              {t.howItWorks.title1} <span className="text-brand">{t.howItWorks.titleHighlight}</span>
            </h2>
            <div className="w-20 h-1.5 bg-brand mx-auto mb-6 rounded-full"></div>
          </motion.div>
        </div>

        <div className="relative mt-20">
          {/* Connecting Line - Now with gradient and animation */}
          <div className="hidden lg:block absolute top-10 left-[5%] w-[90%] h-1 bg-dark-200 -translate-y-1/2 z-0 rounded-full overflow-hidden">
            <motion.div 
              initial={{ x: '-100%' }}
              whileInView={{ x: '100%' }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-full h-full bg-gradient-to-r from-transparent via-brand to-transparent opacity-50"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {getSteps(language as any).map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group flex flex-col items-center text-center p-6 rounded-2xl glass hover:bg-dark-200/50 transition-all duration-300 border border-white/5 hover:border-brand/40 shadow-lg hover:-translate-y-2 relative"
              >
                {/* Step Connector Drop for Mobile */}
                {index !== 4 && (
                  <div className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-brand/50 to-transparent rounded-full" />
                )}

                <div className="w-20 h-20 bg-dark-200 border border-white/10 rounded-2xl flex items-center justify-center text-brand mb-6 shadow-xl relative group-hover:scale-110 group-hover:bg-brand group-hover:text-white transition-all duration-500 rotate-3 group-hover:rotate-0">
                  {step.icon}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand rounded-full flex items-center justify-center text-white font-black text-sm shadow-[0_0_15px_rgba(234,88,12,0.6)] border-2 border-black group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand transition-colors">{step.title.replace(/^\d+\.\s*/, '')}</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
