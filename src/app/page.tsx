import Navbar from "@/components/Landing/Navbar";
import Hero from "@/components/Landing/Hero";
import Features from "@/components/Landing/Features";
import Steps from "@/components/Landing/Steps";
import Testimonials from "@/components/Landing/Testimonials";
import FAQ from "@/components/Landing/FAQ";
import Footer from "@/components/Landing/Footer";

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      {/* Fundo roxo + grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-bg" />
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-purple-500/25 blur-[90px]" />
        <div className="absolute top-[38%] left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-purple-500/18 blur-[110px]" />
        <div className="absolute bottom-0 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-purple-500/18 blur-[120px]" />
      </div>

      <div className="relative">
        <Navbar />
        <Hero />
        <Features />
        <Steps />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
