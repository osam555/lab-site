import type { Metadata } from "next";
import { Noto_Sans_KR, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
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
    default: "바이브코딩 스쿨 · 대충영어",
    template: "%s · 바이브코딩 스쿨 대충영어",
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
          <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 h-14">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2.5 font-black tracking-tight hover:opacity-90 transition-opacity">
                <div className="flex flex-shrink-0 items-center justify-center h-6 w-6 rounded-lg bg-gradient-to-br from-[#4ade80] to-accent text-white shadow-md shadow-accent/20 ring-1 ring-accent/30" aria-hidden>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                    <path fillRule="evenodd" d="M9.315 3.144a.75.75 0 0 1 1.37 0l1.28 3.52c.245.674.782 1.21 1.455 1.456l3.52 1.28a.75.75 0 0 1 0 1.37l-3.52 1.28a.25.25 0 0 0-.142.142l-1.28 3.52a.75.75 0 0 1-1.37 0l-1.28-3.52a.25.25 0 0 0-.142-.142l-3.52-1.28a.75.75 0 0 1 0-1.37l3.52-1.28a.25.25 0 0 0 .142-.142l1.28-3.52Zm8.435 11.45a.75.75 0 0 1 1.096-.164l.873.714a.75.75 0 1 1-.951 1.159l-.873-.715a.75.75 0 0 1-.145-1.094Zm-10.5 0a.75.75 0 0 1-.145 1.094l-.873.715a.75.75 0 1 1-.951-1.159l.873-.714a.75.75 0 0 1 1.096.164Z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="leading-none pt-0.5 text-lg">바이브코딩 스쿨</span>
              </Link>
              <a
                href="https://brain-hz.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 pl-1.5 pr-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 transition-all border border-slate-200 dark:border-white/10"
                title="대충영어 (brain-hz.com)"
              >
                <div className="flex items-center justify-center h-5 w-5 rounded-full overflow-hidden shadow-sm group-hover:scale-105 transition-transform bg-white" aria-hidden>
                  <Image src="/daechung-logo.png" alt="대충영어 로고" width={20} height={20} className="object-cover" />
                </div>
                <span className="text-xs font-bold text-slate-700 dark:text-slate-200 leading-none pt-0.5">대충영어 <span className="font-normal opacity-70 ml-0.5">brain-hz</span></span>
                <span className="text-[10px] opacity-50 ml-0.5">↗</span>
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
            <p>© {new Date().getFullYear()} 바이브코딩 스쿨 · <a href="https://brain-hz.com/" target="_blank" rel="noopener noreferrer" className="hover:text-accent underline font-medium">대충영어 (brain-hz.com)</a>. 모든 강의는 무료로 공개됩니다.</p>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
