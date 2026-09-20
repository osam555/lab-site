import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { loadCollection, loadDoc, type Idea } from "@/lib/content";
import { Markdown } from "@/components/Markdown";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return loadCollection<Idea>("ideas").map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const doc = loadDoc<Idea>("ideas", slug);
  return doc ? { title: doc.title, description: doc.summary } : {};
}

export default async function IdeaPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const doc = loadDoc<Idea>("ideas", slug);
  if (!doc) notFound();
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <nav className="text-sm text-muted">
        <Link href="/ideas" className="hover:text-foreground">← 프로젝트 아이디어</Link>
      </nav>
      <header className="mt-6 border-b border-line pb-8">
        <div className="flex items-center gap-2 text-xs">
          <span className="rounded-full bg-accent-soft px-2 py-0.5 font-bold text-accent">{doc.level}</span>
          <span className="text-muted">약 {doc.days}일</span>
        </div>
        <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight sm:text-4xl">{doc.title}</h1>
        <p className="mt-3 text-lg text-muted">{doc.summary}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {doc.stack.map((s) => (
            <span key={s} className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-muted">{s}</span>
          ))}
        </div>
      </header>
      <div className="mt-8">
        <Markdown>{doc.content}</Markdown>
      </div>
    </article>
  );
}
