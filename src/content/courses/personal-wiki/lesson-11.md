---
number: 11
title: 관제탑으로 쓰기
subtitle: 일정·업무·할 일·결재함을 한 화면으로
goal: 앞 세 강의 페이지를 한 장의 대시보드로 묶고, 클로드에게 오늘 브리핑과 주간 요약을 매번 같은 틀로 받습니다.
minutes: 35
part: 3부 · 활용
---

## 한 화면에 모으기

일정, 업무, 할 일, 결재함을 따로 열면 매번 네 군데를 돌아다녀야 해요. 이 네 가지를 한 장으로 묶으면 위키가 **일의 관제탑(컨트롤 타워)** 이 돼요. 항공 관제탑처럼 "지금 무엇이 어디까지 왔는지"를 한눈에 보는 중심판이에요.

용어: **대시보드**는 중요한 현황을 한 화면에 모아 보여 주는 요약 페이지예요.

## 대시보드 페이지

`wiki/dashboard.md` 하나를 만들고 아래 칸을 클로드가 채우게 해요. 내용을 복사하지 않고 **원본 페이지로 `[[링크]]`** 만 걸어요. 그래야 두 벌이 안 생겨요.

| 칸 | 어디서 가져오나 |
|---|---|
| 오늘 일정 | schedule 월별 페이지 |
| 오늘 할 일 3개 | todo 페이지 |
| 프로젝트 현황 | projects 아래 프로젝트 페이지들 |
| 내 승인 대기 | inbox(결재함) 페이지 |
| 최근 로그 5줄 | log 월 로그 |

> **기본 방법: 클로드 데스크탑 앱의 Code 탭.** 위키 폴더(`my-wiki`)를 프로젝트 폴더로 열고, 아래 프롬프트를 붙여 넣어 클로드에게 시킵니다. 클로드가 파일을 만들거나 바꾸려고 **권한을 물으면, 무엇을 하려는지 읽고** 허용합니다. 터미널로 하는 방법은 맨 아래 '터미널로도 할 수 있어요'에 있어요.

<div class="prompt-box not-prose" data-prompt="11-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 11-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

wiki/dashboard.md 를 만들어줘. 오늘(2026-10-06) 기준으로 아래 칸을 채워줘.
1. 오늘 일정 2. 오늘 할 일(최대 3개) 3. 프로젝트별 한 줄 현황 4. 결재함 승인 대기 5. 최근 로그 5줄
내용을 복사하지 말고 각 칸에 원본 [[링크]] 를 달고 요약만 적어줘. 위키에 없는 내용은 지어내지 마. index 에 연결하고 updated 도 달아줘.

</div>
</div>


## 매일 아침 브리핑

대시보드는 한 번 만들고 끝이 아니라 **매번 새로 고쳐** 써요.

<div class="prompt-box not-prose" data-prompt="11-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 11-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

오늘 날짜는 2026-10-06 이야. 대시보드를 새로 고쳐줘. 일정, 할 일, 결재함을 다시 읽어서 오늘 해야 할 일을 우선순위 순으로 5줄 이내로 브리핑하고, 내가 결정해야 할 것(결재함)은 맨 위에 따로 표시해줘.

</div>
</div>


<div class="prompt-box not-prose" data-prompt="11-3" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 11-3</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

이번 주(2026-10-05 ~ 2026-10-11) 로그를 요약해줘. 끝낸 일 / 밀린 일 / 다음 주에 넘길 일로 나누고, 밀린 일은 todo.md 의 이번 주 칸으로 옮길지 나에게 먼저 물어봐줘.

</div>
</div>


## 규칙으로 고정하기

같은 요청을 자주 하게 되면 규칙 파일에 적어 둬요. 예를 들어 "'오늘 브리핑'이라고 하면 대시보드를 새로 고치고 오늘 해야 할 일 5줄로 답한다"를 `CLAUDE.md`에 넣으면 이후엔 두 글자로 시킬 수 있어요. 규칙 다듬는 법은 [규칙 파일 제대로 쓰기](/skills/rules-file-deep-dive)를 보세요.

## 대시보드의 한계

- 위키는 **자동으로 갱신되지 않아요.** 내가(또는 클로드가) 시켜야 새로워져요.
- 알림은 해 주지 않아요. 알림이 필요한 일정은 캘린더 앱에도 등록해 둬요.
- 민감한 항목은 위키 안에 두되, 밖으로 공유할 때는 요약만 꺼내요.

## 터미널로도 할 수 있어요

<details>
<summary><strong>터미널의 claude 로 시키기</strong></summary>

`my-wiki` 폴더에서 `claude`를 실행하고 위 프롬프트를 그대로 붙여 넣으면 같은 결과가 나와요. 한 번만 시키고 끝낼 때는 `claude -p "프롬프트 내용"` 도 돼요.

</details>

::: practice
**실습 — 나만의 관제탑**

- [ ] `wiki/dashboard.md` 가 만들어지고 5개 칸마다 원본 `[[링크]]`가 있다
- [ ] '오늘 브리핑'을 시켜 우선순위 5줄을 받았다
- [ ] 결재함(내가 결정할 것)이 브리핑 맨 위에 표시됐다
- [ ] '이번 주 로그 요약'을 받아 봤다
- [ ] 자주 하는 요청 1개를 `CLAUDE.md`에 규칙으로 적었다
:::
