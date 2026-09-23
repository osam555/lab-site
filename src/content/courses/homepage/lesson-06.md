---
number: 6
title: 디자인 정하기
subtitle: 색 셋, 글꼴 하나, 여백 넉넉히
goal: 홈페이지의 색·글꼴·간격 규칙을 정해 DESIGN.md에 적고, 전체에 일관되게 적용합니다. 폰 화면도 점검합니다.
minutes: 40
part: 2부 · 만들기
---

## 디자인은 결정입니다

디자인 감각이 없어도 됩니다. 필요한 건 **세 가지 결정**이고, 결정만 하면 Claude Code가 적용합니다. 결정을 안 하면 Claude가 "무난한 평균"을 고르는데, 그게 바로 어디서 본 듯한 "AI 홈페이지" 느낌의 정체입니다.

## 결정 1: 색 세 가지

| 역할 | 개수 | 고르는 법 |
|---|---|---|
| **바탕** | 1 | 순백(#ffffff) 대신 아주 연한 크림·회색. 눈이 편합니다 |
| **글자** | 1 | 순검정 대신 짙은 회색·갈색 |
| **강조** | 1 | 버튼과 링크에만. 가게 간판, 로고, 대표 메뉴 색에서 따오세요 |

**강조색은 화면의 5% 이하.** 여기저기 쓰면 아무것도 강조되지 않습니다. 그라데이션은 쓰지 않습니다.

색을 고르기 어려우면 가게 사진 한 장을 Claude Code에 붙여넣고 물어보세요.

<div class="prompt-box not-prose" data-prompt="6-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

이 사진 분위기에 맞는 바탕색, 글자색, 강조색을 각각 색 코드(#…)로 제안해줘. 3세트.

</div>
</div>

## 결정 2: 글꼴 하나

한국어 홈페이지라면 **Pretendard** 또는 **Noto Sans KR** 중 하나. 무료이고 어디서나 잘 보입니다. 굵기는 본문용(400)과 제목용(700) 두 개만.

손글씨체나 장식체를 제목에 쓰고 싶다면 **제목 하나에만**, 본문은 위 둘 중 하나로.

## 결정 3: 간격

초보 홈페이지의 90%는 **여백이 부족**합니다. 규칙 하나: **지금 여백의 1.5배.** 그리고 여백 크기를 8의 배수(8, 16, 24, 32, 48, 64px)로만 씁니다. 이 규칙만으로 화면이 정돈됩니다.

## 따라하기 1: DESIGN.md

결정을 파일로 남깁니다. 이 파일이 있으면 앞으로 어떤 화면을 추가해도 같은 규칙이 적용됩니다.

<div class="prompt-box not-prose" data-prompt="6-2" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-2</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

DESIGN.md 파일을 만들어줘:
- 바탕색 [#…], 글자색 [#…], 보조 글자색(연하게) [#…], 강조색 [#…]
- 강조색은 버튼·링크·활성 상태에만. 그라데이션 금지
- 글꼴: [Pretendard], 굵기 400/700만. 크기는 14/16/20/32px 네 단계만
- 여백은 8, 16, 24, 32, 48, 64px만 사용. 섹션 사이는 64px
- 이모지를 아이콘 대신 쓰지 않는다
- 가운데 정렬은 첫 화면에만

그리고 CLAUDE.md에 "화면을 만들거나 고칠 때 DESIGN.md를 따른다"를 추가해줘.

</div>
</div>

## 따라하기 2: 적용

<div class="prompt-box not-prose" data-prompt="6-3" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-3</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

DESIGN.md 규칙대로 style.css를 다시 정리해줘. 내용과 구조는 바꾸지 말고 색·글꼴·간격만.

</div>
</div>

새로고침. 한 번에 확 달라집니다. 이상한 부분이 있으면 하나씩:

<div class="prompt-box not-prose" data-prompt="6-4" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-4</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

메뉴 가격이 너무 흐려. 글자색으로.

</div>
</div>

## 따라하기 3: 폰 화면

홈페이지 방문자의 **70% 이상이 폰**입니다. PC에서 확인하는 법:

::: windows
브라우저에서 `F12` → 위쪽 툴바의 **폰 아이콘**(기기 툴바 전환) 클릭 → 위 목록에서 iPhone 등 선택. 화면이 폰 크기로 바뀝니다.
:::

::: mac
Chrome: `Cmd + Option + I` → 폰 아이콘 클릭. Safari: 메뉴 **개발자용** → **반응형 디자인 모드 시작**(개발자용 메뉴가 없으면 설정 → 고급 → "메뉴 막대에서 개발자용 메뉴 보기" 체크).
:::

폰 화면에서 흔한 문제와 요청:

| 문제 | 요청 |
|---|---|
| 가로 스크롤이 생김 | "폰에서 가로 스크롤이 생겨. 넘치는 요소를 찾아 고쳐줘" |
| 글자가 너무 작음 | "폰에서 본문 글자 최소 16px" |
| 버튼이 작아 누르기 힘듦 | "버튼 높이 최소 44px, 폰에서는 가로 꽉 차게" |
| 상단 메뉴가 찌그러짐 | "폰에서는 상단 메뉴를 햄버거(≡) 버튼으로 접어줘" |

## 마무리 손질

- **파비콘**(브라우저 탭의 작은 아이콘): "강조색 배경에 가게 이름 첫 글자로 파비콘 만들어서 넣어줘"
- **탭 제목**: "브라우저 탭 제목을 '[가게 이름] | [한 줄]'로"
- **링크 hover**: "링크와 버튼에 마우스를 올리면 살짝 진해지게"

```bash
git add .
git commit -m "디자인 규칙 적용, 폰 화면 정리"
```

## 오늘의 체크리스트

- [ ] DESIGN.md에 색 3개, 글꼴 1개, 간격 규칙이 있다
- [ ] 홈페이지 전체가 그 규칙을 따른다
- [ ] 폰 크기에서 가로 스크롤이 없고 버튼이 누르기 쉽다
- [ ] 파비콘과 탭 제목이 있다
- [ ] 커밋했다

## 다음 강의

7강에서 한 장짜리를 여러 페이지로 나눕니다. 메뉴 페이지, 오시는 길 페이지, 문의 페이지.
