"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const getFaqs = (lang: 'pt' | 'en' | 'ar') => [
  {
    question: lang === 'ar' ? "هل تعملون مع جميع أنواع نواقل الحركة؟" : lang === 'en' ? "Do you work with manual and automatic transmissions?" : "Vocês trabalham com câmbio manual e automático?",
    answer: lang === 'ar' ? "نعم، نحن متخصصون في التشخيص والإصلاح والصيانة الوقائية لنواقل الحركة العادية والأوتوماتيكية من جميع الماركات." : lang === 'en' ? "Yes, we specialize in diagnostics, repair, and preventive maintenance for manual and automatic transmissions of all brands." : "Sim, somos especialistas em diagnóstico, reparo e manutenção preventiva de câmbios manuais e automáticos de todas as marcas."
  },
  {
    question: lang === 'ar' ? "هل تقومون بصيانة PowerShift؟" : lang === 'en' ? "Do you repair PowerShift transmissions?" : "Vocês fazem PowerShift?",
    answer: lang === 'ar' ? "بالتأكيد. لدينا خبرة واسعة في تشخيص وتصحيح المشاكل المزمنة في نماذج PowerShift، مع قطع غيار عالية الجودة وضمان." : lang === 'en' ? "Absolutely. We have extensive experience in diagnosing and fixing chronic problems in PowerShift models, with quality parts and warranty." : "Com certeza. Temos vasta experiência em diagnóstico e correção dos problemas crônicos dos modelos PowerShift, com peças de qualidade e garantia."
  },
  {
    question: lang === 'ar' ? "هل يوجد ضمان؟" : lang === 'en' ? "Is there a warranty?" : "Tem garantia?",
    answer: lang === 'ar' ? "نعم، جميع خدماتنا وقطع الغيار التي نوفرها مشمولة بضمان موثق. الشفافية وسلامتك هي أولوياتنا." : lang === 'en' ? "Yes, all our services and parts come with a documented warranty. Transparency and your safety are our priorities." : "Sim, todos os nossos serviços e peças possuem garantia documentada. A transparência e a sua segurança são nossas prioridades."
  },
  {
    question: lang === 'ar' ? "هل تقبلون التقسيط؟" : lang === 'en' ? "Do you offer installments?" : "Parcelam?",
    answer: lang === 'ar' ? "نعم! نحن نسهل الدفع ويمكنك تقسيط تكلفة الإصلاح حتى 12 قسطًا على بطاقتك الائتمانية." : lang === 'en' ? "Yes! We make payment easy and offer installments up to 12x on your credit card." : "Sim! Facilitamos o pagamento e parcelamos o seu conserto em até 12x no cartão de crédito."
  },
  {
    question: lang === 'ar' ? "كم من الوقت تستغرق الخدمة؟" : lang === 'en' ? "How long does the service take?" : "Quanto tempo leva o serviço?",
    answer: lang === 'ar' ? "يعتمد ذلك على تعقيد التشخيص والإصلاح. عادة ما تكتمل الصيانة الوقائية في نفس اليوم. قد تستغرق خدمات ناقل الحركة بضعة أيام. نعلمك دائمًا بالوقت المحدد في عرض السعر." : lang === 'en' ? "It depends on the complexity of the diagnosis and repair. Preventive maintenance is usually completed on the same day. Transmission services may take a few days. We always inform you of the exact timeframe in the estimate." : "Depende da complexidade do diagnóstico e reparo. Manutenções preventivas geralmente ficam prontas no mesmo dia. Serviços de câmbio podem levar alguns dias. Sempre informamos o prazo exato no orçamento."
  },
  {
    question: lang === 'ar' ? "هل تقومون بإجراء تشخيص للسيارة؟" : lang === 'en' ? "Do you perform computerized diagnostics?" : "Fazem diagnóstico?",
    answer: lang === 'ar' ? "نعم، نستخدم أحدث أجهزة المسح الآلي لتشخيص العطل بدقة قبل تغيير أي قطعة." : lang === 'en' ? "Yes, we use state-of-the-art automotive scanners to accurately diagnose the fault before changing any parts." : "Sim, utilizamos scanners automotivos de última geração para diagnosticar com precisão a falha antes de trocar qualquer peça."
  },
  {
    question: lang === 'ar' ? "هل تقبلون السيارات المستوردة؟" : lang === 'en' ? "Do you service imported cars?" : "Atendem carros importados?",
    answer: lang === 'ar' ? "نعم، نحن نخدم كلاً من السيارات الوطنية والسيارات المستوردة الفاخرة (BMW، Audi، Mercedes، إلخ)." : lang === 'en' ? "Yes, we service both domestic vehicles and premium imported vehicles (BMW, Audi, Mercedes, etc)." : "Sim, atendemos tanto veículos nacionais quanto veículos importados de padrão premium (BMW, Audi, Mercedes, etc)."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-dark-100 relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t.faq.title1} <span className="text-brand">{t.faq.titleHighlight}</span>
            </h2>
            <div className="w-20 h-1.5 bg-brand mx-auto mb-6 rounded-full"></div>
          </motion.div>
        </div>

        <div className="space-y-4 relative z-10">
          {getFaqs(language as any).map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? "glass border-brand/40 shadow-[0_0_30px_rgba(234,88,12,0.1)]" 
                    : "bg-black border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  className="w-full px-6 py-6 text-left flex justify-between items-center group"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={`font-bold text-lg transition-colors ${isOpen ? "text-brand" : "text-white group-hover:text-gray-200"}`}>
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-brand text-white" : "bg-white/5 text-gray-400 group-hover:text-white"}`}>
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform duration-500 ${
                        isOpen ? "rotate-180" : ""
                      }`} 
                    />
                  </div>
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-64 opacity-100 pb-6" : "max-h-0 opacity-0 pb-0"
                  }`}
                >
                  <p className="text-gray-300 leading-relaxed border-t border-white/10 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
