"use client";

import { useState } from "react";
import type { Prompt } from "@/content/prompts";

function CopyButton({ text }: { text: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setDone(true);
          setTimeout(() => setDone(false), 1500);
        } catch {
          /* clipboard unavailable — user can select manually */
        }
      }}
      className={`rounded-md px-3 py-1.5 text-xs font-bold transition ${
        done ? "bg-accent text-white" : "bg-accent-soft text-accent hover:opacity-80"
      }`}
    >
      {done ? "복사됨 ✓" : "복사"}
    </button>
  );
}

export function PromptLibrary({ prompts, categories }: { prompts: Prompt[]; categories: readonly string[] }) {
  const [cat, setCat] = useState<string>("전체");
  const [q, setQ] = useState("");
  const [activeTab, setActiveTab] = useState<Record<string, "template" | "example">>({});

  const shown = prompts.filter(
    (p) =>
      (cat === "전체" || p.category === cat) &&
      (q === "" || (p.title + p.when + p.body + (p.example || "")).toLowerCase().includes(q.toLowerCase())),
  );

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="검색: 버그, 테이블, 배포, 실제 사례…"
          className="w-full rounded-lg border border-line bg-card px-3 py-2 text-sm outline-none focus:border-accent sm:max-w-xs"
        />
        <div className="flex flex-wrap gap-1.5">
          {["전체", ...categories].map((c) => {
            const n = c === "전체" ? prompts.length : prompts.filter((p) => p.category === c).length;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                className={`rounded-full border px-3 py-1 text-xs transition ${
                  cat === c
                    ? "border-accent bg-accent-soft font-bold text-accent"
                    : "border-line text-muted hover:border-accent"
                }`}
              >
                {c} <span className="opacity-60">{n}</span>
              </button>
            );
          })}
        </div>
      </div>

      {shown.length === 0 && <p className="py-12 text-center text-muted">검색 결과가 없습니다.</p>}

      <div className="grid gap-4 md:grid-cols-2">
        {shown.map((p) => {
          const currentMode = activeTab[p.id] || (p.example ? "example" : "template");
          const displayText = currentMode === "example" && p.example ? p.example : p.body;

          return (
            <article key={p.id} id={p.id} className="flex flex-col rounded-xl border border-line bg-card overflow-hidden">
              <div className="flex items-start justify-between gap-3 p-5 pb-3">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wide text-accent">{p.category}</div>
                  <h3 className="mt-1 font-bold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted">{p.when}</p>
                </div>
                <CopyButton text={displayText} />
              </div>

              {p.example && (
                <div className="flex items-center gap-1.5 border-t border-line/60 bg-muted/5 px-4 py-1.5 text-xs font-semibold">
                  <span className="text-[11px] text-muted mr-1">보기:</span>
                  <button
                    type="button"
                    onClick={() => setActiveTab((prev) => ({ ...prev, [p.id]: "example" }))}
                    className={`rounded-md px-2.5 py-1 transition ${
                      currentMode === "example"
                        ? "bg-accent-soft font-bold text-accent shadow-xs"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    ✨ 실제 작성 사례
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab((prev) => ({ ...prev, [p.id]: "template" }))}
                    className={`rounded-md px-2.5 py-1 transition ${
                      currentMode === "template"
                        ? "bg-accent-soft font-bold text-accent shadow-xs"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    📋 기본 템플릿 [대괄호]
                  </button>
                </div>
              )}

              <pre className="m-0 flex-1 whitespace-pre-wrap border-t border-line bg-background px-5 py-4 font-sans text-[13.5px] leading-relaxed">
                {displayText}
              </pre>
            </article>
          );
        })}
      </div>
    </div>
  );
}
