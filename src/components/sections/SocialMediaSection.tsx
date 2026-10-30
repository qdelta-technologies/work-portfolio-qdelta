"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SocialGrid } from "@/components/social/SocialGrid";
import { ImageLightbox } from "@/components/social/ImageLightbox";
import { SOCIAL_POSTS } from "@/data/social-posts";
import { Sparkles } from "lucide-react";

export function SocialMediaSection() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(
    null
  );

  return (
    <section
      id="content-creation"
      className="w-full py-6 sm:py-8 md:py-10"
      aria-label="Content Creation & Social Media Showcase"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 space-y-4 sm:space-y-5">
        <SectionHeader
          title="Content Creation & Social Media"
          description="High-engagement social creatives, brand visuals, and story-driven campaigns."
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#181B1C] border border-[#38403F] text-[11.5px] font-mono text-[#A5AAA7]">
            <Sparkles className="w-3.5 h-3.5 text-[#FACC15]" />
            <span>{SOCIAL_POSTS.length} CURATED POSTS • CLICK TO PREVIEW</span>
          </div>
        </SectionHeader>

        <SocialGrid
          posts={SOCIAL_POSTS}
          onOpenLightbox={(idx) => setActiveLightboxIndex(idx)}
        />

        {/* Accessible Lightbox Modal */}
        <ImageLightbox
          posts={SOCIAL_POSTS}
          currentIndex={activeLightboxIndex}
          onClose={() => setActiveLightboxIndex(null)}
          onNavigate={(newIdx) => setActiveLightboxIndex(newIdx)}
        />
      </div>
    </section>
  );
}
