import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { COURSES, getCourse } from "@/lib/courses";
import { getAllLessons, lessonHref } from "@/lib/lessons";
import { loadCollection, type Skill } from "@/lib/content";
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

  // Load related skills
  const allSkills = loadCollection<Skill>("skills");
  const relatedSkills = (c.relatedSkills ?? [])
    .map((slug) => allSkills.find((s) => s.slug === slug))
    .filter(Boolean) as (typeof allSkills)[number][];

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

      {course === "landing-page" && (
        <section className="mt-12 rounded-2xl bg-surface p-6 sm:p-8">
          <h2 className="text-xl font-black tracking-tight mb-6">다양한 랜딩페이지 샘플 미리보기</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col gap-3">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-line shadow-sm">
                <Image src="/landing_sample_saas.jpg" alt="SaaS 랜딩페이지 샘플" fill className="object-cover" />
              </div>
              <span className="text-sm font-bold text-center">SaaS / 서비스 소개</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-line shadow-sm">
                <Image src="/landing_sample_course.jpg" alt="강좌 모집 랜딩페이지 샘플" fill className="object-cover" />
              </div>
              <span className="text-sm font-bold text-center">온라인 강좌 모집</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-line shadow-sm">
                <Image src="/landing_sample_newsletter.jpg" alt="뉴스레터 구독 랜딩페이지 샘플" fill className="object-cover" />
              </div>
              <span className="text-sm font-bold text-center">뉴스레터 구독</span>
            </div>
          </div>
        </section>
      )}

      {/* Highlights */}
      {c.highlights && c.highlights.length > 0 && (
        <section className="mt-10 rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <h2 className="text-lg font-black tracking-tight">핵심 내용</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {c.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm leading-relaxed">
                <span className="mt-0.5 shrink-0 text-accent">✓</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Lesson list by part */}
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

      {/* Related skills section */}
      {relatedSkills.length > 0 && (
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="text-xl font-black tracking-tight">이 강좌에서 활용하는 스킬</h2>
          <p className="mt-1 text-sm text-muted">강의를 들으면서 스킬 가이드를 함께 참고하세요.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {relatedSkills.map((skill) => (
              <Link
                key={skill.slug}
                href={`/skills/${skill.slug}`}
                className="group flex flex-col gap-1 rounded-xl border border-line bg-surface p-4 transition hover:border-accent hover:shadow-sm"
              >
                <span className="text-xs font-bold text-accent">{skill.category}</span>
                <span className="font-bold leading-snug group-hover:text-accent">{skill.title}</span>
                <span className="text-sm text-muted line-clamp-2">{skill.summary}</span>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/skills" className="text-sm text-accent hover:underline">
              전체 스킬 보기 →
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
