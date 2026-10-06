---
number: 10
title: 할 일 관리
subtitle: 오늘·이번 주·보류, 그리고 결재함
goal: 할 일 페이지를 만들고 클로드에게 오늘 할 일 고르기·완료 기록을 시키며, 승인 대기 목록인 결재함의 역할을 이해합니다.
minutes: 30
part: 3부 · 활용
---

## 할 일 한 장

할 일은 짧게 쓰고 자주 고치는 글이에요. `wiki/todo.md` 한 장에 네 칸으로 나눠요.

```markdown
---
title: 할 일
type: todo
updated: 2026-10-06
---

## 오늘
- [ ] 강의 4강 정리 페이지 만들기

## 이번 주
- [ ] 2026-10-09 까지 블로그 글 3편 초안

## 보류
- [ ] 연습용 폴더 정리 (시간 날 때)

## 완료
- [x] 2026-10-05 규칙 파일 만들기
```

**완료 칸**은 지우지 않고 날짜와 함께 옮겨요. 그래야 월말에 "한 달 동안 뭘 했지?"를 클로드가 읽고 증류할 수 있어요.

## 클로드에게 시키기

> **기본 방법: 클로드 데스크탑 앱의 Code 탭.** 위키 폴더(`my-wiki`)를 프로젝트 폴더로 열고, 아래 프롬프트를 붙여 넣어 클로드에게 시킵니다. 클로드가 파일을 만들거나 바꾸려고 **권한을 물으면, 무엇을 하려는지 읽고** 허용합니다. 터미널로 하는 방법은 맨 아래 '터미널로도 할 수 있어요'에 있어요.

<div class="prompt-box not-prose" data-prompt="10-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 10-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

wiki/todo.md 를 만들어줘. 칸은 오늘, 이번 주, 보류, 완료. 체크박스 형식으로, frontmatter(title, type: todo, updated)를 넣고 index 에 연결해줘.
연습용으로 할 일 6개(가상)를 이번 주와 보류에 나눠 넣어줘. 날짜는 YYYY-MM-DD.

</div>
</div>


<div class="prompt-box not-prose" data-prompt="10-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 10-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

오늘이 2026-10-06 이야. wiki/todo.md 의 이번 주 칸과 wiki/schedule/ 의 일정을 보고 "오늘 할 일 3개 골라줘".
기준: 마감이 가까운 것, 일정과 겹치지 않는 것. 고른 이유를 한 줄씩 적고, 내가 "확정"이라고 하면 오늘 칸으로 옮겨줘.

</div>
</div>


<div class="prompt-box not-prose" data-prompt="10-3" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 10-3</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

"강의 4강 정리 페이지 만들기" 를 끝냈어. 오늘 날짜(2026-10-06)로 완료 칸으로 옮기고 월 로그에도 한 줄 남겨줘. updated 도 갱신해줘.

</div>
</div>


## 결재함 — 내 승인이 필요한 것

클로드가 일을 많이 할수록 "내가 확인해야 할 것"이 쌓여요. 이를 한곳에 모은 목록이 **결재함(승인 대기 목록)** 이에요. 예를 들면 클로드가 만든 블로그 초안, 삭제하자고 제안한 페이지, 외부에 보내기 전 문구 같은 것들이에요.

`wiki/inbox.md` 에 한 줄씩 두고, **무엇을·누가 만들었고·내가 정할 것**을 적어요.

```markdown
- [ ] 2026-10-06 블로그 초안 3편 — 클로드 작성, 공개해도 되는지 내가 확인
- [ ] 2026-10-06 오래된 페이지 2개 삭제 제안 — 지울지 내가 결정
```

할 일은 **내가 할 일**, 결재함은 **내가 결정할 일**이에요. 나누면 "내가 결정 안 해서 멈춘 일"이 눈에 보여요. 삭제·공개·전송처럼 되돌리기 어려운 일은 클로드가 먼저 결재함에 올리고 내 승인을 기다리게 규칙으로 정해 둬요.

<div class="prompt-box not-prose" data-prompt="10-4" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 10-4</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

wiki/inbox.md 를 만들고 "결재함" 규칙을 CLAUDE.md 에 추가해줘.
규칙: 삭제, 외부 전송, 공개 게시가 필요한 일은 직접 하지 말고 inbox.md 에 "무엇을, 왜, 내가 정할 것" 한 줄로 올린다. 내가 승인하면 그때 실행하고 완료 처리한다.
연습용 항목 2개를 넣어줘.

</div>
</div>


## 터미널로도 할 수 있어요

<details>
<summary><strong>터미널의 claude 로 시키기</strong></summary>

`my-wiki` 폴더에서 `claude`를 실행하고 위 프롬프트를 그대로 붙여 넣으면 같은 결과가 나와요. 한 번만 시키고 끝낼 때는 `claude -p "프롬프트 내용"` 도 돼요.

</details>

::: practice
**실습 — 할 일과 결재함**

- [ ] `wiki/todo.md` 에 오늘·이번 주·보류·완료 네 칸이 있다
- [ ] '오늘 할 일 3개 골라줘'를 시켜 이유가 붙은 답을 받았다
- [ ] 할 일 1개를 완료 칸으로 옮기고 날짜가 붙었다
- [ ] `wiki/inbox.md` 와 결재함 규칙이 CLAUDE.md 에 들어갔다
- [ ] '할 일'과 '결재함'의 차이를 내 말로 설명할 수 있다
:::
