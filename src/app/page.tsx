import Link from "next/link";
import Image from "next/image";
import { COURSES } from "@/lib/courses";
import { getAllLessons } from "@/lib/lessons";
import { CourseCard } from "@/components/CourseCard";
import { HeroVisual } from "@/components/HeroVisual";

const MORE = [
  { href: "/skills", tag: "Skills", title: "바이브 스킬", desc: "Claude Code의 승인 모드, 계획 모드, 규칙 파일, 외부 연결까지 실전 가이드 6편." },
  { href: "/prompts", tag: "Prompts", title: "프롬프트 골라 쓰기", desc: "복사해서 붙여넣고 [대괄호]만 바꾸면 되는 요청문 20여 개. 상황별 분류와 검색." },
  { href: "/tips", tag: "Tips", title: "짧은 팁", desc: "command not found부터 hydration 에러까지, 막히는 지점 15개의 1분 해결책." },
  { href: "/repos", tag: "Repo", title: "추천 오픈소스", desc: "과정에서 쓰는 도구와 다음 단계 도구. 왜 쓰는지, 몇 강에서 나오는지 함께." },
  { href: "/ideas", tag: "Ideas", title: "프로젝트 아이디어", desc: "20일 크기로 기획해둔 프로젝트 6개. PLAN.md에 바로 옮길 수 있는 형식." },
];

const FAQ = [
  {
    q: "정말 코딩을 하나도 몰라도 되나요?",
    a: "네. 문법을 외우는 대신 Claude Code에게 무엇을 원하는지 정확히 말하는 법을 익힙니다. 코드는 읽을 줄만 알면 되고, 그것도 강의 중에 자연스럽게 익숙해집니다.",
  },
  {
    q: "어느 과정부터 시작하나요?",
    a: "터미널을 열어본 적이 없다면 '홈페이지 만들기'부터. 여기서 설치·터미널·Git·배포를 전부 겪습니다. 그다음 '20강'으로 가면 준비 단계를 빠르게 넘길 수 있습니다.",
  },
  {
    q: "Windows에서도 되나요?",
    a: "네. '홈페이지 만들기' 과정의 설치와 터미널 단계는 Windows와 macOS를 나란히 안내하고, 화면 위 버튼으로 내 컴퓨터에 맞는 설명만 볼 수 있습니다.",
  },
  {
    q: "무엇이 필요한가요?",
    a: "노트북 한 대와 Claude 계정(Claude Code 사용을 위한 구독 또는 API), 그리고 만들고 싶은 것 하나. 도구 설치는 각 과정의 준비 단계에서 전부 합니다.",
  },
];

export default function Home() {
  const HERO_COURSES = [
    { src: "/hero-landing.jpg", label: "랜딩페이지", href: "/lectures/landing-page" },
    { src: "/hero-homepage.jpg", label: "홈페이지", href: "/lectures/homepage" },
    { src: "/hero-shorts.jpg", label: "쇼츠 자동화", href: "/lectures/shorts" },
    { src: "/hero-blog.jpg", label: "블로그 자동화", href: "/lectures/naver-blog" },
    { src: "/hero-webapp.jpg", label: "웹 서비스", href: "/lectures/vibe-coding" },
  ];

  return (
    <>
      {/* ── Premium Hero ── */}
      <section className="hero-section relative overflow-hidden">
        {/* Background layers */}
        <div className="hero-bg-gradient" />
        <div className="hero-bg-grid" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 pt-16 pb-0 sm:pt-20">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left: Text */}
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-4 py-1.5 text-xs font-bold text-accent">
                <span className="hero-dot" />
                무료 · 입문자용 · 하루 1강
              </p>
              <h1 className="text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem]">
                코딩을 몰라도,
                <br />
                <span className="hero-text-gradient">내 홈페이지와 내 서비스</span>를
                <br />
                만듭니다.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Claude Code에게 방향을 알려주고 결과를 확인하는 방식으로 하루 한 강씩.
                랜딩페이지, 홈페이지, 웹 서비스를 만들고 쇼츠·블로그·SNS 콘텐츠까지 자동으로 생산합니다.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/lectures/landing-page" className="hero-cta-primary rounded-xl bg-accent px-6 py-3.5 font-bold text-white transition">
                  랜딩페이지부터 시작 →
                </Link>
                <Link href="/lectures" className="rounded-xl border border-line bg-card/80 px-6 py-3.5 font-bold backdrop-blur-sm transition hover:border-accent">
                  전체 강좌 보기
                </Link>
              </div>
            </div>

            {/* Right: Animated Hero Visual */}
            <div className="hero-image-wrapper relative mx-auto w-full max-w-lg lg:max-w-none">
              <HeroVisual />
            </div>
          </div>

          {/* Course showcase cards */}
          <div className="hero-showcase mt-10 pb-4">
            <p className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-muted">이런 걸 만듭니다</p>
            <div className="hero-showcase-track">
              {HERO_COURSES.map(({ src, label, href }) => (
                <Link key={label} href={href} className="hero-showcase-card group">
                  <Image src={src} alt={label} width={320} height={213} className="hero-showcase-img" />
                  <span className="hero-showcase-label">{label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Stats bar */}
          <div className="hero-stats mt-6 grid grid-cols-2 gap-3 pb-12 sm:grid-cols-4 sm:gap-4">
            {[
              ["9개 강좌", "랜딩페이지 · 홈페이지 · 쇼츠 · 블로그 · SNS 등"],
              ["15+ 사례", "복사해서 바로 쓰는 프롬프트 템플릿"],
              ["0줄 암기", "외워야 하는 코드 문법"],
              ["Win · Mac", "두 운영체제 모두 안내"],
            ].map(([n, label]) => (
              <div key={label} className="hero-stat-card rounded-xl border border-line/50 bg-card/60 p-4 backdrop-blur-md">
                <div className="text-xl font-black text-accent sm:text-2xl">{n}</div>
                <div className="mt-1 text-xs text-muted sm:text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-2xl font-black tracking-tight sm:text-3xl">바이브 코딩 강좌</h2>
        <p className="mt-2 text-muted">처음이라면 홈페이지 만들기부터.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((c) => (
            <CourseCard key={c.slug} course={c} lessonCount={getAllLessons(c.slug).length} />
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-card">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl">강의 밖에서도</h2>
          <p className="mt-2 text-muted">막혔을 때, 다음 단계가 궁금할 때, 무엇을 만들지 모를 때.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {MORE.map(({ href, title, desc, tag }) => (
              <Link key={href} href={href} className="group rounded-xl border border-line bg-background p-5 transition hover:border-accent hover:shadow-sm">
                <div className="text-[11px] font-bold uppercase tracking-wide text-accent">{tag}</div>
                <h3 className="mt-1 font-bold group-hover:text-accent">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-line">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl">자주 묻는 질문</h2>
          <dl className="mt-8 grid gap-8 sm:grid-cols-2">
            {FAQ.map(({ q, a }) => (
              <div key={q}>
                <dt className="font-bold">{q}</dt>
                <dd className="mt-2 leading-relaxed text-muted">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
