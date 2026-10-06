---
number: 9
title: 블로그 자동화 — 네이버 블로그 자동 포스팅
subtitle: 키워드 → 리서치 → 초안 → 에디터 입력을 Aside로 한 번에
goal: MCP 웹 검색으로 키워드와 리서치를 수행하고, Claude Code로 블로그 초안을 작성하고, Playwright MCP + Computer Use로 네이버 스마트에디터에 자동으로 채웁니다. 발행 버튼만 사람이 누릅니다.
minutes: 60
part: 4부 · 블로그 자동화
---

## 네이버 블로그 자동화의 구조

```
키워드 입력
    │
    ▼
MCP 웹검색 — 상위 노출 글 분석 + 최신 정보 수집
    │
    ▼
Claude Code — SEO 최적화 초안 작성 (제목·본문·태그)
    │
    ▼
Playwright MCP / Computer Use
    → 네이버 스마트에디터에 제목·본문·이미지·태그 자동 입력
    → 임시저장
    │
    ▼
사람 — 검토 후 발행 버튼
```

발행 버튼은 반드시 사람이 누릅니다. 저품질 방지.

---

## 1. 키워드 선정 — MCP로 분석

> **용어 풀이** 스마트에디터 = 네이버 블로그 글쓰기 화면, 임시저장 = 공개하지 않고 저장만 하는 것, 발행 = 글을 공개하는 것입니다. **발행은 사람이 최종 확인 후** 합니다.

<div class="prompt-box not-prose" data-prompt="9-1" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 9-1</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Brave Search MCP로 "[업종] 관련 네이버 블로그에서 잘 되는 키워드"를 찾아줘.
조건: 검색량이 적당하고 (월 500~5000), 경쟁이 너무 세지 않은 것.
10개 후보를 리스트로 줘.

</div>
</div>

<div class="prompt-box not-prose" data-prompt="9-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 9-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

이 중에서 우리 [업종] 가게에 가장 맞는 3개를 골라줘.
이유도 간단히 설명해줘.

</div>
</div>

---

## 2. 상위 글 분석 + 리서치

선택한 키워드로:

<div class="prompt-box not-prose" data-prompt="9-3" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 9-3</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Brave Search MCP로 "[키워드]" 네이버 검색 상위 5개 블로그 글의 제목과 구성을 분석해줘.
- 공통 소제목 구조
- 자주 등장하는 키워드
- 글 길이 (대략)
- 차별화할 수 있는 각도

</div>
</div>

<div class="prompt-box not-prose" data-prompt="9-4" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 9-4</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

같은 키워드로 최신 정보(최근 3개월)를 검색해서 초안에 쓸 팩트를 5가지 찾아줘.

</div>
</div>

---

## 3. SEO 최적화 초안 작성

초안은 한 번에 쓰게 하지 말고 **2단계**로 나눕니다. 먼저 뼈대(아웃라인)만 보고 방향을 고칩니다.

<div class="prompt-box not-prose" data-prompt="9-4a" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 9-4a</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

위 분석과 팩트를 바탕으로 제목 3안과 소제목 4개짜리 아웃라인만 먼저 써줘. 본문은 아직 쓰지 마.

</div>
</div>

**결과 확인**: 제목 3안과 소제목 4개가 화면에 보이고 내 가게 주제에 맞는지 읽어 봅니다. 순서를 바꾸고 싶으면 "3번과 2번 순서 바꿔줘"처럼 말합니다. 괜찮다면 아래 프롬프트로 **2단계 — 본문 작성**을 진행합니다.

<div class="prompt-box not-prose" data-prompt="9-5" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 9-5</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

아래 조건으로 네이버 블로그 글 초안을 작성해줘:

키워드: "[키워드]"
분석 결과: [위에서 나온 구조]
추가 팩트: [위에서 찾은 정보]

형식:
- 제목: 키워드 포함, 클릭 유도, 30자 이내
- 본문: 1500자 이상, 소제목 4개, 이미지 자리표시자 3곳
- 마무리: CTA 포함 ("댓글로 알려주세요", "예약 문의는...")
- 태그: 관련 태그 10개

