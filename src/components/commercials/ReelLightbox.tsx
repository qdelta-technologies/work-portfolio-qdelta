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

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, []);

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
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

  // Lock body scroll and handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === " " && videoRef.current) {
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

  // Reset video playback on reel change
  useEffect(() => {
    if (videoRef.current && currentReel) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [currentIndex, currentReel]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-xl p-2 sm:p-4 select-none animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={`Playing reel: ${currentReel.title}`}
    >
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Top action bar: counter + close button */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto max-w-4xl mx-auto">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#181B1C]/80 backdrop-blur-md border border-[#38403F] text-[12px] font-mono text-[#CBD2CF]">
          <span className="text-[#FACC15] font-semibold">{currentIndex + 1}</span>
          <span className="text-[#555E5C]">/</span>
          <span>{reels.length}</span>
        </div>

        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-[#181B1C]/80 backdrop-blur-md border border-[#38403F] text-[#F5F6F2] hover:text-[#FACC15] hover:border-[#FACC15] flex items-center justify-center transition-all cursor-pointer"
          aria-label="Close reel player"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev / Next navigation arrows */}
      {reels.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 z-20 w-11 h-11 rounded-full bg-[#181B1C]/80 backdrop-blur-md border border-[#38403F] text-[#F5F6F2] hover:text-[#FACC15] hover:border-[#FACC15] flex items-center justify-center transition-all cursor-pointer shadow-lg hidden sm:flex"
            aria-label="Previous reel"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 z-20 w-11 h-11 rounded-full bg-[#181B1C]/80 backdrop-blur-md border border-[#38403F] text-[#F5F6F2] hover:text-[#FACC15] hover:border-[#FACC15] flex items-center justify-center transition-all cursor-pointer shadow-lg hidden sm:flex"
            aria-label="Next reel"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* 9:16 Vertical Phone Canvas */}
      <div
        className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] aspect-[9/16] rounded-[22px] bg-[#111214] border border-[#38403F] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.85)] flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          src={currentReel.videoSrc}
          playsInline
          loop
          muted={isMuted}
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
            className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer transition-opacity"
          >
            <div className="w-16 h-16 rounded-full bg-[#181B1C]/90 border border-[#FACC15] text-[#FACC15] flex items-center justify-center shadow-xl">
              <Play className="w-7 h-7 ml-1 fill-current" />
            </div>
          </div>
        )}

        {/* Top Badges */}
        <div className="relative z-10 p-4 flex items-center justify-between pointer-events-none">
          {currentReel.category && (
            <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-[6px] bg-[#111214]/80 backdrop-blur-md border border-[#38403F] text-[#CBD2CF]">
              {currentReel.category}
            </span>
          )}

          <button
            onClick={toggleMute}
            className="pointer-events-auto w-9 h-9 rounded-full bg-[#111214]/80 backdrop-blur-md border border-[#38403F] text-[#F5F6F2] hover:text-[#FACC15] flex items-center justify-center transition-colors"
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>

        {/* Bottom HUD: Title + Scrubber bar + Controls */}
        <div className="relative z-10 p-4 bg-gradient-to-t from-[#111214] via-[#111214]/90 to-transparent space-y-3 pointer-events-auto">
          <div>
            <h2 className="text-[16px] font-bold text-[#FFFFFF] tracking-tight">
              {currentReel.title}
            </h2>
          </div>

          {/* Scrubber slider */}
          <div className="space-y-1">
            <input
              type="range"
              min={0}
              max={duration || 100}
              step={0.1}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1 bg-[#343938] rounded-lg appearance-none cursor-pointer accent-[#FACC15]"
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

            <span className="text-[11px] font-mono text-[#A5AAA7]">
              Motion Graphics
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
