import type { Metadata } from "next";
import { Noto_Sans_KR, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

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
    default: "바이브 코딩 20강",
    template: "%s · 바이브 코딩 20강",
  },
  description:
    "코딩을 몰라도 AI와 함께 하루 1강, 20일이면 내 서비스를 세상에 내놓는 무료 강의.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <header className="sticky top-0 z-20 border-b border-line bg-background/85 backdrop-blur">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-2 font-black tracking-tight">
              <span className="inline-block h-6 w-6 rounded-md bg-accent" aria-hidden />
              <span>바이브 코딩 랩</span>
            </Link>
            <div className="flex items-center gap-5 text-sm text-muted">
              <Link href="/lectures/vibe-coding" className="hover:text-foreground">
                20강 목록
              </Link>
              <Link href="/#faq" className="hover:text-foreground">
                FAQ
              </Link>
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-line">
          <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-muted">
            <p>© {new Date().getFullYear()} 바이브 코딩 랩. 모든 강의는 무료로 공개됩니다.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
