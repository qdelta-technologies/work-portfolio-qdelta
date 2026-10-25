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
          ? "bg-[#111315]/90 backdrop-blur-md border-b border-[#343938]/60 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 h-18 sm:h-20 flex items-center justify-between">
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
          className="group flex items-center text-[18px] sm:text-[20px] tracking-tight focus-visible:outline-none cursor-pointer"
          aria-label="QDelta — Back to top of page"
        >
          <span
            className="text-[19px] sm:text-[21px] font-extrabold text-[#F5F6F2] tracking-[-0.03em] transition-colors group-hover:text-white"
            style={{ fontFamily: "var(--font-logo)" }}
          >
            {siteConfig.name}
          </span>
        </Link>

        {/* Navigation items */}
        <nav
          className="flex items-center gap-4 sm:gap-7 text-[14px] sm:text-[15px] font-medium"
          aria-label="Main Navigation"
        >
          <a
            href="#social-media"
            className="text-[#A5AAA7] hover:text-[#F5F6F2] transition-colors py-1.5 focus-visible:outline-none rounded"
          >
            Social Media
          </a>
          <a
            href="#websites"
            className="text-[#A5AAA7] hover:text-[#F5F6F2] transition-colors py-1.5 focus-visible:outline-none rounded"
          >
            Websites
          </a>
          <a
            href="#contact"
            className="text-[#F5F6F2] hover:text-[#D4FF78] transition-colors flex items-center gap-1 py-1.5 focus-visible:outline-none rounded group"
          >
            <span>Contact</span>
            <span className="text-[#D4FF78] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}
