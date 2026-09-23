---
number: 3
title: 개발 환경 세팅
subtitle: 가입하고, 한 줄 붙여넣고, 화면 그대로 따라오세요
goal: VS Code, Node.js, Git, Claude Code를 설치하고 터미널에서 "hello"를 출력합니다.
minutes: 40
part: 1부 · 준비
---

## 오늘 설치할 것

| 도구 | 역할 | 비용 |
|---|---|---|
| **VS Code** | 코드를 보고 편집하는 프로그램 | 무료 |
| **Node.js** | 웹 프로젝트를 실행하는 엔진 | 무료 |
| **Git** | 작업 저장 · 되돌리기 | 무료 |
| **Claude Code** | 터미널에서 대화하며 코드를 대신 써주는 도구 | Claude 구독 또는 API 사용량 |

설치는 순서대로, 하나 끝나면 확인하고 다음으로 넘어갑니다.

## 1. 터미널 열기

터미널은 글자로 명령을 내리는 창입니다. 오늘은 딱 하나만 기억하세요: **명령을 붙여넣고 Enter**.

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
3. `Ctrl + \`` (백틱, 숫자 1 왼쪽 키)를 누르면 VS Code 안에서 터미널이 열립니다. 앞으로는 여기서 명령을 내립니다.

## 3. Node.js 설치

nodejs.org 에서 **LTS** 버전을 받아 설치합니다. 끝나면 터미널에서 확인합니다.

```bash
node -v
```

`v22.x.x` 같은 숫자가 나오면 됩니다. "command not found"가 나오면 터미널을 닫았다 다시 여세요.

## 4. Git 설치

- **macOS**: 터미널에 `git -v` 입력 → 설치 안내가 뜨면 "설치" 클릭
- **Windows**: git-scm.com 에서 다운로드 → 설치 중 옵션은 전부 기본값

확인:

```bash
git -v
```

## 5. Claude Code 설치

이 과정은 **Claude Code**를 기준으로 진행합니다. 터미널에서 한국어로 말하면 파일을 만들고 고치고 명령까지 실행해주는 도구입니다.

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

## 6. 첫 프로젝트 폴더 만들기

```bash
mkdir my-first-app
cd my-first-app
code .
```

VS Code가 이 폴더를 열면서 실행됩니다. 앞으로 모든 작업은 이 폴더 안에서 합니다.

## 막혔을 때

설치 중 에러가 나면 **에러 메시지를 그대로 복사**해서 AI에게 붙여넣고 물어보세요.

> "macOS에서 node -v 했더니 'zsh: command not found: node'라고 나와. 어떻게 해?"

에러 메시지를 복사해서 물어보는 습관, 이게 15강 디버깅의 핵심입니다. 오늘부터 시작하세요.

## 오늘의 체크리스트

- [ ] `node -v`, `git -v`가 버전을 출력한다
- [ ] VS Code에서 `Ctrl + \``로 터미널을 열 수 있다
- [ ] `claude --version`이 버전을 출력하고 로그인했다
- [ ] `my-first-app` 폴더가 VS Code에 열려 있다

## 다음 강의

4강에서는 Claude Code의 화면과 핵심 조작을 익히고, 파일을 만들고 고치는 첫 순환을 돌아봅니다.
