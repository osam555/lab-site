---
number: 5
title: 점검과 정리
subtitle: 깨진 링크·오래된 페이지 찾기, 간단 lint
goal: 클로드에게 점검 스크립트(lint)를 만들게 해 깨진 링크, 고아 페이지, 목차 빠짐을 찾고 정리합니다.
minutes: 35
part: 2부 · 구축
---

## 위키도 청소가 필요해요

페이지가 쌓이면 이런 일이 생겨요.

- 링크를 걸었는데 가리키는 페이지가 이름이 바뀌어서 사라졌다 (**깨진 링크**)
- 만들어 놓고 어디서도 링크하지 않은 페이지 (**고아 페이지**)
- 페이지는 있는데 `index.md`에 안 올라간 것
- 반년 전 내용 그대로인 페이지

눈으로 찾기엔 많아지면 힘들어요. 그래서 **점검 도구**를 만들어요.

용어: **lint(린트)** 는 규칙 위반을 자동으로 찾아 주는 점검 프로그램을 가리켜요. 고치는 건 사람(또는 클로드)이 하고, lint는 "여기 이상해요" 목록만 줘요.

## 점검 항목 정하기

처음에는 이 정도면 충분해요.

| 점검 | 의미 |
|---|---|
| 깨진 위키링크 | `[[이름]]`인데 그 이름의 페이지가 없음 |
| index 빠짐 | 페이지가 `index.md`에 안 올라감 |
| `updated` 누락 | 맨 위 정보에 날짜가 없음 |
| 오래된 페이지 | `updated`가 6개월 이상 전 |

## 클로드에게 만들게 하기

스크립트를 직접 짤 필요 없어요. 무엇을 점검할지만 말하면 돼요.

> **기본 방법: 클로드 데스크탑 앱의 Code 탭.** 위키 폴더(`my-wiki`)를 프로젝트 폴더로 열고, 아래 프롬프트를 붙여 넣어 클로드에게 시킵니다. 클로드가 파일을 만들거나 바꾸려고 **권한을 물으면, 무엇을 하려는지 읽고** 허용합니다. 터미널로 하는 방법은 맨 아래 '터미널로도 할 수 있어요'에 있어요.

<div class="prompt-box not-prose" data-prompt="5-1" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-1</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

이 위키를 점검하는 파이썬 스크립트 scripts/lint_wiki.py 를 만들어줘. 외부 패키지 없이 표준 라이브러리만 써.
점검 항목:
1. wiki/ 의 [[링크]] 중 가리키는 페이지가 없는 것 (깨진 링크)
2. wiki/index.md 에서 링크되지 않은 페이지
3. frontmatter 에 updated 가 없거나 YYYY-MM-DD 형식이 아닌 페이지
4. updated 가 오늘로부터 180일 넘게 지난 페이지
결과는 항목별로 "문제 N건"과 파일명 목록으로 출력하고, 아무것도 안 고치는 읽기 전용으로 만들어줘.
만든 뒤에 한 번 실행해서 결과를 보여줘.

</div>
</div>


권한 요청이 나오면 "무슨 명령을 실행하려는지" 읽고 허용하세요. 스크립트는 **읽기만** 하니 위키가 망가질 일은 없어요.

## 결과를 보고 고치기

결과가 이렇게 나올 수 있어요.

```text
깨진 링크 2건
  wiki/lecture-03-notes.md -> [[prompt-rules]]
index 빠짐 1건
  wiki/concepts-core-3.md
```

각 문제를 어떻게 풀지는 사람이 판단해요. 이름이 바뀐 거면 링크를 고치고, 안 만든 페이지면 만들거나 링크를 지워요.

<div class="prompt-box not-prose" data-prompt="5-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

lint 결과에 나온 문제들을 하나씩 고쳐줘. 한 번에 다 바꾸지 말고, 각 문제마다 "이렇게 고칠게요"를 먼저 말해줘.
삭제가 필요하면 지우지 말고 먼저 나에게 물어봐. 다 끝나면 lint 를 다시 돌려 문제가 0건인지 확인해줘.

</div>
</div>


## 정기 점검 습관

- 큰 작업(페이지 여러 개 추가) 뒤에 한 번
- 매달 증류할 때 한 번

점검이 쌓여 규칙이 새로 필요하면 `CLAUDE.md`에 한 줄을 더해요. "큰 작업 후 `python3 scripts/lint_wiki.py`를 돌린다"를 넣어 두면 클로드가 알아서 챙겨요.

## 터미널로도 할 수 있어요

<details>
<summary><strong>lint 직접 실행</strong></summary>

위키 폴더에서 아래를 실행해요.

```bash
python3 scripts/lint_wiki.py
```

Windows에서는 `python scripts/lint_wiki.py` 라고 입력해요. 버전 문제로 안 되면 에러 문구를 통째로 클로드에게 보여 주세요. ([에러 만났을 때](/skills/error-debugging))

</details>

::: practice
**실습 — 첫 점검**

- [ ] `scripts/lint_wiki.py`가 만들어졌고 한 번 실행됐다
- [ ] 결과에 어떤 문제가 몇 건 있는지 읽을 수 있다 (0건이면 일부러 링크 하나를 깨뜨려 잡히는지 확인)
- [ ] 찾은 문제 중 1건 이상을 고치고 lint를 다시 돌려 줄어든 것을 확인했다
- [ ] `CLAUDE.md`에 '큰 작업 후 lint' 규칙을 한 줄 추가했다
- [ ] 삭제가 필요한 항목은 클로드가 지우지 않고 나에게 먼저 물었다
:::
