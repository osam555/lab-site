# 바이브 코딩 랩

코딩을 몰라도 Claude Code와 함께 홈페이지(10강)와 웹 서비스(20강)를 만드는 무료 강의 사이트.

## 실행

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 배포 전 확인
```

## 구조

- `src/lib/courses.ts` — 과정 목록 (slug, 제목, 부 구성)
- `src/content/courses/<과정>/lesson-NN.md` — 강의 본문 (frontmatter: number, title, subtitle, goal, minutes, part)
  - 본문에서 `::: windows` … `:::` / `::: mac` … `:::` 블록을 쓰면 강의 상단에 Windows/macOS 전환 버튼이 생깁니다
- `src/content/{skills,tips,ideas}/*.md`, `src/content/{prompts,repos}.ts` — 부가 섹션
- `src/lib/lessons.ts` — 마크다운 로더
- `src/app/page.tsx` — 홈 (커리큘럼 + FAQ)
- `src/app/lectures/[course]/` — 과정 페이지와 개별 강의 페이지

강의를 추가·수정하려면 `src/content/courses/<과정>/`의 마크다운만 편집하면 됩니다. 새 과정은 `courses.ts`에 등록하고 폴더를 만들면 됩니다.

## 배포

GitHub에 push 후 Vercel에서 저장소를 import하면 됩니다. 별도 환경변수는 없습니다.
