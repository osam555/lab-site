---
number: 2
title: 준비물 설치하기
subtitle: 세 가지 설치, 화면 그대로 따라오세요
goal: VS Code, Node.js, Git을 설치하고 각각이 제대로 설치됐는지 확인 명령으로 검증합니다.
minutes: 40
part: 1부 · 준비
---

## 오늘 설치할 것

| 도구 | 무엇인가 | 왜 필요한가 |
|---|---|---|
| **VS Code** | 파일을 보고 편집하는 프로그램 | 만들어진 홈페이지 파일을 눈으로 보고, 터미널을 열기 위해 |
| **Node.js** | 프로그램 실행 엔진 | Claude Code가 이걸로 돌아갑니다 |
| **Git** | 파일 변경 기록·되돌리기 도구 | 망쳤을 때 되돌리고, 8강에서 인터넷에 올릴 때 |

순서대로 하나씩. **하나 끝나면 확인하고** 다음으로 넘어갑니다. 화면 위 버튼으로 내 컴퓨터를 고르면 해당 설명만 보입니다.

## 1. VS Code

code.visualstudio.com 에서 **Download** 버튼을 누르면 내 운영체제에 맞는 파일이 받아집니다.

::: windows
1. 받은 `VSCodeUserSetup-x64-….exe`를 더블클릭
2. 설치 중 **"PATH에 추가"** 체크박스가 있으면 반드시 체크 (기본으로 체크되어 있음)
3. **"탐색기 상황에 맞는 메뉴에 'Code로 열기' 추가"** 두 개도 체크하면 편합니다
4. 설치 완료 후 실행
:::

::: mac
1. 받은 `VSCode-darwin-….zip`을 더블클릭하면 `Visual Studio Code.app`이 나옵니다
2. 이 앱을 **응용 프로그램(Applications) 폴더로 드래그** — 다운로드 폴더에 두고 실행하면 나중에 문제가 생깁니다
3. 응용 프로그램에서 실행. "인터넷에서 다운로드한 앱입니다" 경고가 뜨면 **열기**
4. 실행 후 `Cmd + Shift + P` → `shell command` 입력 → **"Shell Command: Install 'code' command in PATH"** 선택. 이걸 해야 터미널에서 `code .`가 됩니다
:::

실행됐으면 왼쪽 확장(Extensions) 아이콘(네모 4개)을 눌러 **"Korean Language Pack"** 을 검색해 설치하면 메뉴가 한국어로 바뀝니다.

## 2. Node.js

nodejs.org 에서 **LTS**라고 적힌 쪽을 받습니다. (Current가 아니라 LTS입니다.)

::: windows
1. 받은 `node-v22….msi`를 더블클릭
2. 설치 화면은 전부 **Next**. "Automatically install the necessary tools" 체크박스는 **체크하지 않아도** 됩니다
3. 설치 완료 후 **열려 있는 터미널·VS Code를 전부 닫습니다** (새 프로그램을 인식시키기 위해)
:::

::: mac
1. 받은 `node-v22….pkg`를 더블클릭
2. 설치 화면은 전부 **계속** → 관리자 비밀번호 입력
3. 설치 완료 후 **열려 있는 터미널·VS Code를 전부 닫습니다**
:::

### 확인

VS Code를 다시 실행하고 `Ctrl + \`` (백틱: 키보드 왼쪽 위, 숫자 1 왼쪽) 를 누르면 아래에 **터미널**이 열립니다. 여기에 입력하고 Enter:

```bash
node -v
```

`v22.x.x` 같은 숫자가 나오면 성공. `'node'은(는) 내부 또는 외부 명령... 아닙니다` 또는 `command not found`가 나오면 VS Code를 완전히 종료했다 다시 여세요.

## 3. Git

::: windows
1. git-scm.com 에서 **Download for Windows** → 64-bit 설치 파일 받기
2. 설치 화면이 **10개 넘게** 나옵니다. **전부 Next** (기본값 그대로). 딱 하나, "Choosing the default editor" 화면에서 목록을 열어 **"Use Visual Studio Code as Git's default editor"** 를 고르면 좋습니다
3. 설치 완료 후 VS Code를 닫았다 다시 열기
:::

::: mac
macOS는 Git이 개발자 도구에 포함되어 있습니다. 터미널에 입력:

```bash
git -v
```

버전이 나오면 이미 있는 것. 대신 **"명령어 라인 개발자 도구를 설치하시겠습니까?"** 창이 뜨면 **설치**를 누르고 기다립니다 (5~15분). 끝나면 다시 `git -v`.
:::

### 확인

```bash
git -v
```

`git version 2.x.x`가 나오면 됩니다.

### 이름 등록

Git은 "누가 바꿨는지"를 기록하므로 이름과 이메일이 필요합니다. 아무 이름이나 괜찮고 공개되지 않습니다. 한 번만 하면 됩니다.

```bash
git config --global user.name "내 이름"
git config --global user.email "내이메일@example.com"
```

## 설치 문제가 생기면

에러 메시지를 **그대로 복사**해서 claude.ai 채팅창에 붙여넣고 물어보세요.

> "Windows에서 node -v 했더니 이렇게 나와: [에러 메시지]. 어떻게 해?"

"안 돼요"가 아니라 에러 메시지를 복사해서 물어보는 것. 이 습관이 앞으로 모든 문제를 푸는 방법입니다.

## 오늘의 체크리스트

- [ ] VS Code가 실행되고 메뉴가 한국어다
- [ ] VS Code 터미널에서 `node -v`가 버전을 출력한다
- [ ] `git -v`가 버전을 출력한다
- [ ] `git config --global user.name`을 등록했다

## 다음 강의

3강에서 터미널과 폴더 다루는 법 딱 5개를 배우고, Claude Code를 설치해 첫 인사를 나눕니다.
