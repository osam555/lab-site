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

const LANDING_SAMPLES = [
  {
    title: "SaaS / 서비스 소개",
    tag: "SaaS 템플릿",
    description: "직관적인 가치 제안, 기능 카드, 가격 정책 및 CTA 중심 구성",
    image: "/landing_sample_saas.jpg",
    url: "/examples/landing-saas.html",
  },
  {
    title: "온라인 강좌 모집",
    tag: "교육 / 부트캠프",
    description: "상세 커리큘럼, 수강 혜택, 등록 전환을 유도하는 구성",
    image: "/landing_sample_course.jpg",
    url: "/examples/landing-course.html",
  },
  {
    title: "뉴스레터 구독",
    tag: "구독 / 리드 수집",
    description: "핵심 메시지와 간결한 이메일 구독 폼 중심의 고전환 페이지",
    image: "/landing_sample_newsletter.jpg",
    url: "/examples/landing-newsletter.html",
  },
];

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
        <section className="mt-12 rounded-2xl border border-line bg-card p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-bold text-accent mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                실제 동작하는 라이브 예시
              </div>
              <h2 className="text-xl font-black tracking-tight sm:text-2xl">
                실제 제작 랜딩페이지 예시 미리보기
              </h2>
              <p className="mt-1 text-sm text-muted">
                강좌를 통해 직접 제작하게 되는 3가지 대표 완성형 웹페이지입니다. 아래 버튼을 눌러 직접 확인해보세요.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {LANDING_SAMPLES.map((sample) => (
              <div
                key={sample.title}
                className="group flex flex-col justify-between rounded-xl border border-line bg-surface/50 p-4 transition duration-200 hover:border-accent hover:shadow-md"
              >
                <div>
                  <a
                    href={sample.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block aspect-video w-full overflow-hidden rounded-lg border border-line bg-muted/10"
                    title={`${sample.title} 실제 페이지 보기`}
                  >
                    <Image
                      src={sample.image}
                      alt={sample.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/35 opacity-0 transition-opacity duration-200 group-hover:opacity-100 flex items-center justify-center">
                      <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-gray-900 shadow">
                        새 탭에서 열기 ↗
                      </span>
                    </div>
                  </a>

                  <div className="mt-3.5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-bold text-foreground leading-snug">{sample.title}</h3>
                      <span className="shrink-0 text-[11px] font-semibold text-accent bg-accent-soft px-2 py-0.5 rounded-md">
                        {sample.tag}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">
                      {sample.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-line/60">
                  <a
                    href={sample.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-accent px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xs transition hover:opacity-90 active:scale-[0.99]"
                  >
                    <span>실제 예시 보기</span>
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
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
