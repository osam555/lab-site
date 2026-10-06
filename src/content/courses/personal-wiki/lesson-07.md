---
number: 7
title: 질문하고 답 받기
subtitle: 위키를 근거로 답하게 하고, 출처를 밝히게
goal: 클로드에게 내 위키를 근거로 질문하고, 출처와 '위키에 없음'을 구분해 답하게 하는 습관을 만듭니다.
minutes: 30
part: 3부 · 활용
---

## 위키는 읽으라고 있는 거예요

쌓는 것의 진짜 보상은 **질문**이에요. "지난 세 번의 강의에서 공통으로 나온 개념이 뭐였지?" 같은 질문에 내 노트를 근거로 답을 받을 수 있어요. 검색 결과 목록이 아니라, **정리된 답과 근거**가 와요.

다만 AI는 자료에 없는 내용도 그럴듯하게 만들어 낼 수 있어요. 그래서 **위키를 근거로만 답하고, 출처를 밝히고, 없으면 없다고 말하라**고 규칙으로 정해 둬요.

## 질문 규칙 만들기

> **기본 방법: 클로드 데스크탑 앱의 Code 탭.** 위키 폴더(`my-wiki`)를 프로젝트 폴더로 열고, 아래 프롬프트를 붙여 넣어 클로드에게 시킵니다. 클로드가 파일을 만들거나 바꾸려고 **권한을 물으면, 무엇을 하려는지 읽고** 허용합니다. 터미널로 하는 방법은 맨 아래 '터미널로도 할 수 있어요'에 있어요.

<div class="prompt-box not-prose" data-prompt="7-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 7-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

CLAUDE.md 에 "질문에 답할 때" 섹션을 추가해줘.
- 먼저 wiki/index.md 를 읽고, 관련 페이지를 찾아 읽은 뒤 답한다
- 답에 쓴 내용마다 근거 페이지를 [[페이지이름]] 으로 밝힌다
- 위키에 없는 내용은 "위키에 없음"이라고 말하고, 일반 지식으로 답한다면 그렇다고 구분해서 표시한다
- 페이지끼리 내용이 다르면 둘 다 보여주고 어느 쪽이 최신(updated)인지 알려준다

</div>
</div>


## 질문 던져 보기

<div class="prompt-box not-prose" data-prompt="7-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 7-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

내 위키를 근거로 대답해줘. 지금까지 정리한 강의들에서 내가 기억해야 할 핵심 개념 3가지는 뭐야?
각 개념마다 근거 페이지를 [[ ]] 로 달고, 위키에 없는 말은 지어내지 마.

</div>
</div>


답이 오면 **근거 페이지를 직접 열어** 정말 그렇게 쓰여 있는지 확인해요. 처음 몇 번은 꼭 해 보세요. 클로드가 규칙을 잘 지키는지, 내 위키가 질문에 답할 만큼 정리돼 있는지 둘 다 알 수 있어요.

## 좋은 질문의 모양

| 약한 질문 | 강한 질문 |
|---|---|
| 강의 내용 알려줘 | 3강에서 말한 프롬프트 규칙 중 오늘 바로 쓸 수 있는 것 2개만 |
| 뭐 쓰면 좋아? | 내 위키의 독서 기록 중 '습관' 주제 책들을 비교해서 공통점 알려줘 |
| 정리해줘 | 이번 달 위키 페이지를 훑고, 아직 정리 안 된 질문 목록을 만들어줘 |

범위(어느 페이지, 어느 기간)와 모양(몇 개, 표로)을 주면 답이 정확해져요. 더 다듬는 법은 [프롬프트 잘 쓰기](/skills/prompt-writing)를 보세요.

## 답을 위키로 되돌리기

좋은 답이 나오면 채팅에만 두지 말고 위키에 남겨요. 이게 위키가 **쓸수록 똑똑해지는** 이유예요.

<div class="prompt-box not-prose" data-prompt="7-3" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 7-3</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

방금 답을 wiki/ 에 새 페이지로 저장해줘. 이름은 concepts-core-3.md.
frontmatter(title, type: concept, updated)를 넣고, 근거 페이지는 [[ ]] 링크로, 맨 아래에 ## 출처 칸을 만들어줘.
wiki/index.md 에도 링크를 추가해줘.

</div>
</div>


## 터미널로도 할 수 있어요

<details>
<summary><strong>터미널의 claude 로 질문하기</strong></summary>

`my-wiki` 폴더에서 `claude`를 실행한 뒤 같은 질문을 입력하면 돼요. 한 번만 물어보고 끝내고 싶다면 아래처럼 한 줄로도 돼요.

```bash
claude -p "내 위키를 근거로, 정리한 강의의 핵심 개념 3가지를 [[페이지]] 근거와 함께 알려줘"
```

</details>

::: practice
**실습 — 근거 있는 답**

- [ ] `CLAUDE.md`에 '질문에 답할 때' 규칙이 들어갔다
- [ ] 내 위키에 대한 질문 1개 이상을 하고 답을 받았다
- [ ] 답에 붙은 `[[근거 페이지]]`를 직접 열어 내용이 맞는지 확인했다
- [ ] 위키에 없는 질문을 일부러 하나 던져 '위키에 없음'이라는 답이 오는지 봤다
- [ ] 좋은 답 1개를 wiki에 새 페이지로 저장하고 index에 연결했다
:::
