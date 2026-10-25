import React from "react";
import Image from "next/image";
import { SocialPost } from "@/types/project";

interface SocialCardProps {
  post: SocialPost;
  index: number;
  onOpenLightbox: (index: number) => void;
}

export function SocialCard({ post, index, onOpenLightbox }: SocialCardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpenLightbox(index)}
      className="group relative aspect-square w-full rounded-[10px] overflow-hidden bg-[#1B1E1F] border border-[#343938] hover:border-[#D4FF78]/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF78] text-left cursor-pointer shrink-0 snap-start active:scale-[0.99]"
      aria-label={`View enlarged ${post.title || "social media design"} (${post.campaign || "Creative Work"})`}
    >
      <Image
        src={post.image}
        alt={post.alt}
        fill
        sizes="(max-width: 640px) 75vw, (max-width: 1024px) 40vw, 320px"
        className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
      />

      {/* Subtle hover overlay with indicator */}
      <div className="absolute inset-0 bg-[#111315]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-4">
        <div className="text-[12px] font-mono text-[#D4FF78] px-2.5 py-1 rounded-[6px] bg-[#111315]/80 backdrop-blur-sm border border-[#343938]/60">
          Enlarge +
        </div>
      </div>
    </button>
  );
}
