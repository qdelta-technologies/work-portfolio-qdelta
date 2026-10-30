import React from "react";

export function BackgroundLayer() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden transform-gpu will-change-transform"
      aria-hidden="true"
    >
      {/* Base Dark Amber Texture */}
      <div className="absolute inset-0 bg-amber-texture" />

      {/* Subtle Dark Yellow Grid */}
      <div className="absolute inset-0 bg-dark-yellow-grid opacity-85" />

      {/* Subtle Edge Vignette for Focus & Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111213]/40 via-transparent to-[#0d0e0f]/60" />
    </div>
  );
}
