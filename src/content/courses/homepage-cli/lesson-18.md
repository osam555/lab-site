---
number: 18
title: SEO 고급 — 구조화 데이터와 한국 검색 최적화
subtitle: JSON-LD로 검색 결과를 풍부하게, 네이버·구글 둘 다 잡기
goal: LocalBusiness JSON-LD 구조화 데이터를 추가하고, 리치 스니펫을 확인하고, 한국 검색 환경(네이버·구글)에 맞게 SEO를 최적화합니다.
minutes: 60
part: 고급 · SEO & 대시보드
---

## 기본 SEO vs 고급 SEO

| | 기본 (9강) | 고급 (이번 강) |
|---|---|---|
| 검색 결과 표시 | 제목 + 설명 | 별점·영업시간·메뉴 리치 스니펫 |
| 등록 도구 | 서치 콘솔 등록만 | 색인 상태·오류·성능 분석 |
| 키워드 전략 | 없음 | 지역 키워드·롱테일 전략 |
| 속도 | 기본 | Core Web Vitals 최적화 |

---

## 1. JSON-LD 구조화 데이터

구글·네이버에게 "이 홈페이지는 [업종] 가게입니다"를 코드로 알려주면 검색 결과에 **별점·영업시간·전화번호**가 바로 표시됩니다.

### LocalBusiness 마크업

Claude Code에게:

<div class="prompt-box not-prose" data-prompt="18-1" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 18-1</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

index.html에 JSON-LD 구조화 데이터를 추가해줘. LocalBusiness 타입으로:
- name: "[가게 이름]"
- description: "[한 줄 소개]"
- url: "https://mycafe.kr"
- telephone: "[전화번호]"
- address: 서울특별시 [구] [동] [상세주소]
- openingHours: Mo-Fr 10:00-20:00, Sa-Su 11:00-21:00
- priceRange: "₩₩"
- image: "https://mycafe.kr/images/og.jpg"
- geo: 위도 [위도], 경도 [경도]
카페라면 CafeOrCoffeeShop 서브타입도 추가해줘.

</div>
</div>

### Menu 마크업 (메뉴 페이지)

<div class="prompt-box not-prose" data-prompt="18-2" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 18-2</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

menu.html에 Menu와 MenuItem JSON-LD를 추가해줘.
메뉴 3개: [메뉴1 이름, 가격, 설명], [메뉴2], [메뉴3]

</div>
</div>

### 확인 방법

