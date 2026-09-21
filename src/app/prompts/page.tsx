import type { Metadata } from "next";
import Link from "next/link";
import { PROMPTS, PROMPT_CATEGORIES } from "@/content/prompts";
import { PromptLibrary } from "@/components/PromptLibrary";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "프롬프트 골라 쓰기",
  description: "복사해서 붙여넣고 [대괄호]만 바꾸면 되는 프롬프트 모음",
};

export default function PromptsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <SectionHeader
        eyebrow="Prompts"
        title="프롬프트 골라 쓰기"
        description="강의에서 실제로 쓴 요청문을 상황별로 모았습니다. 복사해서 AI 도구에 붙여넣고 [대괄호] 안만 내 상황으로 바꾸거나, 실제 작성 사례 탭을 눌러 완성된 형태를 바로 확인하세요."
      />

      {/* Live web example showcase banner */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-accent/30 bg-accent-soft/40 p-5">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-0.5 text-xs font-bold text-white mb-1.5">
            <span>🚀</span>
            실제 완성 웹페이지 샘플 6종
          </div>
          <h3 className="font-black text-foreground">
            프롬프트로 만든 실제 완성 웹페이지를 확인해보세요
          </h3>
          <p className="text-xs sm:text-sm text-muted mt-0.5">
            Claude Code에게 프롬프트를 요청하여 완성한 실제 동작하는 라이브 데모입니다.
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <Link
            href="/lectures/landing-page#samples"
            className="rounded-lg bg-accent px-3.5 py-2 text-xs font-bold text-white transition hover:opacity-90 shadow-2xs"
          >
            랜딩페이지 3종 ↗
          </Link>
          <Link
            href="/lectures/homepage#samples"
            className="rounded-lg border border-line bg-card px-3.5 py-2 text-xs font-bold transition hover:border-accent shadow-2xs"
          >
            홈페이지 3종 ↗
          </Link>
        </div>
      </div>
      <ol className="mb-10 grid gap-3 text-sm sm:grid-cols-3">
        {[
          ["고른다", "지금 하려는 일에 맞는 카드를 찾고"],
          ["붙여넣는다", "AI 코딩 도구의 대화창에"],
          ["바꾼다", "[대괄호] 안을 내 프로젝트 내용으로"],
        ].map(([t, d], i) => (
          <li key={t} className="rounded-xl border border-line bg-card p-4">
            <span className="font-mono text-xs font-bold text-accent">0{i + 1}</span>
            <div className="mt-1 font-bold">{t}</div>
            <div className="text-muted">{d}</div>
          </li>
        ))}
      </ol>
      <PromptLibrary prompts={PROMPTS} categories={PROMPT_CATEGORIES} />
    </div>
  );
}
