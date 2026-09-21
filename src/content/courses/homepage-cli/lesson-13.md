---
number: 13
title: Chrome Extension & Aside Browser — 복잡한 작업 돌파하기
subtitle: 낯선 설정 화면에서 Claude가 길 안내를 해주는 두 가지 도구
goal: Claude Chrome Extension으로 브라우저 화면을 보며 질문하고, Claude Code 앱의 Aside(내장 브라우저)로 Claude가 직접 웹 UI를 조작해 복잡한 설정을 완료합니다.
minutes: 45
part: 고급 · 도구 활용
---

## 왜 이 도구가 필요한가

Vercel Analytics 설정, DNS 레코드 추가, 도메인 구입처마다 다른 관리 화면…
글로 설명하기 어렵고 스크린샷도 업체마다 다릅니다.

해결책은 두 가지입니다.

| 상황 | 도구 |
|---|---|
| 내가 직접 하는데 화면이 낯설다 | **Chrome Extension** — 사이드 패널에서 실시간 안내 |
| 반복 작업이거나 아예 맡기고 싶다 | **Aside Browser (Computer Use)** — Claude가 직접 조작 |

---

## 도구 1 — Claude Chrome Extension

### 설치

1. Chrome 브라우저 열기
2. 주소창에: `chrome://extensions/` → 우측 상단 **Chrome 웹 스토어** 이동
3. 검색: **Claude** → Anthropic 공식 확장 (게시자 Anthropic PBC) → **Chrome에 추가**
4. 확장 아이콘이 주소창 오른쪽에 생깁니다

### 사용법 — DNS 설정 예시

1. 도메인 구입처(가비아, Namecheap 등)에 로그인
2. DNS 관리 화면 열기
3. 화면이 낯설면: 주소창 오른쪽 Claude 아이콘 클릭
4. 오른쪽에 사이드 패널이 열립니다
5. 패널 하단 카메라(스크린샷) 버튼 → **현재 화면 공유**

> "Vercel이 A 레코드에 76.76.21.21을 넣으라는데, 이 화면에서 어디에 어떻게 넣어야 해?"

Claude가 지금 내 화면을 보고 정확한 버튼과 필드 위치를 알려줍니다.

### 잘 쓰이는 상황

- DNS 레코드 추가 (A, CNAME, TXT)
- Vercel 프로젝트 설정 메뉴 탐색
- 도메인 갱신·이전 화면 이해
- 구글 서치 콘솔 소유 인증

> [!TIP]
> 화면 공유 없이도 됩니다. 화면을 캡처(Cmd+Shift+4 / Win+Shift+S)해서 Claude 사이드 패널에 붙여넣으면 같은 효과입니다.

---

## 도구 2 — Aside Browser (Computer Use)

Claude Code 데스크탑 앱 오른쪽 패널의 **브라우저 탭**입니다.
기본 미리보기(내 파일 확인)와 달리, **실제 인터넷을 탐색**하고 Claude가 직접 클릭·입력할 수 있습니다.

### 여는 법

앱 오른쪽 패널 상단 탭에서 **Browser** (또는 🌐) 탭 선택.
주소창이 나타나면 인터넷 주소 입력 가능.

### 사용법 1 — 탐색 + 안내

```
[Aside Browser 주소창]: https://vercel.com/dashboard
```

대화창에:

> 지금 Aside 브라우저에서 내 Vercel 프로젝트를 보고 있어.
> Analytics 탭을 찾아서 Enable 버튼이 어디 있는지 알려줘.

Claude가 현재 Aside 브라우저 화면을 보고 단계를 안내합니다.

### 사용법 2 — 직접 조작 (Computer Use)

더 강력한 방식입니다. Claude가 직접 마우스를 클릭하고 입력합니다.

대화창에:

> Computer Use 모드로 Vercel 대시보드에서 Speed Insights를 켜줘.
> 지금 Aside 브라우저에 Vercel이 열려 있어.

> [!IMPORTANT]
> **로그인이 필요한 페이지는 반드시 사람이 먼저 로그인합니다.**
> Aside 브라우저에서 Vercel/GitHub에 직접 로그인한 뒤 Claude에게 넘기세요.
> Claude에게 아이디·비밀번호를 절대 알려주지 마세요.

### 실전 예시 — 도메인 DNS 자동 추가

1. 도메인 구입처 로그인 → DNS 관리 화면으로 이동
2. Aside 브라우저 주소창에 그 URL 입력 (또는 그 탭을 Aside로 드래그)
3. 대화창에:

> Vercel이 아래 두 레코드를 DNS에 넣으라고 해. Aside 브라우저에서 직접 추가해줘.
> - Type: A, Name: @, Value: 76.76.21.21
> - Type: CNAME, Name: www, Value: cname.vercel-dns.com

Claude가 DNS 관리 화면에서 직접 필드를 찾아 입력하고 저장합니다.

### Computer Use가 안 되는 경우

앱 버전에 따라 Computer Use가 비활성화되어 있을 수 있습니다.
그럴 때는 **Chrome Extension + 화면 공유** 방식으로 안내를 받으세요.

---

## 두 도구 선택 기준

```
낯선 화면인데 내가 직접 하고 싶다
    └─► Chrome Extension 사이드 패널에서 실시간 안내

반복 작업이거나 여러 페이지를 넘나드는 작업
    └─► Aside Browser Computer Use로 Claude에게 위임
```

## 오늘의 체크리스트

- [ ] Chrome Extension을 설치했다
- [ ] Extension 사이드 패널에서 화면을 공유해 질문해봤다
- [ ] Aside 브라우저에서 실제 웹사이트를 열어봤다
- [ ] 복잡한 설정 1가지를 두 도구 중 하나로 해결했다