아직 파일에 저장하지 마. 검토할게.

</div>
</div>

검토 후:

<div class="prompt-box not-prose" data-prompt="9-6" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 9-6</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

2번 소제목을 더 구체적으로 바꿔줘.
3번 팩트를 추가해줘.

</div>
</div>

<div class="prompt-box not-prose" data-prompt="9-7" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 9-7</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

확정. blog-drafts/[날짜]-[키워드].md로 저장해줘.

</div>
</div>

---

## 4. 스마트에디터 자동 입력

처음에는 화면을 보며 확인할 수 있는 **Computer Use 방식**으로 시작하세요. 입력은 임시저장까지만, 발행은 사람이 합니다.

### Computer Use 방식 (안전)

1. Aside 브라우저: 네이버 블로그 로그인 → 글쓰기
2. 대화창:

<div class="prompt-box not-prose" data-prompt="9-9" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 9-9</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Computer Use로 스마트에디터에 초안을 입력해줘.
제목: [제목]
본문을 단락별로 입력해줘. 이미지 자리는 건너뛰고 "[이미지1]" 텍스트로 표시해줘.
태그: [태그 목록]
완료 후 임시저장.

</div>
</div>

---

## 5. 이미지 준비 자동화

<div class="prompt-box not-prose" data-prompt="9-10" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 9-10</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

이번 글에 넣을 이미지 3장을 준비해줘:
1. 대표 이미지: "[키워드]" 관련 분위기, 16:9 비율 (Unsplash 검색어 알려줘)
2. 본문 이미지 1: [소제목 2] 관련 설명 다이어그램 (텍스트 이미지로 만들어줘)
3. 본문 이미지 2: [소제목 3] 관련 사진 (Unsplash 검색어)

</div>
</div>

---

## 6. 월간 블로그 운영 루틴

```
주 1회 (예: 매주 화요일 오전):
1. MCP로 키워드 1개 선정 (5분)
2. MCP로 리서치 (5분)
3. Claude Code로 초안 작성 (5분)
4. 초안 검토·수정 (10분)
5. Playwright로 에디터 자동 입력 (5분)
6. 이미지 삽입·최종 확인 (5분)
7. 발행 버튼 (1분)
```

총 36분. 주 1편, 월 4편.

---

::: practice
**실습 미션 — 키워드 1개로 초안 → 임시저장 → 내가 확인하고 발행**

- [ ] 키워드 후보 10개 중 내 가게에 맞는 3개를 골랐다
- [ ] 아웃라인(제목 3안·소제목 4개)을 확인하고 한 군데 이상 내 말로 고쳤다
- [ ] `blog-drafts/` 폴더에 초안 파일이 생겼고 열어서 **직접 끝까지 읽었다**
- [ ] 에디터에 입력된 제목·본문·태그를 화면에서 확인하고 **임시저장**했다 (발행은 아직 누르지 않음)
- [ ] 이미지 자리를 내 사진으로 채우고, 내가 읽어 본 뒤 **내 손으로** 발행했다
:::

---

## 더 해보기(선택) — Playwright MCP로 에디터에 입력하기 (빠른 방식)

<div class="prompt-box not-prose" data-prompt="9-8" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 9-8</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Playwright MCP로 네이버 블로그 글쓰기 페이지에 접속해서 초안을 입력해줘.
URL: https://blog.naver.com/[내아이디]/postwrite
제목: [저장된 초안의 제목]
본문: [저장된 초안의 본문]
태그: [저장된 초안의 태그 10개]
입력 완료 후 임시저장만 해줘. 발행은 하지 마.

</div>
</div>

---

## 오늘의 체크리스트

- [ ] MCP로 키워드를 선정했다
- [ ] 상위 글 구조를 분석했다
- [ ] SEO 최적화 초안이 blog-drafts 폴더에 저장됐다
- [ ] 스마트에디터에 자동 입력하고 임시저장했다
- [ ] 이미지 자리를 채우고 발행했다
