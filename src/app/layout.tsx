import type { Metadata } from "next";
import { Noto_Sans_KR, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { NavLinks } from "@/components/NavLinks";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Analytics } from "@vercel/analytics/react";

const sans = Noto_Sans_KR({
  variable: "--font-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "바이브코딩 랩 · 대충영어 오쌤",
    template: "%s · 바이브코딩 랩 대충영어 오쌤",
  },
  description:
    "코딩을 몰라도 Claude Code와 함께 홈페이지와 서비스를 만드는 무료 강의.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${sans.variable} ${mono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          // Apply the saved theme before first paint to avoid a flash. Mirrors ThemeToggle.
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("lab-theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <header className="sticky top-0 z-20 border-b border-line bg-background/85 backdrop-blur">
          <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
            <div className="flex items-center gap-2.5">
              <Link href="/" className="flex items-center gap-2 font-black tracking-tight hover:opacity-90 transition-opacity">
                <span className="inline-block h-6 w-6 rounded-md bg-accent" aria-hidden />
                <span>바이브코딩 랩</span>
              </Link>
              <a
                href="https://brain-hz.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-white transition-all"
                title="대충영어 오쌤 (brain-hz.com)"
              >
                대충영어 오쌤 (brain-hz.com) ↗
              </a>
            </div>
            <div className="flex items-center gap-3">
              <NavLinks />
              <ThemeToggle />
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-line">
          <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-muted">
            <p>© {new Date().getFullYear()} 바이브코딩 랩 · <a href="https://brain-hz.com/" target="_blank" rel="noopener noreferrer" className="hover:text-accent underline font-medium">대충영어 오쌤 (brain-hz.com)</a>. 모든 강의는 무료로 공개됩니다.</p>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
