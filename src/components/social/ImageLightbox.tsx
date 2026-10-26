"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SocialPost } from "@/types/project";

interface ImageLightboxProps {
  posts: SocialPost[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export function ImageLightbox({
  posts,
  currentIndex,
  onClose,
  onNavigate,
}: ImageLightboxProps) {
  const isOpen = currentIndex !== null;
  const currentPost = isOpen ? posts[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex !== null) {
      const nextIdx = (currentIndex - 1 + posts.length) % posts.length;
      onNavigate(nextIdx);
    }
  }, [currentIndex, posts.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex !== null) {
      const nextIdx = (currentIndex + 1) % posts.length;
      onNavigate(nextIdx);
    }
  }, [currentIndex, posts.length, onNavigate]);

  // Touch swipe support for mobile
  const [touchStart, setTouchStart] = React.useState<number | null>(null);

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

  if (!isOpen || !currentPost) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview Lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-200"
    >
      {/* Dark frosted backdrop */}
      <div
        className="absolute inset-0 bg-[#090b0c]/92 backdrop-blur-md cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Lightbox Modal Window */}
      <div className="relative z-10 max-w-2xl w-full flex flex-col items-center">
        {/* Top Controls bar */}
        <div className="w-full flex items-center justify-between pb-2 sm:pb-3.5 text-[#CBD2CF]">
          <div className="flex items-center gap-2.5">
            <span className="text-[12.5px] font-mono text-[#D4FF78]">
              {String(currentIndex + 1).padStart(2, "0")} / {String(posts.length).padStart(2, "0")}
            </span>
            {currentPost.campaign && (
              <>
                <span className="text-[#4E5654]">·</span>
                <span className="text-[12.5px] text-[#CBD2CF] font-medium hidden sm:inline">
                  {currentPost.campaign}
                </span>
              </>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#181B1C] border border-[#38403F] text-[#FFFFFF] hover:text-[#D4FF78] hover:border-[#D4FF78]/60 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF78] touch-manipulation"
            aria-label="Close image lightbox (Escape)"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Center Image Container with Touch Swipe */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative aspect-[3/4] w-full max-h-[60vh] sm:max-h-[75vh] max-w-[480px] mx-auto rounded-[10px] overflow-hidden bg-[#0C0E0F] border border-[#38403F] shadow-[0_20px_60px_rgba(0,0,0,0.85)] touch-pan-y"
        >
          <Image
            src={currentPost.image}
            alt={currentPost.alt}
            fill
            sizes="(max-width: 640px) 90vw, 480px"
            className="object-contain select-none pointer-events-none"
            priority
          />
        </div>

        {/* Bottom Details & Nav buttons */}
        <div className="w-full max-w-[480px] flex items-center justify-between pt-2.5 sm:pt-3.5 text-[#F5F6F2]">
          <div className="min-w-0 pr-3">
            {currentPost.title && (
              <h4 className="text-[14px] sm:text-[17px] font-semibold text-[#FFFFFF] truncate">
                {currentPost.title}
              </h4>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#181B1C] border border-[#38403F] text-[#FFFFFF] hover:text-[#D4FF78] hover:border-[#D4FF78]/60 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF78] touch-manipulation active:scale-95"
              aria-label="Previous image (Left Arrow)"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#181B1C] border border-[#38403F] text-[#FFFFFF] hover:text-[#D4FF78] hover:border-[#D4FF78]/60 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF78] touch-manipulation active:scale-95"
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
