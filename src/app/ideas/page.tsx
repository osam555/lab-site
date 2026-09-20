import type { Metadata } from "next";
import Link from "next/link";
import { loadCollection, type Idea } from "@/lib/content";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "프로젝트 아이디어",
  description: "20일 안에 완성할 수 있는 크기로 기획해둔 프로젝트 아이디어",
};

export default function IdeasPage() {
  const ideas = loadCollection<Idea>("ideas");
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <SectionHeader
        eyebrow="Ideas"
        title="프로젝트 아이디어"
        description="무엇을 만들지 정하지 못했다면 여기서 고르세요. 각 아이디어는 6강 기획서 형식으로 이미 정리되어 있어 PLAN.md에 바로 옮길 수 있습니다."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {ideas.map((i) => (
          <Link
            key={i.slug}
            href={`/ideas/${i.slug}`}
            className="group flex flex-col rounded-xl border border-line bg-card p-5 transition hover:border-accent hover:shadow-sm"
          >
            <div className="flex items-center gap-2 text-xs">
              <span className="rounded-full bg-accent-soft px-2 py-0.5 font-bold text-accent">{i.level}</span>
              <span className="text-muted">약 {i.days}일</span>
            </div>
            <h3 className="mt-3 text-lg font-bold group-hover:text-accent">{i.title}</h3>
            <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{i.summary}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {i.stack.map((s) => (
                <span key={s} className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-muted">
                  {s}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
