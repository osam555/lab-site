import { getAllLessons } from "./lessons";

export type CoursePrompt = {
  /** e.g. "3-2" */
  id: string;
  lessonNumber: number;
  lessonTitle: string;
  lessonSlug: string;
  body: string;
  level: "beginner" | "intermediate" | "advanced";
  levelLabel: string;
};

const LEVEL_MAP: Record<string, { level: CoursePrompt["level"]; label: string }> = {
  beginner: { level: "beginner", label: "초급" },
  intermediate: { level: "intermediate", label: "중급" },
  advanced: { level: "advanced", label: "고급" },
};

/**
 * Extracts all prompts from a course's lessons by parsing the HTML prompt-box divs.
 */
export function getCoursePrompts(courseSlug: string): CoursePrompt[] {
  const lessons = getAllLessons(courseSlug);
  const prompts: CoursePrompt[] = [];

  for (const lesson of lessons) {
    // Match prompt-box divs with data attributes
    const regex =
      /<div\s+class="prompt-box[^"]*"\s+data-prompt="([^"]+)"\s+data-level="([^"]+)"[^>]*>[\s\S]*?<div\s+class="prompt-box-body">\s*\n([\s\S]*?)\n\s*<\/div>\s*\n<\/div>/g;

    let match: RegExpExecArray | null;
    while ((match = regex.exec(lesson.content)) !== null) {
      const id = match[1];
      const levelKey = match[2];
      const body = match[3].trim();

      const mapped = LEVEL_MAP[levelKey] ?? LEVEL_MAP.beginner;

      prompts.push({
        id,
        lessonNumber: lesson.number,
        lessonTitle: lesson.title,
        lessonSlug: lesson.slug,
        body,
        level: mapped.level,
        levelLabel: mapped.label,
      });
    }
  }

  return prompts;
}

/** Group prompts by lesson number */
export function groupByLesson(prompts: CoursePrompt[]) {
  const groups: Map<number, { title: string; slug: string; prompts: CoursePrompt[] }> = new Map();

  for (const p of prompts) {
    if (!groups.has(p.lessonNumber)) {
      groups.set(p.lessonNumber, {
        title: p.lessonTitle,
        slug: p.lessonSlug,
        prompts: [],
      });
    }
    groups.get(p.lessonNumber)!.prompts.push(p);
  }

  return Array.from(groups.entries())
    .sort(([a], [b]) => a - b)
    .map(([num, data]) => ({ lessonNumber: num, ...data }));
}
