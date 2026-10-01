"use client";

import { useEffect } from "react";
import Script from "next/script";

export function KvcfGlobe() {
  return (
    <div className="nh-hero relative flex aspect-square w-full max-w-[420px] items-center justify-center select-none">
      {/* 
        KVCF scripts look for these specific IDs and classes.
        We provide them so the hero-motion.js script can attach and render the particle globe.
      */}
      <canvas
        id="nh-pointer-field"
        className="pointer-events-none absolute inset-0 z-10 w-full h-full"
      />
      <canvas
        id="nh-hero-atmosphere"
        className="pointer-events-none absolute inset-0 z-0 w-full h-full"
      />
      
      <div 
        id="nh-particle-globe" 
        className="relative z-20 w-full h-full"
      />
      
      <button className="nh-motion-toggle hidden" aria-hidden="true">
        Toggle
      </button>

      <Script 
        src="/js/hero-motion.js" 
        strategy="lazyOnload" 
      />
    </div>
  );
}
