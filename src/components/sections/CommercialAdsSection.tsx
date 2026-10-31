"use client";

import React, { useState } from "react";
import { reelsData } from "@/data/reels";
import { adCreativesData } from "@/data/ad-creatives";
import { ReelCard } from "@/components/commercials/ReelCard";
import { ReelLightbox } from "@/components/commercials/ReelLightbox";
import { AdCreativeCard } from "@/components/commercials/AdCreativeCard";
import { AdCreativeLightbox } from "@/components/commercials/AdCreativeLightbox";

export function CommercialAdsSection() {
  const [activeReelIndex, setActiveReelIndex] = useState<number | null>(null);
  const [activeAdIndex, setActiveAdIndex] = useState<number | null>(null);
  const [isAutoplay, setIsAutoplay] = useState(false);

  return (
    <section
      id="commercials"
      className="w-full py-6 sm:py-8 md:py-10"
      aria-label="Motion Graphics & Ad Creatives Showcase"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 space-y-10 sm:space-y-12">
        {/* 1. First: Ad Creatives Sub-section */}
        <div className="space-y-5 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#38403F]/60">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#FACC15]" />
                <h2 className="text-[20px] sm:text-[24px] font-bold text-[#F5F6F2] tracking-tight">
                  Ad Creatives
                </h2>
                <span className="text-[11px] font-mono text-[#CBD2CF] px-2 py-0.5 rounded-[4px] bg-[#181B1C] border border-[#38403F]">
                  {adCreativesData.length} Creatives
                </span>
              </div>
              <p className="text-[13px] text-[#A5AAA7]">
                Static ad creatives, promotional graphics, and performance marketing designs.
              </p>
            </div>
          </div>

          {/* Ad Creatives Grid - 3x2 on Desktop (3 up, 3 down) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-7">
            {adCreativesData.map((ad, index) => (
              <AdCreativeCard
                key={ad.id}
                ad={ad}
                onClick={() => setActiveAdIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* 2. Second: Motion Graphics Sub-section */}
        <div className="space-y-5 sm:space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#38403F]/60">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#FACC15]" />
                <h2 className="text-[20px] sm:text-[24px] font-bold text-[#F5F6F2] tracking-tight">
                  Motion Graphics
                </h2>
                <span className="text-[11px] font-mono text-[#CBD2CF] px-2 py-0.5 rounded-[4px] bg-[#181B1C] border border-[#38403F]">
                  {reelsData.length} Videos
                </span>
              </div>
              <p className="text-[13px] text-[#A5AAA7]">
                Dynamic motion cuts, kinetic typography, and animated vertical promo reels.
              </p>
            </div>

            {/* Interactive Autoplay Toggle */}
            <button
              onClick={() => setIsAutoplay((prev) => !prev)}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11.5px] font-mono transition-all cursor-pointer self-start sm:self-auto ${
                isAutoplay
                  ? "bg-[#FACC15]/10 border-[#FACC15] text-[#FACC15]"
                  : "bg-[#181B1C] border-[#38403F] text-[#A5AAA7] hover:text-[#F5F6F2]"
              }`}
              title="Toggle muted autoplay preview for reels"
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isAutoplay ? "bg-[#FACC15] animate-pulse" : "bg-[#555E5C]"
                }`}
              />
              <span>Autoplay: {isAutoplay ? "ON" : "OFF (Hover)"}</span>
            </button>
          </div>

          {/* Promo Reels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {reelsData.map((reel, index) => (
              <ReelCard
                key={reel.id}
                reel={reel}
                isAutoplayGlobal={isAutoplay && activeReelIndex === null && activeAdIndex === null}
                isPausedGlobal={activeReelIndex !== null || activeAdIndex !== null}
                onOpen={() => setActiveReelIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Reel Lightbox Player */}
      <ReelLightbox
        reels={reelsData}
        currentIndex={activeReelIndex}
        onClose={() => setActiveReelIndex(null)}
        onNavigate={(newIndex) => setActiveReelIndex(newIndex)}
      />

      {/* Fullscreen Ad Creative Lightbox */}
      <AdCreativeLightbox
        ads={adCreativesData}
        currentIndex={activeAdIndex}
        onClose={() => setActiveAdIndex(null)}
        onNavigate={(newIndex) => setActiveAdIndex(newIndex)}
      />
    </section>
  );
}
