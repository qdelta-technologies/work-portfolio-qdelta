import React from "react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="w-full border-t border-[#404A48] py-5 sm:py-6">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-3.5 sm:gap-3 text-[12px] sm:text-[13px] text-[#CBD2CF]">
        <div className="text-center sm:text-left">{siteConfig.footer.copyright}</div>
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-5">
          <a
            href="#websites"
            className="py-1 px-2 hover:text-[#F5F6F2] transition-colors focus-visible:outline-none touch-manipulation"
          >
            Websites
          </a>
          <span className="text-[#4E5654]">·</span>
          <a
            href="#social-media"
            className="py-1 px-2 hover:text-[#F5F6F2] transition-colors focus-visible:outline-none touch-manipulation"
          >
            Social Media
          </a>
          <span className="text-[#4E5654]">·</span>
          <a
            href="#top"
            className="py-1 px-2 hover:text-[#FACC15] transition-colors focus-visible:outline-none touch-manipulation font-medium"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
