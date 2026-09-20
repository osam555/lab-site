import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type LessonMeta = {
  course: string;
  number: number;
  slug: string;
  title: string;
  subtitle: string;
  goal: string;
  minutes: number;
  part: string;
  /** true when the body contains Windows/macOS blocks */
  hasOs: boolean;
};

export type Lesson = LessonMeta & { content: string };

const COURSES_DIR = path.join(process.cwd(), "src/content/courses");

/**
 * Turns
 *   ::: windows
 *   ...markdown...
 *   :::
 * into <div data-os-block="windows"> ... </div> so the OS switcher can show/hide it.
 */
function expandOsBlocks(md: string): string {
  return md.replace(
    /^::: *(windows|mac)[ \t]*\n([\s\S]*?)^:::[ \t]*$/gm,
    (_m, os: string, body: string) => `<div data-os-block="${os}">\n\n${body.trim()}\n\n</div>\n`,
  );
}

function read(course: string, file: string): Lesson {
  const raw = fs.readFileSync(path.join(COURSES_DIR, course, file), "utf8");
  const { data, content } = matter(raw);
  const hasOs = /^::: *(windows|mac)/m.test(content);
  return {
    course,
    number: Number(data.number),
    slug: file.replace(/\.md$/, ""),
    title: String(data.title),
    subtitle: String(data.subtitle),
    goal: String(data.goal),
    minutes: Number(data.minutes ?? 30),
    part: String(data.part),
    hasOs,
    content: expandOsBlocks(content),
  };
}

export function getAllLessons(course: string): Lesson[] {
  const dir = path.join(COURSES_DIR, course);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => read(course, f))
    .sort((a, b) => a.number - b.number);
}

export function getLesson(course: string, slug: string): Lesson | undefined {
  const file = path.join(COURSES_DIR, course, `${slug}.md`);
  if (!fs.existsSync(file)) return undefined;
  return read(course, `${slug}.md`);
}

export function lessonHref(course: string, slug: string) {
  return `/lectures/${course}/${slug}`;
}
