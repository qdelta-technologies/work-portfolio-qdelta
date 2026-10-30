import React from "react";
import type { Metadata } from "next";
import { BackgroundLayer } from "@/components/layout/BackgroundLayer";
import { WorkSubpageHeader } from "@/components/navigation/WorkSubpageHeader";
import { CommercialAdsSection } from "@/components/sections/CommercialAdsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Commercial Ads & Reels — QDelta Work",
  description:
    "Preview upcoming cinematic commercial films, brand spots, and vertical reels.",
};

export default function CommercialAdsPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#111214] text-[#F5F6F2]">
      {/* Background Amber Texture & Subtle Dark Yellow Grid */}
      <BackgroundLayer />

      {/* Subpage Header with Back to Home & Other Pages Links */}
      <WorkSubpageHeader
        currentPage="commercials"
        title="Commercial Ads & Reels"
      />

      <main className="relative z-10 flex-1">
        <CommercialAdsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
