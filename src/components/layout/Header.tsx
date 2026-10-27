"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#111315]/95 backdrop-blur-md border-b border-[#38403F] shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
          : "bg-[#111315]/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b border-[#343938]/40 md:border-transparent"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 h-14 sm:h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/#top"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.pushState(null, "", "/");
            }
          }}
          className="group flex items-center tracking-tight focus-visible:outline-none cursor-pointer py-1"
          aria-label="QDelta — Back to top of page"
        >
          <span
            className="text-[19px] sm:text-[21px] font-bold text-[#FACC15] tracking-[0.02em] transition-all group-hover:brightness-110"
            style={{ fontFamily: "var(--font-logo), 'Sifonn', sans-serif" }}
          >
            {siteConfig.name}
          </span>
        </Link>

        {/* Navigation items */}
        <nav
          className="flex items-center gap-2 sm:gap-6 text-[12.5px] sm:text-[14px] font-medium"
          aria-label="Main Navigation"
        >
          <a
            href="#websites"
            className="text-[#A5AAA7] hover:text-[#F5F6F2] transition-colors py-2 px-1.5 focus-visible:outline-none rounded touch-manipulation active:text-[#FACC15]"
          >
            Websites
          </a>
          <a
            href="#social-media"
            className="text-[#A5AAA7] hover:text-[#F5F6F2] transition-colors py-2 px-1.5 focus-visible:outline-none rounded touch-manipulation active:text-[#FACC15]"
          >
            <span>Social</span>
            <span className="hidden sm:inline"> Media</span>
          </a>
          <a
            href="#contact"
            className="text-[#F5F6F2] hover:text-[#FACC15] transition-colors flex items-center gap-1 py-1.5 px-2.5 sm:px-0 rounded-full sm:rounded bg-[#1B1E1F] sm:bg-transparent border border-[#38403F] sm:border-transparent focus-visible:outline-none group touch-manipulation active:scale-95"
          >
            <span>Contact</span>
            <span className="text-[#FACC15] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}
