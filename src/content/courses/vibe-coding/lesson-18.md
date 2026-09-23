---
number: 18
title: 디자인 레벨업
subtitle: AI가 만든 티 벗기기
goal: 색·글꼴·간격 세 가지를 정해 디자인 규칙 파일을 만들고, 전체 화면에 일관되게 적용합니다.
minutes: 45
part: 4부 · 세상에 내놓기
---

## "AI 티"의 정체

AI가 만든 화면은 한눈에 티가 납니다. 보라색 그라데이션, 둥근 카드 세 개 나란히, 가운데 정렬된 큰 제목, 이모지 아이콘. 못생긴 게 아니라 **어디서 본 듯한** 겁니다. AI는 "평균적으로 무난한" 것을 만들기 때문입니다.

티를 벗기는 방법은 디자인 재능이 아닙니다. **결정 세 개를 내가 내리고, 그걸 AI에게 규칙으로 주는 것**입니다.

## 결정 1: 색 — 딱 세 가지

| 역할 | 개수 | 예시 |
|---|---|---|
| 바탕 | 1 | 완전한 흰색 대신 아주 연한 크림(#fbfaf7)이나 아주 연한 회색 |
| 글자 | 1 | 완전한 검정 대신 짙은 회갈색(#1c1b18) |
| 강조 | 1 | 버튼, 링크, 중요한 것에만. 서비스 성격에 맞는 색 하나 |

**강조색은 화면의 5% 이하**로만 쓰는 게 핵심입니다. 여기저기 쓰면 아무것도 강조되지 않습니다. 그라데이션은 금지. 색 고르기가 어려우면 좋아하는 브랜드 하나를 골라 그 색 계열을 따라가세요.

## 결정 2: 글꼴 — 하나, 굵기 두 개

한국어 서비스라면 **Pretendard** 또는 **Noto Sans KR** 하나. 굵기는 본문(400)과 제목(700) 두 개만. 제목을 크게 하는 것보다 **굵게** 하는 게 더 세련되어 보입니다.

크기는 네 단계면 충분합니다: 작은 설명(14px) / 본문(16px) / 소제목(20px) / 제목(28~36px).

## 결정 3: 간격 — 8의 배수

모든 여백을 8, 16, 24, 32, 48px 중에서만 고릅니다. Tailwind에서는 `p-2, p-4, p-6, p-8, p-12`. AI가 `p-3`, `p-5`, `mt-7` 같은 걸 섞어 쓰면 화면이 미묘하게 어수선해지는데, 이 규칙 하나로 정리됩니다.

그리고 **여백을 지금의 1.5배로.** 초보 화면의 90%는 여백이 부족합니다.

## 따라하기 1: DESIGN.md 만들기

세 결정을 파일로 적고 CLAUDE.md에서 참조시킵니다.

```markdown
# 디자인 규칙

## 색
- 바탕: #fbfaf7
- 글자: #1c1b18, 보조 글자: #6b675e
- 강조: #2f8f5b (버튼, 링크, 활성 상태에만. 화면의 5% 이하)
- 그라데이션, 그림자 남용 금지

## 글꼴
- Pretendard 하나. 굵기 400/700만.
- 크기: text-sm / text-base / text-xl / text-3xl 네 단계만

## 간격
- Tailwind 간격은 2, 4, 6, 8, 12만 사용
- 카드 안쪽 여백 p-6, 섹션 사이 여백 mt-12

## 하지 말 것
- 이모지를 아이콘 대용으로 쓰지 않는다
- 카드 세 개 나란히 배치를 기본값으로 쓰지 않는다
- 가운데 정렬은 첫 화면 제목에만
```

CLAUDE.md에 한 줄 추가: `- 화면을 만들거나 고칠 때 DESIGN.md를 따른다.`

## 따라하기 2: 전체 적용

한 번에 전부 고치라고 하면 망가집니다. 화면 하나씩:

<div class="prompt-box not-prose" data-prompt="18-1" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 18-1</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

"DESIGN.md 규칙에 맞게 첫 화면(page.tsx)만 다시 스타일해줘. 구조와 기능은 바꾸지 말고 색·글꼴·간격만. 다른 파일은 건드리지 마."

</div>
</div>

확인 → 커밋 → 다음 화면. 화면이 4개면 요청 4번입니다.

## 따라하기 3: 폰에서 확인

17강에서 "폰에서 글자가 작다"는 피드백이 있었다면 지금 처리합니다.

<div class="prompt-box not-prose" data-prompt="18-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 18-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

"모든 화면을 폰(375px 너비)에서 확인해서, 버튼은 최소 높이 44px, 글자는 최소 16px, 가로 스크롤이 생기지 않게 고쳐줘."

</div>
</div>

브라우저 `F12` → 왼쪽 위 폰 아이콘을 누르면 폰 화면으로 볼 수 있습니다.

## 마무리 손질

- **로딩 상태**: 스피너 대신 회색 뼈대(skeleton)가 세련됩니다. "로딩 중에는 카드 모양 skeleton을 보여줘."
- **빈 상태**: 목록이 비었을 때 "아직 저장한 메뉴가 없어요. 첫 메뉴를 추천받아 보세요" + 버튼.
- **아이콘**: 이모지 대신 `lucide-react` 같은 아이콘 라이브러리. "lucide-react 설치를 허락할게, 이모지를 전부 lucide 아이콘으로 바꿔줘."

## 오늘의 체크리스트

- [ ] DESIGN.md에 색 3개, 글꼴 1개, 간격 규칙이 있다
- [ ] 모든 화면이 DESIGN.md를 따른다
- [ ] 폰 화면에서 가로 스크롤이 없고 버튼이 누르기 쉽다
- [ ] 빈 상태와 로딩 상태가 있다

## 다음 강의

19강, 자동화. 매일 반복하는 지루한 작업을 AI에게 넘깁니다.
