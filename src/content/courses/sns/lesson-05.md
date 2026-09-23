---
number: 5
title: 예약 발행
subtitle: 시간표에 얹고, 확인하고, 예약
goal: variants와 카드를 스케줄러 API로 올려 채널별 최적 시간에 예약하고, API가 막힌 채널은 복사 도우미로 반자동 처리합니다.
minutes: 45
part: 2부 · 파이프라인 만들기
---

## 예약 = 초안 업로드 + 시간 배정

스케줄러 API로 하는 일은 두 가지입니다. ① 글과 이미지를 올려 초안을 만들고, ② 발행 시각을 붙입니다. CLAUDE.md 규칙대로 **즉시 발행은 호출하지 않습니다.**

## 따라하기 1: 시간표

한 원본을 모든 채널에 같은 시각에 올리면 서로 잡아먹습니다. 채널별로 시간을 흩뿌립니다.

<div class="prompt-box not-prose" data-prompt="5-1" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-1</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

channels.json의 best_times와 오늘 날짜를 기준으로 posts/2025-01-camping-chair/schedule.json을 만들어줘.
- 채널마다 첫 발행 시각 하나, 서로 최소 3시간 간격
- X·스레드 시리즈는 첫 글 시각에 한 번에 (연속 글은 스케줄러가 순서대로)
- 인스타는 저녁, 링크드인은 평일 오전, 스레드는 점심·밤
- 3일 뒤 "재활용" 슬롯 1개: 다른 후크 후보로 스레드 재게시
표로 보여줘. 아직 API는 호출하지 마.

</div>
</div>

표를 보고 시간을 조정합니다. "링크드인은 화요일 오전 8시로."

## 따라하기 2: 업로드 → 예약 ⏸

<div class="prompt-box not-prose" data-prompt="5-2" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-2</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

schedule.json과 variants.json, cards/를 바탕으로 스케줄러 API에 예약을 등록해줘.
1. 먼저 전체 내용을 표로 보여줘: 채널 / 시각 / 첫 줄 / 글자 수 / 이미지 파일 / 링크(UTM)
2. 내가 "예약해"라고 하면 그때 등록. 채널 하나씩, 결과(ID·상태)를 출력
3. 등록 후 각 항목을 schedule.json에 scheduled_id, status: "scheduled"로 기록
4. 실패한 채널은 건너뛰고 마지막에 목록으로

</div>
</div>

표를 **읽으세요.** 글자 수 초과, 잘못된 링크, 인스타 캡션에 URL이 들어간 경우가 여기서 걸립니다. 확인했으면:

<div class="prompt-box not-prose" data-prompt="5-3" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-3</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

예약해.

</div>
</div>

스케줄러 화면을 열어 캘린더에 5개가 보이는지 확인합니다. **첫 주는 발행 시각에 실제로 올라갔는지도 채널에서 확인**하세요.

## 따라하기 3: API가 막힌 채널 — 복사 도우미

X의 API 티어 문제, 카카오 채널처럼 스케줄러가 지원하지 않는 곳은 반자동으로:

<div class="prompt-box not-prose" data-prompt="5-4" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-4</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

scripts/clip.py를 만들어줘. `python3 scripts/clip.py posts/XXX x` 처럼 채널을 지정하면 그 채널의 최종 텍스트를 클립보드에 복사하고, 이미지 파일 경로를 열어줘(폴더를 열거나 경로 출력). 시리즈면 한 번 실행마다 다음 글을 복사.

</div>
</div>

::: windows
클립보드 복사는 `clip` 명령, 폴더 열기는 `explorer`. Claude가 알아서 쓰지만 안 되면 이 두 이름을 알려주세요.
:::

::: mac
클립보드는 `pbcopy`, 폴더 열기는 `open`. 마찬가지.
:::

카카오톡 채널은 관리자센터(center-pf.kakao.com)에서 메시지 예약 기능을 쓰고, 텍스트만 복사 도우미로 가져옵니다. 인스타도 API가 막히면 같은 방식: 텍스트 복사 → 앱에서 예약 게시.

## 링크와 UTM

모든 링크에 UTM이 붙어 있어야 6강에서 "어느 채널이 유입을 만들었는지"를 봅니다.

```
https://blog.naver.com/…?utm_source=threads&utm_medium=social&utm_campaign=camping-chair
```

네이버 블로그처럼 UTM을 무시하는 목적지라면, 짧은 링크 서비스(비틀리 등)의 채널별 링크로 대체합니다. "채널별 짧은 링크를 만들어서 variants에 넣어줘" — 짧은 링크 서비스 API 키가 있으면 자동, 없으면 수동 5개.

## 실패했을 때

| 증상 | 처방 |
|---|---|
| 401/403 | 키 만료 또는 권한. 스케줄러에서 재발급 → .env |
| 이미지 업로드 실패 | 크기(대개 8MB 이하)와 형식(png/jpg). "카드를 jpg 85%로" |
| 인스타 예약 거부 | 비즈니스 계정·페이스북 연결 확인. 캡션에 URL 있으면 제거 |
| 채널 토큰 만료 | 스케줄러 화면에서 채널 재연결 (주기적으로 생깁니다) |

```bash
git add .
git commit -m "camping-chair: 예약 등록"
```

## 오늘의 체크리스트

- [ ] schedule.json에 채널별 시각이 있고 3시간 이상 떨어져 있다
- [ ] 표를 확인한 뒤 예약했고, 스케줄러 캘린더에 보인다
- [ ] API 없는 채널은 복사 도우미로 올렸다
- [ ] 모든 링크에 UTM(또는 채널별 짧은 링크)이 있다
- [ ] 커밋했다

## 다음 강의

6강, 일주일 뒤 성과를 모아 리포트를 만들고, 잘 된 후크를 규칙 파일에 되먹입니다.
