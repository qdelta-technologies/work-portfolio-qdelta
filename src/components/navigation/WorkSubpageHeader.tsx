"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

interface WorkSubpageHeaderProps {
  currentPage: "websites" | "content" | "commercials";
  title: string;
}

export function WorkSubpageHeader({
  currentPage,
  title,
}: WorkSubpageHeaderProps) {
  const pages = [
    {
      id: "websites",
      label: "Websites & Applications",
      shortLabel: "Websites",
      href: "/websites",
    },
    {
      id: "content",
      label: "Content Creation",
      shortLabel: "Content",
      href: "/content-creation",
    },
    {
      id: "commercials",
      label: "Commercial Ads & Reels",
      shortLabel: "Reels",
      href: "/commercial-ads",
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#111214]/95 backdrop-blur-md border-b border-[#38403F]">
      <div className="max-w-[1320px] mx-auto px-3.5 sm:px-6 md:px-12 h-14 sm:h-16 flex items-center justify-between gap-2.5 sm:gap-4">
        {/* Left: Back to Home Button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-[8px] bg-[#181B1C] hover:bg-[#202425] border border-[#38403F] hover:border-[#FACC15] text-[12.5px] sm:text-[13px] font-medium text-[#F5F6F2] hover:text-[#FACC15] transition-all group active:scale-95 touch-manipulation"
            aria-label="Go back to Home Page"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:-translate-x-0.5 text-[#FACC15]" />
            <span>Home</span>
          </Link>

          <span className="text-[#38403F] hidden md:inline">|</span>

          {/* Current Page Title */}
          <span className="text-[13.5px] font-semibold text-[#FFFFFF] hidden md:inline truncate max-w-[200px]">
            {title}
          </span>
        </div>

        {/* Center/Right: Quick Switcher to Other Work Pages */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#A5AAA7] hidden lg:inline mr-1">
            Browse:
          </span>

          {pages.map((page) => {
            const isCurrent = page.id === currentPage;
            if (isCurrent) return null; // Show only the OTHER options for quick switching

            return (
              <Link
                key={page.id}
                href={page.href}
                className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-[8px] bg-[#181B1C] hover:bg-[#202425] border border-[#38403F] hover:border-[#FACC15]/60 text-[11.5px] sm:text-[12.5px] font-medium text-[#CBD2CF] hover:text-[#FACC15] transition-all touch-manipulation active:scale-95"
              >
                {/* Short label on mobile, full label on larger screens */}
                <span className="inline sm:hidden">{page.shortLabel}</span>
                <span className="hidden sm:inline">{page.label}</span>
                <ArrowUpRight className="w-3 h-3 text-[#A5AAA7]" />
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
