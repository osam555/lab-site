export type Repo = {
  name: string;
  url: string;
  category: string;
  what: string;
  why: string;
  install?: string;
  lesson?: number;
};

export const REPO_CATEGORIES = ["기본 스택", "화면·디자인", "데이터·인증", "품질·자동화", "배우기"] as const;

export const REPOS: Repo[] = [
  {
    name: "Next.js",
    url: "https://github.com/vercel/next.js",
    category: "기본 스택",
    what: "화면과 서버를 한 프로젝트에서 만드는 React 프레임워크",
    why: "AI가 가장 많이 학습한 웹 프레임워크라 요청 품질이 안정적입니다. 8강부터 끝까지 이걸로 갑니다.",
    install: "npx create-next-app@latest my-service",
    lesson: 8,
  },
  {
    name: "Tailwind CSS",
    url: "https://github.com/tailwindlabs/tailwindcss",
    category: "기본 스택",
    what: "클래스 이름으로 스타일을 입히는 CSS 도구",
    why: "CSS 파일을 따로 관리하지 않아도 되고, AI가 만든 코드에서 스타일을 눈으로 바로 읽을 수 있습니다. create-next-app에 포함.",
    lesson: 11,
  },
  {
    name: "TypeScript",
    url: "https://github.com/microsoft/TypeScript",
    category: "기본 스택",
    what: "JavaScript에 타입을 더한 언어",
    why: "AI가 저지르는 실수의 상당수를 실행 전에 빨간 줄로 잡아줍니다. 입문자에게 더 필요합니다. create-next-app에 포함.",
  },
  {
    name: "shadcn/ui",
    url: "https://github.com/shadcn-ui/ui",
    category: "화면·디자인",
    what: "복사해서 쓰는 UI 컴포넌트 모음 (버튼, 다이얼로그, 폼…)",
    why: "라이브러리가 아니라 코드가 내 프로젝트에 들어오므로 AI가 자유롭게 고칠 수 있습니다. 18강 디자인 레벨업에 유용.",
    install: "npx shadcn@latest init",
    lesson: 18,
  },
  {
    name: "Lucide",
    url: "https://github.com/lucide-icons/lucide",
    category: "화면·디자인",
    what: "일관된 선 굵기의 아이콘 세트",
    why: "이모지를 아이콘 대용으로 쓰는 'AI 티'를 벗기는 가장 빠른 방법입니다.",
    install: "npm install lucide-react",
    lesson: 18,
  },
  {
    name: "Pretendard",
    url: "https://github.com/orioncactus/pretendard",
    category: "화면·디자인",
    what: "한국어 화면에 잘 맞는 무료 글꼴",
    why: "글꼴 하나만 바꿔도 화면 인상이 달라집니다. 18강에서 추천하는 기본 글꼴.",
    lesson: 18,
  },
  {
    name: "Supabase",
    url: "https://github.com/supabase/supabase",
    category: "데이터·인증",
    what: "PostgreSQL 데이터베이스 + 로그인 + 파일 저장을 한 번에",
    why: "테이블을 엑셀처럼 화면에서 만들고, 로그인까지 같은 곳에서 해결됩니다. 12·14강.",
    install: "npm install @supabase/supabase-js @supabase/ssr",
    lesson: 12,
  },
  {
    name: "Drizzle ORM",
    url: "https://github.com/drizzle-team/drizzle-orm",
    category: "데이터·인증",
    what: "TypeScript로 테이블을 정의하고 쿼리하는 도구",
    why: "Supabase 대시보드 대신 코드로 테이블을 관리하고 싶어질 때(중급). 처음엔 필요 없습니다.",
    install: "npm install drizzle-orm",
  },
  {
    name: "Zod",
    url: "https://github.com/colinhacks/zod",
    category: "데이터·인증",
    what: "입력값이 올바른 형식인지 검사하는 도구",
    why: "API 라우트로 들어오는 값과 외부 API 응답을 검사하면 13강의 '응답 파싱 실패' 같은 문제가 줄어듭니다.",
    install: "npm install zod",
    lesson: 13,
  },
  {
    name: "Prettier",
    url: "https://github.com/prettier/prettier",
    category: "품질·자동화",
    what: "코드를 자동으로 보기 좋게 정렬",
    why: "Claude가 만든 코드와 사람이 고친 코드의 모양을 통일해줍니다. 4강 확장 추천.",
    install: "npm install -D prettier",
    lesson: 4,
  },
  {
    name: "Husky",
    url: "https://github.com/typicode/husky",
    category: "품질·자동화",
    what: "커밋·푸시 직전에 자동으로 명령을 실행하는 git hook 도구",
    why: "커밋 전에 npm run check가 자동으로 돌게 만듭니다. 19강 자동화.",
    install: "npm install -D husky && npx husky init",
    lesson: 19,
  },
  {
    name: "Playwright",
    url: "https://github.com/microsoft/playwright",
    category: "품질·자동화",
    what: "브라우저를 자동으로 조작해 화면을 테스트하는 도구",
    why: "'로그인 → 저장 → 목록 확인' 흐름을 매번 손으로 누르는 대신 AI에게 테스트를 쓰게 할 수 있습니다(중급).",
    install: "npm init playwright@latest",
  },
  {
    name: "n8n",
    url: "https://github.com/n8n-io/n8n",
    category: "품질·자동화",
    what: "코드 없이 여러 서비스를 이어 붙이는 자동화 도구",
    why: "'새 가입자가 생기면 슬랙으로 알림' 같은 서비스 바깥의 자동화에. 19강.",
    lesson: 19,
  },
  {
    name: "The Missing Semester",
    url: "https://github.com/missing-semester/missing-semester",
    category: "배우기",
    what: "터미널, Git, 에디터 같은 '수업에서 안 가르치는' 도구 강의 (MIT)",
    why: "3~5강이 부족하게 느껴졌다면 다음 단계로. 한국어 번역본도 있습니다.",
  },
  {
    name: "You Don't Know JS Yet",
    url: "https://github.com/getify/You-Dont-Know-JS",
    category: "배우기",
    what: "JavaScript를 제대로 이해하기 위한 무료 책",
    why: "AI 코드를 '읽는' 수준에서 '고치는' 수준으로 올라가고 싶을 때. 20강 마지막 조언의 다음 단계.",
  },
];