1. push 완료 후
2. [search.google.com/test/rich-results](https://search.google.com/test/rich-results) 접속
3. 내 도메인 입력 → 테스트
4. LocalBusiness 카드가 보이면 성공

---

## 2. Core Web Vitals 최적화

구글 검색 순위에 직접 영향을 주는 성능 지표입니다.

### 현재 점수 확인

[pagespeed.web.dev](https://pagespeed.web.dev) → 내 도메인 → 분석

점수별 대응:

**LCP(가장 큰 요소 로딩) > 2.5초**

<div class="prompt-box not-prose" data-prompt="18-3" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 18-3</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

hero 이미지 LCP가 느려. 다음을 적용해줘:
1. hero 이미지에 `loading="eager"` 와 `fetchpriority="high"` 속성 추가
2. `<link rel="preload">` 태그를 head에 추가
3. hero 이미지를 WebP 포맷으로 변환 (ImageMagick이나 cwebp 써도 됨)

</div>
</div>

**CLS(레이아웃 밀림) > 0.1**

<div class="prompt-box not-prose" data-prompt="18-4" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 18-4</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

이미지 태그에 width와 height 속성이 없어서 CLS가 높아. 모든 img 태그에 실제 크기를 명시해줘.

</div>
</div>

**INP(반응 속도) > 200ms**

<div class="prompt-box not-prose" data-prompt="18-5" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 18-5</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

페이지 전환이나 클릭 반응이 느려. 불필요한 JavaScript를 async/defer로 바꾸고, 인라인 이벤트 핸들러를 정리해줘.

</div>
</div>

---

## 3. 한국 검색 특화 전략

### 네이버 검색 최적화

네이버는 구글과 알고리즘이 다릅니다.

**네이버가 좋아하는 것**
- **네이버 블로그·카페 언급**: 외부에서 링크가 많을수록 신뢰도 상승
- **스마트플레이스 완성도**: 사진·영업시간·메뉴를 빠짐없이 채우기
- **자연스러운 한국어 키워드**: "강남 카페", "조용한 카페 추천" 같은 실제 검색어

**키워드 전략**

Claude Code에게:

<div class="prompt-box not-prose" data-prompt="18-6" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 18-6</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

우리 가게는 [동네]에 있는 [업종]이야.
사람들이 검색할 법한 롱테일 키워드 20개를 만들어줘.
예: "[동네] [업종] 추천", "[특징] [업종] [동네]"
각 키워드를 어느 페이지에 넣으면 좋은지도 알려줘.

</div>
</div>

<div class="prompt-box not-prose" data-prompt="18-7" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 18-7</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

제안한 키워드를 각 페이지의 title, meta description, h1, 본문에 자연스럽게 반영해줘. 억지스럽지 않게.

</div>
</div>

### 지역 SEO (Local SEO)

같은 동네 사람들에게 먼저 노출되게 합니다.

<div class="prompt-box not-prose" data-prompt="18-8" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 18-8</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

모든 페이지에 지역 키워드를 강화해줘.
- 메인: "[동네] [업종]"을 h1과 첫 문단에 포함
- 오시는 길: 주요 랜드마크(지하철역, 버스정류장)를 텍스트로 명시
- footer: 전체 주소를 텍스트로 (이미지 아니고)

</div>
</div>

---

## 4. 소식·블로그 페이지로 키워드 확장

홈페이지 4개 페이지만으로는 검색 유입이 제한됩니다.
**소식 페이지(news.html)** 를 추가하면 새 키워드로 유입됩니다.

<div class="prompt-box not-prose" data-prompt="18-9" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 18-9</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

news.html을 만들어줘. 가게 소식과 이벤트를 카드 형태로 나열.
첫 소식 3개: [이벤트1], [이벤트2], [계절 메뉴 소개]
각 소식마다 날짜, 제목, 짧은 설명, 이미지.

</div>
</div>

소식을 올릴 때마다:

<div class="prompt-box not-prose" data-prompt="18-10" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 18-10</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

새 소식을 추가해줘: 제목 "[제목]", 날짜 오늘, 내용 "[내용]". 커밋하고 push도.

</div>
</div>

---

## 5. 서치 콘솔 심화 활용

### 성능 저하 감지

매주 확인:
- **클릭수 감소**: 순위 하락 또는 경쟁 심화
- **노출수 급증 but CTR 하락**: 제목/설명 개선 필요

<div class="prompt-box not-prose" data-prompt="18-11" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 18-11</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

구글 서치 콘솔에서 클릭률이 낮은 쿼리 5개를 찾아줘. 해당 페이지의 제목과 meta description을 CTR을 높이는 방향으로 수정안을 제안해줘.

</div>
</div>

### 네이버 서치 어드바이저 심화

- **검색 현황 → 클릭 분석**: 어떤 키워드로 들어오는지
- **콘텐츠 → 수집 현황**: 네이버 봇이 어느 페이지를 가져가는지
- 수집이 안 된 페이지 → 사이트맵 재제출

---

## 오늘의 체크리스트

- [ ] JSON-LD가 index.html에 있고 Rich Results 테스트를 통과한다
- [ ] PageSpeed 모바일 점수가 70점 이상이다
- [ ] LCP가 2.5초 이하다
- [ ] 지역 키워드가 각 페이지 title과 h1에 반영됐다
- [ ] 구글 서치 콘솔에서 색인된 페이지를 확인했다
- [ ] 네이버 서치 어드바이저에서 수집 현황을 확인했다
