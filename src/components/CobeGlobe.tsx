"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export function CobeGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 720 * 2,
      height: 720 * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.1], // dark background inside globe
      markerColor: [0.1, 0.8, 0.4],
      glowColor: [0.1, 0.3, 0.2],
      markers: [
        // A few glowing marker spots for visual interest
        { location: [37.7595, -122.4367], size: 0.05 },
        { location: [40.7128, -74.006], size: 0.05 },
        { location: [37.5665, 126.978], size: 0.08 }, // Seoul
        { location: [35.6762, 139.6503], size: 0.05 },
        { location: [51.5072, -0.1276], size: 0.05 },
      ],
      onRender: (state: Record<string, any>) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.005; // Slow rotation speed
      },
    } as any);

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div style={{
      width: "100%",
      maxWidth: 720,
      aspectRatio: 1,
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    }}>
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          contain: "layout paint size",
        }}
      />
    </div>
  );
}
