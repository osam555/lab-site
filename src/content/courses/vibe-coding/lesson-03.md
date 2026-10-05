---
number: 3
title: 개발 환경 세팅
subtitle: 가입하고, 설치하고, 화면 그대로 따라오세요
goal: Claude 데스크탑 앱(Code 탭), VS Code, Node.js, Git을 설치하고 Code 탭에서 첫 말을 걸어 확인합니다.
minutes: 40
part: 1부 · 준비
---

## 오늘 설치할 것

| 도구 | 역할 | 비용 |
|---|---|---|
| **Claude 데스크탑 앱 (Code 탭)** | 한국어로 시키면 파일을 만들고 고치고 명령까지 실행해주는 도구. 이 과정의 기본 에이전트 | Claude 구독 또는 API 사용량 |
| **VS Code** | 코드를 보고 편집하는 프로그램 | 무료 |
| **Node.js** | 웹 프로젝트를 실행하는 엔진 | 무료 |
| **Git** | 작업 저장 · 되돌리기 | 무료 |

설치는 순서대로, 하나 끝나면 확인하고 다음으로 넘어갑니다. 이 과정은 터미널(검은 명령 창)보다 **Claude 데스크탑 앱의 Code 탭**에서 말로 시키는 방식으로 진행합니다. 터미널이 더 편한 분을 위해 각 단계 아래에 "터미널로도 할 수 있어요"를 따로 적어 두었습니다.

## 1. Claude 데스크탑 앱 설치하고 Code 탭 열기

