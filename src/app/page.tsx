import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { WebsitesSection } from "@/components/sections/WebsitesSection";
import { SocialMediaSection } from "@/components/sections/SocialMediaSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#111315] text-[#F5F6F2] overflow-x-hidden">
      {/* Background Layer: Ambient Gradients */}
      <div
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Subtle Ambient Gradients */}
        <div className="absolute inset-0 bg-radial-glow" />

        {/* Subtle edge vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111315]/20 via-transparent to-[#111315]/40" />
      </div>

      <Header />
      <main className="relative z-10 flex-1">
        <Hero />
        <WebsitesSection />
        <SocialMediaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
