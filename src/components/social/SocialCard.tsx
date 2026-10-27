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
      className="group relative aspect-[3/4] w-full rounded-[10px] overflow-hidden bg-[#181B1C] border border-[#38403F] hover:border-[#FACC15]/60 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15] text-left cursor-pointer shrink-0 snap-start active:scale-[0.98] touch-manipulation select-none"
      aria-label={`View enlarged ${post.title || "social media design"} (${post.campaign || "Creative Work"})`}
    >
      <Image
        src={post.image}
        alt={post.alt}
        fill
        sizes="(max-width: 640px) 72vw, (max-width: 1024px) 30vw, 290px"
        className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
      />

      {/* Subtle hover overlay with indicator */}
      <div className="absolute inset-0 bg-[#111315]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-2.5 sm:p-3">
        <div className="text-[11px] font-mono text-[#FACC15] px-2 py-0.5 rounded-[5px] bg-[#111315]/90 backdrop-blur-sm border border-[#38403F]">
          Enlarge +
        </div>
      </div>
    </button>
  );
}
