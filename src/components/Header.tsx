"use client";

import { useState, useEffect } from "react";
import { Menu, X, Wrench } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-white/10 py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center max-w-7xl">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="h-12 md:h-16 relative flex items-center">
            <img src="/logo.png" alt="Mecânica Alnajar Logo" className="h-full w-auto object-contain" />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#sobre" className="text-gray-300 hover:text-white transition-colors">Sobre</a>
          <a href="#especialidades" className="text-gray-300 hover:text-white transition-colors">Especialidades</a>
          <a href="#como-funciona" className="text-gray-300 hover:text-white transition-colors">Como Funciona</a>
          <a href="#depoimentos" className="text-gray-300 hover:text-white transition-colors">Depoimentos</a>
        </nav>

        <div className="hidden md:flex">
          <a
            href="https://wa.me/5511965846438?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand hover:bg-brand-hover text-white px-6 py-2.5 rounded-sm font-semibold transition-colors duration-300 text-sm tracking-wide"
          >
            Falar no WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-4"
        >
          <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white p-2">Sobre</a>
          <a href="#especialidades" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white p-2">Especialidades</a>
          <a href="#como-funciona" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white p-2">Como Funciona</a>
          <a href="#depoimentos" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white p-2">Depoimentos</a>
          <a
            href="https://wa.me/5511965846438"
            className="bg-brand text-center text-white px-4 py-3 rounded-sm font-semibold mt-2"
          >
            Falar no WhatsApp
          </a>
        </motion.div>
      )}
    </header>
  );
}
