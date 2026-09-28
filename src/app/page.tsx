import Hero from "@/components/Hero";
import CompanyIntro from "@/components/CompanyIntro";
import FeaturedProjects from "@/components/FeaturedProjects";
import ServicesGrid from "@/components/ServicesGrid";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Hero />
      <CompanyIntro />
      <ServicesGrid />
      <FeaturedProjects />
      
      {/* Cinematic Full Width CTA Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src="/media/raw/WhatsApp Video 2026-09-28 at 21.35.25.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-darker/80 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white uppercase mb-8 leading-tight tracking-tight">
            From Foundation <br />
            <span className="text-brand">To Finish.</span>
          </h2>
          <a
            href="/contact"
            className="inline-block px-10 py-5 bg-brand text-white font-medium tracking-widest uppercase text-sm rounded-sm hover:bg-brand-dark transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
}
