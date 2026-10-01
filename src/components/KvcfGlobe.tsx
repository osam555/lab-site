"use client";

import { useEffect } from "react";
import Script from "next/script";

export function KvcfGlobe() {
  return (
    <div className="nh-hero relative w-full h-[400px] sm:h-[420px] lg:h-[480px] max-w-[420px] lg:max-w-[480px] mx-auto select-none">
      {/* 
        We mimic the KVCF structure here exactly.
        nh-hero is the container.
        nh-pointer-field is the canvas hero-motion.js draws on.
      */}
      <div className="absolute inset-[-15%] pointer-events-none z-0">
        <canvas id="nh-hero-atmosphere" className="w-full h-full" />
      </div>
      
      <div className="absolute inset-[-15%] pointer-events-none z-10">
        <canvas id="nh-pointer-field" className="w-full h-full" />
      </div>

      <div className="relative z-20 w-full h-full flex items-center justify-center">
        {/* KVCF Corner guides */}
        <div className="absolute inset-[-5%] z-0 pointer-events-none opacity-50">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-[1px] border-l-[1px] border-white/40" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-[1px] border-r-[1px] border-white/40" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[1px] border-l-[1px] border-white/40" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[1px] border-r-[1px] border-white/40" />
        </div>
        
        {/* anchor for hero-motion.js to measure cx, cy */}
        <div id="nh-particle-globe" className="w-full h-full" />
      </div>
      
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
