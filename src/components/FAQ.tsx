"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const getFaqs = (lang: 'pt' | 'en' | 'ar') => [
  {
    question: lang === 'ar' ? "هل تعملون مع نواقل الحركة الأوتوماتيكية؟" : lang === 'en' ? "Do you work with automatic transmissions?" : "Vocês trabalham com câmbio automático?",
    answer: lang === 'ar' ? "نعم، نحن متخصصون في التشخيص والإصلاح والصيانة الوقائية (تغيير السوائل) لنواقل الحركة الأوتوماتيكية من جميع الماركات." : lang === 'en' ? "Yes, we specialize in diagnostics, repair, and preventive maintenance (fluid change) for automatic transmissions of all brands." : "Sim, somos especialistas em diagnóstico, reparo e manutenção preventiva (troca de fluido) de câmbios automáticos de todas as marcas."
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

        <div className="space-y-4">
          {getFaqs(language as any).map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-black border border-white/10 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-lg text-white">{faq.question}</span>
                <ChevronDown 
                  className={`text-brand w-6 h-6 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`} 
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-48 py-5 border-t border-white/5" : "max-h-0"
                }`}
              >
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
