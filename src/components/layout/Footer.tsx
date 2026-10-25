import React from "react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="w-full border-t border-[#343938]/40 py-8 md:py-12">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] sm:text-[14px] text-[#A5AAA7]">
        <div>{siteConfig.footer.copyright}</div>
        <div className="flex items-center gap-6">
          <a
            href="#websites"
            className="hover:text-[#F5F6F2] transition-colors focus-visible:outline-none"
          >
            Websites
          </a>
          <span className="text-[#343938]">·</span>
          <a
            href="#social-media"
            className="hover:text-[#F5F6F2] transition-colors focus-visible:outline-none"
          >
            Social Media
          </a>
          <span className="text-[#343938]">·</span>
          <a
            href="#top"
            className="hover:text-[#D4FF78] transition-colors focus-visible:outline-none"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
