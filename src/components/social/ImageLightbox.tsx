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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-200"
    >
      {/* Dark frosted backdrop */}
      <div
        className="absolute inset-0 bg-[#090b0c]/90 backdrop-blur-md cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Lightbox Modal Window */}
      <div className="relative z-10 max-w-3xl w-full flex flex-col items-center">
        {/* Top Controls bar */}
        <div className="w-full flex items-center justify-between pb-3 sm:pb-4 text-[#A5AAA7]">
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-mono text-[#D4FF78]">
              {String(currentIndex + 1).padStart(2, "0")} / {String(posts.length).padStart(2, "0")}
            </span>
            {currentPost.campaign && (
              <>
                <span className="text-[#343938]">·</span>
                <span className="text-[13px] text-[#A5AAA7] font-medium hidden sm:inline">
                  {currentPost.campaign}
                </span>
              </>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#1B1E1F] border border-[#343938] text-[#F5F6F2] hover:text-[#D4FF78] hover:border-[#D4FF78]/60 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF78]"
            aria-label="Close image lightbox (Escape)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Center Image Container */}
        <div className="relative aspect-square w-full max-h-[75vh] rounded-[16px] overflow-hidden bg-[#151719] border border-[#343938] shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <Image
            src={currentPost.image}
            alt={currentPost.alt}
            fill
            sizes="(max-width: 768px) 95vw, 768px"
            className="object-contain"
            priority
          />
        </div>

        {/* Bottom Details & Nav buttons */}
        <div className="w-full flex items-center justify-between pt-3 sm:pt-4 text-[#F5F6F2]">
          <div>
            {currentPost.title && (
              <h4 className="text-[16px] sm:text-[18px] font-semibold text-[#F5F6F2]">
                {currentPost.title}
              </h4>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-[#1B1E1F] border border-[#343938] text-[#F5F6F2] hover:text-[#D4FF78] hover:border-[#D4FF78]/60 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF78]"
              aria-label="Previous image (Left Arrow)"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-[#1B1E1F] border border-[#343938] text-[#F5F6F2] hover:text-[#D4FF78] hover:border-[#D4FF78]/60 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF78]"
              aria-label="Next image (Right Arrow)"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
