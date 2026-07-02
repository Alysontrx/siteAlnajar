import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specialties from "@/components/Specialties";
import Differentials from "@/components/Differentials";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Specialties />
      <Differentials />
      <HowItWorks />
      <Testimonials />
      <Stats />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
