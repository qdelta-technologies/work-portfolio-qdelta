"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { WorkDomainId } from "@/types/project";

interface HeaderProps {
  activeDomain?: WorkDomainId;
  onSelectDomain?: (domain: WorkDomainId) => void;
}

export function Header({ activeDomain, onSelectDomain }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    domainId?: WorkDomainId
  ) => {
    if (domainId && onSelectDomain) {
      e.preventDefault();
      onSelectDomain(domainId);
      const showcaseEl = document.getElementById("work-showcase");
      if (showcaseEl) {
        showcaseEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#111315]/95 backdrop-blur-md border-b border-[#38403F] shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
          : "bg-[#111315]/85 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b border-[#343938]/40 md:border-transparent"
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
          <Image
            src="/images/qdelta-logo.png"
            alt="QDelta"
            width={110}
            height={40}
            priority
            className="h-7 sm:h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]"
          />
        </Link>

        {/* Navigation items */}
        <nav
          className="flex items-center gap-1.5 sm:gap-5 text-[12px] sm:text-[13.5px] font-medium"
          aria-label="Main Navigation"
        >
          <a
            href="#websites"
            onClick={(e) => handleNavClick(e, "websites")}
            className={`transition-colors py-1.5 px-2 rounded-[6px] touch-manipulation ${
              activeDomain === "websites"
                ? "text-[#FACC15] font-semibold bg-[#1C2022]"
                : "text-[#A5AAA7] hover:text-[#F5F6F2]"
            }`}
          >
            <span>Websites</span>
            <span className="hidden md:inline"> & Apps</span>
          </a>

          <a
            href="#content-creation"
            onClick={(e) => handleNavClick(e, "content")}
            className={`transition-colors py-1.5 px-2 rounded-[6px] touch-manipulation ${
              activeDomain === "content"
                ? "text-[#FACC15] font-semibold bg-[#1C2022]"
                : "text-[#A5AAA7] hover:text-[#F5F6F2]"
            }`}
          >
            <span>Content</span>
            <span className="hidden sm:inline"> Creation</span>
          </a>

          <a
            href="#commercials"
            onClick={(e) => handleNavClick(e, "commercials")}
            className={`transition-colors py-1.5 px-2 rounded-[6px] touch-manipulation ${
              activeDomain === "commercials"
                ? "text-[#FACC15] font-semibold bg-[#1C2022]"
                : "text-[#A5AAA7] hover:text-[#F5F6F2]"
            }`}
          >
            <span>Commercials</span>
            <span className="hidden md:inline"> & Reels</span>
          </a>

          <a
            href="#contact"
            className="text-[#F5F6F2] hover:text-[#FACC15] transition-colors flex items-center gap-1 py-1.5 px-2.5 rounded-full bg-[#1B1E1F] sm:bg-transparent border border-[#38403F] sm:border-transparent focus-visible:outline-none group touch-manipulation active:scale-95 ml-1"
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
