import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { loadCollection, loadDoc } from "@/lib/content";
import { Markdown } from "@/components/Markdown";

type Basics = { title: string; summary: string; updated: string; order?: number };
type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return loadCollection<Basics>("basics").map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const doc = loadDoc<Basics>("basics", slug);
  return doc ? { title: doc.title, description: doc.summary } : {};
}

export default async function BasicsDocPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const doc = loadDoc<Basics>("basics", slug);
  if (!doc) notFound();
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <nav className="text-sm text-muted">
        <Link href="/basics" className="hover:text-foreground">← 바이브 코딩 기초지식</Link>
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
