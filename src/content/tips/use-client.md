---
title: "useState를 썼더니 에러가 나요 (use client)"
category: 화면
order: 4
---
Next.js App Router에서는 파일이 기본적으로 **서버 컴포넌트**입니다. 클릭, 입력, `useState`, `useEffect`처럼 브라우저에서 움직이는 것이 있으면 파일 **첫 줄**에 이걸 넣어야 합니다.

```tsx
"use client";
```

AI에게 에러를 그대로 보여주면 바로 고쳐줍니다. 반대로 `fs`로 파일을 읽거나 비밀 키를 쓰는 코드에는 이 줄이 **있으면 안 됩니다.**
