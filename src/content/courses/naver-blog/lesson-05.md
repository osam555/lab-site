---
number: 5
title: 사진·썸네일·제목·태그
subtitle: 에디터에 넣을 준비물 한 세트
goal: 사진을 정리하고 썸네일 카드를 자동 생성하며, 키워드가 앞에 오는 제목 3안과 태그 10개를 meta.json에 확정합니다.
minutes: 40
part: 2부 · 파이프라인 만들기
---

## 사진이 글의 절반입니다

네이버 블로그에서 사진 없는 글은 끝까지 안 읽힙니다. 그리고 **직접 찍은 사진**은 "경험"의 증거입니다. 순서는: 내 사진 → 없으면 제품 공식 이미지(출처 표기) → 무료 사진. 생성 이미지는 제품·장소 글에는 쓰지 않습니다 (실물과 다르면 신뢰를 잃습니다).

## 따라하기 1: 사진 정리

final.md의 `[사진: …]` 자리 개수만큼 사진을 `posts/…/images/`에 넣습니다.

<div class="prompt-box not-prose" data-prompt="5-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

@final.md 의 [사진: …] 자리를 표로 뽑아줘 (번호, 어떤 사진, 위치). 그리고 images/의 파일을 순서대로 01.jpg, 02.jpg…로 이름 바꾸고, 가로 1200px 이하·300KB 이하로 줄여줘. 원본은 images/original/에.

</div>
</div>

::: windows
아이폰에서 옮긴 HEIC가 있으면 "HEIC를 JPG로 변환해줘". 변환 도구 설치를 물어보면 허락. 사진 정보(EXIF의 위치 등)는 "EXIF 지워줘"로 제거하세요 — 집 위치가 사진에 남는 경우가 있습니다.
:::

::: mac
HEIC는 미리보기에서 내보내기 하거나 "HEIC를 JPG로 변환해줘" (macOS 기본 `sips`로 됩니다). EXIF 제거도 "EXIF 지워줘".
:::

각 사진의 **설명 문장**(에디터의 사진 설명란에 들어갈 것)도 미리 받아둡니다.

<div class="prompt-box not-prose" data-prompt="5-2" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-2</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

images/01~07에 대해 final.md 문맥에 맞는 사진 설명을 한 문장씩 써줘. 키워드를 자연스럽게 1~2번만 포함. meta.json의 images 배열에 파일명과 설명으로 저장.

</div>
</div>

## 따라하기 2: 썸네일 카드

목록에서 눈에 띄는 대표 이미지. 사진 위에 제목을 얹은 카드를 **HTML 템플릿 → 이미지**로 자동 생성합니다.

<div class="prompt-box not-prose" data-prompt="5-3" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-3</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

templates/thumb.html을 만들어줘: 1000×1000, 배경은 images/01.jpg를 어둡게 깔고, 가운데에 제목(2줄, 흰색 볼드 64px, 검은 외곽선), 아래 작게 블로그 이름. 글꼴은 Pretendard. 그리고 scripts/thumb.py로 meta.json의 제목을 넣어 렌더링해서 images/00-thumb.jpg로 저장하게. 렌더링은 Playwright 스크린샷으로.

</div>
</div>

한 번 만들면 모든 글에 같은 스타일이 붙어 블로그가 정돈되어 보입니다.

## 따라하기 3: 제목 3안

네이버 제목 규칙은 단순합니다. **키워드가 앞에, 30자 안에, 궁금증 하나.**

<div class="prompt-box not-prose" data-prompt="5-4" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-4</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

final.md와 meta.json의 키워드로 제목 3안을 만들어줘.
- 키워드 "[캠핑의자 추천]"이 제목 앞 10자 안에
- 25~30자
- 하나는 숫자형(3가지 기준), 하나는 경험형(1년 써보고), 하나는 질문형
- 낚시 금지: 본문에 없는 약속은 안 됨
meta.json의 title_candidates에 저장.

</div>
</div>

고르고: "2번으로 확정, meta.json title에 넣어줘."

## 따라하기 4: 태그와 요약

<div class="prompt-box not-prose" data-prompt="5-5" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-5</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

태그 10개를 만들어줘: 핵심 키워드 1개, 연관 키워드 4개(keywords/analysis.md에서), 상황 태그 3개(겨울캠핑, 차박 등), 브랜드/제품 2개. 띄어쓰기 없이. 그리고 검색 결과에 보일 첫 문장(요약) 60자를 final.md 첫 단락에서 뽑아줘. meta.json의 tags, summary에 저장.

</div>
</div>

태그는 10개면 충분합니다. 30개씩 넣는 건 옛날 방식이고 도움이 안 됩니다.

## 따라하기 5: 에디터용 원고 만들기

스마트에디터는 마크다운을 모릅니다. `final.md`를 에디터 구조로 바꿉니다.

<div class="prompt-box not-prose" data-prompt="5-6" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-6</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

final.md를 editor.md로 변환해줘. 규칙:
- `## 소제목` → 그대로 (에디터에서 '소제목' 서식 적용 예정 표시)
- `[사진: …]` → `{{image: 03.jpg}}` 형식으로, meta.json의 파일명과 매칭
- 출처 번호 [1]은 지우고, 맨 아래 "참고 자료" 단락에 출처 이름과 링크만
- 인용하고 싶은 문장은 `{{quote}}` 표시
- 단락 사이는 빈 줄 하나

</div>
</div>

이 `editor.md`가 6강에서 브라우저 자동화의 입력이 됩니다.

```bash
git add .
git commit -m "camping-chair: 이미지·제목·태그·에디터 원고"
```

## 오늘의 체크리스트

- [ ] images/에 01~07 (줄인 것)과 00-thumb.jpg가 있다
- [ ] meta.json에 title, tags(10), summary, images(설명 포함)가 있다
- [ ] 제목 앞 10자 안에 키워드가 있다
- [ ] editor.md가 있다
- [ ] 커밋했다

## 다음 강의

6강, 브라우저 자동화로 스마트에디터에 원고를 채우고 임시저장. 발행은 여러분이.
