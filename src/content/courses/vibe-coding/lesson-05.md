---
number: 5
title: Git
subtitle: 세이브 안 하고 보스전 들어가면 안 됩니다
goal: Git의 세 가지 동작(저장, 되돌리기, 올리기)을 이해하고 GitHub에 내 첫 저장소를 만듭니다.
minutes: 35
part: 1부 · 준비
---

## AI는 가끔 프로젝트를 망칩니다

"버튼 색만 바꿔줘"라고 했는데 AI가 파일 여섯 개를 건드리고, 화면이 하얗게 됩니다. 이때 두 가지 길이 있습니다.

- Git이 없으면: 어디가 잘못됐는지 찾아 헤매다 새로 시작
- Git이 있으면: `git checkout .` 한 줄로 1분 전으로 복귀

Git은 게임의 **세이브 포인트**입니다. 잘 되는 상태마다 세이브하고, 망하면 되돌아갑니다. 바이브 코딩에서 Git은 선택이 아니라 **안전벨트**입니다.

## 세 가지 동작만 기억하세요

| 동작 | 게임 비유 | 명령 |
|---|---|---|
| **커밋(commit)** | 세이브 | `git add .` → `git commit -m "메시지"` |
| **되돌리기** | 세이브 불러오기 | `git checkout .` (마지막 세이브로) |
| **푸시(push)** | 클라우드 백업 | `git push` |

이 셋이면 이 과정의 95%를 커버합니다. 브랜치, 머지 같은 건 나중에 필요할 때 AI에게 물어보면 됩니다.

## 따라하기 1: 프로젝트를 Git으로 관리 시작

3강에서 만든 `my-first-app` 폴더의 터미널에서:

```bash
git init
git add .
git commit -m "첫 커밋: index.html"
```

`git init`은 "이 폴더를 Git으로 관리하겠다"는 선언이고, 한 프로젝트에 한 번만 합니다.

처음이면 이름과 이메일을 물어봅니다. AI에게 "git 사용자 이름과 이메일 설정하는 법"을 물어보거나 아래를 실행하세요.

```bash
git config --global user.name "내 이름"
git config --global user.email "내 이메일"
```

## 따라하기 2: 망치고 되돌리기

1. AI에게: "index.html 내용을 전부 지우고 '망했다'만 남겨줘."
2. 브라우저에서 확인 — 정말 망했습니다.
3. 터미널에서:

```bash
git checkout .
```

4. 다시 확인 — 원래대로 돌아왔습니다.

이 안도감을 꼭 한 번 느껴보세요. 이후로는 AI에게 과감하게 시킬 수 있게 됩니다.

## 따라하기 3: GitHub에 올리기

GitHub는 Git 저장소를 보관해주는 클라우드입니다. 16강 배포 때도 여기서 바로 올립니다.

1. github.com 가입
2. 오른쪽 위 `+` → **New repository** → 이름 `my-first-app` → Create
3. 화면에 나오는 "…or push an existing repository" 아래 세 줄을 터미널에 붙여넣기

```bash
git remote add origin https://github.com/내아이디/my-first-app.git
git branch -M main
git push -u origin main
```

브라우저에서 새로고침하면 내 파일이 보입니다. 이제 노트북이 고장 나도 코드는 안전합니다.

## 커밋 메시지 습관

커밋 메시지는 "무엇을 했는지" 한 줄입니다. AI에게 시켜도 됩니다.

<div class="prompt-box not-prose" data-prompt="5-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

"지금까지 바뀐 내용으로 커밋해줘. 메시지는 한국어로."

</div>
</div>

좋은 리듬: **기능 하나가 동작하면 커밋.** "로그인 화면 추가", "메뉴 추천 API 연결", "버튼 색 수정". 하루에 3~10번이 자연스럽습니다.

## 오늘의 체크리스트

- [ ] `git init`, `git add .`, `git commit`을 해봤다
- [ ] 일부러 망친 뒤 `git checkout .`로 되돌려봤다
- [ ] GitHub에 저장소가 있고 `git push`가 성공했다

## 다음 강의

준비는 끝났습니다. 6강부터 2부, 실제로 "무엇을 만들지" 기획합니다. 1시간의 기획이 3개월의 삽질을 막아주는 이유를 알게 됩니다.
