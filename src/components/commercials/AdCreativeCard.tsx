import React from "react";
import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";
import { AdCreativeItem } from "@/data/ad-creatives";

interface AdCreativeCardProps {
  ad: AdCreativeItem;
}

export function AdCreativeCard({ ad }: AdCreativeCardProps) {
  if (ad.image) {
    return (
      <div className="group relative aspect-[4/5] w-full rounded-[12px] overflow-hidden bg-[#181B1C] border border-[#38403F] hover:border-[#FACC15] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.35)] cursor-pointer">
        <Image
          src={ad.image}
          alt={ad.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
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
