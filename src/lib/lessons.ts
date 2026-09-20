import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type LessonMeta = {
  number: number;
  slug: string;
  title: string;
  subtitle: string;
  goal: string;
  minutes: number;
  part: string;
};

export type Lesson = LessonMeta & { content: string };

const LESSON_DIR = path.join(process.cwd(), "src/content/lessons");

export const PARTS = [
  "1부 · 준비",
  "2부 · 기획과 프롬프트",
  "3부 · 만들기",
  "4부 · 세상에 내놓기",
] as const;

function read(file: string): Lesson {
  const raw = fs.readFileSync(path.join(LESSON_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const slug = file.replace(/\.md$/, "");
  return {
    number: Number(data.number),
    slug,
    title: String(data.title),
    subtitle: String(data.subtitle),
    goal: String(data.goal),
    minutes: Number(data.minutes ?? 30),
    part: String(data.part),
    content,
  };
}

export function getAllLessons(): Lesson[] {
  return fs
    .readdirSync(LESSON_DIR)
    .filter((f) => f.endsWith(".md"))
    .map(read)
    .sort((a, b) => a.number - b.number);
}

export function getLesson(slug: string): Lesson | undefined {
  const file = `${slug}.md`;
  if (!fs.existsSync(path.join(LESSON_DIR, file))) return undefined;
  return read(file);
}

export function lessonHref(slug: string) {
  return `/lectures/vibe-coding/${slug}`;
}
