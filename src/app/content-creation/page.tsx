import React from "react";
import type { Metadata } from "next";
import { BackgroundLayer } from "@/components/layout/BackgroundLayer";
import { WorkSubpageHeader } from "@/components/navigation/WorkSubpageHeader";
import { SocialMediaSection } from "@/components/sections/SocialMediaSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Content Creation — QDelta Work",
  description:
    "Explore our creative social media graphics, branding visuals, and digital campaigns.",
};

export default function ContentCreationPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#111214] text-[#F5F6F2]">
      {/* Background Amber Texture & Subtle Dark Yellow Grid */}
      <BackgroundLayer />

      {/* Subpage Header with Back to Home & Other Pages Links */}
      <WorkSubpageHeader
        currentPage="content"
        title="Content Creation"
      />

      <main className="relative z-10 flex-1">
        <SocialMediaSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
