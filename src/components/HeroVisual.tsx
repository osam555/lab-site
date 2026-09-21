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

      {/* Main visual image — switches between globe/wave */}
      <div className="hv-main-image">
        <Image
          key={scene.key}
          src={scene.src}
          alt={scene.alt}
          width={720}
          height={540}
          className="hv-main-img"
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

      {/* Overlay: Floating terminal */}
      <div className="hv-terminal hv-float-2">
        <div className="hv-term-bar">
          <span className="hv-dot-r" />
          <span className="hv-dot-y" />
          <span className="hv-dot-g" />
        </div>
        <div className="hv-term-body">
          <div className="hv-term-line hv-type-1">
            <span className="hv-prompt">$</span> claude &quot;홈페이지 만들어줘&quot;
          </div>
          <div className="hv-term-line hv-type-2">
            <span className="hv-ok">✓</span> index.html 생성 완료
          </div>
          <div className="hv-term-line hv-type-3">
            <span className="hv-ok">✓</span> style.css 적용
          </div>
          <div className="hv-term-line hv-type-4">
            <span className="hv-ok">✓</span> 배포 → my-site.vercel.app
          </div>
        </div>
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
