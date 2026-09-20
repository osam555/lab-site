---
title: "Hydration failed 에러가 떠요"
category: 화면
order: 5
---
서버에서 그린 화면과 브라우저에서 그린 화면이 **다르다**는 뜻입니다. 흔한 원인:

- `new Date()`나 `Math.random()`처럼 매번 값이 바뀌는 것을 화면에 바로 출력
- `localStorage`를 렌더링 중에 읽음 (서버에는 localStorage가 없음)
- `<p>` 안에 `<div>`처럼 HTML 구조가 잘못됨

AI에게 "hydration 에러야. localStorage나 Date를 useEffect 안으로 옮겨줘"라고 하면 대부분 해결됩니다.
