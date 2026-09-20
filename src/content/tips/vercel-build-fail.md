---
title: "로컬은 되는데 Vercel 배포가 실패해요"
category: 배포
order: 12
---
Vercel은 `npm run build`를 실행합니다. 로컬에서도 같은 명령을 돌려보세요.

```bash
npm run build
```

로컬에서도 실패하면 → 에러를 AI에게. 보통 TypeScript 타입 에러이고, `npm run dev`는 이걸 눈감아줍니다.

로컬은 통과하는데 Vercel만 실패하면 → Vercel 로그의 빨간 줄을 복사해 AI에게. 대개 환경변수 누락이거나 Node 버전 차이입니다.
