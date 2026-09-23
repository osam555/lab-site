---
number: 5
title: SEO 자동화 — 구글·네이버 서치 콘솔을 Aside로
subtitle: 서치 콘솔 등록부터 sitemap 제출, 구조화 데이터 적용까지 자동으로
goal: Aside Browser와 Computer Use를 사용해 구글 서치 콘솔과 네이버 서치 어드바이저 등록, sitemap 제출, URL 색인 요청을 자동화합니다. MCP 웹 검색으로 키워드를 찾고 Claude Code로 반영합니다.
minutes: 55
part: 2부 · SEO 자동화
---

## Aside로 SEO 작업을 자동화하는 이유

SEO 작업은 반복적인 웹 UI 조작이 많습니다.

- 서치 콘솔 매주 들어가서 오류 확인
- 새 페이지마다 색인 요청
- 키워드 조사 → 페이지 반영

이 모든 걸 Aside Browser + Computer Use + MCP로 자동화합니다.

---

## 1. 구글 서치 콘솔 — Computer Use로 자동 설정

### 최초 등록 (1회)

1. Aside 브라우저: `https://search.google.com/search-console`
2. 구글 로그인 (직접)
3. 대화창:

<div class="prompt-box not-prose" data-prompt="5-1" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-1</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Computer Use로 구글 서치 콘솔에서 내 사이트를 등록해줘.
도메인: mycafe.kr
DNS TXT 레코드 값이 나오면 그것만 알려줘. DNS 등록은 내가 직접 할게.

</div>
</div>

Claude가 도메인 속성 추가 화면까지 진행하고 TXT 값을 알려줍니다.
DNS에 직접 추가 → Vercel 또는 도메인 구입처에서 처리.

### Sitemap 제출 자동화

<div class="prompt-box not-prose" data-prompt="5-2" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-2</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Computer Use로 구글 서치 콘솔 Sitemaps 메뉴에서
https://mycafe.kr/sitemap.xml 을 제출해줘.

</div>
</div>

### 페이지 색인 요청 자동화

<div class="prompt-box not-prose" data-prompt="5-3" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-3</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Computer Use로 서치 콘솔 URL 검사에서 아래 URL들을 순서대로 색인 요청해줘:
- https://mycafe.kr/
- https://mycafe.kr/menu
- https://mycafe.kr/location
- https://mycafe.kr/contact

</div>
</div>

### 주간 성과 리포트 자동 추출

<div class="prompt-box not-prose" data-prompt="5-4" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-4</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Aside 브라우저에서 구글 서치 콘솔의 지난 7일 성과를 보여줘.
클릭수·노출수·CTR·평균 순위를 요약해줘.
클릭수 낮은데 노출수 높은 키워드 5개를 찾아서 개선 방향을 제안해줘.

</div>
</div>

---

## 2. 네이버 서치 어드바이저 — Computer Use로 자동 설정

1. Aside 브라우저: `https://searchadvisor.naver.com`
2. 네이버 로그인 (직접)
3. 대화창:

<div class="prompt-box not-prose" data-prompt="5-5" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-5</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Computer Use로 네이버 서치 어드바이저에서 mycafe.kr 사이트를 등록해줘.
HTML 태그 방식으로 소유 확인을 해줘. 태그값이 나오면 알려줘.

</div>
</div>

소유 확인 태그를 Claude Code로 index.html에 추가:

<div class="prompt-box not-prose" data-prompt="5-6" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-6</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

네이버 서치 어드바이저 소유 확인 meta 태그 [태그 내용]을 index.html head에 넣어줘.

</div>
</div>

커밋 → push → Aside에서 확인 버튼 클릭:

<div class="prompt-box not-prose" data-prompt="5-7" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-7</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Computer Use로 네이버 서치 어드바이저에서 소유 확인 버튼을 눌러줘.
그 다음 사이트맵 제출 메뉴로 이동해서 https://mycafe.kr/sitemap.xml 을 제출해줘.

</div>
</div>

---

## 3. JSON-LD 구조화 데이터 — Claude Code 자동 생성

검색 결과에 별점·영업시간이 표시되는 리치 스니펫입니다.

<div class="prompt-box not-prose" data-prompt="5-8" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-8</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

index.html에 LocalBusiness JSON-LD를 추가해줘.
name: "[가게 이름]"
telephone: "[전화]"
address: "[주소]"
openingHours: Mo-Sa 10:00-20:00
priceRange: "₩₩"
image: "https://mycafe.kr/images/og.jpg"

</div>
</div>

커밋 → push 후 확인:

<div class="prompt-box not-prose" data-prompt="5-9" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-9</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

[Aside 브라우저]: https://search.google.com/test/rich-results

"mycafe.kr 을 Rich Results Test에서 테스트해줘. Computer Use로 URL 입력하고 결과를 알려줘."

</div>
</div>

---

## 4. 키워드 조사 → 페이지 자동 반영

### MCP 웹 검색으로 키워드 발굴

<div class="prompt-box not-prose" data-prompt="5-10" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-10</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Brave Search MCP로 "[동네] [업종]" 관련 사람들이 자주 검색하는 키워드를 찾아줘.
네이버와 구글 기준으로 각각 10개씩.

</div>
</div>

### 발굴한 키워드를 페이지에 반영

<div class="prompt-box not-prose" data-prompt="5-11" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-11</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

찾은 키워드를 바탕으로 각 페이지의 title, meta description, h1을 자연스럽게 업데이트해줘.
index.html: [키워드1, 2]
menu.html: [키워드3, 4]
location.html: [키워드5, 6]

</div>
</div>

커밋 → push → 색인 요청 (위 방법 반복).

---

## 주간 SEO 루틴 (5분)

```
1. Aside: 구글 서치 콘솔 → 주간 리포트 요약 요청
2. Aside: 네이버 서치 어드바이저 → 수집 오류 확인
3. 새 페이지가 있으면 → 색인 요청 자동화
4. CTR 낮은 키워드 → title/description 개선
```

---

## 오늘의 체크리스트

- [ ] Computer Use로 구글 서치 콘솔 sitemap을 제출했다
- [ ] Computer Use로 네이버 서치 어드바이저를 등록했다
- [ ] JSON-LD가 index.html에 추가됐고 Rich Results Test를 통과했다
- [ ] MCP 웹 검색으로 키워드를 찾아 페이지에 반영했다
