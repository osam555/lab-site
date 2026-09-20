---
title: ".env.local을 고쳤는데 반영이 안 돼요"
category: 환경
order: 3
---
환경변수는 **서버가 시작될 때 한 번만** 읽습니다. `npm run dev`를 `Ctrl+C`로 끄고 다시 켜세요.

그래도 `undefined`면 두 가지를 확인:
1. 브라우저 코드에서 쓰는 변수인데 이름이 `NEXT_PUBLIC_`으로 시작하지 않음
2. 파일 이름이 `.env.local`이 아니라 `env.local`이나 `.env.local.txt`
