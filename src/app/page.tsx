import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Calculator from "@/components/Calculator";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Process />
      <Calculator />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
