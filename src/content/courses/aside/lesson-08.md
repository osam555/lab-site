---
number: 8
title: SNS 성과 분석과 콘텐츠 캘린더
subtitle: 잘 된 게시물 패턴을 찾고 한 달 일정을 자동으로 채우기
goal: Aside Browser로 각 채널 인사이트를 수집하고, 잘 된 후크·포맷 패턴을 분석해서 규칙 파일에 저장합니다. 웹 검색 MCP로 소재를 찾아 한 달 콘텐츠 캘린더를 자동 생성합니다.
minutes: 45
part: 3부 · SNS 자동 배포
---

## 성과 데이터 수집 — Aside로 한 번에

매주 1회, 각 채널 인사이트를 Aside로 수집합니다.

### 인스타그램 인사이트

1. Aside 브라우저: Instagram → 프로필 → 인사이트
2. 대화창:

<div class="prompt-box not-prose" data-prompt="8-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 8-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

지금 Aside에서 인스타그램 인사이트가 보여.
지난 30일 게시물 중 도달수·좋아요·저장 수 상위 3개를 찾아서 정리해줘.
공통점이 있으면 분석해줘 (주제, 이미지 스타일, 포스팅 시간, 해시태그 등).

</div>
</div>

### X 애널리틱스

<div class="prompt-box not-prose" data-prompt="8-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 8-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

[Aside: analytics.twitter.com]
지난 28일 트윗 중 노출수·클릭수 상위 5개를 찾아줘.
잘 된 후크 문장 패턴을 분석해줘.

</div>
</div>

### 카카오채널 통계

<div class="prompt-box not-prose" data-prompt="8-3" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 8-3</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

[Aside: business.kakao.com → 채널 통계]
지난 30일 메시지 중 오픈율 높은 것을 찾아줘.
어떤 제목 패턴이 잘 열리는지 분석해줘.

</div>
</div>

---

## 패턴 규칙 파일 만들기

분석 결과를 파일로 저장해서 다음 포스팅에 반영합니다.

<div class="prompt-box not-prose" data-prompt="8-4" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 8-4</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

분석한 내용을 바탕으로 sns-rules.md 파일을 만들어줘.
아래 형식으로:

# SNS 콘텐츠 규칙
## 인스타그램
- 잘 되는 후크: [분석 결과]
- 최적 포스팅 시간: [요일] [시간]
- 효과적인 해시태그 패턴: [예시]
- 이미지 스타일: [분석 결과]

## X (트위터)
- 잘 되는 첫 문장 패턴: [예시]
- 최적 길이: [분석 결과]

## 카카오채널
- 오픈율 높은 제목 패턴: [예시]

</div>
</div>

이 파일을 다음 포스팅 때 참고로 붙여 Claude Code에게 줍니다.

---

## 소재 발굴 — MCP 웹 검색

<div class="prompt-box not-prose" data-prompt="8-5" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 8-5</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Brave Search MCP로 이번 주 "[업종]" 관련 트렌드를 검색해줘.
인스타그램과 X에서 잘 퍼지는 콘텐츠 포맷(릴스 주제, 밈, 이슈)을 찾아줘.
우리 가게와 연결할 수 있는 각도로 3가지 소재를 제안해줘.

</div>
</div>

---

## 한 달 콘텐츠 캘린더 자동 생성

<div class="prompt-box not-prose" data-prompt="8-6" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 8-6</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

sns-rules.md를 참고해서 다음 달 SNS 콘텐츠 캘린더를 만들어줘.
주 3회 (화·목·토) 기준, 4주 = 12개 포스팅.

각 포스팅마다:
- 날짜와 요일
- 주제 한 줄
- 채널 (인스타/X/카카오 중 우선 채널)
- 필요한 이미지 또는 소재

[가게 이벤트]: 12월 5일 창립기념 할인
[계절 키워드]: 겨울, 크리스마스, 연말

표 형식으로 정리해줘.

</div>
</div>

---

## 포스팅 배치 실행

캘린더가 나오면 한 번에 여러 개를 처리합니다.

<div class="prompt-box not-prose" data-prompt="8-7" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 8-7</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

다음 주 화·목·토 포스팅 3개를 한 번에 만들어줘.
각각 채널별 텍스트와 이미지 카드를 준비하고,
크리에이터 스튜디오와 카카오 비즈니스에 예약까지 해줘.
Computer Use로 순서대로 진행해.

</div>
</div>

---

## 오늘의 체크리스트

- [ ] 인스타·X·카카오 인사이트에서 잘 된 게시물을 분석했다
- [ ] sns-rules.md 파일을 만들었다
- [ ] MCP 웹 검색으로 이번 주 소재 3개를 찾았다
- [ ] 다음 달 콘텐츠 캘린더 12개가 완성됐다
- [ ] 다음 주 포스팅 3개를 예약했다
