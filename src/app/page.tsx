import Link from "next/link";
import { getAllLessons, PARTS, lessonHref } from "@/lib/lessons";
import { LessonCard } from "@/components/LessonCard";

const FAQ = [
  {
    q: "정말 코딩을 하나도 몰라도 되나요?",
    a: "네. 이 과정은 문법을 외우는 대신 AI에게 무엇을 원하는지 정확히 말하는 법을 익힙니다. 코드는 읽을 줄만 알면 되고, 그것도 강의 중에 자연스럽게 익숙해집니다.",
  },
  {
    q: "하루에 얼마나 걸리나요?",
    a: "강의당 20~40분입니다. 읽고, 따라 하고, 체크리스트를 채우면 끝입니다. 주말을 쉬어도 한 달이면 20강을 마칩니다.",
  },
  {
    q: "무엇이 필요한가요?",
    a: "노트북 한 대와 Claude 또는 ChatGPT 계정, 그리고 만들고 싶은 아이디어 하나. 3강에서 필요한 도구를 전부 설치합니다.",
  },
  {
    q: "20강을 마치면 무엇을 갖게 되나요?",
    a: "인터넷에 공개된 나만의 웹 서비스 하나와, 앞으로 어떤 아이디어든 스스로 만들어 볼 수 있는 작업 습관입니다.",
  },
];

export default function Home() {
  const lessons = getAllLessons();
  const first = lessons[0];

  return (
    <>
      <section className="mx-auto max-w-5xl px-4 pt-16 pb-12 sm:pt-24">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-accent">
          무료 · 입문자용 · 하루 1강
        </p>
        <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">
          코딩을 몰라도,
          <br />
          20일이면 내 서비스가 나옵니다.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          아이디어 정리부터 화면 만들기, 데이터 저장, 로그인, 배포, 앱 출시까지.
          AI에게 방향을 알려주고 결과를 확인하는 방식으로 하루 한 강씩 따라오면
          마지막 날엔 인터넷에 공개된 나만의 서비스가 생깁니다.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {first && (
            <Link
              href={lessonHref(first.slug)}
              className="rounded-lg bg-accent px-5 py-3 font-bold text-white transition hover:opacity-90"
            >
              1강부터 시작하기
            </Link>
          )}
          <Link
            href="/lectures/vibe-coding"
            className="rounded-lg border border-line bg-card px-5 py-3 font-bold transition hover:border-accent"
          >
            전체 커리큘럼 보기
          </Link>
        </div>
      </section>

      <section className="border-y border-line bg-card">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 py-10 sm:grid-cols-3">
          {[
            ["20강", "하루 한 강, 20일 완성"],
            ["0줄", "외워야 하는 문법"],
            ["1개", "마지막 날 공개되는 내 서비스"],
          ].map(([n, label]) => (
            <div key={label}>
              <div className="text-3xl font-black text-accent">{n}</div>
              <div className="mt-1 text-sm text-muted">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="curriculum" className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-2xl font-black tracking-tight sm:text-3xl">커리큘럼</h2>
        <p className="mt-2 text-muted">
          4부로 나뉩니다. 준비 → 기획과 프롬프트 → 만들기 → 세상에 내놓기.
        </p>
        <div className="mt-10 space-y-12">
          {PARTS.map((part) => (
            <div key={part}>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-accent">{part}</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {lessons
                  .filter((l) => l.part === part)
                  .map((l) => (
                    <LessonCard key={l.slug} lesson={l} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="border-t border-line bg-card">
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
