import Link from "next/link";
import type { Course } from "@/lib/courses";

export function CourseCard({ course, lessonCount }: { course: Course; lessonCount: number }) {
  return (
    <Link
      href={`/lectures/${course.slug}`}
      className="group flex flex-col rounded-2xl border border-line bg-card p-6 transition hover:border-accent hover:shadow-sm"
    >
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full bg-accent-soft px-2 py-0.5 font-bold text-accent">{course.level}</span>
        {course.badge && (
          <span className="rounded-full border border-line px-2 py-0.5 font-bold text-muted">{course.badge}</span>
        )}
        <span className="text-muted">{lessonCount}강</span>
      </div>
      <h3 className="mt-3 text-xl font-black tracking-tight group-hover:text-accent">{course.title}</h3>
      <p className="mt-1 font-medium">{course.tagline}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{course.description}</p>
      <dl className="mt-5 grid gap-2 border-t border-line pt-4 text-sm">
        <div className="flex gap-2">
          <dt className="w-14 shrink-0 text-muted">대상</dt>
          <dd>{course.audience}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="w-14 shrink-0 text-muted">결과물</dt>
          <dd>{course.outcome}</dd>
        </div>
      </dl>
    </Link>
  );
}
