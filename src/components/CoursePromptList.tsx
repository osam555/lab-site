"use client";

import { useState } from "react";
import Link from "next/link";

type Prompt = {
  id: string;
  lessonNumber: number;
  lessonTitle: string;
  lessonSlug: string;
  body: string;
  level: "beginner" | "intermediate" | "advanced";
  levelLabel: string;
};

type LessonGroup = {
  lessonNumber: number;
  title: string;
  slug: string;
  prompts: Prompt[];
};

const LEVEL_STYLES = {
  beginner: { emoji: "🟢", bg: "bg-green-500/10 text-green-600", darkBg: "dark:text-green-400" },
  intermediate: { emoji: "🟡", bg: "bg-yellow-500/10 text-yellow-600", darkBg: "dark:text-yellow-400" },
  advanced: { emoji: "🔴", bg: "bg-red-500/10 text-red-600", darkBg: "dark:text-red-400" },
} as const;

function CopyBtn({ text }: { text: string }) {
  const [ok, setOk] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setOk(true);
          setTimeout(() => setOk(false), 1500);
        } catch { /* */ }
      }}
      className={`shrink-0 rounded-md px-2.5 py-1 text-xs font-bold transition ${
        ok ? "bg-accent text-white" : "bg-accent-soft text-accent hover:opacity-80"
      }`}
    >
      {ok ? "복사됨 ✓" : "복사"}
    </button>
  );
}

export function CoursePromptList({
  courseSlug,
  groups,
  highlights,
}: {
  courseSlug: string;
  groups: LessonGroup[];
  highlights?: readonly string[];
}) {
  const [filter, setFilter] = useState<"all" | "beginner" | "intermediate" | "advanced">("all");
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState<Set<number>>(new Set());

  const toggle = (n: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(n) ? next.delete(n) : next.add(n);
      return next;
    });

  const expandAll = () => setOpen(new Set(groups.map((g) => g.lessonNumber)));
  const collapseAll = () => setOpen(new Set());

  // Filter and search
  const filtered = groups
    .map((g) => ({
      ...g,
      prompts: g.prompts.filter(
        (p) =>
          (filter === "all" || p.level === filter) &&
          (search === "" || (p.body + p.lessonTitle).toLowerCase().includes(search.toLowerCase())),
      ),
    }))
    .filter((g) => g.prompts.length > 0);

  const totalCount = filtered.reduce((s, g) => s + g.prompts.length, 0);

  // Count by level across all prompts
  const allPrompts = groups.flatMap((g) => g.prompts);
  const counts = {
    all: allPrompts.length,
    beginner: allPrompts.filter((p) => p.level === "beginner").length,
    intermediate: allPrompts.filter((p) => p.level === "intermediate").length,
    advanced: allPrompts.filter((p) => p.level === "advanced").length,
  };

  return (
    <section id="prompts" className="scroll-mt-20">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-black tracking-tight">📋 프롬프트 모아보기</h2>
        <p className="mt-1 text-sm text-muted">
          이 강좌의 모든 프롬프트를 한 곳에서 복사하세요. 번호로 강의나 질문에서 참조할 수 있습니다.
        </p>
      </div>

      {/* Key highlights */}
      {highlights && highlights.length > 0 && (
        <div className="mb-6 rounded-xl border border-line bg-card p-4">
          <div className="text-xs font-bold uppercase tracking-wide text-accent mb-2">이 강좌에서 배우는 것</div>
          <ul className="grid gap-1.5 text-sm sm:grid-cols-2">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Filters */}
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-1.5">
          {(
            [
              ["all", `전체 ${counts.all}`],
              ["beginner", `🟢 초급 ${counts.beginner}`],
              ["intermediate", `🟡 중급 ${counts.intermediate}`],
              ["advanced", `🔴 고급 ${counts.advanced}`],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              className={`rounded-full border px-3 py-1 text-xs transition ${
                filter === key
                  ? "border-accent bg-accent-soft font-bold text-accent"
                  : "border-line text-muted hover:border-accent"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="검색…"
            className="w-full rounded-lg border border-line bg-card px-3 py-1.5 text-sm outline-none focus:border-accent sm:w-48"
          />
          <button type="button" onClick={expandAll} className="text-xs text-muted hover:text-accent whitespace-nowrap">
            모두 펼치기
          </button>
          <button type="button" onClick={collapseAll} className="text-xs text-muted hover:text-accent whitespace-nowrap">
            접기
          </button>
        </div>
      </div>

      {/* Result count */}
      <div className="mb-3 text-xs text-muted">
        {totalCount}개 프롬프트 표시 중
      </div>

      {/* Lesson accordion */}
      {filtered.length === 0 && (
        <p className="py-12 text-center text-muted">검색 결과가 없습니다.</p>
      )}

      <div className="space-y-2">
        {filtered.map((g) => {
          const isOpen = open.has(g.lessonNumber);
          const levelCounts = {
            beginner: g.prompts.filter((p) => p.level === "beginner").length,
            intermediate: g.prompts.filter((p) => p.level === "intermediate").length,
            advanced: g.prompts.filter((p) => p.level === "advanced").length,
          };

          return (
            <div key={g.lessonNumber} className="rounded-xl border border-line overflow-hidden">
              {/* Accordion header */}
              <button
                type="button"
                onClick={() => toggle(g.lessonNumber)}
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition hover:bg-accent-soft/30"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="font-mono text-xs font-bold text-accent shrink-0">
                    {String(g.lessonNumber).padStart(2, "0")}강
                  </span>
                  <span className="font-bold truncate">{g.title}</span>
                  <span className="text-xs text-muted shrink-0">
                    {g.prompts.length}개
                  </span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  {levelCounts.beginner > 0 && (
                    <span className="text-[10px] font-bold text-green-600">🟢{levelCounts.beginner}</span>
                  )}
                  {levelCounts.intermediate > 0 && (
                    <span className="text-[10px] font-bold text-yellow-600">🟡{levelCounts.intermediate}</span>
                  )}
                  {levelCounts.advanced > 0 && (
                    <span className="text-[10px] font-bold text-red-600">🔴{levelCounts.advanced}</span>
                  )}
                  <svg
                    className={`ml-1 h-4 w-4 text-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Accordion body */}
              {isOpen && (
                <div className="border-t border-line divide-y divide-line/60">
                  {g.prompts.map((p) => {
                    const lvl = LEVEL_STYLES[p.level];
                    return (
                      <div key={p.id} className="px-4 py-3">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <Link
                              href={`/lectures/${courseSlug}/${g.slug}#prompt-${p.id}`}
                              className="font-mono text-xs font-bold text-accent hover:underline"
                            >
                              프롬프트 {p.id}
                            </Link>
                            <span
                              className={`inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[10px] font-bold ${lvl.bg}`}
                            >
                              {lvl.emoji} {p.levelLabel}
                            </span>
                          </div>
                          <CopyBtn text={p.body} />
                        </div>
                        <pre className="whitespace-pre-wrap rounded-lg bg-background border border-line/50 px-3 py-2.5 font-sans text-[13px] leading-relaxed text-foreground/90">
                          {p.body}
                        </pre>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
