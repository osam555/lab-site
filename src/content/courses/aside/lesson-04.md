---
number: 4
title: Chrome Extension — 브라우저 사이드 패널
subtitle: 어떤 웹 페이지에서든 Claude와 대화하는 법
goal: Claude Chrome Extension을 설치하고, 낯선 설정 화면(DNS·Vercel·구글 콘솔)에서 사이드 패널을 열어 화면을 공유하며 단계별 안내를 받습니다.
minutes: 30
part: 1부 · Aside 도구 기초
---

## Chrome Extension이란

Claude Code 앱과 별개로, **Chrome 브라우저 자체**에 Claude 사이드 패널을 달아주는 확장입니다.

| | Chrome Extension | Aside Browser (앱) |
|---|---|---|
| **위치** | Chrome 브라우저 오른쪽 사이드 | Claude Code 앱 오른쪽 패널 |
| **로그인** | 사용자가 이미 로그인된 Chrome 세션 사용 | Aside에서 별도 로그인 |
| **적합한 때** | 평소 쓰는 Chrome에서 바로 질문 | Claude Code 앱 안에서 자동화 |

---

## 설치

1. Chrome 열기 → `chrome://extensions/`
2. 우측 상단 **Chrome 웹 스토어** 링크 클릭
3. 검색: `Claude` → Anthropic PBC 게시자 공식 확장 → **Chrome에 추가**
4. 주소창 오른쪽에 Claude 아이콘이 생깁니다

---

## 사용법

### 기본 사이드 패널 열기

1. 어떤 웹 페이지든 → 주소창 오른쪽 **Claude 아이콘** 클릭
2. 오른쪽에 사이드 패널이 열립니다
3. 평소 Claude 대화처럼 질문합니다

### 화면 공유해서 질문하기

사이드 패널 하단 **📷 화면 공유** 버튼 → **현재 탭 공유**

> "이 화면에서 A 레코드를 어디에 추가하면 되는지 알려줘."

Claude가 지금 내 화면을 보고 정확한 위치를 가리켜 줍니다.

스크린샷을 직접 붙여넣는 것도 됩니다:
- Mac: `Cmd + Shift + 4` → 드래그 → 사이드 패널에 붙여넣기
- Windows: `Win + Shift + S` → 드래그 → 사이드 패널에 붙여넣기

---

## 실전 예시

### DNS 설정 화면

가비아 DNS 관리 화면을 열고 사이드 패널에서:

> [화면 공유 후] "Vercel이 A 레코드에 76.76.21.21을 넣으라고 했는데, 이 화면에서 어디를 눌러야 해?"

### 구글 서치 콘솔 처음 설정

> [화면 공유 후] "도메인 속성을 추가하고 싶어. 이 화면에서 다음 단계는 뭐야?"

### Vercel 프로젝트 설정

> "Analytics 탭을 찾고 싶은데 현재 화면에서 어디에 있어? [화면 공유]"

### 네이버 서치 어드바이저

> "사이트맵 제출 메뉴를 찾고 있어. [화면 공유]"

---

## Extension vs Aside Browser 선택 기준

```
평소 Chrome으로 작업 중 + 빠르게 한 가지 질문
    → Chrome Extension 사이드 패널

Claude Code 앱에서 작업 중 + 자동화 작업 연속 실행
    → Aside Browser + Computer Use
```

---

## 오늘의 체크리스트

- [ ] Chrome Extension을 설치했다
- [ ] 사이드 패널을 열었다
- [ ] 화면을 공유해서 Claude에게 특정 UI 위치를 물어봤다
- [ ] 복잡한 설정 페이지에서 Extension의 도움을 받아 완료했다
