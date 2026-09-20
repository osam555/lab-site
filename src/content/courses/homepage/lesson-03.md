---
number: 3
title: 터미널 5분 완성과 Claude Code 설치
subtitle: 명령 다섯 개면 충분합니다
goal: 터미널에서 폴더를 만들고 이동하는 명령 5개를 익히고, Claude Code를 설치해 첫 대화를 나눕니다.
minutes: 40
part: 1부 · 준비
---

## 터미널은 무섭지 않습니다

터미널은 **마우스 대신 글자로 컴퓨터에 명령하는 창**입니다. 검은 화면에 흰 글씨라 어려워 보이지만, 이 과정에서 쓰는 명령은 **다섯 개**뿐입니다. 나머지는 Claude Code가 대신 입력합니다.

VS Code에서 `Ctrl + \``로 터미널을 엽니다. 2강에서 이미 해봤습니다.

::: windows
VS Code 터미널은 기본으로 **PowerShell**입니다. 오른쪽 위에 `powershell`이라고 적혀 있으면 됩니다. `cmd`라고 되어 있다면 `+` 옆 화살표 → PowerShell을 고르세요.
:::

::: mac
VS Code 터미널은 기본으로 **zsh**입니다. 오른쪽 위에 `zsh`라고 적혀 있으면 됩니다. 별도 터미널 앱(Terminal.app)을 써도 명령은 같습니다.
:::

## 명령 다섯 개

| 명령 | 뜻 | 예 |
|---|---|---|
| `pwd` | 지금 어느 폴더에 있나 | `pwd` |
| `ls` | 이 폴더에 뭐가 있나 | `ls` |
| `cd 폴더이름` | 그 폴더로 이동 | `cd Desktop` |
| `cd ..` | 한 단계 위로 | `cd ..` |
| `mkdir 이름` | 새 폴더 만들기 | `mkdir my-site` |

::: windows
PowerShell에서도 위 다섯 명령이 전부 그대로 됩니다. 경로에 `\`가 보이는 것만 다릅니다 (예: `C:\Users\이름\Desktop`).
:::

::: mac
경로에 `/`가 보입니다 (예: `/Users/이름/Desktop`). `~`는 내 홈 폴더의 줄임말입니다.
:::

**팁**: 폴더 이름을 치다가 `Tab`을 누르면 자동 완성됩니다. `cd Des` + `Tab` → `cd Desktop`.

## 따라하기 1: 프로젝트 폴더 만들기

바탕화면에 홈페이지 폴더를 만들고 그 안으로 들어갑니다. 한 줄씩 입력하고 Enter.

```bash
cd ~/Desktop
mkdir my-site
cd my-site
pwd
```

::: windows
`pwd`의 결과가 `C:\Users\이름\Desktop\my-site` 처럼 나오면 성공입니다. `~`가 안 되면 `cd $HOME\Desktop`으로.
:::

::: mac
`pwd`의 결과가 `/Users/이름/Desktop/my-site` 처럼 나오면 성공입니다.
:::

폴더 이름은 **영어 소문자와 하이픈(-)** 만 쓰세요. 한글이나 띄어쓰기가 있으면 나중에 문제가 생깁니다.

## 따라하기 2: 이 폴더를 VS Code로 열기

```bash
code .
```

`.`은 "지금 이 폴더"라는 뜻입니다. VS Code가 `my-site` 폴더를 열면서 새 창이 뜹니다. 왼쪽 탐색기가 비어 있는 게 정상입니다. **앞으로 모든 작업은 이 창에서** 합니다. 새 창에서 다시 `Ctrl + \``로 터미널을 열면 자동으로 `my-site` 안에 있습니다.

::: mac
`code: command not found`가 나오면 2강의 "Shell Command: Install 'code' command in PATH"를 안 한 것입니다. `Cmd + Shift + P`에서 해주세요.
:::

## Claude Code 설치

```bash
npm install -g @anthropic-ai/claude-code
```

`npm`은 2강에서 Node.js와 함께 설치된 프로그램 설치 도구입니다. 1~2분 걸립니다. 경고(WARN)는 무시해도 되고, **ERR**이 빨갛게 나오면 그 메시지를 복사해 claude.ai에 물어보세요.

::: windows
`EACCES`나 권한 관련 에러가 나면 VS Code를 닫고, 시작 메뉴에서 VS Code를 **마우스 오른쪽 → 관리자 권한으로 실행**한 뒤 다시 시도하세요.
:::

::: mac
`EACCES: permission denied` 에러가 나면 `sudo npm install -g @anthropic-ai/claude-code`로 시도하고 Mac 로그인 비밀번호를 입력합니다 (입력 중 화면에 안 보이는 게 정상).
:::

확인:

```bash
claude --version
```

## 첫 대화

`my-site` 폴더 안의 터미널에서:

```bash
claude
```

처음엔 로그인 안내가 뜹니다. 화살표로 골라 Enter → 브라우저가 열림 → Claude 계정으로 승인 → 터미널로 돌아옴. 테마 선택 등 몇 가지 질문은 Enter로 넘기면 됩니다.

대화창이 뜨면 인사해보세요.

> 안녕! 이 폴더에 뭐가 있어?

"비어 있다"고 답하면 성공입니다. 이제 파일을 안 바꾸는 부탁을 하나:

> 나는 코딩을 전혀 모르는 사람이야. 앞으로 한국어로, 짧게, 전문 용어는 풀어서 설명해줘.

**Claude Code 나가기**: `/exit` 입력 또는 `Ctrl + C` 두 번.

## 화면 구성 미리 보기

앞으로 이 배치로 작업합니다.

```
┌─────────────┬──────────────────────────────┐
│ 탐색기       │  파일 내용 (필요할 때만)         │
│ (파일 목록)  │                              │
│             ├──────────────────────────────┤
│             │  터미널 ─ Claude Code 대화창    │
└─────────────┴──────────────────────────────┘
```

Claude Code가 파일을 만들면 **왼쪽 탐색기에 바로 나타납니다.** 클릭하면 내용이 보이고요. 그리고 브라우저에서 결과를 봅니다.

## 오늘의 체크리스트

- [ ] 명령 5개(`pwd`, `ls`, `cd`, `cd ..`, `mkdir`)를 써봤다
- [ ] 바탕화면에 `my-site` 폴더가 있고 VS Code로 열려 있다
- [ ] `claude --version`이 버전을 출력한다
- [ ] Claude Code에 로그인하고 첫 대화를 나눴다

## 다음 강의

준비 끝. 4강에서 종이에 그린 설계도를 Claude Code에게 주고 첫 홈페이지 파일을 만듭니다. 오늘 안에 브라우저에서 내 홈페이지를 보게 됩니다.
