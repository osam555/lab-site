"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import createGlobe from "cobe";

export function InteractiveGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const phiRef = useRef(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animId: number;
    let globe: ReturnType<typeof createGlobe> | null = null;

    try {
      const dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 2 : 2, 2);
      const size = 480;

      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: size * dpr,
        height: size * dpr,
        phi: 0,
        theta: 0.25,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.12, 0.28, 0.18], // dark emerald matching theme
        markerColor: [0.37, 0.85, 0.55], // accent green
        glowColor: [0.18, 0.55, 0.32],
        scale: 1,
        markers: [
          { location: [37.5665, 126.9780], size: 0.08 }, // Seoul
          { location: [35.6762, 139.6503], size: 0.05 }, // Tokyo
          { location: [37.7749, -122.4194], size: 0.06 }, // San Francisco
          { location: [40.7128, -74.0060], size: 0.06 }, // New York
          { location: [51.5074, -0.1278], size: 0.06 }, // London
          { location: [1.3521, 103.8198], size: 0.05 }, // Singapore
          { location: [48.8566, 2.3522], size: 0.05 }, // Paris
          { location: [-33.8688, 151.2093], size: 0.05 }, // Sydney
        ],
        arcs: [
          { from: [37.5665, 126.9780], to: [37.7749, -122.4194] }, // Seoul -> SF
          { from: [37.5665, 126.9780], to: [51.5074, -0.1278] }, // Seoul -> London
          { from: [37.7749, -122.4194], to: [40.7128, -74.0060] }, // SF -> NY
          { from: [51.5074, -0.1278], to: [1.3521, 103.8198] }, // London -> Singapore
        ],
        arcColor: [0.37, 0.85, 0.55],
        arcWidth: 0.7,
        arcHeight: 0.22,
      });

      setIsLoaded(true);

      const animate = () => {
        if (!isDraggingRef.current) {
          phiRef.current += 0.0035; // Continuous smooth rotation
        }
        globe?.update({ phi: phiRef.current });
        animId = requestAnimationFrame(animate);
      };

      animId = requestAnimationFrame(animate);
    } catch (e) {
      console.error("WebGL Globe init failed, falling back to image:", e);
    }

    return () => {
      if (animId) cancelAnimationFrame(animId);
      if (globe) globe.destroy();
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    setIsDragging(true);
    try {
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - startXRef.current;
    startXRef.current = e.clientX;
    phiRef.current += deltaX * 0.006;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = false;
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  return (
    <div className="relative flex aspect-square w-full max-w-[420px] items-center justify-center select-none">
      {/* Fallback image: visible initially and if WebGL is unavailable */}
      <Image
        src="/hero-globe.jpg"
        alt="디지털 지구본"
        width={720}
        height={540}
        priority
        className="pointer-events-none absolute inset-0 h-full w-full rounded-2xl object-cover"
        style={{
          opacity: isLoaded ? 0 : 1,
          transition: "opacity 0.5s ease",
        }}
      />

      {/* 3D WebGL Canvas with drag-to-rotate */}
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "420px",
          aspectRatio: "1 / 1",
          cursor: isDragging ? "grabbing" : "grab",
          touchAction: "none",
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.5s ease",
          display: "block",
        }}
      />

      {/* Interactive hint badge */}
      {isLoaded && (
        <div className="pointer-events-none absolute bottom-2 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur-md transition-opacity">
          <span>↔</span>
          <span>마우스로 좌우 회전</span>
        </div>
      )}
    </div>
  );
}
