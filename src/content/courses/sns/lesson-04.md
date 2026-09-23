---
number: 4
title: 이미지 카드 자동 생성
subtitle: HTML 템플릿 하나로 모든 비율
goal: 브랜드 색·글꼴이 고정된 HTML 카드 템플릿을 만들고, variants.json의 후크·포인트로 채널별 비율의 이미지를 스크립트로 생성합니다.
minutes: 50
part: 2부 · 파이프라인 만들기
---

## 이미지는 디자인이 아니라 템플릿입니다

매번 디자인 도구를 여는 대신, **HTML 한 장을 스크린샷**으로 찍어 이미지를 만듭니다. HTML은 Claude Code가 가장 잘 다루고, 데이터만 바꿔 넣으면 100장도 같은 품질로 나옵니다.

만들 카드는 세 종류입니다.

| 종류 | 용도 | 비율 |
|---|---|---|
| **인용 카드** | 후크 한 줄 + 브랜드 | 1:1, 4:5, 16:9 |
| **캐러셀** | 포인트 3개를 3~5장으로 | 1:1 또는 4:5 × N |
| **링크 카드** | 원본 썸네일 + 제목 | 1.91:1 |

## 따라하기 1: 브랜드 값 정하기

<div class="prompt-box not-prose" data-prompt="4-1" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-1</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

templates/brand.json을 만들어줘: 배경색, 글자색, 강조색 각 1개(내 블로그/로고 색: [#…]), 글꼴(Pretendard), 로고 텍스트 또는 파일(assets/logo.png), 하단에 넣을 핸들(@내아이디).

</div>
</div>

색이 없다면 [홈페이지 만들기 6강](/lectures/homepage/lesson-06)의 방법으로 세 가지만 정하세요.

## 따라하기 2: 템플릿

<div class="prompt-box not-prose" data-prompt="4-2" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-2</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

templates/quote.html을 만들어줘. brand.json 값을 쓰고, `{{hook}}`, `{{handle}}` 자리표시자. 1080×1080 기준으로 디자인하되 CSS로 1080×1350(4:5)과 1920×1080(16:9)도 같은 템플릿에서 클래스만 바꿔 대응되게. 글자는 길이에 따라 자동으로 줄어들게(최대 3줄). 여백 넉넉히, 강조색은 한 곳에만.

</div>
</div>

<div class="prompt-box not-prose" data-prompt="4-3" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-3</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

templates/carousel.html도 만들어줘. 표지(제목) + 포인트 슬라이드(번호, 한 줄 제목, 두 줄 설명) + 마지막(CTA, 핸들). 1080×1350.

</div>
</div>

## 따라하기 3: 렌더링 스크립트

<div class="prompt-box not-prose" data-prompt="4-4" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-4</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

scripts/render-cards.py를 만들어줘.
- posts/XXX/variants.json을 읽어 채널별로 필요한 카드를 결정 (channels.json의 image_ratio, image_count)
- 템플릿에 값을 넣고 Playwright로 해당 크기 스크린샷 → cards/{채널}-{번호}.png
- 한글 글꼴이 깨지지 않게 폰트 파일을 직접 로드
- 결과 목록과 각 파일 크기를 출력

</div>
</div>

```bash
python3 scripts/render-cards.py posts/2025-01-camping-chair
```

::: windows
Playwright 브라우저가 없다는 에러가 나면 `python -m playwright install chromium`. 폰트가 네모로 나오면 templates에서 폰트 경로가 `C:\…` 절대경로인지 확인 — Claude에게 "폰트를 상대경로로, file:// 로 로드하게".
:::

::: mac
같은 에러면 `python3 -m playwright install chromium`. 렌더 결과 글자가 흐리면 "deviceScaleFactor 2로 찍고 원래 크기로 줄여줘".
:::

## 따라하기 4: 검수 ⏸

`cards/`를 열어 봅니다. 확인할 것:

- 후크가 3줄 안에 다 보이는가 (잘리면 후크를 줄이거나 글자 크기 조정)
- 인스타 4:5에서 위아래 여백이 어색하지 않은가
- 강조색이 한 곳에만 쓰였는가
- 핸들과 로고가 작지만 읽히는가

수정은 템플릿에서. "quote.html의 후크 글자를 8% 키우고 아래 여백을 늘려줘" → 다시 렌더.

## 사진을 쓰고 싶다면

원본에 사진이 있으면 카드 배경으로:

<div class="prompt-box not-prose" data-prompt="4-5" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-5</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

quote.html에 `{{bg_image}}` 옵션을 추가해줘. 있으면 사진을 어둡게 깔고 그 위에 글자. 없으면 지금처럼 단색.

</div>
</div>

`variants.json`의 채널 항목에 `bg_image: "../sources/img/01.jpg"`를 넣으면 됩니다. 인스타는 사진 배경, 링크드인은 단색 — 이런 채널별 기본값도 channels.json에 넣을 수 있습니다.

```bash
git add .
git commit -m "카드 템플릿과 렌더 스크립트"
```

## 오늘의 체크리스트

- [ ] brand.json, quote.html, carousel.html이 있다
- [ ] render-cards.py가 채널별 비율로 카드를 만든다
- [ ] 카드를 눈으로 검수하고 템플릿을 한 번 이상 고쳤다
- [ ] 커밋했다

## 다음 강의

5강, 예약 발행. variants와 카드를 스케줄러에 올리고 시간표에 배치합니다.
