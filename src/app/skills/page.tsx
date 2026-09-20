import type { Metadata } from "next";
import Link from "next/link";
import { loadCollection, SKILL_CATEGORIES, type Skill } from "@/lib/content";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "바이브 스킬",
  description: "AI 코딩 도구를 내 것으로 만드는 실전 노하우",
};

export default function SkillsPage() {
  const skills = loadCollection<Skill>("skills");
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <SectionHeader
        eyebrow="Skills"
        title="바이브 스킬"
        description="20강을 마친 뒤 AI 코딩 도구를 더 깊이 쓰기 위한 실전 가이드. 설치부터 워크플로, 규칙 파일, 외부 도구 연결까지 한 편에 하나씩."
      />
      <div className="space-y-12">
        {SKILL_CATEGORIES.map((cat) => {
          const items = skills.filter((s) => s.category === cat);
          if (!items.length) return null;
          return (
            <section key={cat}>
              <h2 className="mb-4 flex items-baseline gap-2 text-sm font-bold uppercase tracking-wide text-accent">
                {cat}
                <span className="text-xs font-normal text-muted">{items.length}편</span>
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {items.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/skills/${s.slug}`}
                    className="group rounded-xl border border-line bg-card p-5 transition hover:border-accent hover:shadow-sm"
                  >
                    <h3 className="font-bold group-hover:text-accent">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.summary}</p>
                    {s.minutes && <p className="mt-3 text-xs text-muted">약 {s.minutes}분</p>}
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
