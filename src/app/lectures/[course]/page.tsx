import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COURSES, getCourse } from "@/lib/courses";
import { getAllLessons, lessonHref } from "@/lib/lessons";
import { LessonCard } from "@/components/LessonCard";

type Params = { course: string };

export function generateStaticParams(): Params[] {
  return COURSES.map((c) => ({ course: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { course } = await params;
  const c = getCourse(course);
  return c ? { title: c.title, description: c.tagline } : {};
}

export default async function CoursePage({ params }: { params: Promise<Params> }) {
  const { course } = await params;
  const c = getCourse(course);
  if (!c) notFound();
  const lessons = getAllLessons(course);
  const total = lessons.reduce((s, l) => s + l.minutes, 0);
  const first = lessons[0];

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <nav className="text-sm text-muted">
        <Link href="/lectures" className="hover:text-foreground">← 바이브 코딩 강좌</Link>
      </nav>
      <header className="mt-4">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full bg-accent-soft px-2 py-0.5 font-bold text-accent">{c.level}</span>
          {c.badge && <span className="rounded-full border border-line px-2 py-0.5 font-bold text-muted">{c.badge}</span>}
        </div>
        <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{c.title}</h1>
        <p className="mt-2 text-lg text-muted">{c.tagline}</p>
        <p className="mt-4 max-w-2xl leading-relaxed">{c.description}</p>
        <p className="mt-3 text-sm text-muted">
          총 {lessons.length}강 · 약 {Math.round(total / 60)}시간 · 순서대로 하루 한 강씩
        </p>
        {first && (
          <Link
            href={lessonHref(course, first.slug)}
            className="mt-6 inline-block rounded-lg bg-accent px-5 py-3 font-bold text-white transition hover:opacity-90"
          >
            1강부터 시작하기
          </Link>
        )}
      </header>
      <div className="mt-12 space-y-12">
        {c.parts.map((part) => {
          const items = lessons.filter((l) => l.part === part);
          if (!items.length) return null;
          return (
            <section key={part}>
              <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-accent">{part}</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {items.map((l) => (
                  <LessonCard key={l.slug} lesson={l} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
