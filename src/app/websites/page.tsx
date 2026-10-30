import React from "react";
import type { Metadata } from "next";
import { BackgroundLayer } from "@/components/layout/BackgroundLayer";
import { WorkSubpageHeader } from "@/components/navigation/WorkSubpageHeader";
import { WebsitesSection } from "@/components/sections/WebsitesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Websites & Applications — QDelta Work",
  description:
    "Explore our featured websites, web apps, SaaS platforms, and digital client projects.",
};

export default function WebsitesPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#111214] text-[#F5F6F2]">
      {/* Background Amber Texture & Subtle Dark Yellow Grid */}
      <BackgroundLayer />

      {/* Subpage Header with Back to Home & Other Pages Links */}
      <WorkSubpageHeader
        currentPage="websites"
        title="Websites & Applications"
      />

      <main className="relative z-10 flex-1">
        <WebsitesSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
