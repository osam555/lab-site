---
number: 6
title: SEO 고급 — Core Web Vitals와 한국 검색 최적화
subtitle: 속도 점수 올리기·네이버 특화 전략·리치 스니펫 완성
goal: PageSpeed Insights 점수를 70점 이상으로 올리고, LCP·CLS를 기준치 이내로 낮추고, 네이버 검색에 최적화된 콘텐츠 전략을 세웁니다.
minutes: 50
part: 2부 · SEO 자동화
---

## Core Web Vitals — 구글 검색 순위에 직접 영향

| 지표 | 의미 | 좋음 기준 |
|---|---|---|
| **LCP** | 가장 큰 요소(보통 hero 이미지) 로딩 시간 | 2.5초 이하 |
| **CLS** | 페이지 요소가 갑자기 밀리는 현상 | 0.1 이하 |
| **INP** | 클릭 후 반응 시간 | 200ms 이하 |

---

## 1. 현재 점수 측정 — Aside로 자동화

> **용어 풀이** PageSpeed Insights = 구글이 무료로 내 사이트의 속도를 점수(0~100)로 매겨 주는 사이트, WebP = 같은 화질에서 용량이 작은 이미지 형식입니다. 예시의 `mycafe.kr`은 내 주소로 바꾸세요.

<div class="prompt-box not-prose" data-prompt="6-1" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-1</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

[Aside 브라우저]: https://pagespeed.web.dev

Computer Use로 mycafe.kr 을 PageSpeed Insights에서 분석해줘.
모바일·데스크탑 각각 점수와 주요 개선 항목을 알려줘.

</div>
</div>

결과를 보고 Claude Code에게 시킵니다. **점수가 이미 기준 이내인 항목은 건너뛰고, 한 번에 하나씩 고친 뒤 다시 측정**해 점수가 어떻게 바뀌는지 눈으로 확인하세요. (아래 6-2처럼 항목이 여러 개인 프롬프트는 1번만 먼저 시키고, 확인 후 2·3번을 이어도 됩니다.)

**LCP > 2.5초 (이미지 느림)**

<div class="prompt-box not-prose" data-prompt="6-2" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-2</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

hero 이미지 LCP가 3.8초야. 다음을 적용해줘:
1. hero img 태그에 fetchpriority="high" 추가
2. head에 preload link 태그 추가
3. hero.jpg를 WebP로 변환 (cwebp 또는 ImageMagick 사용)

</div>
</div>

**CLS > 0.1 (레이아웃 밀림)**

<div class="prompt-box not-prose" data-prompt="6-3" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-3</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

CLS가 0.18이야. 모든 img 태그에 실제 width·height 속성을 명시해줘.
폰트 로딩으로 인한 FOUT도 방지해줘 (font-display: swap).

</div>
</div>

**INP > 200ms (반응 느림)**

<div class="prompt-box not-prose" data-prompt="6-4" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-4</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

JavaScript 이벤트 처리가 느려. 불필요한 인라인 이벤트를 addEventListener로 바꾸고,
외부 스크립트는 defer 속성을 달아줘.

</div>
</div>

---

## 2. 이미지 최적화 자동화

<div class="prompt-box not-prose" data-prompt="6-5" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-5</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

MCP 파일 시스템으로 images 폴더를 열어서 1MB 이상인 파일을 찾아줘.
찾은 파일을 모두 WebP로 변환하고 가로 1200px 이하·300KB 이하로 줄여줘.
HTML에서 img src도 .webp로 바꿔줘.

</div>
</div>

---

## 3. 네이버 검색 특화 전략

네이버는 구글과 알고리즘이 다릅니다.

### 네이버가 좋아하는 것

- **자연스러운 한국어**: "강남 카페 추천"처럼 실제 검색어가 본문에 자연스럽게
- **지역 랜드마크 명시**: "2호선 강남역 3번 출구 도보 2분" 같은 구체적 설명
- **스마트플레이스 연동**: 홈페이지 주소를 스마트플레이스에 정확히 등록

### 지역 키워드 자동 발굴

<div class="prompt-box not-prose" data-prompt="6-6" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-6</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Brave Search MCP로 "[동네] [업종]" 네이버 검색에서 상위 노출된 블로그 포스팅 제목을 5개 찾아줘.
공통으로 쓰인 키워드 패턴을 분석해줘.

</div>
</div>

<div class="prompt-box not-prose" data-prompt="6-7" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-7</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

분석한 키워드를 바탕으로 location.html의 텍스트를 자연스럽게 업데이트해줘.
지하철역·버스정류장·주요 랜드마크를 텍스트로 명시해줘.

</div>
</div>

---

## 4. 사이트 오류 자동 점검

매주 1회 실행:

<div class="prompt-box not-prose" data-prompt="6-9" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-9</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Playwright MCP로 mycafe.kr의 모든 페이지를 열어서:
1. 404 링크가 있는지 확인
2. 이미지가 깨진 게 있는지 확인
3. 결과를 표로 정리해줘

</div>
</div>

오류 발견 시:

<div class="prompt-box not-prose" data-prompt="6-10" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-10</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

발견된 오류를 모두 수정해줘. 커밋하고 push도.

</div>
</div>

---

::: practice
**실습 미션 — 점수 측정 → 하나 고치기 → 다시 측정**

- [ ] PageSpeed Insights에서 내 사이트 **모바일 점수와 LCP·CLS 값을 메모**했다
- [ ] 개선 항목 중 하나(예: hero 이미지 WebP 변환)만 Claude Code로 적용했다
- [ ] 배포 후 다시 측정해서 **전·후 점수를 나란히 비교**했다
- [ ] images 폴더에서 1MB 이상 파일이 없는지 파일 크기를 눈으로 확인했다
- [ ] (선택) Playwright MCP 점검 결과 표에서 404 링크·깨진 이미지 개수를 확인했다
:::

---

## 더 해보기(선택) — 네이버 블로그 바이럴 활용

<div class="prompt-box not-prose" data-prompt="6-8" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-8</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Brave Search MCP로 "[가게 이름]"을 네이버에서 검색했을 때 나오는 블로그 포스팅을 찾아줘.
있으면 요약, 없으면 어떤 키워드로 블로그 포스팅을 만들면 좋을지 제안해줘.

</div>
</div>

---

## 더 해보기(선택) — 검색 성과 주간 리포트

매주 월요일:

<div class="prompt-box not-prose" data-prompt="6-11" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-11</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Aside에서 구글 서치 콘솔과 네이버 서치 어드바이저 모두 열어서
지난 7일 주요 지표를 요약해줘:
- 구글: 클릭수, 노출수, CTR, 평균 순위
- 네이버: 클릭수, 조회수
전주 대비 변화와 이번 주 해야 할 조치 1~2가지를 제안해줘.

</div>
</div>

---

## 오늘의 체크리스트

- [ ] PageSpeed 모바일 점수가 70점 이상이다
- [ ] LCP가 2.5초 이하다
- [ ] CLS가 0.1 이하다
- [ ] WebP 이미지가 모든 페이지에 적용됐다
- [ ] 지역 키워드가 location.html에 자연스럽게 반영됐다
- [ ] Playwright MCP로 링크 오류 점검을 완료했다
