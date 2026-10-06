---
number: 12
title: 꺼내 쓰기 — 챗봇 지식과 원고 창고
subtitle: 질문-답 정제, 정정표, 지식 팩 빌드·검사·배포
goal: 위키를 질문-답 형태로 정제해 카톡 챗봇(FAQ 봇)의 지식으로 내보내고, 정정표로 틀린 답을 고치는 흐름과 다른 과정의 원고 창고로 쓰는 법을 익힙니다.
minutes: 40
part: 3부 · 활용
---

## 위키가 봇의 두뇌가 되는 구조

고객 문의 정리 위키가 있다면 "자주 묻는 질문과 답"이 이미 쌓여 있어요. 이것을 **카톡 챗봇(또는 FAQ 봇)의 지식**으로 내보낼 수 있어요. 이 과정에서는 봇 자체를 만들지 않고 **위키에서 지식 팩을 만드는 흐름**까지만 다뤄요.

용어: **지식 팩**은 봇이 읽는 질문-답 모음 파일이에요. 봇은 이것만 보고 답하고, 원본 위키는 건드리지 않아요.

```text
wiki 페이지 → 질문-답으로 정제 → 정정표 반영 → 지식 팩 빌드 → 검사 → 배포
   ↑                                                              |
   └──────── 답이 이상하면 위키(또는 정정표)를 고친다 ←────────────┘
```

**봇이 틀리면 봇이 아니라 위키를 고쳐요.** 그러면 다음 지식 팩에서 봇도 고쳐져요.

## 1. 질문-답으로 정제

> **기본 방법: 클로드 데스크탑 앱의 Code 탭.** 위키 폴더(`my-wiki`)를 프로젝트 폴더로 열고, 아래 프롬프트를 붙여 넣어 클로드에게 시킵니다. 클로드가 파일을 만들거나 바꾸려고 **권한을 물으면, 무엇을 하려는지 읽고** 허용합니다. 터미널로 하는 방법은 맨 아래 '터미널로도 할 수 있어요'에 있어요.

<div class="prompt-box not-prose" data-prompt="12-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 12-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

wiki/ 의 고객 문의 관련 페이지를 읽고 wiki/bot/faq.md 를 만들어줘.
- 형식: "Q. 고객이 실제로 쓸 말투의 질문" / "A. 위키에 있는 내용으로만 쓴 답" / "근거: [[페이지]]"
- 한 질문에 답 하나, 답은 3문장 이내, 질문은 다양한 표현 2~3개 포함
- 모르는 것은 "담당자 확인 필요"로 적고 지어내지 말 것
- 전화번호·이름·주소 같은 개인정보는 넣지 말 것

</div>
</div>


## 2. 정정표 — 확정한 답이 최우선

봇이 이상하게 답할 때마다 위키 본문을 헤집기보다, **내가 확정한 답**을 한 장의 표로 모아 최우선으로 쓰게 해요. 이 표가 **정정표**예요.

```markdown
| 번호 | 질문 | 확정 답 | 확정일 |
|---|---|---|---|
| 1 | 환불은 언제까지 되나요? | 결제 후 7일 이내 | 2026-10-06 |
```

정정표에 있는 질문은 **위키 내용보다 정정표를 우선**해요. 번호와 확정일을 남기고, 위키 본문도 나중에 같은 방향으로 고쳐요.

<div class="prompt-box not-prose" data-prompt="12-2" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 12-2</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

wiki/bot/corrections.md 에 정정표를 만들어줘 (번호, 질문, 확정 답, 확정일 열).
그리고 CLAUDE.md 에 "지식 팩을 만들 때 corrections.md 의 답이 faq.md 와 다르면 corrections.md 를 우선한다. 충돌이 있으면 나에게 알려준다"를 추가해줘.
연습용으로 가상의 정정 1건(환불 기간 7일)을 넣어줘.

</div>
</div>


## 3. 지식 팩 빌드·검사·배포

<div class="prompt-box not-prose" data-prompt="12-3" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 12-3</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

