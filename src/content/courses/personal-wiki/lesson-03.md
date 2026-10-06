---
number: 3
title: 첫 자료 넣기
subtitle: raw에 원본을 두고, 정제해서 wiki 페이지로
goal: 메모·PDF·캡처 같은 원본을 raw/에 넣고, 클로드에게 정제를 시켜 첫 wiki 페이지를 만들어 봅니다.
minutes: 35
part: 2부 · 구축
---

## 수집, 정제, 두 단계로 나눠요

자료를 위키로 만드는 일은 두 단계예요.

1. **수집** — 원본을 `raw/`에 그대로 넣습니다. 고르지도, 고치지도 않아요.
2. **정제** — 클로드가 원본을 읽고 `wiki/`에 정리된 페이지를 씁니다. 핵심 요약, 용어, 나중에 쓸 내용 위주로요.

용어: **정제**는 원본에서 핵심만 뽑아 읽기 좋게 다시 쓰는 일이에요. 원본이 남아 있으니 정제가 마음에 안 들면 언제든 다시 할 수 있어요.

나누는 이유는 간단해요. 정제는 틀릴 수 있어요. 원본이 그대로 있어야 확인하고 다시 만들 수 있죠.

## 원본 넣어 보기

지난 강의 한 번 분량의 자료를 준비하세요. 아래 중 어떤 것이든 좋아요.

- 직접 적은 메모 (`.md` 또는 `.txt`)
- 강의 자료 PDF
- 화면 캡처 이미지

파일을 `my-wiki/raw/` 폴더에 넣을 때 **이름을 날짜로 시작**하게 해 두면 나중에 정리하기 좋아요. 예: `2026-10-06-강의3-메모.md`. 폴더 창에서 끌어다 놓거나, Code 탭 대화창에 파일을 끌어다 놓으면 돼요.

> 이름·전화번호·주소·계정 같은 **개인정보가 든 자료는 처음엔 넣지 마세요.** 연습이 끝나고 어떻게 다룰지 정한 뒤에 넣어도 늦지 않아요. 기준은 [안전·비용·계정](/basics/vibe-safety-money)에도 있어요.

## 정제 시키기

> **기본 방법: 클로드 데스크탑 앱의 Code 탭.** 위키 폴더(`my-wiki`)를 프로젝트 폴더로 열고, 아래 프롬프트를 붙여 넣어 클로드에게 시킵니다. 클로드가 파일을 만들거나 바꾸려고 **권한을 물으면, 무엇을 하려는지 읽고** 허용합니다. 터미널로 하는 방법은 맨 아래 '터미널로도 할 수 있어요'에 있어요.

<div class="prompt-box not-prose" data-prompt="3-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

raw/ 안에 새 자료가 있어. 이걸 읽고 wiki/ 에 정리 페이지를 만들어줘.
- 파일은 wiki/ 안에 소문자 영어와 - 로 이름 짓기 (예: lecture-03-notes.md)
- 맨 위에 한 줄 요약, 그 아래에 핵심 내용 5~8줄, 모르는 용어는 한 줄 풀이
- 맨 아래에 "## 출처" 칸을 만들고 원본 파일 경로(raw/...)를 적기
- 원본에 없는 내용을 지어내지 말 것. 불확실하면 "확인 필요"라고 적기
- 끝나면 wiki/index.md 에 이 페이지 링크도 추가
raw/ 파일은 절대 수정하지 마.

</div>
</div>


## 결과를 읽는 법

클로드가 만든 페이지를 **원본과 나란히 놓고** 읽어 보세요. 특히 숫자, 날짜, 고유명사는 원본과 같은지 한 번씩 봐요. 틀린 곳이 있으면 이렇게 고치게 해요.

<div class="prompt-box not-prose" data-prompt="3-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

방금 만든 페이지에서 "<틀린 부분>"은 원본에는 "<맞는 내용>"으로 되어 있어. 고쳐줘.
그리고 이런 종류의 실수를 줄이려면 CLAUDE.md 에 어떤 규칙을 더하면 좋을지 한 줄만 제안해줘.

</div>
</div>


고쳐지는 만큼 위키도, 규칙도 똑똑해져요. 같은 실수가 반복되면 그 규칙은 `CLAUDE.md`에 한 줄 추가합니다.

## 페이지는 작게

한 페이지가 너무 길어지면 읽기도 찾기도 힘들어요. 약 2500자를 넘으면 "주제별로 나눠서 폴더로 묶어줘"라고 시키세요. 작은 파일 여럿과 목차가 한 덩어리 큰 파일보다 낫습니다.

## 터미널로도 할 수 있어요

<details>
<summary><strong>원본 복사와 결과 확인</strong></summary>

```bash
cp ~/Downloads/강의3-메모.md raw/2026-10-06-강의3-메모.md
ls raw wiki
```

Windows PowerShell에서는 `cp`와 `ls`가 같은 이름으로 동작해요. 파일을 넣은 뒤에는 위 프롬프트 3-1을 `claude` 안에서 똑같이 붙여 넣으면 됩니다.

</details>

::: practice
**실습 — 첫 wiki 페이지**

- [ ] `raw/`에 원본 자료 1개 이상을 날짜 붙은 이름으로 넣었다
- [ ] 클로드가 `wiki/`에 정리 페이지를 만들었고, 맨 아래 `## 출처`에 원본 경로가 적혀 있다
- [ ] 정리 페이지의 숫자·날짜·이름을 원본과 대조해 확인했다
- [ ] `wiki/index.md`에 새 페이지 링크가 생겼다
- [ ] `raw/`의 원본 파일이 하나도 바뀌지 않았다 (이름과 내용 그대로)
:::
