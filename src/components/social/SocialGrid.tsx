"use client";

import React from "react";
import { SocialPost } from "@/types/project";
import { SocialCard } from "./SocialCard";
import { SocialPlaceholderCard } from "./SocialPlaceholderCard";

interface SocialGridProps {
  posts: SocialPost[];
  onOpenLightbox: (index: number) => void;
  minSlots?: number;
}

export function SocialGrid({
  posts,
  onOpenLightbox,
  minSlots = 8,
}: SocialGridProps) {
  // Ensure the grid always forms clean rows of 4 (minimum minSlots total frames)
  const totalSlots = Math.max(minSlots, Math.ceil(posts.length / 4) * 4);
  const placeholderCount = Math.max(0, totalSlots - posts.length);

  return (
    <div className="space-y-3 sm:space-y-3.5">
      {/* Grid Subheader Info */}
      <div className="flex items-center justify-between text-[12px] sm:text-[13px] text-[#CBD2CF] font-mono">
        <span>
          {posts.length} {posts.length === 1 ? "Post" : "Posts"} · {placeholderCount} Upcoming {placeholderCount === 1 ? "Slot" : "Slots"}
        </span>
        <span className="hidden sm:inline text-[#7E8885]">Click any post to enlarge</span>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-4.5">
        {/* Render active posts starting from index 0 (newest added appear first) */}
        {posts.map((post, idx) => (
          <SocialCard
            key={post.id}
            post={post}
            index={idx}
            onOpenLightbox={onOpenLightbox}
          />
        ))}

        {/* Dynamic placeholder frames filling the remaining grid slots */}
        {Array.from({ length: placeholderCount }).map((_, i) => (
          <SocialPlaceholderCard
            key={`placeholder-${i}`}
            slotNumber={posts.length + i + 1}
          />
        ))}
      </div>
    </div>
  );
}