wiki/bot/faq.md 와 corrections.md 를 합쳐 bot-pack/knowledge.json 을 만들어줘 (질문 목록, 답, 정정 여부). 정정표가 있는 질문은 정정 답을 쓰고 "corrected": true 를 달아줘.
만든 뒤 검사해줘: 답이 비어 있는 항목, 같은 질문 중복, 개인정보처럼 보이는 문장. 결과를 표로 보여주고, 문제 없을 때만 "배포 준비 완료"라고 말해줘.

</div>
</div>


배포는 **내가 직접** 해요. 봇이 쓰는 서비스에 파일을 올리는 단계는 계정·외부 전송이 들어가니, 클로드가 "올릴 파일과 순서"를 정리해 주면 내가 확인하고 올려요. 서비스마다 방법이 달라 이 과정에서는 다루지 않아요.

## 봇이 이상한 답을 했을 때

1. 어떤 질문에 어떤 답이 나왔는지 적는다
2. 위키에 맞는 답이 있으면 위키 페이지를 고치고 지식 팩을 다시 만든다
3. 급하면 정정표에 한 줄 추가하고 지식 팩을 다시 만든다
4. 수정 이유와 날짜를 월 로그에 한 줄 남긴다

<div class="prompt-box not-prose" data-prompt="12-4" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 12-4</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

봇이 "환불은 14일 이내"라고 답했는데 맞는 답은 7일이야. 정정표에 새 줄(확정일 2026-10-06)을 추가하고, 위키 본문에서 14일이라고 적힌 곳도 찾아 알려줘. 고치기 전에 어디를 고칠지 목록부터 보여줘. 월 로그에도 한 줄 남겨줘.

</div>
</div>


## 원고 창고로 쓰기

위키는 이 사이트의 다른 과정의 **원고 창고**도 돼요. 위키에서 시작하면 새로 조사하지 않아도 돼요.

| 하고 싶은 일 | 위키에서 가져올 것 | 이어 볼 과정 |
|---|---|---|
| 블로그 글 | 주제 페이지 + 근거 | [네이버 블로그 만들기](/lectures/naver-blog) |
| 홈페이지·랜딩 문구 | 소개·FAQ 페이지 | [홈페이지 만들기](/lectures/homepage), [랜딩페이지 만들기](/lectures/landing-page) |
| SNS 글 | 핵심 요약 | [SNS 마케팅](/lectures/sns) |
| 영상 대본 | 주제 페이지 | [쇼츠 만들기](/lectures/shorts) |
| 내 서비스 | 정리된 도메인 지식 | [웹 서비스 만들기 20강](/lectures/vibe-coding) |

공개 전에는 개인정보, 저작권(내 말로 요약, 짧은 인용만), 최신성(`updated`)을 꼭 확인하고 게시 버튼은 내가 눌러요. 마지막으로 오늘 작업은 [깃으로 커밋](/skills/git-workflow)해 두세요.

## 터미널로도 할 수 있어요

<details>
<summary><strong>터미널의 claude 로 시키기</strong></summary>

`my-wiki` 폴더에서 `claude`를 실행하고 위 프롬프트를 그대로 붙여 넣으면 같은 결과가 나와요. 한 번만 시키고 끝낼 때는 `claude -p "프롬프트 내용"` 도 돼요.

</details>

::: practice
**최종 실습 — 내 위키 완성**

- [ ] `wiki/bot/faq.md` 에 질문-답 5개 이상이 있고 모두 근거 `[[링크]]`가 있다
- [ ] `wiki/bot/corrections.md` 정정표가 있고 정정 1건이 반영됐다
- [ ] 지식 팩을 만들고 검사 결과(빈 답·중복·개인정보)가 문제 없음이다
- [ ] '정정표를 먼저 고치고 지식 팩을 다시 만든다'는 순서를 내 말로 설명할 수 있다
- [ ] 위키로 블로그 초안이나 발표 개요를 1개 만들고 개인정보를 확인했다
- [ ] lint가 0건이고 오늘 작업이 커밋되어 있다 (5·6강)
- [ ] 다음 한 달 '매일 5분' 시간대와 첫 증류 날짜(YYYY-MM-DD)를 적었다
:::
