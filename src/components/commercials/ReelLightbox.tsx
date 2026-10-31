"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { ReelItem } from "@/types/project";

interface ReelLightboxProps {
  reels: ReelItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export function ReelLightbox({
  reels,
  currentIndex,
  onClose,
  onNavigate,
}: ReelLightboxProps) {
  const isOpen = currentIndex !== null;
  const currentReel = isOpen ? reels[currentIndex] : null;
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Touch swipe support for mobile (horizontal and vertical swipe)
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, []);

  const toggleMute = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  }, []);

  const handlePrev = useCallback(() => {
    if (currentIndex !== null) {
      const prevIdx = (currentIndex - 1 + reels.length) % reels.length;
      onNavigate(prevIdx);
    }
  }, [currentIndex, reels.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex !== null) {
      const nextIdx = (currentIndex + 1) % reels.length;
      onNavigate(nextIdx);
    }
  }, [currentIndex, reels.length, onNavigate]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    });
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStart.x - touchEndX;
    const diffY = touchStart.y - touchEndY;

    // Detect horizontal swipe (left = next, right = prev)
    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 45) {
        handleNext();
      } else if (diffX < -45) {
        handlePrev();
      }
    } else {
      // Detect vertical swipe (up = next, down = prev) like TikTok/Reels
      if (diffY > 55) {
        handleNext();
      } else if (diffY < -55) {
        handlePrev();
      }
    }
    setTouchStart(null);
  };

  // Lock body scroll and handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "k") handlePrev();
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "j") handleNext();
      if (e.key === " ") {
        e.preventDefault();
        togglePlay();
      }
      if (e.key === "m" || e.key === "M") {
        toggleMute();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext, togglePlay, toggleMute]);

  // Safe playback start when reel opens or switches
  const startPlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay blocked by browser policy (often if unmuted)
        // Fallback to muted playback automatically
        video.muted = true;
        setIsMuted(true);
        video.play().catch(() => {});
      });
    }
  }, []);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video) {
      setCurrentTime(video.currentTime);
      if (video.duration && !isNaN(video.duration)) {
        setDuration(video.duration);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    const video = videoRef.current;
    if (video) {
      video.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (timeInSec: number) => {
    if (isNaN(timeInSec)) return "0:00";
    const minutes = Math.floor(timeInSec / 60);
    const seconds = Math.floor(timeInSec % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  if (!isOpen || !currentReel) return null;

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-xl p-2 sm:p-4 select-none animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={`Playing reel: ${currentReel.title}`}
    >
      {/* Background click to close */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} aria-hidden="true" />

      {/* Top action bar: counter + close button */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto max-w-4xl mx-auto">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#181B1C]/85 backdrop-blur-md border border-[#38403F] text-[12px] font-mono text-[#CBD2CF]">
          <span className="text-[#FACC15] font-semibold">{currentIndex + 1}</span>
          <span className="text-[#555E5C]">/</span>
          <span>{reels.length}</span>
        </div>

        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-[#181B1C]/85 backdrop-blur-md border border-[#38403F] text-[#F5F6F2] hover:text-[#FACC15] hover:border-[#FACC15] flex items-center justify-center transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15]"
          aria-label="Close reel player (Escape)"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev / Next navigation arrows */}
      {reels.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 md:left-12 z-20 w-11 h-11 rounded-full bg-[#181B1C]/85 backdrop-blur-md border border-[#38403F] text-[#F5F6F2] hover:text-[#FACC15] hover:border-[#FACC15] flex items-center justify-center transition-all cursor-pointer shadow-lg hidden sm:flex active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15]"
            aria-label="Previous reel (Left / Up Arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 md:right-12 z-20 w-11 h-11 rounded-full bg-[#181B1C]/85 backdrop-blur-md border border-[#38403F] text-[#F5F6F2] hover:text-[#FACC15] hover:border-[#FACC15] flex items-center justify-center transition-all cursor-pointer shadow-lg hidden sm:flex active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15]"
            aria-label="Next reel (Right / Down Arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* 9:16 Vertical Phone Canvas with Touch Swipes */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] aspect-[9/16] rounded-[22px] bg-[#111214] border border-[#38403F] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.85)] flex flex-col justify-between touch-pan-y"
      >
        {/* Keyed video element for clean instant switching with zero state leaking */}
        <video
          key={currentReel.id}
          ref={videoRef}
          src={currentReel.videoSrc}
          playsInline
          loop
          autoPlay
          muted={isMuted}
          onCanPlay={startPlayback}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onTimeUpdate={handleTimeUpdate}
          onClick={togglePlay}
          className="absolute inset-0 w-full h-full object-cover cursor-pointer"
        />

        {/* Center Play indicator overlay when paused */}
        {!isPlaying && (
          <div
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer transition-opacity animate-in fade-in duration-150"
          >
            <div className="w-16 h-16 rounded-full bg-[#181B1C]/90 border border-[#FACC15] text-[#FACC15] flex items-center justify-center shadow-xl transform active:scale-90 transition-transform">
              <Play className="w-7 h-7 ml-1 fill-current" />
            </div>
          </div>
        )}

        {/* Top Badges & Audio Controls */}
        <div className="relative z-10 p-4 flex items-center justify-between pointer-events-none">
          {currentReel.category ? (
            <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-[6px] bg-[#111214]/85 backdrop-blur-md border border-[#38403F] text-[#CBD2CF]">
              {currentReel.category}
            </span>
          ) : (
            <span />
          )}

          <button
            onClick={toggleMute}
            className="pointer-events-auto w-9 h-9 rounded-full bg-[#111214]/85 backdrop-blur-md border border-[#38403F] text-[#F5F6F2] hover:text-[#FACC15] hover:border-[#FACC15]/60 flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15]"
            aria-label={isMuted ? "Unmute audio (M)" : "Mute audio (M)"}
            title={isMuted ? "Unmute (M)" : "Mute (M)"}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-[#FACC15]" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>

        {/* Bottom HUD: Title + Progress Bar + Scrubber + Controls */}
        <div className="relative z-10 p-4 bg-gradient-to-t from-[#111214] via-[#111214]/90 to-transparent space-y-3 pointer-events-auto">
          <div>
            <h2 className="text-[16px] font-bold text-[#FFFFFF] tracking-tight leading-snug">
              {currentReel.title}
            </h2>
          </div>

          {/* Scrubber slider with colored track fill */}
          <div className="space-y-1">
            <div className="relative w-full h-1 bg-[#282E2D] rounded-lg overflow-hidden flex items-center">
              <div
                className="h-full bg-[#FACC15] transition-all duration-75"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <input
              type="range"
              min={0}
              max={duration || 100}
              step={0.1}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1 bg-transparent rounded-lg appearance-none cursor-pointer accent-[#FACC15] -mt-2 opacity-0 hover:opacity-100 transition-opacity"
              aria-label="Video seek bar"
            />
            <div className="flex items-center justify-between text-[10px] font-mono text-[#A5AAA7]">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Quick controls bar */}
          <div className="flex items-center justify-between pt-1">
            <button
              onClick={togglePlay}
              className="inline-flex items-center gap-1.5 text-[12px] font-mono text-[#FACC15] hover:underline cursor-pointer"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>PAUSE</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>PLAY</span>
                </>
              )}
            </button>

            {/* Mobile Swipe / Desktop Arrow Hint */}
            <span className="text-[11px] font-mono text-[#A5AAA7]">
              Swipe / Arrow keys to switch
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
