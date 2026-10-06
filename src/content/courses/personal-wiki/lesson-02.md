---
number: 2
title: 폴더 만들기와 규칙 파일
subtitle: raw·wiki·index, 그리고 CLAUDE.md
goal: Code 탭에서 클로드에게 위키 뼈대(폴더 3개와 index.md, CLAUDE.md)를 만들게 하고 내용을 눈으로 확인합니다.
minutes: 35
part: 2부 · 구축
---

## 뼈대는 클로드에게 시키세요

폴더와 파일을 손으로 하나씩 만들 필요가 없어요. 빈 폴더를 하나 만들어 Code 탭에서 열고, 원하는 구조를 말로 설명하면 클로드가 만들어 줘요.

> **기본 방법: 클로드 데스크탑 앱의 Code 탭.** 위키 폴더(`my-wiki`)를 프로젝트 폴더로 열고, 아래 프롬프트를 붙여 넣어 클로드에게 시킵니다. 클로드가 파일을 만들거나 바꾸려고 **권한을 물으면, 무엇을 하려는지 읽고** 허용합니다. 터미널로 하는 방법은 맨 아래 '터미널로도 할 수 있어요'에 있어요.

## 먼저 빈 폴더 열기

1. 바탕화면이나 문서 폴더에 `my-wiki`라는 빈 폴더를 만듭니다. (이름은 영어 소문자와 `-`를 권해요. 한글·공백은 나중에 명령에서 불편할 수 있어요.)
2. Code 탭에서 **폴더 선택**을 눌러 `my-wiki`를 엽니다.

## 구조를 만들어 달라고 하기

<div class="prompt-box not-prose" data-prompt="2-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 2-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

이 폴더를 내 개인 위키로 만들 거야. 주제는 "내 강의 노트"야.
다음 구조를 만들어줘.
1. raw/ 폴더 (원본 자료 창고, 안에 .gitkeep 파일만)
2. wiki/ 폴더와 그 안의 index.md (모든 페이지의 목차, 지금은 제목과 "아직 페이지 없음" 한 줄)
3. 맨 위에 CLAUDE.md (규칙 파일)
만들기 전에 어떤 파일을 만들지 목록부터 보여주고, 내가 "진행해"라고 하면 만들어줘.

</div>
</div>


"목록부터 보여줘"라고 시키는 이유는, 클로드가 무엇을 만들지 **미리 읽고 고칠 기회**를 얻기 위해서예요. 큰 작업 전에 계획을 먼저 받는 습관은 [계획 먼저, 코드는 나중에](/skills/plan-mode-and-context)에서 더 자세히 다뤄요.

## 규칙 파일(CLAUDE.md)에 적을 것

용어: **규칙 파일**은 클로드가 이 폴더에서 일할 때 가장 먼저 읽는 안내서예요. 파일 이름이 `CLAUDE.md`면 자동으로 읽어요. 자세한 작성법은 [규칙 파일 제대로 쓰기](/skills/rules-file-deep-dive)를 보세요.

위키용 규칙은 짧아도 충분해요. 핵심은 이 다섯 가지입니다.

1. `raw/`는 추가만 한다. 원본은 고치거나 지우지 않는다.
2. 정리된 내용은 `wiki/`에만 쓴다.
3. 새 페이지를 만들면 반드시 `wiki/index.md`에 링크를 단다.
4. 페이지 안에서 다른 페이지를 가리킬 때는 `[[페이지이름]]` 형식을 쓴다.
5. 날짜는 `2026-10-06`처럼 절대 날짜로 적는다. ("지난주" 금지)

<div class="prompt-box not-prose" data-prompt="2-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 2-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

CLAUDE.md 에 이 위키의 규칙을 적어줘. 한국어로, 20줄 이내로.
- raw/ 는 추가만 하고 절대 수정·삭제하지 않는다
- 정리한 내용은 wiki/ 에만 쓴다
- 새 페이지를 만들면 wiki/index.md 에 링크를 추가한다
- 다른 페이지는 [[페이지이름]] 형식으로 연결한다
- 날짜는 YYYY-MM-DD 절대 표기만 쓴다
- 삭제·외부 전송·계정 입력이 필요한 일은 하기 전에 나에게 먼저 묻는다
끝나면 CLAUDE.md 내용을 그대로 보여줘.

</div>
</div>


마지막 줄이 중요해요. 위키는 쌓일수록 소중해지니, **되돌리기 어려운 일은 먼저 묻는다**는 약속을 규칙에 못 박아 둬요.

## 확인은 내가

클로드가 "만들었어요"라고 해도 직접 열어 봐요. 왼쪽 파일 목록에 `raw`, `wiki`, `CLAUDE.md`가 보이고, `wiki/index.md`를 열면 목차가 있어야 해요. 규칙이 내 뜻과 다르면 "3번 줄을 이렇게 고쳐줘"라고 말하면 돼요.

## 터미널로도 할 수 있어요

<details>
<summary><strong>폴더와 뼈대를 직접 만들기</strong></summary>

터미널을 열고 아래를 순서대로 입력해요. (Windows PowerShell, macOS 터미널 모두 같아요.)

```bash
mkdir my-wiki
cd my-wiki
mkdir raw wiki
```

`CLAUDE.md`와 `wiki/index.md`는 메모장(또는 아무 편집기)으로 새 파일을 만들어 위 규칙을 붙여 넣으면 돼요. 그다음 `claude`를 실행하면 같은 폴더에서 클로드를 쓸 수 있어요.

</details>

::: practice
**실습 — 뼈대 완성**

- [ ] `my-wiki` 폴더에 `raw/`, `wiki/`, `CLAUDE.md`가 보인다
- [ ] `wiki/index.md`를 열어 목차 파일이 있는 것을 확인했다
- [ ] `CLAUDE.md`의 규칙 6줄이 내 말로 이해된다 (모르는 줄은 클로드에게 '이게 무슨 뜻이야?'라고 물었다)
- [ ] 클로드가 파일을 만들기 전에 목록을 먼저 보여 줬고, 내가 확인한 뒤 진행했다
:::
