"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SocialGrid } from "@/components/social/SocialGrid";
import { ImageLightbox } from "@/components/social/ImageLightbox";
import { SOCIAL_POSTS } from "@/data/social-posts";

export function SocialMediaSection() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(
    null
  );

  return (
    <section
      id="social-media"
      className="w-full border-t border-[#404A48] py-6 sm:py-8 md:py-10"
      aria-label="Social Media Showcase"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 space-y-3.5 sm:space-y-4">
        <SectionHeader
          title="Social Media Posts"
          description="Creative content that makes an impression."
        />

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
