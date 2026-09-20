"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NAV = [
  { href: "/lectures/vibe-coding", label: "강의" },
  { href: "/skills", label: "스킬" },
  { href: "/prompts", label: "프롬프트" },
  { href: "/tips", label: "팁" },
  { href: "/repos", label: "Repo" },
  { href: "/ideas", label: "아이디어" },
];

export function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="flex items-center gap-1 overflow-x-auto text-sm">
      {NAV.map(({ href, label }) => {
        const active = pathname === href || pathname.startsWith(href + "/");
        return (
          <Link
            key={href}
            href={href}
            className={`whitespace-nowrap rounded-md px-2.5 py-1.5 transition ${
              active ? "bg-accent-soft font-bold text-accent" : "text-muted hover:text-foreground"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
