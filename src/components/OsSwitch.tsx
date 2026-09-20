"use client";

import { useEffect, useSyncExternalStore } from "react";

export type Os = "windows" | "mac" | "both";
const KEY = "lab-os";
const EVENT = "lab-os-change";

function detect(): Os {
  const p = (navigator.platform || navigator.userAgent).toLowerCase();
  if (p.includes("mac") || p.includes("iphone") || p.includes("ipad")) return "mac";
  if (p.includes("win")) return "windows";
  return "both";
}

function readOs(): Os {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === "windows" || saved === "mac" || saved === "both") return saved;
  } catch {}
  return detect();
}

function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

function writeOs(v: Os) {
  try {
    localStorage.setItem(KEY, v);
  } catch {}
  window.dispatchEvent(new Event(EVENT));
}

/** Sets data-os on <html>; CSS hides the non-matching [data-os-block] sections. */
export function OsSwitch() {
  const os = useSyncExternalStore(subscribe, readOs, () => "both" as Os);

  useEffect(() => {
    document.documentElement.dataset.os = os;
    return () => {
      delete document.documentElement.dataset.os;
    };
  }, [os]);

  const opts: { v: Os; label: string }[] = [
    { v: "windows", label: "Windows" },
    { v: "mac", label: "macOS" },
    { v: "both", label: "둘 다" },
  ];

  return (
    <div className="sticky top-[57px] z-10 -mx-4 mb-6 border-b border-line bg-background/90 px-4 py-2 backdrop-blur">
      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted">내 컴퓨터:</span>
        <div className="flex rounded-lg border border-line bg-card p-0.5">
          {opts.map((o) => (
            <button
              key={o.v}
              type="button"
              onClick={() => writeOs(o.v)}
              className={`rounded-md px-3 py-1 text-xs font-bold transition ${
                os === o.v ? "bg-accent text-white" : "text-muted hover:text-foreground"
              }`}
            >
              {o.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
