"use client";

import { KvcfGlobe } from "./KvcfGlobe";

export function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      {/* Glow backdrop */}
      <div className="hv-glow" />

      {/* Main visual image */}
      <div className="hv-main-image">
        <KvcfGlobe />
      </div>

      {/* Floating particles */}
      <div className="hv-particle hv-p1 pointer-events-none" />
      <div className="hv-particle hv-p2 pointer-events-none" />
      <div className="hv-particle hv-p3 pointer-events-none" />
      <div className="hv-particle hv-p4 pointer-events-none" />
      <div className="hv-particle hv-p5 pointer-events-none" />
    </div>
  );
}
