import type { Metadata } from "next";
import Link from "next/link";
import { REPOS, REPO_CATEGORIES } from "@/content/repos";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "추천 오픈소스",
  description: "이 과정에서 쓰는 오픈소스와 다음 단계에 필요한 도구 모음",
};

export default function ReposPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <SectionHeader
        eyebrow="Repo"
        title="추천 오픈소스"
        description="강의에서 실제로 쓰는 도구와, 20강 이후 필요해질 도구를 골랐습니다. '왜 이걸 쓰는지'를 알면 AI에게 요청할 때 정확한 이름을 댈 수 있습니다."
      />
      <div className="space-y-12">
        {REPO_CATEGORIES.map((cat) => (
          <section key={cat}>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-accent">{cat}</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {REPOS.filter((r) => r.category === cat).map((r) => (
                <article key={r.name} className="flex flex-col rounded-xl border border-line bg-card p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold hover:text-accent"
                      >
                        {r.name} <span className="text-muted">↗</span>
                      </a>
                      <p className="mt-0.5 text-sm text-muted">{r.what}</p>
                    </div>
                    {r.lesson && (
                      <Link
                        href={`/lectures/vibe-coding/lesson-${String(r.lesson).padStart(2, "0")}`}
                        className="shrink-0 rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-bold text-accent"
                      >
                        {r.lesson}강
                      </Link>
                    )}
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed">{r.why}</p>
                  {r.install && (
                    <pre className="mt-3 overflow-x-auto rounded-lg bg-[#15171a] px-3 py-2 font-mono text-xs text-[#e6e6e6]">
                      {r.install}
                    </pre>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
