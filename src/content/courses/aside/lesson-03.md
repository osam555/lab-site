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

<div class="prompt-box not-prose" data-prompt="3-1" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-1</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

MCP 설정 파일 위치를 알려주고, 아래 서버를 추가해줘.

</div>
</div>

---

## MCP 1 — 웹 검색 (Brave Search)

**설치**

1. [brave.com/search/api](https://brave.com/search/api) → 무료 API 키 발급 (월 2,000건 무료)

> **용어 풀이** API 키 = 서비스를 내 이름으로 쓰게 해 주는 비밀번호 같은 긴 문자열입니다. 화면 공유·캡처·공개 저장소에 노출되지 않게 조심하세요.
2. Claude Code에:

<div class="prompt-box not-prose" data-prompt="3-2" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-2</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Brave Search MCP를 추가해줘. API 키는 [발급한 키]야.

</div>
</div>

**Aside 패널 확인**: MCP 탭에서 `● Brave Search 연결됨` 확인.

**활용 예시**

<div class="prompt-box not-prose" data-prompt="3-3" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-3</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

지금 내 블로그에 올릴 "[주제]" 관련 최신 정보를 검색해서 핵심 3가지를 정리해줘.

</div>
</div>

<div class="prompt-box not-prose" data-prompt="3-4" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-4</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

우리 동네 경쟁 카페 홈페이지를 3개 찾아서 메뉴 구성과 디자인을 비교해줘.

</div>
</div>

<div class="prompt-box not-prose" data-prompt="3-5" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-5</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

이번 주 "[업종]" 관련 뉴스를 검색해서 SNS에 쓸 만한 소재 5개를 골라줘.

</div>
</div>

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

::: practice
**실습 미션 — Brave Search MCP 연결하고 검색해 보기**

- [ ] Brave 무료 API 키를 발급받았다 (키는 다른 사람에게 보이지 않게 보관)
- [ ] Claude에게 "Brave Search MCP를 추가해줘"라고 시켰다
- [ ] Aside 패널 MCP 탭에서 `● Brave Search 연결됨` 표시를 **눈으로 확인**했다
- [ ] 프롬프트 3-3으로 "[주제]" 최신 정보 핵심 3가지를 받았다
- [ ] Claude가 알려준 링크 1개를 직접 열어 내용이 맞는지 확인했다
:::

---

## 더 해보기(선택) — MCP 2: 브라우저 자동화 (Playwright)

> 아래 두 가지(Playwright·파일 시스템)는 필수가 아닙니다. Brave Search만 연결돼도 다음 강의를 따라갈 수 있고, 6강 사이트 점검 등에서 필요해지면 돌아와 연결하세요.

Computer Use보다 빠른 **헤드리스 브라우저** 자동화입니다. 화면 없이 백그라운드에서 동작합니다.

**설치**

<div class="prompt-box not-prose" data-prompt="3-6" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-6</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Playwright MCP 서버를 Claude Code에 추가해줘.

</div>
</div>

**활용 예시**

<div class="prompt-box not-prose" data-prompt="3-7" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-7</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

내 홈페이지(mycafe.kr)의 모든 링크를 클릭해서 404 오류가 있는지 확인해줘.

</div>
</div>

<div class="prompt-box not-prose" data-prompt="3-8" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-8</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

네이버 블로그에 글을 올릴 때 에디터에 본문을 자동으로 채워줘.
에디터 URL: [내 블로그 글쓰기 URL]
제목: "[제목]", 본문: [아래 내용]

</div>
</div>

<div class="prompt-box not-prose" data-prompt="3-9" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-9</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

내 홈페이지 모바일 화면을 캡처해서 images/mobile-preview.png로 저장해줘.

</div>
</div>

---

## 더 해보기(선택) — MCP 3: 파일 시스템

프로젝트 폴더 외부의 파일에도 접근합니다.

**설치**

<div class="prompt-box not-prose" data-prompt="3-10" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-10</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

파일 시스템 MCP를 추가해줘.
접근 허용 경로: ~/Desktop/my-site, ~/Documents/blog-drafts, ~/Downloads

</div>
</div>

> [!NOTE]
> 허용 경로는 **꼭 필요한 폴더만** 적습니다. 처음에는 `~/Desktop/my-site` 하나로 시작하고, 필요할 때 Downloads 같은 넓은 폴더를 추가하세요.


**활용 예시**

<div class="prompt-box not-prose" data-prompt="3-11" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-11</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Downloads 폴더의 최신 사진들을 my-site/images로 복사하고, 각각 1600px·300KB 이하로 최적화해줘.

</div>
</div>

<div class="prompt-box not-prose" data-prompt="3-12" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-12</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Documents/blog-drafts 폴더의 마크다운 파일들을 읽어서 홈페이지 소식 페이지용 HTML로 변환해줘.

</div>
</div>

<div class="prompt-box not-prose" data-prompt="3-13" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-13</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

my-site 전체를 오늘 날짜로 Documents/backups에 백업해줘.

</div>
</div>

---

## 오늘의 체크리스트

- [ ] Aside 패널 MCP 탭에서 서버 목록을 확인했다
- [ ] Brave Search MCP로 실제 검색을 해봤다
- [ ] (선택) Playwright MCP로 내 홈페이지를 자동 테스트했다
- [ ] (선택) 파일 시스템 MCP로 사진을 이동·최적화했다
