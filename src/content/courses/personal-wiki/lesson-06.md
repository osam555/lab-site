---
number: 6
title: 깃으로 백업하고 되돌리기
subtitle: 커밋 한 번이 내 위키의 안전망
goal: 위키 폴더를 깃 저장소로 만들고, 커밋으로 백업하고, 잘못 고친 파일을 이전 상태로 되돌려 봅니다.
minutes: 30
part: 2부 · 구축
---

## 위키는 자산이라서 백업이 필요해요

클로드가 한 번에 여러 파일을 고치다 보면 실수로 좋은 페이지가 망가질 수 있어요. 컴퓨터 고장도 있고요. **깃(git)** 을 쓰면 위키의 모든 모습을 시점별로 저장하고, 필요하면 되돌릴 수 있어요.

용어: **깃**은 파일의 변경 이력을 저장하는 도구예요. **커밋**은 "지금 상태를 이름 붙여 저장"하는 한 번의 기록이고요. 개념은 [깃 기초](/basics/git-basics)에 쉬운 설명이 있어요.

## 1단계: 깃 저장소로 만들기

> **기본 방법: 클로드 데스크탑 앱의 Code 탭.** 위키 폴더(`my-wiki`)를 프로젝트 폴더로 열고, 아래 프롬프트를 붙여 넣어 클로드에게 시킵니다. 클로드가 파일을 만들거나 바꾸려고 **권한을 물으면, 무엇을 하려는지 읽고** 허용합니다. 터미널로 하는 방법은 맨 아래 '터미널로도 할 수 있어요'에 있어요.

<div class="prompt-box not-prose" data-prompt="6-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

이 폴더를 깃 저장소로 만들어줘.
1. git init 으로 시작
2. .gitignore 를 만들어서 .DS_Store, Thumbs.db 같은 시스템 파일을 제외
3. 지금 상태를 첫 커밋으로 저장 (메시지: "위키 뼈대와 첫 페이지")
각 명령을 실행하기 전에 무엇을 하는지 한 줄씩 설명해줘.

</div>
</div>


처음 쓰는 컴퓨터라면 깃이 사용자 이름·이메일을 물을 수 있어요. 클로드가 안내하는 대로 따라 하되, **비밀번호나 토큰은 대화에 붙여 넣지 마세요.** ([깃허브 기초](/basics/github-basics)의 로그인 방법을 참고하세요.)

## 2단계: 커밋 습관

일이 끝날 때마다 커밋해요. 두 가지 시점이 좋아요.

- 큰 정리(증류, 페이지 이동) **하기 전** — 안전한 되돌림 지점
- 그날 작업이 **끝났을 때** — 하루 한 번의 백업

<div class="prompt-box not-prose" data-prompt="6-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

오늘 바뀐 파일 목록을 보여주고, 변경 내용을 한국어 한 줄로 요약해서 커밋해줘.
커밋 메시지는 "무엇을 했는지"로 쓰고, 날짜를 2026-10-06 형식으로 넣어줘.

</div>
</div>


## 3단계: 되돌려 보기

일부러 한 번 실수를 만들어 봐요. 연습용 페이지 하나를 골라 "이 페이지 내용을 전부 지워줘"라고 시켜 보세요. (지울 페이지는 커밋된 상태여야 해요.) 그다음 이렇게 해요.

<div class="prompt-box not-prose" data-prompt="6-3" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-3</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

방금 지운 wiki/lecture-03-notes.md 를 마지막 커밋 상태로 되돌려줘.
되돌리기 전에 어떤 명령을 쓸지 설명하고, 다른 파일은 건드리지 않는다는 걸 확인시켜줘.

</div>
</div>


커밋이 되어 있으면 5초면 원래대로 돌아와요. 커밋 안 한 변경은 되돌릴 방법이 없으니 **커밋을 자주** 하는 게 핵심이에요. 더 자세한 상황별 되돌리기는 [Git으로 안전하게 되돌리기](/skills/git-workflow)에 있어요.

## 원격 백업은 선택

GitHub에 **비공개(private)** 저장소로 올리면 컴퓨터가 고장 나도 안전해요. 단, **공개로 올리면 내 노트가 모두에게 보여요.** 개인정보나 고객 정보가 있는 위키라면 반드시 비공개로 하고, 올리기 전에 한 번 더 확인하세요.

## 터미널로도 할 수 있어요

<details>
<summary><strong>깃 기본 명령</strong></summary>

```bash
git init
git add .
git commit -m "2026-10-06 위키 첫 커밋"
git status
git log --oneline
```

실수로 고친 파일 하나를 마지막 커밋으로 되돌릴 때는 `git restore wiki/파일이름.md` 를 써요. 되돌리면 그 파일의 커밋 안 한 수정이 사라지니 먼저 `git status`로 확인하세요.

</details>

::: practice
**실습 — 백업과 되돌리기**

- [ ] 위키 폴더가 깃 저장소가 됐다 (`git log`에 커밋이 1개 이상 보인다)
- [ ] `.gitignore`가 만들어졌다
- [ ] 오늘 작업을 커밋 메시지(날짜 포함)와 함께 저장했다
- [ ] 일부러 지운 페이지를 마지막 커밋에서 복원해 봤다
- [ ] 원격(GitHub)에 올린다면 '비공개' 저장소인지 확인했다 (안 올려도 괜찮아요)
:::
