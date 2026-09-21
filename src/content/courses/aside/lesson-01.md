---
number: 1
title: Aside Browser — 앱 안의 브라우저
subtitle: 미리보기 패널을 인터넷 창으로 바꾸는 법
goal: Claude Code 앱 오른쪽 Aside 패널의 브라우저를 열고, 실제 인터넷을 탐색하며 화면 내용을 Claude에게 전달하는 기본 사용법을 익힙니다.
minutes: 30
part: 1부 · Aside 도구 기초
---

## Aside 브라우저란

Claude Code 데스크탑 앱 오른쪽 패널에는 두 가지 모드가 있습니다.

| 모드 | 용도 | 주소창 |
|---|---|---|
| **Preview** | 내 프로젝트 파일 미리보기 | localhost 주소만 |
| **Browser (Aside)** | 실제 인터넷 탐색 | 어떤 URL이든 |

Aside 브라우저를 열면 Claude가 지금 보이는 화면을 인식하고, 직접 조작까지 할 수 있습니다.

---

## 여는 방법

1. 앱 오른쪽 패널 상단 탭에서 **Browser** (또는 🌐 아이콘) 선택
2. 주소창이 나타납니다
3. URL 입력 → Enter

처음엔 비어있거나 `about:blank`가 보입니다. 주소창을 클릭해서 바로 입력합니다.

---

## 기본 사용 패턴

### 패턴 1 — 화면 보여주고 질문

Aside 브라우저에 복잡한 페이지를 열고, 대화창에서 질문합니다.

```
[Aside 브라우저]: https://vercel.com/dashboard
```

> 지금 Aside 브라우저에 Vercel 대시보드가 열려 있어.
> Analytics 탭이 어디에 있는지 알려줘.

Claude가 현재 Aside 화면을 보고 정확한 위치를 안내합니다.

### 패턴 2 — 정보 추출

웹 페이지의 특정 정보를 가져오게 합니다.

```
[Aside 브라우저]: https://map.naver.com/v5/search/[가게이름]
```

> 이 검색 결과에서 우리 가게 좌표(위도/경도)를 찾아줘.

### 패턴 3 — 탐색 안내

어떻게 이동하면 되는지 단계를 알려달라고 합니다.

```
[Aside 브라우저]: https://searchadvisor.naver.com
```

> 네이버 서치 어드바이저에서 새 사이트를 등록하는 메뉴까지 가는 경로를 알려줘.

---

## 로그인 페이지 사용 시 주의

> [!IMPORTANT]
> 로그인이 필요한 서비스(Vercel, 네이버, 구글 등)는 **사람이 먼저 로그인**합니다.
> Aside 브라우저에서 직접 아이디/비밀번호를 입력해 로그인한 뒤, Claude에게 이후 작업을 맡기세요.
> Claude에게 로그인 정보를 절대 알려주지 마세요.

---

## 오늘의 체크리스트

- [ ] Aside 브라우저 탭을 열었다
- [ ] 실제 외부 URL(예: vercel.com)을 입력해 페이지가 열렸다
- [ ] Claude에게 Aside 화면의 내용에 대해 질문해봤다
