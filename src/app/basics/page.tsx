import type { Metadata } from "next";
import Link from "next/link";
import { loadDoc } from "@/lib/content";
import { Markdown } from "@/components/Markdown";

type Basics = { title: string; summary: string; updated: string; order?: number };

export const metadata: Metadata = {
  title: "클로드 사용법 기초",
  description: "클로드가 뭔지, 챗·아티팩트·코드를 어떻게 쓰는지, 막혔을 때 어디부터 보는지.",
};

export default function BasicsPage() {
  const doc = loadDoc<Basics>("basics", "claude-basics");
  if (!doc) return null;
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <nav className="text-sm text-muted">
        <Link href="/" className="hover:text-foreground">← 홈</Link>
      </nav>
      <header className="mt-6 border-b border-line pb-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-accent">Basics</p>
        <h1 className="text-3xl font-black leading-tight tracking-tight break-keep sm:text-4xl">{doc.title}</h1>
        <p className="mt-3 text-lg text-muted">{doc.summary}</p>
        <p className="mt-2 text-xs text-muted">확인일 {doc.updated}</p>
      </header>
      <div className="mt-8">
        <Markdown>{doc.content}</Markdown>
      </div>
    </article>
  );
}
