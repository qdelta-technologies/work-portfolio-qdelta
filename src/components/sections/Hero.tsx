import React from "react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-12 md:pb-14 border-b border-[#343938]/30 overflow-hidden"
    >
      {/* Hero Ambient Spotlight */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[220px] bg-[radial-gradient(ellipse_at_top,rgba(212,255,120,0.09),transparent_70%)] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="max-w-4xl space-y-5 sm:space-y-6">
          {/* Micro-label eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[8px] bg-[#1B1E1F] border border-[#343938]/80 text-[#A5AAA7] text-[11px] sm:text-[12px] font-medium tracking-[0.14em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF78]"></span>
            <span>SELECTED WORK</span>
          </div>

          {/* Dominant Headline */}
          <h1 className="text-[44px] sm:text-[62px] md:text-[76px] lg:text-[88px] font-bold text-[#F5F6F2] tracking-[-0.03em] leading-[1.05]">
            Our Work<span className="text-[#D4FF78]">.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-[#A5AAA7] text-[17px] sm:text-[20px] md:text-[22px] font-normal leading-relaxed max-w-2xl">
            Websites, digital experiences, and creative content.
          </p>

          {/* Scrolling cue */}
          <div className="pt-2 sm:pt-4">
            <a
              href="#websites"
              className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] text-[#A5AAA7] hover:text-[#D4FF78] transition-colors group focus-visible:outline-none"
            >
              <span>Explore our work</span>
              <span className="transition-transform duration-200 group-hover:translate-y-0.5 text-[#D4FF78]">
                ↓
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
