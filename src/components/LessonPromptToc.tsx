import Link from "next/link";

type TocPrompt = {
  id: string;
  seq: number;
  body: string;
  level: "beginner" | "intermediate" | "advanced";
  levelLabel: string;
};

const LEVEL_DOTS: Record<TocPrompt["level"], string> = {
  beginner: "🟢",
  intermediate: "🟡",
  advanced: "🔴",
};

/**
 * Lesson-level prompt table of contents.
 * Renders at the top of each lesson page, listing all prompts with seq numbers
 * and anchor links so students can navigate in practice order.
 */
export function LessonPromptToc({
  prompts,
  courseSlug,
  lessonSlug,
}: {
  prompts: TocPrompt[];
  courseSlug: string;
  lessonSlug: string;
}) {
  if (prompts.length === 0) return null;

  return (
    <nav className="prompt-toc not-prose">
      <div className="prompt-toc-header">
        <span className="prompt-toc-icon">📋</span>
        <span className="prompt-toc-title">
          이 강의의 프롬프트
          <span className="prompt-toc-count">{prompts.length}개</span>
        </span>
      </div>
      <ol className="prompt-toc-list">
        {prompts.map((p) => {
          const preview = p.body
            .replace(/\*\*/g, "")
            .replace(/\n/g, " ")
            .slice(0, 50)
            .trim();
          return (
            <li key={p.id} className="prompt-toc-item">
              <Link
                href={`/lectures/${courseSlug}/${lessonSlug}#prompt-${p.id}`}
                className="prompt-toc-link"
              >
                <span className="prompt-toc-seq">#{p.seq}</span>
                <span className="prompt-toc-id">{p.id}</span>
                <span className={`prompt-toc-level prompt-level-${p.level}`}>
                  {LEVEL_DOTS[p.level]} {p.levelLabel}
                </span>
                <span className="prompt-toc-preview">{preview}{p.body.length > 50 ? "…" : ""}</span>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
