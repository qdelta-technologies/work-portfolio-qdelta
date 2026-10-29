import React from "react";
import { Image as ImageIcon } from "lucide-react";

interface SocialPlaceholderCardProps {
  slotNumber: number;
}

export function SocialPlaceholderCard({
  slotNumber,
}: SocialPlaceholderCardProps) {
  return (
    <div
      className="relative aspect-[3/4] w-full rounded-[10px] overflow-hidden bg-[#141718]/60 border border-dashed border-[#2E3635] hover:border-[#3E4947] transition-all duration-300 flex flex-col items-center justify-center p-4 text-center select-none group"
      aria-label={`Upcoming design slot ${slotNumber}`}
    >
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1D2122]/50 via-transparent to-transparent pointer-events-none" />

      {/* Center Icon Badge */}
      <div className="relative z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#181B1C] border border-[#343D3C] group-hover:border-[#FACC15]/40 flex items-center justify-center text-[#6B7573] group-hover:text-[#FACC15] transition-all duration-300 shadow-inner">
        <ImageIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[1.5]" />
      </div>

      {/* Slot Details */}
      <div className="relative z-10 mt-3 space-y-1">
        <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-[#7E8885] px-2 py-0.5 rounded-[4px] bg-[#1A1E1F] border border-[#2B3231]">
          Slot {String(slotNumber).padStart(2, "0")}
        </span>
        <p className="text-[12px] sm:text-[13px] font-medium text-[#8F9895] group-hover:text-[#CBD2CF] transition-colors">
          Coming Soon
        </p>
      </div>
    </div>
  );
}
