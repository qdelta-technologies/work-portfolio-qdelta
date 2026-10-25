"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SocialPost } from "@/types/project";
import { SocialCard } from "./SocialCard";

interface SocialCarouselProps {
  posts: SocialPost[];
  onOpenLightbox: (index: number) => void;
}

export function SocialCarousel({ posts, onOpenLightbox }: SocialCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollBoundaries = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    checkScrollBoundaries();
    el.addEventListener("scroll", checkScrollBoundaries, { passive: true });
    window.addEventListener("resize", checkScrollBoundaries, { passive: true });

    return () => {
      el.removeEventListener("scroll", checkScrollBoundaries);
      window.removeEventListener("resize", checkScrollBoundaries);
    };
  }, [checkScrollBoundaries]);

  const scrollByDirection = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;

    // Scroll by roughly the width of one card + gap
    const scrollAmount = el.clientWidth * 0.75;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative group/carousel">
      {/* Carousel Header Controls */}
      <div className="flex items-center justify-between pb-3 sm:pb-3.5">
        <div className="text-[12px] sm:text-[13px] text-[#A5AAA7] font-mono">
          {posts.length} Curated Posts · Swipe or Click to Enlarge
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => scrollByDirection("left")}
            disabled={!canScrollLeft}
            className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 ${
              canScrollLeft
                ? "bg-[#1B1E1F] border-[#343938] text-[#F5F6F2] hover:text-[#D4FF78] hover:border-[#D4FF78]/60 cursor-pointer active:scale-95"
                : "bg-[#1B1E1F]/50 border-[#343938]/30 text-[#A5AAA7]/40 cursor-not-allowed"
            }`}
            aria-label="Scroll carousel left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => scrollByDirection("right")}
            disabled={!canScrollRight}
            className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 ${
              canScrollRight
                ? "bg-[#1B1E1F] border-[#343938] text-[#F5F6F2] hover:text-[#D4FF78] hover:border-[#D4FF78]/60 cursor-pointer active:scale-95"
                : "bg-[#1B1E1F]/50 border-[#343938]/30 text-[#A5AAA7]/40 cursor-not-allowed"
            }`}
            aria-label="Scroll carousel right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={scrollContainerRef}
        tabIndex={0}
        role="region"
        aria-label="Social media gallery carousel"
        className="flex gap-3 sm:gap-3.5 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#343938] rounded-[10px]"
      >
        {posts.map((post, idx) => (
          <div
            key={post.id}
            className="w-[70vw] sm:w-[38vw] md:w-[28vw] lg:w-[21vw] max-w-[285px] shrink-0 snap-start"
          >
            <SocialCard
              post={post}
              index={idx}
              onOpenLightbox={onOpenLightbox}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
