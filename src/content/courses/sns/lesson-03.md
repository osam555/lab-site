---
number: 3
title: 채널별 변환 규칙과 변환
subtitle: 같은 이야기, 다섯 가지 말투
goal: 채널별 형식 규칙을 channels.json으로 정의하고, 원본 하나를 채널별 variants.json으로 변환한 뒤 후크를 고릅니다.
minutes: 50
part: 2부 · 파이프라인 만들기
---

## 규칙이 없으면 매번 다시 설명합니다

"인스타는 첫 줄이 중요하고 해시태그는 아래에, 스레드는 짧게 대화체로, 링크드인은 격식…" 이걸 매번 말하는 대신 파일로 둡니다. 그러면 변환 요청이 "이 글 변환해줘" 한 줄이 됩니다.

## 따라하기 1: channels.json

<div class="prompt-box not-prose" data-prompt="3-1" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-1</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

sns-plan.md의 채널로 channels.json을 만들어줘. 채널마다:
- `max_chars`, `image_ratio`, `image_count` (캐러셀 가능 수)
- `tone`: 한 줄 (예: 스레드 "친구에게 말하듯", 링크드인 "동료에게 정리해 주듯")
- `structure`: 글 구조 (예: 인스타 "첫 줄 후크 → 3~5줄 본문 → 줄바꿈 → CTA → 해시태그 8개")
- `hashtags`: 개수와 위치
- `link_policy`: 본문 링크 가능 여부 (인스타는 불가 → "프로필 링크" 문구)
- `cta`: 기본 행동 유도 문구 2~3개
- `best_times`: 요일·시간대 (일단 일반적인 값, 6강에서 데이터로 갱신)
- `series`: 연속 글 허용 여부와 최대 개수 (X·스레드)

</div>
</div>

만들어진 값은 **일반적인 시작점**입니다. 6강에서 내 데이터로 바꿉니다.

## 따라하기 2: 원본 넣기

`sources/`에 원본을 넣습니다. 블로그 글이면 md/txt, 영상이면 대본과 링크. 예: `sources/camping-chair.md`.

<div class="prompt-box not-prose" data-prompt="3-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

sources/camping-chair.md로 posts/2025-01-camping-chair/를 만들고 source.md로 복사. 원본의 핵심 메시지 1개, 뒷받침 포인트 3개, 독자가 얻는 것 1줄, 원본 링크를 source.md 맨 위에 정리해줘.

</div>
</div>

이 "핵심 1 · 포인트 3 · 얻는 것 1"이 모든 채널 변환의 뿌리입니다.

## 따라하기 3: 변환

<div class="prompt-box not-prose" data-prompt="3-3" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-3</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

source.md를 channels.json의 모든 채널로 변환해서 variants.json으로 만들어줘.
- 채널마다 `hook_candidates` 3개 (첫 줄 후보), `body`, `cta`, `hashtags`, `link`(UTM 포함), `image_ratio`
- X와 스레드는 연속 글(series)로도 1안: 3~5개로 나눈 배열
- VOICE.md의 제거 목록 표현은 쓰지 마
- 채널별로 같은 문장을 그대로 복사하지 마. 채널의 독자에 맞게 다시 써
- 사람이 읽기 좋게 variants.md도 만들어줘

</div>
</div>

## 채널별로 달라야 하는 것

| 채널 | 이렇게 |
|---|---|
| 스레드 | 결론부터, 질문으로 끝내기, 3~4문장 |
| X | 숫자·대비로 시작, 연속 글은 1번이 전체 요약 |
| 인스타 | 첫 줄이 "더 보기" 전에 보이는 전부. 본문은 줄바꿈 많이. 해시태그는 맨 아래 |
| 링크드인 | 배운 점·실패담 구조. 첫 두 줄 뒤 "…더 보기"가 잘리는 걸 고려 |
| 카카오 채널 | 공지·혜택 중심. 짧고 명확, 링크 버튼 |

## 따라하기 4: 후크 고르기 ⏸

`variants.md`에서 채널마다 후크 3개 중 하나를 **직접** 고릅니다. 기준은 "내가 이 첫 줄을 보면 멈출까". 고르면:

<div class="prompt-box not-prose" data-prompt="3-4" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-4</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

스레드 2번, 인스타 1번, 링크드인 3번, X 시리즈 안으로 확정. variants.json의 hook에 반영하고 candidates는 남겨둬.

</div>
</div>

후크 선택은 사람이 합니다. 6강에서 어떤 후크가 잘 됐는지 데이터로 보고 규칙에 되먹입니다.

## 따라하기 5: 문체 검사

<div class="prompt-box not-prose" data-prompt="3-5" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-5</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

variants.json 전체를 VOICE.md 기준으로 검사해서 걸리는 문장을 표로 (고치진 말고). 그리고 채널 간에 똑같은 문장이 있으면 표시.

</div>
</div>

지시해서 고칩니다. "3번, 5번 고쳐줘."

```bash
git add .
git commit -m "camping-chair: 채널별 변환"
```

## 오늘의 체크리스트

- [ ] channels.json에 채널별 규칙이 있다
- [ ] source.md 위에 핵심 1·포인트 3·얻는 것 1이 있다
- [ ] variants.json에 모든 채널 변환과 확정 후크가 있다
- [ ] 채널 간 복붙 문장이 없다
- [ ] 커밋했다

## 다음 강의

4강, 채널별 비율에 맞는 이미지 카드를 템플릿에서 자동 생성합니다.
