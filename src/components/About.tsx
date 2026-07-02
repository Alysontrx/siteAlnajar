"use client";

import { motion } from "framer-motion";
import { CheckCircle2, PlayCircle, ShieldCheck, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Helper for bold text
const renderText = (text: string) => {
  return { __html: text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') };
};

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="py-24 bg-dark-100 relative overflow-hidden">
      {/* Background subtleties */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-600 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t.about.title1} <span className="text-brand">{t.about.titleHighlight}</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-brand to-amber-500 mb-8 rounded-full"></div>
            
            <p 
              className="text-gray-300 text-lg leading-relaxed mb-6"
              dangerouslySetInnerHTML={renderText(t.about.p1)}
            />
            
            <p 
              className="text-gray-300 text-lg leading-relaxed mb-6 bg-brand/5 border-l-4 border-brand p-4 rounded-r-lg"
              dangerouslySetInnerHTML={renderText(t.about.p2)}
            />
            
            <p 
              className="text-gray-300 text-lg leading-relaxed mb-8"
              dangerouslySetInnerHTML={renderText(t.about.p3)}
            />

            <div className="space-y-4 mb-10">
              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                <CheckCircle2 className="text-brand w-6 h-6 flex-shrink-0" />
                <span className="text-lg font-medium">{t.about.feat1}</span>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                <ShieldCheck className="text-brand w-6 h-6 flex-shrink-0" />
                <span className="text-lg font-medium">{t.about.feat2}</span>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                <Users className="text-amber-500 w-6 h-6 flex-shrink-0 drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]" />
                <span className="text-lg font-medium text-amber-500/90">{t.about.feat3}</span>
              </motion.div>
            </div>

          </motion.div>

          {/* Image/Video Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] group ring-1 ring-brand/20 hover:ring-brand/50 transition-all duration-500">
              <img
                src="/about.png"
                alt="Equipe Mecânica Alnajar trabalhando"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Fake Video Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-brand/90 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(234,88,12,0.6)]">
                  <PlayCircle className="text-white w-10 h-10 ml-1" />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-black/95 border border-white/10 p-4 rounded-xl flex items-center gap-4 max-w-[300px] shadow-xl transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="bg-brand/20 p-3 rounded-full border border-brand/50 shadow-[0_0_10px_rgba(234,88,12,0.4)]">
                  <PlayCircle className="text-brand w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{t.about.videoTitle}</p>
                  <p className="text-xs text-gray-300 mt-0.5">{t.about.videoDesc}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
