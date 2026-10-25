import React from "react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-12 md:pb-14 border-b border-[#343938]/30 overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-5 sm:space-y-6">
          {/* Micro-label eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[8px] bg-[#1B1E1F] border border-[#343938]/80 text-[#A5AAA7] text-[11px] sm:text-[12px] font-medium tracking-[0.14em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF78]"></span>
            <span>SELECTED WORK</span>
          </div>

          {/* Dominant Headline (slightly reduced size) */}
          <h1 className="text-[38px] sm:text-[50px] md:text-[62px] lg:text-[72px] font-bold text-[#F5F6F2] tracking-[-0.03em] leading-[1.08]">
            Our Work<span className="text-[#D4FF78]">.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-[#A5AAA7] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-relaxed max-w-xl">
            Websites, digital experiences, and creative content.
          </p>

          {/* Scrolling cue */}
          <div className="pt-2 sm:pt-3">
            <a
              href="#social-media"
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
