---
number: 9
title: 업무 관리
subtitle: 프로젝트 페이지, 주간 로그, 월 로그, 증류
goal: 프로젝트별 페이지(목표·현황·다음 단계·결정 기록)와 로그를 쌓고, 주간 요약과 월 증류를 클로드에게 시킵니다.
minutes: 35
part: 3부 · 활용
---

## 업무는 프로젝트 단위로

업무가 흩어지는 이유는 "지금 어디까지 했는지"가 한곳에 없어서예요. 프로젝트마다 **한 페이지**를 만들고 항상 같은 네 칸으로 적어요. (예시는 '블로그 개편'이라는 가상의 프로젝트예요.)

```markdown
---
title: 블로그 개편
type: project
updated: 2026-10-06
---

## 목표
2026-12-31 까지 글 20편 정리

## 현황
- 2026-10-06: 12편 정리 완료

## 다음 단계
- [ ] 2026-10-13 까지 나머지 8편 초안

## 결정 기록
- 2026-10-02: 카테고리를 3개로 줄이기로 함 (이유: 글이 적음)
```

**결정 기록**이 특히 중요해요. 몇 달 뒤 "왜 이렇게 했더라?"의 답이 거기 있어요.

## 로그로 흐름 남기기

일어난 일은 `wiki/log/2026-10.md` 같은 **월 로그**에 날짜별로 한 줄씩 남겨요. 길게 쓰지 않고 어느 페이지에 담았는지만 링크해요. 하루 5분이면 돼요.

> **기본 방법: 클로드 데스크탑 앱의 Code 탭.** 위키 폴더(`my-wiki`)를 프로젝트 폴더로 열고, 아래 프롬프트를 붙여 넣어 클로드에게 시킵니다. 클로드가 파일을 만들거나 바꾸려고 **권한을 물으면, 무엇을 하려는지 읽고** 허용합니다. 터미널로 하는 방법은 맨 아래 '터미널로도 할 수 있어요'에 있어요.

<div class="prompt-box not-prose" data-prompt="9-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 9-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

wiki/projects/ 폴더를 만들고 "블로그 개편" 프로젝트 페이지를 만들어줘. 칸은 목표, 현황, 다음 단계(체크박스), 결정 기록. frontmatter 는 title, type: project, updated. 날짜는 YYYY-MM-DD.
wiki/log/2026-10.md 도 만들고 오늘(2026-10-06) 날짜로 "프로젝트 페이지 생성" 한 줄을 넣어줘. 둘 다 index.md 에 연결해줘.

</div>
</div>


<div class="prompt-box not-prose" data-prompt="9-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 9-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

오늘(2026-10-06) 일을 기록해줘. "블로그 개편: 글 3편 초안 작성 완료". 프로젝트 페이지의 현황에 한 줄 추가하고, 월 로그에도 한 줄 넣고, 두 페이지의 updated 를 갱신해줘.

</div>
</div>


## 주간 요약, 월 증류

용어: **증류(crystallize)** 는 쌓인 기록에서 남길 결론만 뽑아 페이지로 만드는 일이에요. 로그는 "무슨 일이 있었나", 증류는 "그래서 무엇을 알게 됐나"예요. 긴 대화가 끝나면 결론을 위키로 옮겨요. 채팅창을 닫으면 사라지니까요.

<div class="prompt-box not-prose" data-prompt="9-3" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 9-3</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

이번 주(2026-10-05 ~ 2026-10-11) 월 로그와 프로젝트 페이지를 읽고 "이번 주 진행 상황 요약해줘".
끝난 일, 진행 중인 일, 막힌 일 세 칸으로 나누고, 막힌 일에는 풀 방법을 한 줄씩 제안해줘.

</div>
</div>


<div class="prompt-box not-prose" data-prompt="9-4" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 9-4</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

이번 달 월 로그와 프로젝트 페이지를 읽고 증류해줘. wiki/month-2026-10-summary.md 로 남길 결론 3~5개, 결정한 것, 열린 질문을 나눠 적고 [[근거 페이지]] 링크와 ## 출처를 달아줘. index 에 연결하고 로그에 "증류" 한 줄도 남겨줘.

</div>
</div>


## 터미널로도 할 수 있어요

<details>
<summary><strong>터미널의 claude 로 시키기</strong></summary>

`my-wiki` 폴더에서 `claude`를 실행하고 위 프롬프트를 그대로 붙여 넣으면 같은 결과가 나와요. 한 번만 시키고 끝낼 때는 `claude -p "프롬프트 내용"` 도 돼요.

</details>

::: practice
**실습 — 프로젝트 하나 굴리기**

- [ ] 프로젝트 페이지 1개가 목표·현황·다음 단계·결정 기록 네 칸으로 만들어졌다
- [ ] `wiki/log/` 에 이번 달 로그가 있고 오늘 날짜 줄이 들어갔다
- [ ] '이번 주 진행 상황 요약'을 시켜 세 칸 요약을 받았다
- [ ] 월 증류 페이지를 만들고 index에 연결했다
- [ ] 결정 기록에 '이유'가 적힌 줄이 하나 이상 있다
:::
