"use client";

import { useState } from "react";
import Image from "next/image";
import { InteractiveGlobe } from "./InteractiveGlobe";

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

      {/* Main visual image — switches between globe/wave */}
      <div className="hv-main-image">
        {scene.key === "globe" ? (
          <InteractiveGlobe />
        ) : (
          <Image
            key={scene.key}
            src={scene.src}
            alt={scene.alt}
            width={720}
            height={540}
            className="hv-main-img"
            priority
          />
        )}
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
      <div className="hv-particle hv-p1 pointer-events-none" />
      <div className="hv-particle hv-p2 pointer-events-none" />
      <div className="hv-particle hv-p3 pointer-events-none" />
      <div className="hv-particle hv-p4 pointer-events-none" />
      <div className="hv-particle hv-p5 pointer-events-none" />

      {/* Floating badges */}
      <div className="hv-badge hv-badge-1 pointer-events-none">🚀 배포 완료</div>
      <div className="hv-badge hv-badge-2 pointer-events-none">✨ 반응형</div>
    </div>
  );
}
