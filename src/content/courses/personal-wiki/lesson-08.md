---
number: 8
title: 일정 관리
subtitle: 위키에 일정 페이지를 두고 클로드에게 정리시키기
goal: 월별 일정 페이지를 만들고, 클로드에게 다음 주 일정 정리·반복 일정 생성·캘린더에 올릴 목록 뽑기를 시킵니다.
minutes: 30
part: 3부 · 활용
---

## 일정도 위키의 한 페이지예요

일정은 여기저기 흩어지기 쉬워요. 메신저의 약속, 메일의 마감, 머릿속의 정기 모임. 위키에 **일정 페이지**를 두고 거기에 모으면 클로드가 읽고 정리해 줄 수 있어요. 이 강의 일정은 모두 연습용 예시(수강 일정, 정기 모임)예요.

월별로 파일을 나눠요. 예: `wiki/schedule/2026-10.md`

```markdown
---
title: 2026-10 일정
type: schedule
updated: 2026-10-06
---

## 고정 일정
- 2026-10-08 (목) 19:00 강의 4강 수강
- 2026-10-15 (목) 19:00 강의 5강 수강

## 마감
- 2026-10-20 독서 모임 발표 자료 제출
```

규칙은 하나예요. **날짜는 YYYY-MM-DD 절대 표기**, 요일과 시간을 함께 적어요. "다음 주 목요일"이라고 쓰면 한 달 뒤에는 뜻을 몰라요.

## 클로드에게 시키기

> **기본 방법: 클로드 데스크탑 앱의 Code 탭.** 위키 폴더(`my-wiki`)를 프로젝트 폴더로 열고, 아래 프롬프트를 붙여 넣어 클로드에게 시킵니다. 클로드가 파일을 만들거나 바꾸려고 **권한을 물으면, 무엇을 하려는지 읽고** 허용합니다. 터미널로 하는 방법은 맨 아래 '터미널로도 할 수 있어요'에 있어요.

<div class="prompt-box not-prose" data-prompt="8-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 8-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

wiki/schedule/ 폴더를 만들고 2026-10.md 일정 페이지를 만들어줘. frontmatter(title, type: schedule, updated)와 "고정 일정", "마감" 두 칸을 넣고, 날짜는 YYYY-MM-DD (요일) 시간 형식으로 적게 해줘.
아래 일정을 넣어줘: 2026-10-08 19:00 강의 4강, 2026-10-15 19:00 강의 5강, 2026-10-20 독서 모임 발표 자료 제출.
wiki/index.md 에도 연결해줘.

</div>
</div>


<div class="prompt-box not-prose" data-prompt="8-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 8-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

오늘이 2026-10-06 이야. wiki/schedule/ 을 읽고 다음 7일(2026-10-07 ~ 2026-10-13) 일정을 날짜순으로 정리해줘.
겹치는 일정이나 준비가 필요한 일정이 있으면 따로 알려줘. 위키에 없는 일정은 지어내지 마.

</div>
</div>


<div class="prompt-box not-prose" data-prompt="8-3" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 8-3</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

매주 목요일 19:00 "독서 모임" 일정을 2026-11-05 부터 12개월치 만들어줘.
wiki/schedule/ 에 월별 파일로 나눠서 넣고, 각 파일의 updated 를 갱신해줘. 첫 달 것만 먼저 보여주고 내가 "진행해"라고 하면 나머지를 만들어줘.

</div>
</div>


## 캘린더 앱과 함께 쓰기

위키는 "내용을 모아 두는 곳"이고, 알림은 캘린더 앱이 잘해요. 연결은 단순하게 가요. 클로드에게 **캘린더에 올릴 목록**을 받아서 **내가 직접 등록**해요.

<div class="prompt-box not-prose" data-prompt="8-4" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 8-4</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

wiki/schedule/2026-10.md 에서 2026-10-07 이후 일정만 뽑아서, 캘린더에 옮겨 적기 쉬운 표로 만들어줘. 열은 날짜, 시작 시간, 제목, 메모. 파일은 건드리지 말고 대화로만 보여줘.

</div>
</div>


캘린더에 올리는 마지막 단계는 내가 눌러요. 외부 서비스에 자동으로 쓰게 하려면 계정 권한이 필요해서 이 과정에서는 다루지 않아요. ([안전·비용·계정](/basics/vibe-safety-money) 참고)

## 터미널로도 할 수 있어요

<details>
<summary><strong>터미널의 claude 로 시키기</strong></summary>

`my-wiki` 폴더에서 `claude`를 실행하고 위 프롬프트를 그대로 붙여 넣으면 같은 결과가 나와요. 한 번만 시키고 끝낼 때는 `claude -p "프롬프트 내용"` 도 돼요.

</details>

::: practice
**실습 — 일정 페이지**

- [ ] `wiki/schedule/` 에 이번 달 일정 페이지가 만들어졌다 (날짜는 모두 `YYYY-MM-DD`)
- [ ] '다음 7일 일정 정리'를 시켜 날짜순 목록을 받았다
- [ ] 반복 일정 첫 달을 확인한 뒤 나머지 달을 만들게 했다
- [ ] 캘린더에 올릴 목록을 받아 일정 1개 이상을 내가 직접 등록했다
- [ ] 일정 페이지가 `index.md`에서 연결된다
:::
