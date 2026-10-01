"use client";

import { useEffect } from "react";
import Script from "next/script";

export function KvcfGlobe() {
  return (
    <div className="relative w-full h-[400px] sm:h-[420px] lg:h-[480px] max-w-[420px] lg:max-w-[480px] mx-auto select-none">
      
      {/* 
        .nh-hero defines the canvas boundaries.
        We make it 130% larger (inset-[-15%]) to give particles room to breathe and prevent clipping.
        Since it's absolute, it does not affect page layout.
      */}
      <div className="nh-hero absolute inset-[-15%] z-0 pointer-events-none flex items-center justify-center">
        <canvas id="nh-hero-atmosphere" className="absolute inset-0 w-full h-full" />
        <canvas id="nh-pointer-field" className="absolute inset-0 w-full h-full" />
      </div>

      {/* 
        The anchor defines the globe's radius.
        It is exactly the size of the parent layout block (e.g. 480px).
      */}
      <div id="nh-particle-globe" className="absolute inset-0 w-full h-full z-20 pointer-events-none" />

      {/* KVCF Corner guides (-5% outward from the layout block) */}
      <div className="absolute inset-[-5%] z-0 pointer-events-none opacity-50">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-[1px] border-l-[1px] border-white/40" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-[1px] border-r-[1px] border-white/40" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[1px] border-l-[1px] border-white/40" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[1px] border-r-[1px] border-white/40" />
      </div>

      <button className="nh-motion-toggle hidden" aria-hidden="true">
        Toggle
      </button>

      <Script 
        src="/js/hero-motion.js?v=3" 
        strategy="lazyOnload" 
      />
    </div>
  );
}
