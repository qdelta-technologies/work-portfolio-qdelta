"use client";

import React, { useRef, useState, useEffect } from "react";
import { Play } from "lucide-react";
import { ReelItem } from "@/types/project";

interface ReelCardProps {
  reel: ReelItem;
  isAutoplayGlobal?: boolean;
  onOpen: () => void;
}

export function ReelCard({ reel, isAutoplayGlobal = false, onOpen }: ReelCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const initialTime = reel.thumbnailTimestamp ?? 0.1;

  // Handle setting initial thumbnail position
  const handleLoadedMetadata = () => {
    setHasError(false);
    if (videoRef.current) {
      videoRef.current.currentTime = initialTime;
    }
  };

  // Autoplay or hover behavior
  useEffect(() => {
    const video = videoRef.current;
    if (!video || hasError) return;

    if (isAutoplayGlobal) {
      video.muted = true;
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = initialTime;
    }
  }, [isAutoplayGlobal, initialTime, hasError]);

  const handleMouseEnter = () => {
    if (isAutoplayGlobal || hasError) return;
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (isAutoplayGlobal || hasError) return;
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = initialTime;
    }
  };

  return (
    <div
      onClick={onOpen}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative w-full aspect-[9/16] rounded-[16px] bg-[#181B1C] border border-[#38403F] hover:border-[#FACC15] overflow-hidden cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.45)] hover:shadow-[0_12px_36px_rgba(250,204,21,0.14)] transition-all duration-300 transform-gpu active:scale-[0.985] flex flex-col justify-between"
      role="button"
      tabIndex={0}
      aria-label={`Watch reel: ${reel.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
    >
      {/* 9:16 Video Canvas */}
      {!hasError ? (
        <video
          ref={videoRef}
          src={`${reel.videoSrc}#t=${initialTime}`}
          preload="metadata"
          muted
          playsInline
          loop
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onLoadedMetadata={handleLoadedMetadata}
          onError={() => setHasError(true)}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      ) : (
        /* Clean fallback state if video file is pending upload */
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-5 text-center bg-gradient-to-b from-[#181B1C] via-[#141617] to-[#101112]">
          <div className="w-12 h-12 rounded-full bg-[#202425] border border-[#38403F] flex items-center justify-center text-[#FACC15] mb-3 group-hover:scale-110 transition-transform">
            <Play className="w-5 h-5 ml-0.5 fill-current opacity-90" />
          </div>
          <span className="text-[12px] font-mono text-[#FACC15] tracking-wider uppercase mb-1">
            Video Slot
          </span>
          <span className="text-[11px] text-[#A5AAA7] font-mono line-clamp-1">
            {reel.videoSrc.replace("/videos/reels/", "")}
          </span>
        </div>
      )}

      {/* Top Header Overlay: Category + Duration */}
      <div className="relative z-10 p-3.5 flex items-center justify-between pointer-events-none">
        {reel.category && (
          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-[5px] bg-[#111214]/80 backdrop-blur-md border border-[#38403F] text-[#CBD2CF]">
            {reel.category}
          </span>
        )}
        {reel.duration && (
          <span className="text-[10px] font-mono text-[#FACC15] bg-[#111214]/80 backdrop-blur-md border border-[#38403F] px-2 py-0.5 rounded-[5px]">
            {reel.duration}
          </span>
        )}
      </div>

      {/* Center Action Overlay: Play Icon Indicator */}
      <div
        className={`relative z-10 self-center flex items-center justify-center transition-opacity duration-300 pointer-events-none ${
          isPlaying ? "opacity-0" : "opacity-90 group-hover:opacity-100"
        }`}
      >
        <div className="w-12 h-12 rounded-full bg-[#111214]/75 backdrop-blur-md border border-[#38403F] group-hover:border-[#FACC15] flex items-center justify-center text-[#F5F6F2] group-hover:text-[#FACC15] transition-all group-hover:scale-110 shadow-lg">
          <Play className="w-5 h-5 ml-0.5 fill-current" />
        </div>
      </div>

      {/* Bottom Metadata & Subtle Scrim Gradient */}
      <div className="relative z-10 p-4 pt-10 bg-gradient-to-t from-[#111214] via-[#111214]/80 to-transparent flex flex-col justify-end space-y-1">
        <h3 className="text-[14px] sm:text-[15px] font-semibold text-[#FFFFFF] tracking-[-0.01em] line-clamp-2 leading-snug group-hover:text-[#FACC15] transition-colors">
          {reel.title}
        </h3>
        <p className="text-[11px] font-mono text-[#A5AAA7] flex items-center gap-1.5 pt-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" />
          <span>Click to view full reel</span>
        </p>
      </div>

      {/* Subtle frame shine on hover */}
      <div className="absolute inset-0 border border-white/0 group-hover:border-[#FACC15]/20 rounded-[16px] pointer-events-none transition-colors" />
    </div>
  );
}
