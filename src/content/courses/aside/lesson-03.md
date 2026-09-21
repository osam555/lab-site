---
number: 3
title: MCP 서버 — Claude 능력 확장
subtitle: 웹검색·브라우저자동화·파일관리 MCP 연결하기
goal: Claude Code 앱에 MCP 서버 3가지(웹검색·Playwright·파일시스템)를 연결하고, Aside 패널에서 상태를 확인하고, 각 MCP를 실전 작업에 활용합니다.
minutes: 45
part: 1부 · Aside 도구 기초
---

## MCP란

**MCP(Model Context Protocol)**는 Claude에게 새로운 능력을 부여하는 표준 규격입니다.

- 기본 Claude: 프로젝트 폴더 파일만 다룸
- MCP 연결 후: 인터넷 검색, 브라우저 자동화, 외부 파일 접근 가능

Aside 패널 → **MCP 탭**에서 연결된 서버 목록과 상태를 확인합니다.

---

## MCP 추가 방법

앱 설정 메뉴 → **MCP Servers** → **+ Add** → 서버 설정 입력.

또는 Claude Code 대화창에:

> MCP 설정 파일 위치를 알려주고, 아래 서버를 추가해줘.

---

## MCP 1 — 웹 검색 (Brave Search)

**설치**

1. [brave.com/search/api](https://brave.com/search/api) → 무료 API 키 발급 (월 2,000건 무료)
2. Claude Code에:

> Brave Search MCP를 추가해줘. API 키는 [발급한 키]야.

**Aside 패널 확인**: MCP 탭에서 `● Brave Search 연결됨` 확인.

**활용 예시**

> 지금 내 블로그에 올릴 "[주제]" 관련 최신 정보를 검색해서 핵심 3가지를 정리해줘.

> 우리 동네 경쟁 카페 홈페이지를 3개 찾아서 메뉴 구성과 디자인을 비교해줘.

> 이번 주 "[업종]" 관련 뉴스를 검색해서 SNS에 쓸 만한 소재 5개를 골라줘.

---

## MCP 2 — 브라우저 자동화 (Playwright)

Computer Use보다 빠른 **헤드리스 브라우저** 자동화입니다. 화면 없이 백그라운드에서 동작합니다.

**설치**

> Playwright MCP 서버를 Claude Code에 추가해줘.

**활용 예시**

> 내 홈페이지(mycafe.kr)의 모든 링크를 클릭해서 404 오류가 있는지 확인해줘.

> 네이버 블로그에 글을 올릴 때 에디터에 본문을 자동으로 채워줘.
> 에디터 URL: [내 블로그 글쓰기 URL]
> 제목: "[제목]", 본문: [아래 내용]

> 내 홈페이지 모바일 화면을 캡처해서 images/mobile-preview.png로 저장해줘.

---

## MCP 3 — 파일 시스템

프로젝트 폴더 외부의 파일에도 접근합니다.

**설치**

> 파일 시스템 MCP를 추가해줘.
> 접근 허용 경로: ~/Desktop/my-site, ~/Documents/blog-drafts, ~/Downloads

**활용 예시**

> Downloads 폴더의 최신 사진들을 my-site/images로 복사하고, 각각 1600px·300KB 이하로 최적화해줘.

> Documents/blog-drafts 폴더의 마크다운 파일들을 읽어서 홈페이지 소식 페이지용 HTML로 변환해줘.

> my-site 전체를 오늘 날짜로 Documents/backups에 백업해줘.

---

## MCP 상태 확인

```
Aside 패널 → MCP 탭

● Brave Search      연결됨
● Playwright        연결됨
● Filesystem        연결됨
○ [비활성 서버]      연결 끊김 → 앱 재시작 또는 서버 설정 재확인
```

대화창에서 `@` 또는 `/tools` 를 입력하면 현재 사용 가능한 MCP 도구 목록이 나옵니다.

---

## 오늘의 체크리스트

- [ ] Aside 패널 MCP 탭에서 서버 목록을 확인했다
- [ ] Brave Search MCP로 실제 검색을 해봤다
- [ ] (선택) Playwright MCP로 내 홈페이지를 자동 테스트했다
- [ ] (선택) 파일 시스템 MCP로 사진을 이동·최적화했다
