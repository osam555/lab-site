import type { Metadata } from "next";
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
        description="강의에서 실제로 쓴 요청문을 상황별로 모았습니다. 복사해서 AI 도구에 붙여넣고 [대괄호] 안만 내 상황으로 바꾸세요."
      />
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
