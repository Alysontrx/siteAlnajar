"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Vocês trabalham com câmbio automático?",
    answer: "Sim, somos especialistas em diagnóstico, reparo e manutenção preventiva (troca de fluido) de câmbios automáticos de todas as marcas."
  },
  {
    question: "Vocês fazem PowerShift?",
    answer: "Com certeza. Temos vasta experiência em diagnóstico e correção dos problemas crônicos dos modelos PowerShift, com peças de qualidade e garantia."
  },
  {
    question: "Tem garantia?",
    answer: "Sim, todos os nossos serviços e peças possuem garantia documentada. A transparência e a sua segurança são nossas prioridades."
  },
  {
    question: "Parcelam?",
    answer: "Sim! Facilitamos o pagamento e parcelamos o seu conserto em até 12x no cartão de crédito."
  },
  {
    question: "Quanto tempo leva o serviço?",
    answer: "Depende da complexidade do diagnóstico e reparo. Manutenções preventivas geralmente ficam prontas no mesmo dia. Serviços de câmbio podem levar alguns dias. Sempre informamos o prazo exato no orçamento."
  },
  {
    question: "Fazem diagnóstico?",
    answer: "Sim, utilizamos scanners automotivos de última geração para diagnosticar com precisão a falha antes de trocar qualquer peça."
  },
  {
    question: "Atendem carros importados?",
    answer: "Sim, atendemos tanto veículos nacionais quanto veículos importados de padrão premium (BMW, Audi, Mercedes, etc)."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
              Perguntas <span className="text-brand">Frequentes</span>
            </h2>
            <div className="w-20 h-1.5 bg-brand mx-auto mb-6 rounded-full"></div>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
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
