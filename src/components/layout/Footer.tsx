import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="w-full border-t border-[#404A48] py-5 sm:py-6">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-3.5 sm:gap-3 text-[12px] sm:text-[13px] text-[#CBD2CF]">
        <div className="text-center sm:text-left">{siteConfig.footer.copyright}</div>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <Link
            href="/"
            className="py-1 px-1.5 hover:text-[#FACC15] transition-colors focus-visible:outline-none touch-manipulation font-medium text-[#FACC15]"
          >
            ← Home
          </Link>
          <span className="text-[#4E5654]">·</span>
          <Link
            href="/websites"
            className="py-1 px-1.5 hover:text-[#FACC15] transition-colors focus-visible:outline-none touch-manipulation"
          >
            Websites & Apps
          </Link>
          <span className="text-[#4E5654]">·</span>
          <Link
            href="/content-creation"
            className="py-1 px-1.5 hover:text-[#FACC15] transition-colors focus-visible:outline-none touch-manipulation"
          >
            Content Creation
          </Link>
          <span className="text-[#4E5654]">·</span>
          <Link
            href="/commercial-ads"
            className="py-1 px-1.5 hover:text-[#FACC15] transition-colors focus-visible:outline-none touch-manipulation"
          >
            Commercials & Reels
          </Link>
        </div>
      </div>
    </footer>
  );
}
