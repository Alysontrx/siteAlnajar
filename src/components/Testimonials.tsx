"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const getTestimonials = (lang: 'pt' | 'en' | 'ar') => [
  {
    name: "Felipe Souza",
    text: lang === 'ar' ? "خدمة ممتازة! قمت بإصلاح محرك سيارتي بيجو 206، أصبح كالجديد تماماً. شرحوا لي كل خطوة واليوم هم ورشتي الموثوقة." : lang === 'en' ? "Excellent service! I had my Peugeot 206 engine fixed, it looks brand new. They explained every step of the maintenance and today they remain my trusted repair shop." : "Excelente atendimento! Fiz o motor do meu Peugeot 206, ficou um brinco, novo de novo. Explicaram cada etapa da manutenção e hoje continuam sendo minha oficina de confiança.",
    rating: 5
  },
  {
    name: "Rafael",
    text: lang === 'ar' ? "أفضل ورشة ميكانيكا في ساو برناردو دو كامبو. متخصصون في نواقل الحركة العادية والأوتوماتيكية و PowerShift و CVT. خدمة صادقة وتشخيص دقيق وتسليم في الموعد." : lang === 'en' ? "Best auto repair shop in São Bernardo do Campo. Specialized in manual & automatic transmission, PowerShift and CVT. Honest service, precise diagnosis and on-time delivery." : "Melhor oficina mecânica em São Bernardo do Campo. Especializada em câmbio manual e automático, PowerShift e CVT. Atendimento honesto, diagnóstico preciso e entrega no prazo.",
    rating: 5
  },
  {
    name: "Gustavo Benito",
    text: lang === 'ar' ? "أظهروا لي جميع الأجزاء المعيبة، وشرحوا الخلل، وأرسلوا لي مقاطع فيديو أثناء الخدمة. عمل ممتاز." : lang === 'en' ? "They showed me all the faulty parts, explained the defect, and sent videos during the service. Excellent work." : "Mostraram todas as peças com problema, explicaram o defeito e enviaram vídeos durante o serviço. Trabalho excelente.",
    rating: 5
  },
  {
    name: "Alexandre Silva",
    text: lang === 'ar' ? "سعر عادل، خدمة ممتازة وجودة عالية. لقد كسبوا عميلاً وفياً." : lang === 'en' ? "Fair price, excellent service and high quality work. They've earned a loyal customer." : "Preço justo, excelente atendimento e serviço de alta qualidade. Ganharam um cliente fiel.",
    rating: 5
  },
  {
    name: "Omar Awad",
    text: lang === 'ar' ? "قمت بإصلاح ناقل الحركة في سيارتي، وتمكنت من الدفع على 12 قسطاً بدون فوائد، والسيارة الآن مثالية." : lang === 'en' ? "I fixed my transmission, was able to pay in 12 interest-free installments, and the car is perfect." : "Fiz o câmbio do meu carro, consegui parcelar em 12x sem juros e ficou perfeito.",
    rating: 5
  },
  {
    name: "Isabella Ávila",
    text: lang === 'ar' ? "حتى خارج ساعات العمل ساعدوني بونش وخدمة متميزة. دعم ممتاز." : lang === 'en' ? "Even after hours they helped me with a tow truck and great service. Excellent support." : "Mesmo fora do horário me ajudaram com guincho e atendimento. Excelente suporte.",
    rating: 5
  }
];

export default function Testimonials() {
  const { t, language } = useLanguage();
  return (
    <section id="depoimentos" className="py-24 bg-dark-100 relative overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand/5 to-transparent rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t.testimonials.title1} <span className="text-brand">{t.testimonials.titleHighlight}</span>
            </h2>
            <p className="text-gray-400 text-lg">
              {t.testimonials.desc}
            </p>
          </motion.div>
        </div>

        <div className="relative mt-12 overflow-hidden -mx-4 md:-mx-8 px-4 md:px-8 py-10">
          {/* Gradient Edges for smooth fading */}
          <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-dark-100 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-dark-100 to-transparent z-20 pointer-events-none"></div>
          
          <motion.div 
            className="flex gap-6 w-max"
            animate={{ x: [0, -1000] }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* Double the array for infinite scroll effect */}
            {[...getTestimonials(language as any), ...getTestimonials(language as any)].map((item, index) => (
              <div
                key={index}
                className="w-[300px] md:w-[400px] flex-shrink-0 glass border border-white/5 p-8 rounded-2xl relative hover:border-brand/40 transition-colors shadow-xl group hover:-translate-y-2 duration-300"
              >
                <Quote className="text-brand/10 group-hover:text-brand/30 transition-colors w-20 h-20 absolute top-4 right-4" />
                
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500 drop-shadow-[0_0_5px_rgba(245,158,11,0.6)]" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic mb-8 relative z-10 text-sm md:text-base leading-relaxed">
                  &quot;{item.text}&quot;
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand to-amber-500 p-0.5 shadow-[0_0_15px_rgba(234,88,12,0.4)]">
                    <div className="w-full h-full bg-black rounded-full flex items-center justify-center font-bold text-white">
                      {item.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">{item.name}</div>
                    <div className="text-brand text-xs uppercase tracking-wider font-semibold">{t.testimonials.customer}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
