"use client";

import { motion } from "framer-motion";
import { Users, Star, ShieldCheck, Clock } from "lucide-react";
import { useEffect, useState } from "react";

// Hook for counting animation
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOutQuart * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    // Create an intersection observer to only animate when in view
    // For simplicity in this demo, we'll just start it right away
    // but in a production app, you'd trigger this when it scrolls into view
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return count;
};

// Component for a single stat block
const StatItem = ({ end, label, suffix = "", prefix = "", icon }: { end: number, label: string, suffix?: string, prefix?: string, icon: React.ReactNode }) => {
  const count = useCountUp(end);
  
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="text-brand mb-4">{icon}</div>
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
        {prefix}{count}{suffix}
      </div>
      <div className="text-gray-400 font-medium uppercase tracking-widest text-sm">{label}</div>
    </div>
  );
};

export default function Stats() {
  return (
    <section className="py-20 bg-brand relative overflow-hidden">
      {/* Dark overlay pattern */}
      <div className="absolute inset-0 bg-black/80"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-y md:divide-y-0 divide-white/10"
        >
          <StatItem end={500} prefix="+" label="Clientes Satisfeitos" icon={<Users className="w-10 h-10" />} />
          <StatItem end={4.9} suffix="/5" label="Avaliação no Google" icon={<Star className="w-10 h-10" />} />
          <StatItem end={100} suffix="%" label="Transparência" icon={<ShieldCheck className="w-10 h-10" />} />
          <StatItem end={30} prefix="+" label="Anos de Experiência" icon={<Clock className="w-10 h-10" />} />
        </motion.div>
      </div>
    </section>
  );
}
