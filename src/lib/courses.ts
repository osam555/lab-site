export type Course = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  level: string;
  audience: string;
  outcome: string;
  parts: readonly string[];
  badge?: string;
};

export const COURSES: Course[] = [
  {
    slug: "homepage",
    title: "홈페이지 만들기",
    tagline: "가게·개인·포트폴리오 홈페이지를 10일 만에 내 주소로",
    description:
      "완전 초보자를 위한 과정입니다. 프레임워크 없이 HTML 한 장부터 시작해 사진, 지도, 문의 폼이 있는 홈페이지를 만들고 내 도메인으로 공개합니다. 모든 설치·터미널 단계는 Windows와 macOS를 나란히 안내합니다.",
    level: "완전 초보",
    audience: "터미널을 한 번도 열어본 적 없는 사람",
    outcome: "내 도메인으로 공개된 여러 페이지짜리 홈페이지",
    parts: ["1부 · 준비", "2부 · 만들기", "3부 · 공개"],
    badge: "Windows · macOS",
  },
  {
    slug: "vibe-coding",
    title: "웹 서비스 만들기 20강",
    tagline: "코딩을 몰라도, 20일이면 내 서비스가 나옵니다",
    description:
      "아이디어 정리부터 화면, 데이터 저장, 로그인, 배포, 앱 출시까지. Next.js와 Supabase로 로그인과 데이터가 있는 진짜 서비스를 만듭니다.",
    level: "입문",
    audience: "홈페이지를 넘어 '서비스'를 만들고 싶은 사람",
    outcome: "로그인·데이터 저장이 되는 웹 서비스와 폰에 설치되는 PWA",
    parts: ["1부 · 준비", "2부 · 기획과 프롬프트", "3부 · 만들기", "4부 · 세상에 내놓기"],
  },
  {
    slug: "shorts",
    title: "쇼츠 자동화",
    tagline: "건축물 이름 하나로 대본·영상·더빙·합성까지, 한 달 4편",
    description:
      "Claude Code가 레퍼런스 채널을 분석해 대본과 비주얼 프롬프트를 뽑고, Google Flow로 클립을 만들고, ElevenLabs로 더빙하고, ffmpeg로 9:16 쇼츠를 조립합니다. 건축 지식 쇼츠를 예시로 진행하며, 마지막엔 전체 파이프라인을 스킬 하나로 저장해 원클릭 실행합니다.",
    level: "입문+",
    audience: "Claude Code를 설치해본 사람 (홈페이지 만들기 3강 또는 웹 서비스 만들기 3강까지)",
    outcome: "주제만 넣으면 돌아가는 쇼츠 제작 파이프라인과 첫 영상 1편",
    parts: ["1부 · 준비", "2부 · 파이프라인 만들기", "3부 · 자동화와 운영"],
    badge: "Windows · macOS",
  },
];

export function getCourse(slug: string) {
  return COURSES.find((c) => c.slug === slug);
}
