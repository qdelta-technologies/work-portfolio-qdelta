import React from "react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10 md:pb-12 border-b border-[#38403F] overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center space-y-3.5 sm:space-y-4">
          {/* Micro-label eyebrow */}
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-[6px] bg-[#1B1E1F] border border-[#343938]/80 text-[#A5AAA7] text-[10.5px] sm:text-[11px] font-medium tracking-[0.14em] uppercase select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]"></span>
            <span>SELECTED WORK</span>
          </div>

          {/* Dominant Headline */}
          <h1 className="text-[32px] sm:text-[42px] md:text-[50px] lg:text-[56px] font-bold text-[#F5F6F2] tracking-[-0.03em] leading-[1.1]">
            Our Work<span className="text-[#FACC15]">.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-[#A5AAA7] text-[14px] sm:text-[16px] md:text-[17px] font-normal leading-relaxed max-w-lg px-2 sm:px-0">
            Websites, digital solutions, and creative content.
          </p>

          {/* Scrolling cue */}
          <div className="pt-1.5 sm:pt-2">
            <a
              href="#websites"
              className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] text-[#A5AAA7] hover:text-[#FACC15] transition-all group focus-visible:outline-none py-1.5 px-3 rounded-full bg-[#181B1C]/80 sm:bg-transparent border border-[#343938]/60 sm:border-transparent active:scale-95 touch-manipulation"
            >
              <span>Explore our work</span>
              <span className="transition-transform duration-200 group-hover:translate-y-0.5 text-[#FACC15]">
                ↓
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
