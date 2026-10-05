import type { Metadata } from "next";
import Link from "next/link";
import { loadCollection } from "@/lib/content";

type Basics = { title: string; summary: string; updated: string; order?: number };

export const metadata: Metadata = {
  title: "바이브 코딩 기초지식",
  description: "클로드, 깃·깃허브, 버셀, 배포, 도메인까지. 바이브 코딩에 필요한 기초를 간단하게 정리했어요.",
};

// claude-basics 는 frontmatter 에 order 가 없으므로 맨 앞에 고정한다.
const FIRST = "claude-basics";

export default function BasicsPage() {
  const docs = loadCollection<Basics>("basics").sort(
    (a, b) => (a.slug === FIRST ? -1 : b.slug === FIRST ? 1 : 0) || (a.order ?? 999) - (b.order ?? 999),
  );
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <nav className="text-sm text-muted">
        <Link href="/" className="hover:text-foreground">← 홈</Link>
      </nav>
      <header className="mt-6 border-b border-line pb-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-accent">Basics</p>
        <h1 className="text-3xl font-black leading-tight tracking-tight break-keep sm:text-4xl">바이브 코딩 기초지식</h1>
        <p className="mt-3 text-lg text-muted">
          클로드로 만들고, 깃으로 저장하고, 깃허브에 올리고, 버셀로 배포하는 데 필요한 기초예요. 한 페이지씩 가볍게 읽어요.
        </p>
      </header>
      <ol className="mt-8 grid gap-4 sm:grid-cols-2">
        {docs.map((d, i) => (
          <li key={d.slug}>
            <Link
              href={`/basics/${d.slug}`}
              className="group block h-full rounded-xl border border-line bg-card p-5 transition hover:border-accent hover:shadow-sm"
            >
              <div className="text-[11px] font-bold uppercase tracking-wide text-accent">{i + 1}</div>
              <h2 className="mt-1 text-lg font-black break-keep group-hover:text-accent">{d.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{d.summary}</p>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