1. [claude.ai/download](https://claude.ai/download)에서 데스크탑 앱을 내려받아 설치합니다.
2. 앱을 열고 Claude 계정으로 로그인합니다. 계정이 없으면 claude.ai에서 만드세요. Code 탭을 쓰려면 Pro 이상 구독이나 API 결제 등록이 필요합니다.
3. 위쪽(또는 옆)의 **Chat / Cowork / Code** 탭 중 **Code**를 누릅니다.
4. 컴퓨터에 `my-first-app`이라는 빈 폴더를 하나 만듭니다. (macOS는 Finder, Windows는 탐색기에서 문서 폴더 안에 새 폴더)
5. Code 탭 입력창 근처에서 **프로젝트 폴더로 `my-first-app`을 선택**합니다. Claude는 이 폴더 안에서만 일합니다.

화면에서 보이는 버튼 이름은 앱 버전에 따라 조금 다를 수 있습니다. 비슷한 이름을 찾으세요.

**확인:** 입력창에 이렇게 쓰고 Enter를 누르세요.

> "안녕! 지금 선택된 폴더가 어디인지 알려줘."

폴더 이름을 말해주면 성공입니다. 명령을 실행해도 되냐고 물어보면 무엇을 하려는지 **읽고** 수락하세요. (읽고 누르는 습관은 4강에서 자세히 배웁니다.)

### 터미널로도 할 수 있어요

같은 Claude Code를 터미널에서 쓰는 방법(CLI)입니다. 터미널은 글자로 명령을 내리는 창이고, 명령을 붙여넣고 Enter만 기억하면 됩니다.

- **macOS**: `Cmd + Space` → "터미널" 검색 → Enter
- **Windows**: 시작 메뉴 → "PowerShell" 검색 → Enter

열렸으면 아래를 붙여넣고 Enter를 눌러보세요.

```bash
echo hello
```

`hello`가 출력되면 성공입니다. 터미널이 무섭지 않다는 것을 확인했습니다.

## 2. VS Code 설치

1. code.visualstudio.com 에서 다운로드 후 설치합니다.
2. 실행하고 왼쪽 확장(Extensions) 아이콘에서 **"Korean Language Pack"** 을 설치하면 메뉴가 한국어로 바뀝니다.

VS Code는 **결과를 눈으로 확인하는 곳**입니다. 일을 시키는 곳은 Code 탭이라서 둘을 나란히 두면 됩니다.

### 터미널로도 할 수 있어요

`Ctrl + \`` (백틱, 숫자 1 왼쪽 키)를 누르면 VS Code 안에서 터미널이 열립니다. 터미널로 진행할 때는 여기서 명령을 내립니다.

## 3. Node.js 설치

nodejs.org 에서 **LTS** 버전을 받아 설치합니다. 끝나면 Code 탭에서 확인합니다.

> "Node.js가 설치돼 있는지 확인하고 버전을 알려줘."

`v22.x.x` 같은 숫자를 알려주면 됩니다. 설치돼 있지 않다고 하면 앱을 완전히 종료했다가 다시 열고 한 번 더 물어보세요.

### 터미널로도 할 수 있어요

```bash
node -v
```

`v22.x.x` 같은 숫자가 나오면 됩니다. "command not found"가 나오면 터미널을 닫았다 다시 여세요.

## 4. Git 설치

- **macOS**: Code 탭에 "Git이 설치돼 있는지 확인해줘"라고 시킵니다. 설치 안내 창이 뜨면 "설치"를 클릭합니다.
- **Windows**: git-scm.com 에서 다운로드 → 설치 중 옵션은 전부 기본값

확인: Code 탭에 이렇게 시킵니다.

> "Git 버전을 확인해줘."

### 터미널로도 할 수 있어요

- **macOS**: 터미널에 `git -v` 입력 → 설치 안내가 뜨면 "설치" 클릭

확인:

```bash
git -v
```

## 5. Claude Code 확인

이 과정은 **Claude Code**를 기준으로 진행합니다. 1단계에서 설치한 데스크탑 앱의 Code 탭이 바로 Claude Code입니다. 한국어로 말하면 파일을 만들고 고치고 명령까지 실행해줍니다. 로그인도 1단계에서 끝났으니 따로 설치할 것이 없습니다.

**확인:** Code 탭에서 `my-first-app` 폴더가 선택된 채로 입력창에 말을 걸어 답이 오면 됩니다.

### 터미널로도 할 수 있어요

앱 대신 터미널에 설치해서 쓸 수도 있습니다.

```bash
npm install -g @anthropic-ai/claude-code
```

설치가 끝나면 아무 폴더에서나 실행해봅니다.

```bash
claude
```

처음엔 로그인 안내가 뜹니다. 브라우저가 열리고 Claude 계정으로 승인하면 끝. 계정이 없으면 claude.ai에서 만드세요. Claude Code를 쓰려면 Pro 이상 구독이나 API 결제 등록이 필요합니다.

확인:

```bash
claude --version
```

<div class="prompt-box not-prose" data-prompt="3-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

다른 터미널형 AI 도구(Codex CLI, Gemini CLI 등)를 써도 강의 내용은 대부분 그대로 적용됩니다. 단, 4강의 조작법은 Claude Code 기준입니다.

</div>
</div>

## 6. 첫 프로젝트 폴더 확인하기

1단계에서 만든 `my-first-app` 폴더가 앞으로의 작업 공간입니다. VS Code에서 **파일 → 폴더 열기**로 이 폴더를 열고, Code 탭에서도 같은 폴더가 선택돼 있는지 확인합니다. 앞으로 모든 작업은 이 폴더 안에서 합니다.

### 터미널로도 할 수 있어요

```bash
mkdir my-first-app
cd my-first-app
code .
```

VS Code가 이 폴더를 열면서 실행됩니다.

## 막혔을 때

설치 중 에러가 나면 **에러 메시지를 그대로 복사**해서 AI에게 붙여넣고 물어보세요.

> "Node.js 버전을 확인하라고 했더니 'command not found: node'라고 나와. 어떻게 해?"

에러 메시지를 복사해서 물어보는 습관, 이게 15강 디버깅의 핵심입니다. 오늘부터 시작하세요.

## 오늘의 체크리스트

- [ ] Code 탭에서 Node.js와 Git 버전을 확인했다 (터미널이면 `node -v`, `git -v`)
- [ ] Code 탭에 로그인했고 `my-first-app` 폴더가 선택돼 있다 (터미널이면 `claude --version`)
- [ ] `my-first-app` 폴더가 VS Code에 열려 있다

## 다음 강의

4강에서는 Code 탭의 화면과 핵심 조작을 익히고, 파일을 만들고 고치는 첫 순환을 돌아봅니다.
