import React from "react";
import Image from "next/image";
import { Image as ImageIcon, ZoomIn } from "lucide-react";
import { AdCreativeItem } from "@/data/ad-creatives";

interface AdCreativeCardProps {
  ad: AdCreativeItem;
  onClick?: () => void;
}

export function AdCreativeCard({ ad, onClick }: AdCreativeCardProps) {
  if (ad.image) {
    return (
      <div
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={(e) => {
          if ((e.key === "Enter" || e.key === " ") && onClick) {
            e.preventDefault();
            onClick();
          }
        }}
        className="group relative aspect-[4/5] w-full rounded-[12px] overflow-hidden bg-[#181B1C] border border-[#38403F] hover:border-[#FACC15] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.35)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15]"
        aria-label={`View ${ad.title}`}
      >
        <Image
          src={ad.image}
          alt={ad.title}
          fill
          unoptimized
          sizes="(max-width: 768px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />

        {/* Hover overlay with title & zoom icon */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 pointer-events-none">
          <div className="flex items-end justify-between gap-2">
            <div className="min-w-0">
              {ad.category && (
                <span className="text-[10px] font-mono text-[#FACC15] uppercase tracking-wider block mb-0.5 truncate">
                  {ad.category}
                </span>
              )}
              <h4 className="text-[12.5px] font-semibold text-[#FFFFFF] leading-tight line-clamp-1">
                {ad.title}
              </h4>
            </div>
            <div className="w-7 h-7 rounded-full bg-[#181B1C]/90 border border-[#38403F] text-[#FACC15] flex items-center justify-center shrink-0 shadow-md">
              <ZoomIn className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/5] w-full rounded-[12px] overflow-hidden bg-[#141718]/60 border border-dashed border-[#2E3635] hover:border-[#FACC15]/40 transition-all duration-300 flex flex-col items-center justify-center p-4 text-center select-none group">
      {/* Center Image Icon Badge */}
      <div className="w-11 h-11 rounded-full bg-[#181B1C] border border-[#343D3C] group-hover:border-[#FACC15]/50 flex items-center justify-center text-[#7E8885] group-hover:text-[#FACC15] transition-colors shadow-inner mb-3">
        <ImageIcon className="w-5 h-5 stroke-[1.5]" />
      </div>

      {/* Simple Slot Details */}
      <div className="space-y-1">
        <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-[#A5AAA7] px-2 py-0.5 rounded-[4px] bg-[#1A1E1F] border border-[#2B3231]">
          Creative {String(ad.slotNumber).padStart(2, "0")}
        </span>
        <p className="text-[12px] font-medium text-[#8F9895] group-hover:text-[#CBD2CF] transition-colors">
          Coming Soon
        </p>
      </div>
    </div>
  );
}
