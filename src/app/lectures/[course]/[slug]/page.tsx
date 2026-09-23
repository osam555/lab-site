import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COURSES, getCourse } from "@/lib/courses";
import { getAllLessons, getLesson, lessonHref } from "@/lib/lessons";
import { getPromptsByLesson } from "@/lib/course-prompts";
import { Markdown } from "@/components/Markdown";
import { OsSwitch } from "@/components/OsSwitch";
import { LessonPromptToc } from "@/components/LessonPromptToc";
import { PromptCopyHandler } from "@/components/PromptCopyHandler";

type Params = { course: string; slug: string };

export function generateStaticParams(): Params[] {
  return COURSES.flatMap((c) => getAllLessons(c.slug).map((l) => ({ course: c.slug, slug: l.slug })));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { course, slug } = await params;
  const lesson = getLesson(course, slug);
  if (!lesson) return {};
  return { title: `${lesson.number}강 ${lesson.title}`, description: lesson.subtitle };
}

export default async function LessonPage({ params }: { params: Promise<Params> }) {
  const { course, slug } = await params;
  const c = getCourse(course);
  const lesson = getLesson(course, slug);
  if (!c || !lesson) notFound();

  const all = getAllLessons(course);
  const idx = all.findIndex((l) => l.slug === slug);
  const prev = idx > 0 ? all[idx - 1] : undefined;
  const next = idx < all.length - 1 ? all[idx + 1] : undefined;

  // Get prompts for this lesson (with course-wide seq numbers)
  const lessonPrompts = getPromptsByLesson(course, slug);
  const seqMap: Record<string, number> = {};
  for (const p of lessonPrompts) {
    seqMap[p.id] = p.seq;
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <PromptCopyHandler />
      <nav className="text-sm text-muted">
        <Link href={`/lectures/${course}`} className="hover:text-foreground">← {c.title}</Link>
        <span className="mx-2">·</span>
        <span>{lesson.part}</span>
      </nav>

      <header className="mt-6 border-b border-line pb-8">
        <div className="font-mono text-sm font-bold text-accent">LESSON {String(lesson.number).padStart(2, "0")}</div>
        <h1 className="mt-2 text-3xl font-black leading-tight tracking-tight sm:text-4xl">{lesson.title}</h1>
        <p className="mt-3 text-lg text-muted">{lesson.subtitle}</p>
        <div className="mt-6 rounded-xl bg-accent-soft p-4">
          <div className="text-xs font-bold uppercase tracking-wide text-accent">오늘의 목표</div>
          <p className="mt-1 leading-relaxed">{lesson.goal}</p>
          <p className="mt-2 text-xs text-muted">예상 소요 시간 약 {lesson.minutes}분</p>
        </div>
      </header>

      {/* Prompt TOC — 이 강의에서 사용하는 프롬프트 목차 */}
      <LessonPromptToc
        prompts={lessonPrompts}
        courseSlug={course}
        lessonSlug={slug}
      />

      <div className="mt-8">
        {lesson.hasOs && <OsSwitch />}
        <Markdown seqMap={seqMap}>{lesson.content}</Markdown>
      </div>

      <nav className="mt-16 grid gap-3 border-t border-line pt-8 sm:grid-cols-2">
        {prev ? (
          <Link href={lessonHref(course, prev.slug)} className="rounded-xl border border-line bg-card p-4 transition hover:border-accent">
            <div className="text-xs text-muted">← 이전 강의</div>
            <div className="mt-1 font-bold">{prev.number}강 {prev.title}</div>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link href={lessonHref(course, next.slug)} className="rounded-xl border border-line bg-card p-4 text-right transition hover:border-accent">
            <div className="text-xs text-muted">다음 강의 →</div>
            <div className="mt-1 font-bold">{next.number}강 {next.title}</div>
          </Link>
        ) : (
          <Link href="/lectures" className="rounded-xl bg-accent p-4 text-right font-bold text-white transition hover:opacity-90">
            🎉 완주! 다른 과정 보기
          </Link>
        )}
      </nav>
    </article>
  );
}

