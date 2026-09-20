import type { Metadata } from "next";
import { loadCollection, type Tip } from "@/lib/content";
import { SectionHeader } from "@/components/SectionHeader";
import { Markdown } from "@/components/Markdown";

export const metadata: Metadata = {
  title: "짧은 팁",
  description: "막혔을 때 1분 안에 읽고 해결하는 짧은 팁",
};

export default function TipsPage() {
  const tips = loadCollection<Tip>("tips");
  const cats = Array.from(new Set(tips.map((t) => t.category)));
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <SectionHeader
        eyebrow="Tips"
        title="짧은 팁"
        description="강의 중 자주 막히는 지점만 골라 답을 적어뒀습니다. 제목을 누르면 펼쳐집니다."
      />
      <div className="space-y-10">
        {cats.map((cat) => (
          <section key={cat}>
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-accent">{cat}</h2>
            <div className="divide-y divide-line rounded-xl border border-line bg-card">
              {tips
                .filter((t) => t.category === cat)
                .map((t) => (
                  <details key={t.slug} id={t.slug} className="group px-5 py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
                      <span>{t.title}</span>
                      <span className="text-muted transition group-open:rotate-45" aria-hidden>+</span>
                    </summary>
                    <div className="mt-2 text-[15px]">
                      <Markdown>{t.content}</Markdown>
                    </div>
                  </details>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
