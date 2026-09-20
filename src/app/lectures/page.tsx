import type { Metadata } from "next";
import { COURSES } from "@/lib/courses";
import { getAllLessons } from "@/lib/lessons";
import { CourseCard } from "@/components/CourseCard";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "바이브 코딩 강좌",
  description: "코딩을 몰라도 Claude Code로 만드는 무료 바이브 코딩 강좌",
};

export default function LecturesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <SectionHeader
        eyebrow="Courses"
        title="바이브 코딩 강좌"
        description="처음이라면 '홈페이지 만들기'부터. 로그인·데이터가 필요한 서비스는 '웹 서비스 만들기 20강', 콘텐츠 자동화는 '쇼츠·네이버 블로그·SNS' 세 강좌 중 내 채널에 맞는 것부터."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {COURSES.map((c) => (
          <CourseCard key={c.slug} course={c} lessonCount={getAllLessons(c.slug).length} />
        ))}
      </div>
    </div>
  );
}
