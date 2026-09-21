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
  {
    slug: "naver-blog",
    title: "네이버 블로그 생성 자동화",
    tagline: "키워드 하나로 리서치·초안·이미지·에디터 입력까지, 주 3편",
    description:
      "네이버 키워드 도구로 주제를 고르고, Claude Code가 출처가 붙은 리서치로 초안을 쓰고, 이미지와 제목·태그를 준비한 뒤, 브라우저 자동화로 스마트에디터에 원고를 채워 임시저장까지 합니다. 발행 버튼은 사람이 누릅니다. 네이버 검색 노출 원리와 저품질을 피하는 경계를 함께 다룹니다.",
    level: "입문+",
    audience: "Claude Code를 설치해본 사람. 네이버 블로그를 꾸준히 쓰고 싶지만 매번 막히는 사람",
    outcome: "30개 키워드 캘린더, 주제만 넣으면 에디터에 원고가 채워지는 파이프라인, 첫 글 3편",
    parts: ["1부 · 준비", "2부 · 파이프라인 만들기", "3부 · 자동화와 운영"],
    badge: "Windows · macOS",
  },
  {
    slug: "sns",
    title: "SNS 배포 자동화",
    tagline: "글 하나를 다섯 채널에 맞게 변환하고 예약 발행",
    description:
      "블로그 글이나 영상 하나를 X·스레드·인스타그램·링크드인·카카오 채널 형식으로 자동 변환하고, 이미지 카드를 만들고, 스케줄러 API로 예약 발행합니다. 주간 성과를 모아 잘 된 후크 패턴을 규칙 파일에 되먹입니다.",
    level: "입문+",
    audience: "Claude Code를 설치해본 사람. 콘텐츠는 있는데 채널마다 올리는 게 일인 사람",
    outcome: "채널별 변환 규칙, 이미지 카드 템플릿, '이 글 배포해줘' 한 줄로 도는 파이프라인",
    parts: ["1부 · 준비", "2부 · 파이프라인 만들기", "3부 · 자동화와 운영"],
    badge: "Windows · macOS",
  },
  {
    slug: "aside",
    title: "Claude Aside 완전 가이드",
    tagline: "Browser·Computer Use·MCP·스킬로 SEO·SNS·블로그·영상을 자동화",
    description:
      "Claude Code 데스크탑 앱의 Aside Browser, Computer Use, MCP 서버, Chrome Extension을 완전히 익히고 실전 자동화에 적용합니다. 서치 콘솔 자동 등록(SEO), 인스타·X·카카오채널 자동 배포(SNS), 네이버·티스토리 자동 포스팅(블로그), YouTube·쇼츠·릴스·틱톡 영상 파이프라인까지. 마지막에는 반복 작업을 스킬(SKILL.md)로 저장해 '스킬 써줘' 한 줄로 전체 파이프라인을 실행합니다.",
    level: "입문+",
    audience: "홈페이지·서비스를 만든 뒤 운영을 자동화하고 싶은 사람",
    outcome: "Computer Use 자동화, SEO 루틴, SNS 5채널 배포, 블로그 원클릭 발행, 유튜브·쇼츠 파이프라인, 스킬 파일로 원클릭 자동화",
    parts: ["1부 · Aside 도구 기초", "2부 · SEO 자동화", "3부 · SNS 자동 배포", "4부 · 블로그 자동화", "5부 · 영상 자동화"],
    badge: "Windows · macOS",
  },
  {
    slug: "homepage-cli",
    title: "홈페이지 만들기 — 고급",
    tagline: "지도 API·Analytics·MCP·어드민·SEO·대시보드까지",
    description:
      "기본 홈페이지 과정을 마친 뒤 한 단계 더. 네이버·카카오 지도 API, Vercel Analytics, Chrome Extension + Aside Browser(Computer Use), MCP 확장, 도메인 고급 설정, Pocketbase/Supabase 어드민, 카카오 OAuth, SEO 고급(JSON-LD·Core Web Vitals), 구글·네이버 서치 어드바이저, 통합 관리 대시보드까지 단계별로 다룹니다.",
    level: "입문+",
    audience: "홈페이지 과정을 마쳤고 더 많은 기능을 원하는 사람",
    outcome: "지도 API, 방문자 통계, MCP 자동화, 어드민 대시보드, 카카오 로그인, SEO 고급, 검색 등록, 통합 관리 대시보드",
    parts: ["고급 · 도구 활용", "고급 · 어드민 & 인증", "고급 · SEO & 대시보드"],
    badge: "고급 · Windows · macOS",
  },
];

export function getCourse(slug: string) {
  return COURSES.find((c) => c.slug === slug);
}
