import type { Metadata } from "next";
import { getAllLessons, PARTS } from "@/lib/lessons";
import { LessonCard } from "@/components/LessonCard";

export const metadata: Metadata = {
  title: "전체 강의 목록",
  description: "바이브 코딩 20강 전체 커리큘럼",
};

export default function LectureIndex() {
  const lessons = getAllLessons();
  const total = lessons.reduce((s, l) => s + l.minutes, 0);
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-black tracking-tight">바이브 코딩 20강</h1>
      <p className="mt-2 text-muted">
        총 {lessons.length}강 · 약 {Math.round(total / 60)}시간 · 순서대로 하루 한 강씩 진행하세요.
      </p>
      <div className="mt-10 space-y-12">
        {PARTS.map((part) => (
          <section key={part}>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-accent">{part}</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {lessons
                .filter((l) => l.part === part)
                .map((l) => (
                  <LessonCard key={l.slug} lesson={l} />
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
