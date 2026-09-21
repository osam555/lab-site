---
number: 15
title: Aside MCP — Claude 능력 확장하기
subtitle: MCP 서버를 연결해 Claude가 검색·브라우저·파일을 직접 다루게 합니다
goal: Claude Code 데스크탑 앱에 MCP 서버를 추가하고, 웹 검색·브라우저 자동화·파일 관리 등 홈페이지 운영에 유용한 MCP를 실전에서 활용합니다.
minutes: 50
part: 고급 · 도구 활용
---

## MCP가 뭔가요?

**MCP(Model Context Protocol)** 는 Claude에게 새로운 "손"을 달아주는 표준 규격입니다.

기본 Claude Code는 프로젝트 폴더 안의 파일만 다룹니다. MCP를 연결하면:

| MCP 서버 | Claude가 할 수 있게 되는 것 |
|---|---|
| **웹 검색** | 최신 정보를 찾아 홈페이지 글에 반영 |
| **브라우저 자동화** | Vercel·DNS 설정 페이지를 직접 클릭 |
| **파일 시스템 확장** | 프로젝트 외부 폴더 접근·백업 |
| **이미지 생성** | 홈페이지용 이미지를 AI로 생성 |
| **캘린더·노션** | 영업 일정을 홈페이지에 자동 반영 |

Claude Code 앱 오른쪽 **Aside 패널 → MCP 탭**에서 연결된 서버 목록과 상태를 확인할 수 있습니다.

---

## MCP 설정 방법

Claude Code 앱에서 MCP 서버를 추가하는 방법은 두 가지입니다.

### 방법 1 — 앱 UI (추천)

1. Claude Code 앱 → 왼쪽 하단 **설정(⚙)** 또는 메뉴 → **MCP Servers**
2. **+ Add Server** 클릭
3. 서버 이름·명령어 입력 → **Save**
4. Aside 패널 MCP 탭에서 연결 상태(초록 점) 확인

### 방법 2 — 설정 파일 직접 편집

Claude Code 앱은 `~/.claude/claude_desktop_config.json` (또는 앱 설정 폴더)에 MCP 설정을 저장합니다.

Claude Code 대화창에:

> 내 Claude Code 앱의 MCP 설정 파일 위치를 알려주고, 아래 MCP 서버를 추가해줘:
> [서버 이름과 설정 붙여넣기]

---

## 홈페이지 운영에 유용한 MCP 3가지

### 1. 웹 검색 MCP (Brave Search / Tavily)

**용도**: 경쟁 홈페이지 분석, 최신 트렌드 반영, 가격 조사

**설치**:

> MCP 설정에 Brave Search MCP를 추가해줘. API 키는 [brave.com/search/api에서 발급한 키] 야.

**활용 예**:

> 내 동네 카페 홈페이지를 3개 찾아서 디자인과 메뉴 구성을 분석해줘. 우리 홈페이지와 비교하면 뭘 보완하면 좋을까?

> 2024년 카페 홈페이지 트렌드를 검색해서 index.html에 반영할 수 있는 아이디어 3가지 제안해줘.

---

### 2. 브라우저 자동화 MCP (Playwright)

**용도**: Vercel·DNS 화면 자동 조작, 홈페이지 자동 테스트, 폼 자동 입력

> [!NOTE]
> 13강 Aside Browser Computer Use와 비슷하지만, MCP Playwright는 **헤드리스 브라우저**(화면 없이 백그라운드에서 동작)라 더 빠르고 반복 자동화에 유리합니다.

**설치**:

> Playwright MCP 서버를 Claude Code에 추가해줘.

**활용 예**:

> 내 홈페이지(mycafe.kr)의 모든 페이지를 열어서 404 링크가 있는지 확인해줘.

> 메뉴 페이지에서 가격 정보를 모두 긁어와서 정리해줘. 다음에 가격 업데이트할 때 참고할 spreadsheet 형태로.

> 홈페이지 모바일 화면을 캡처해서 images/screenshot-mobile.png로 저장해줘.

---

### 3. 파일 시스템 MCP

**용도**: 프로젝트 폴더 외부 파일 접근, 자동 백업, 이미지 일괄 처리

**설치**:

> 파일 시스템 MCP를 추가해줘. 접근 허용 경로는 ~/Desktop/my-site 와 ~/Documents/cafe-backup 이야.

**활용 예**:

> Documents/cafe-backup 폴더에 오늘 날짜로 my-site 전체를 백업해줘.

> Downloads 폴더에 있는 사진들을 my-site/images에 복사하고, 각각 1600px·300KB 이하로 줄여줘.

---

## Aside 패널에서 MCP 확인하기

앱 오른쪽 Aside 패널 → **MCP** 탭:

```
● Brave Search      연결됨
● Playwright        연결됨
● Filesystem        연결됨
○ [비활성 서버]      연결 끊김
```

- **초록(●)**: 정상 동작
- **회색(○)**: 비활성 또는 오류 → 서버 설정 재확인

Claude Code 대화창에서 `/ tools` 또는 `@` 를 입력하면 지금 사용 가능한 MCP 도구 목록이 나옵니다.

---

## 실전 활용 — 홈페이지 주간 관리 루틴

MCP를 모두 연결한 뒤 이런 요청이 가능해집니다:

> 다음을 순서대로 해줘:
> 1. 웹 검색으로 이번 주 우리 동네 카페 관련 뉴스나 이벤트 찾기
> 2. 관련 있는 것만 골라 index.html 공지 영역에 추가
> 3. 변경된 파일을 커밋하고 push

---

## 오늘의 체크리스트

- [ ] MCP 서버 1개 이상을 Aside 패널에서 연결 확인했다
- [ ] 웹 검색 MCP로 경쟁 홈페이지 또는 트렌드를 조사했다
- [ ] (선택) Playwright MCP로 내 홈페이지 링크 점검을 자동화했다
- [ ] (선택) 파일 시스템 MCP로 백업 또는 이미지 일괄 처리를 했다
