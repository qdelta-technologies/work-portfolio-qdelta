"use client";

import React from "react";
import { Globe, Sparkles, Clapperboard, ArrowDown, ArrowUpRight } from "lucide-react";
import { WorkDomainId } from "@/types/project";

interface HeroProps {
  activeDomain: WorkDomainId;
  onSelectDomain: (domain: WorkDomainId) => void;
}

export function Hero({ activeDomain, onSelectDomain }: HeroProps) {
  const domains = [
    {
      id: "websites" as WorkDomainId,
      title: "Websites & Applications",
      eyebrow: "DIGITAL EXPERIENCES",
      subtitle: "Custom web applications, high-performance platforms, and interactive client sites.",
      badge: "12+ Live Projects",
      badgeColor: "text-[#FACC15] bg-[#FACC15]/10 border-[#FACC15]/25",
      icon: Globe,
      features: "Line-wise archive • Category filter • Live demos",
    },
    {
      id: "content" as WorkDomainId,
      title: "Social Media Posts & Carousels",
      eyebrow: "VISUAL STORYTELLING",
      subtitle: "High-impact social media creatives, visual campaigns, and viral digital graphics.",
      badge: "Curated Showcase",
      badgeColor: "text-[#CBD2CF] bg-[#24292B] border-[#38403F]",
      icon: Sparkles,
      features: "Social creatives • Fullscreen preview • Brand assets",
    },
    {
      id: "commercials" as WorkDomainId,
      title: "Motion Graphics & Ad Creatives",
      eyebrow: "MOTION & CREATIVES",
      subtitle: "High-retention motion graphics, animated promo reels, and high-conversion ad creatives.",
      badge: "6 Reels • 5 Creatives",
      badgeColor: "text-[#FACC15] bg-[#FACC15]/10 border-[#FACC15]/25",
      icon: Clapperboard,
      features: "Motion graphics • Short-form reels • Ad creatives",
    },
  ];

  const handleDomainClick = (domainId: WorkDomainId) => {
    onSelectDomain(domainId);
    // Smooth scroll to the showcase section
    const showcaseEl = document.getElementById("work-showcase");
    if (showcaseEl) {
      showcaseEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="top"
      className="relative pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-12 md:pb-14 border-b border-[#38403F] overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 relative z-10 space-y-8 sm:space-y-10">
        {/* Top Text Header */}
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center space-y-3.5 sm:space-y-4">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1E1F] border border-[#343938]/80 text-[#CBD2CF] text-[11px] sm:text-[11.5px] font-mono tracking-[0.14em] uppercase select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15] animate-pulse" />
            <span>PORTFOLIO & CAPABILITIES ARCHIVE</span>
          </div>

          {/* Dominant Headline */}
          <h1 className="text-[36px] sm:text-[46px] md:text-[54px] lg:text-[60px] font-bold text-[#F5F6F2] tracking-[-0.03em] leading-[1.08]">
            Our Work<span className="text-[#FACC15]">.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-[#A5AAA7] text-[14.5px] sm:text-[16px] md:text-[17.5px] font-normal leading-relaxed max-w-xl px-2 sm:px-0">
            Engineered for growth, memorability, and visual impact. Select a domain below to browse our projects.
          </p>
        </div>

        {/* The 3 Big Buttons Category Hub */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-[11.5px] font-mono uppercase tracking-[0.16em] text-[#CBD2CF]">
              SELECT A WORK DOMAIN
            </span>
            <span className="text-[11.5px] font-mono text-[#A5AAA7] hidden sm:inline">
              Click to browse projects
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-5">
            {domains.map((domain) => {
              const isActive = activeDomain === domain.id;
              const Icon = domain.icon;

              return (
                <button
                  key={domain.id}
                  type="button"
                  onClick={() => handleDomainClick(domain.id)}
                  aria-pressed={isActive}
                  className={`group relative text-left rounded-[14px] p-5 sm:p-6 transition-all duration-300 active:scale-[0.985] cursor-pointer flex flex-col justify-between gap-5 border touch-manipulation focus-visible:outline-none ${
                    isActive
                      ? "bg-[#1E2224] border-[#FACC15] shadow-[0_0_30px_rgba(250,204,21,0.14)] ring-1 ring-[#FACC15]"
                      : "bg-[#181B1C] border-[#38403F] hover:border-[#FACC15]/60 hover:bg-[#1C2022] hover:shadow-[0_8px_28px_rgba(0,0,0,0.5)]"
                  }`}
                >
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-start justify-between gap-3 w-full">
                    <div
                      className={`w-11 h-11 rounded-[10px] flex items-center justify-center transition-colors duration-200 ${
                        isActive
                          ? "bg-[#FACC15] text-[#111315]"
                          : "bg-[#24292B] text-[#FACC15] group-hover:bg-[#FACC15] group-hover:text-[#111315] border border-[#38403F]"
                      }`}
                    >
                      <Icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                    </div>

                    <span
                      className={`text-[10.5px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-[4px] border font-medium ${domain.badgeColor}`}
                    >
                      {domain.badge}
                    </span>
                  </div>

                  {/* Middle Content: Eyebrow, Title, Subtitle */}
                  <div className="space-y-1.5 w-full">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#A5AAA7]">
                      {domain.eyebrow}
                    </div>
                    <h2
                      className={`text-[19px] sm:text-[21px] font-bold tracking-[-0.02em] transition-colors leading-tight ${
                        isActive
                          ? "text-[#FACC15]"
                          : "text-[#FFFFFF] group-hover:text-[#FACC15]"
                      }`}
                    >
                      {domain.title}
                    </h2>
                    <p className="text-[13px] text-[#A5AAA7] font-normal leading-relaxed">
                      {domain.subtitle}
                    </p>
                  </div>

                  {/* Bottom Row: Status Indicator / Features */}
                  <div className="pt-3 border-t border-[#343938]/70 w-full flex items-center justify-between text-[11.5px]">
                    <span className="text-[#CBD2CF]/70 font-mono truncate max-w-[70%]">
                      {domain.features}
                    </span>

                    {isActive ? (
                      <span className="inline-flex items-center gap-1.5 font-medium text-[#FACC15] shrink-0 font-mono text-[11px]">
                        <span>VIEWING</span>
                        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[#CBD2CF] group-hover:text-[#FACC15] transition-colors font-medium shrink-0 text-[11.5px]">
                        <span>Browse</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
