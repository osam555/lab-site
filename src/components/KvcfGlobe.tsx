"use client";

import { useEffect } from "react";
import Script from "next/script";

export function KvcfGlobe() {
  return (
    <div className="nh-hero relative flex aspect-square w-full max-w-[420px] items-center justify-center select-none mx-auto">
      {/* 
        KVCF scripts look for these specific IDs and classes.
        We provide them so the hero-motion.js script can attach and render the particle globe.
      */}
      {/* Corner guides mimicking KVCF nh-globe-guides */}
      <div className="absolute inset-[-5%] z-0 pointer-events-none opacity-50">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-[1px] border-l-[1px] border-white/40" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-[1px] border-r-[1px] border-white/40" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[1px] border-l-[1px] border-white/40" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[1px] border-r-[1px] border-white/40" />
      </div>

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
