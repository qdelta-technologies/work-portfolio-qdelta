import React from "react";

export function BackgroundLayer() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Pure dark amber base gradient (completely smooth, zero dots) */}
      <div 
        className="absolute inset-0 bg-[#111214]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 90% 60% at 50% 0%, rgba(180, 83, 9, 0.12) 0%, transparent 70%), linear-gradient(180deg, #131416 0%, #111214 50%, #0d0e0f 100%)",
        }}
      />

      {/* 2. Pure SVG Vector Grid Lines (Lines only, completely zero dots) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-65"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="clean-amber-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#CA8A04"
              strokeWidth="0.75"
              strokeOpacity="0.14"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#clean-amber-grid)" />
      </svg>

      {/* 3. Subtle edge vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111214]/30 via-transparent to-[#0d0e0f]/60" />
    </div>
  );
}
