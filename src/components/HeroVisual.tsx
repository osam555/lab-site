"use client";

import { useState } from "react";
import Image from "next/image";

const SCENES = [
  { key: "globe", src: "/hero-globe.jpg", alt: "디지털 지구본 — 코드 네트워크", label: "🌍 Globe" },
  { key: "wave",  src: "/hero-wave.jpg",  alt: "웨이브 메쉬 — 그라데이션",      label: "🌊 Wave" },
] as const;

export function HeroVisual() {
  const [idx, setIdx] = useState(0);
  const scene = SCENES[idx];

  return (
    <div className="hero-visual" aria-hidden="true">
      {/* Glow backdrop */}
      <div className="hv-glow" />
      {/* Wave animation SVG Filter */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <filter id="wave-ripple">
          <feTurbulence type="fractalNoise" baseFrequency="0.01 0.02" numOctaves="1" result="noise">
            <animate attributeName="baseFrequency" values="0.01 0.02; 0.015 0.03; 0.01 0.02" dur="8s" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* Main visual image — switches between globe/wave */}
      <div className="hv-main-image">
        <Image
          key={scene.key}
          src={scene.src}
          alt={scene.alt}
          width={720}
          height={540}
          className={`hv-main-img ${scene.key === 'globe' ? 'anim-globe' : 'anim-wave'}`}
          priority
        />
      </div>

      {/* Scene toggle pills */}
      <div className="hv-toggle">
        {SCENES.map((s, i) => (
          <button
            key={s.key}
            onClick={() => setIdx(i)}
            className={`hv-toggle-btn ${i === idx ? "active" : ""}`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Floating particles */}
      <div className="hv-particle hv-p1" />
      <div className="hv-particle hv-p2" />
      <div className="hv-particle hv-p3" />
      <div className="hv-particle hv-p4" />
      <div className="hv-particle hv-p5" />

      {/* Floating badges */}
      <div className="hv-badge hv-badge-1">🚀 배포 완료</div>
      <div className="hv-badge hv-badge-2">✨ 반응형</div>
    </div>
  );
}
