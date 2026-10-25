"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SocialCarousel } from "@/components/social/SocialCarousel";
import { ImageLightbox } from "@/components/social/ImageLightbox";
import { SOCIAL_POSTS } from "@/data/social-posts";

export function SocialMediaSection() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(
    null
  );

  return (
    <section
      id="social-media"
      className="py-10 sm:py-14 md:py-16 max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12"
      aria-label="Social Media Showcase"
    >
      <div className="space-y-6 sm:space-y-8">
        <SectionHeader
          title="Social Media"
          description="Creative content that makes an impression."
        />

        <SocialCarousel
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
