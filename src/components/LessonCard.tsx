import Link from "next/link";
import type { LessonMeta } from "@/lib/lessons";
import { lessonHref } from "@/lib/lessons";

export function LessonCard({ lesson }: { lesson: LessonMeta }) {
  return (
    <Link
      href={lessonHref(lesson.slug)}
      className="group flex gap-4 rounded-xl border border-line bg-card p-4 transition hover:border-accent hover:shadow-sm"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft font-mono text-sm font-bold text-accent">
        {String(lesson.number).padStart(2, "0")}
      </div>
      <div className="min-w-0">
        <h3 className="font-bold leading-snug group-hover:text-accent">{lesson.title}</h3>
        <p className="mt-1 text-sm text-muted">{lesson.subtitle}</p>
        <p className="mt-2 text-xs text-muted">약 {lesson.minutes}분</p>
      </div>
    </Link>
  );
}
