---
title: "Tailwind 클래스를 넣었는데 스타일이 안 먹어요"
category: 화면
order: 6
---
1. **오타**: `text-gray-500`을 `text-grey-500`으로 쓰는 식. 에디터에서 자동완성이 뜨는지 보세요.
2. **동적 클래스**: `` `bg-${color}-500` `` 처럼 조합해서 만든 클래스는 Tailwind가 인식 못 합니다. 전체 이름을 그대로 적어야 합니다.
3. **globals.css의 `@import "tailwindcss"`가 지워짐**: AI가 CSS를 정리하다 지우는 경우가 있습니다.

AI에게: "이 요소에 Tailwind 스타일이 안 적용돼. 클래스 이름과 globals.css를 확인해줘."
