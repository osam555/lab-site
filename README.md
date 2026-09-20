# 바이브 코딩 20강

코딩을 몰라도 AI와 함께 하루 1강, 20일이면 내 서비스를 세상에 내놓는 무료 강의 사이트.

## 실행

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 배포 전 확인
```

## 구조

- `src/content/lessons/lesson-NN.md` — 강의 본문 (frontmatter: number, title, subtitle, goal, minutes, part)
- `src/lib/lessons.ts` — 마크다운 로더
- `src/app/page.tsx` — 홈 (커리큘럼 + FAQ)
- `src/app/lectures/vibe-coding/` — 강의 목록과 개별 강의 페이지

강의를 추가·수정하려면 `src/content/lessons/`의 마크다운만 편집하면 됩니다.

## 배포

GitHub에 push 후 Vercel에서 저장소를 import하면 됩니다. 별도 환경변수는 없습니다.
