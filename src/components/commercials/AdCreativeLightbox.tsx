"use client";

import React, { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { AdCreativeItem } from "@/data/ad-creatives";

interface AdCreativeLightboxProps {
  ads: AdCreativeItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export function AdCreativeLightbox({
  ads,
  currentIndex,
  onClose,
  onNavigate,
}: AdCreativeLightboxProps) {
  const isOpen = currentIndex !== null;
  const currentAd = isOpen ? ads[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex !== null) {
      const nextIdx = (currentIndex - 1 + ads.length) % ads.length;
      onNavigate(nextIdx);
    }
  }, [currentIndex, ads.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex !== null) {
      const nextIdx = (currentIndex + 1) % ads.length;
      onNavigate(nextIdx);
    }
  }, [currentIndex, ads.length, onNavigate]);

  // Touch swipe support for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    setTouchStart(null);
  };

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentAd || !currentAd.image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Ad Creative Preview Lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-200"
    >
      {/* Dark frosted backdrop */}
      <div
        className="absolute inset-0 bg-[#090b0c]/92 backdrop-blur-md cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Lightbox Modal Window */}
      <div className="relative z-10 max-w-3xl w-full flex flex-col items-center">
        {/* Top Controls bar */}
        <div className="w-full max-w-[560px] flex items-center justify-between pb-2 sm:pb-3.5 text-[#CBD2CF]">
          <div className="flex items-center gap-2.5">
            <span className="text-[12.5px] font-mono text-[#FACC15]">
              {String(currentIndex + 1).padStart(2, "0")} / {String(ads.length).padStart(2, "0")}
            </span>
            {currentAd.category && (
              <>
                <span className="text-[#4E5654]">·</span>
                <span className="text-[12.5px] text-[#CBD2CF] font-medium hidden sm:inline">
                  {currentAd.category}
                </span>
              </>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#181B1C] border border-[#38403F] text-[#FFFFFF] hover:text-[#FACC15] hover:border-[#FACC15]/60 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15] touch-manipulation cursor-pointer"
            aria-label="Close ad creative lightbox (Escape)"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Center Image Container with Touch Swipe */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative aspect-[3/4] w-full max-h-[72vh] sm:max-h-[82vh] max-w-[560px] mx-auto rounded-[12px] overflow-hidden bg-[#0C0E0F] border border-[#38403F] shadow-[0_20px_60px_rgba(0,0,0,0.85)] touch-pan-y"
        >
          <Image
            src={currentAd.image}
            alt={currentAd.title}
            fill
            unoptimized
            className="object-contain select-none pointer-events-none"
            priority
          />
        </div>

        {/* Bottom Details & Nav buttons */}
        <div className="w-full max-w-[560px] flex items-center justify-between pt-2.5 sm:pt-3.5 text-[#F5F6F2]">
          <div className="min-w-0 pr-3">
            <h4 className="text-[14px] sm:text-[17px] font-semibold text-[#FFFFFF] truncate">
              {currentAd.title}
            </h4>
            {currentAd.category && (
              <p className="text-[12px] text-[#A5AAA7] truncate sm:hidden">
                {currentAd.category}
              </p>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#181B1C] border border-[#38403F] text-[#FFFFFF] hover:text-[#FACC15] hover:border-[#FACC15]/60 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15] touch-manipulation active:scale-95 cursor-pointer"
              aria-label="Previous image (Left Arrow)"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#181B1C] border border-[#38403F] text-[#FFFFFF] hover:text-[#FACC15] hover:border-[#FACC15]/60 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15] touch-manipulation active:scale-95 cursor-pointer"
              aria-label="Next image (Right Arrow)"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

