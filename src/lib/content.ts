import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Doc<T> = { slug: string; content: string } & T;

const ROOT = path.join(process.cwd(), "src/content");

/** Reads every markdown file in src/content/<dir>, sorted by `order` then slug. */
export function loadCollection<T extends { order?: number }>(dir: string): Doc<T>[] {
  const full = path.join(ROOT, dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const { data, content } = matter(fs.readFileSync(path.join(full, f), "utf8"));
      return { slug: f.replace(/\.md$/, ""), content, ...(data as T) };
    })
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999) || a.slug.localeCompare(b.slug));
}

export function loadDoc<T extends { order?: number }>(dir: string, slug: string): Doc<T> | undefined {
  return loadCollection<T>(dir).find((d) => d.slug === slug);
}

export type Skill = { title: string; summary: string; category: string; order?: number; minutes?: number };
export type Tip = { title: string; category: string; order?: number };
export type Idea = {
  title: string;
  summary: string;
  level: "입문" | "중급";
  days: number;
  stack: string[];
  order?: number;
};

export const SKILL_CATEGORIES = ["설치·설정", "워크플로", "메모리·규칙", "외부 연동"] as const;
