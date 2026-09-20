import type { Metadata } from "next";
import { COURSES } from "@/lib/courses";
import { getAllLessons } from "@/lib/lessons";
import { CourseCard } from "@/components/CourseCard";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "강의",
  description: "바이브 코딩 무료 강의 과정 목록",
};

export default function LecturesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <SectionHeader
        eyebrow="Courses"
        title="강의 과정"
        description="처음이라면 '홈페이지 만들기'부터. 홈페이지를 만들어봤거나 로그인·데이터가 필요한 서비스를 만들고 싶다면 '20강'으로."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {COURSES.map((c) => (
          <CourseCard key={c.slug} course={c} lessonCount={getAllLessons(c.slug).length} />
        ))}
      </div>
    </div>
  );
}
