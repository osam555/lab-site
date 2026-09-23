---
number: 2
title: 도구 세팅과 프로젝트 폴더
subtitle: ffmpeg, API 키, 폴더 구조, 규칙 파일
goal: ffmpeg를 설치하고, ElevenLabs API 키를 환경변수로 보관하고, 쇼츠 프로젝트 폴더와 CLAUDE.md를 만들어 Claude Code가 파이프라인 규칙을 알게 합니다.
minutes: 40
part: 1부 · 준비
---

## 1. ffmpeg 설치

ffmpeg는 영상·음성을 자르고 붙이고 자막을 입히는 무료 도구입니다. 7강 합성의 주인공이고, 6강에서 음성 길이를 재는 데도 씁니다. Claude Code가 명령을 대신 쓰지만 프로그램은 설치되어 있어야 합니다.

::: windows
PowerShell(VS Code 터미널)에서:

```powershell
winget install ffmpeg
```

`winget`이 없다는 에러가 나면 Microsoft Store에서 "앱 설치 관리자"를 업데이트하세요. 설치 후 **터미널을 닫았다 다시 열고** 확인:

```powershell
ffmpeg -version
```
:::

::: mac
Homebrew가 있으면:

```bash
brew install ffmpeg
```

`brew`가 없으면 먼저 brew.sh의 설치 명령 한 줄을 실행합니다 (Claude Code에게 "Homebrew 설치 명령 알려줘"). 확인:

```bash
ffmpeg -version
```
:::

버전이 여러 줄 출력되면 성공입니다.

## 2. ElevenLabs API 키

1. elevenlabs.io 가입 → 오른쪽 위 프로필 → **API Keys** → **Create**
2. 키(`sk_…`)를 복사. **이 화면을 닫으면 다시 못 봅니다.**
3. 무료 플랜의 월 글자 수 한도를 확인해두세요 (편당 약 1,000~1,500자 소모)

키는 코드나 대화에 절대 붙여넣지 않습니다. 환경변수 파일에 둡니다 (아래).

## 3. 프로젝트 폴더

```bash
cd ~/Desktop
mkdir shorts-factory
cd shorts-factory
code .
```

::: windows
`~`가 안 되면 `cd $HOME\Desktop`.
:::

폴더 구조는 Claude Code에게 만들게 합니다. `claude` 실행 후:

<div class="prompt-box not-prose" data-prompt="2-1" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 2-1</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

쇼츠 자동화 프로젝트 폴더 구조를 만들어줘:
- `topics.md` (내가 채울 주제 목록, 비워둬)
- `projects/` (영상 한 편당 폴더 하나. 예: projects/2025-01-pyramid/)
- 각 영상 폴더 안에는 `script.json`, `prompts/`, `clips/`, `voice/`, `output/`
- `assets/bgm/` (배경음악), `assets/fonts/` (자막 글꼴)
- `scripts/` (더빙·합성용 실행 스크립트, 나중에)
- `.env` 파일 (비워둬) 와 `.env`를 제외하는 `.gitignore`
- 지금은 폴더와 빈 파일만, 코드는 쓰지 마.

</div>
</div>

`.env` 파일을 열어 키를 넣습니다.

```
ELEVENLABS_API_KEY=sk_여기에_붙여넣기
```

`.gitignore`에 `.env`가 있는지 확인하세요. 나중에 Git에 올려도 키는 안 올라갑니다.

## 4. BGM과 글꼴

- **BGM**: 유튜브 오디오 라이브러리(studio.youtube.com → 오디오 보관함)에서 저작권 무료 곡 2~3개를 받아 `assets/bgm/`에. 잔잔한 다큐풍이 지식 쇼츠에 맞습니다.
- **자막 글꼴**: Pretendard 또는 Noto Sans KR의 Bold를 `assets/fonts/`에. 7강 자막 굽기에 씁니다.

## 5. CLAUDE.md

이 프로젝트의 규칙 파일입니다. 파이프라인 프로젝트에서는 **폴더 규칙과 비용 규칙**이 특히 중요합니다.

<div class="prompt-box not-prose" data-prompt="2-2" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 2-2</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

CLAUDE.md를 만들어줘:

## 프로젝트
건축 지식 쇼츠(9:16, 80~100초) 자동 제작 파이프라인. 단계: 대본 → 비주얼 프롬프트 → Google Flow 클립 → ElevenLabs 더빙 → ffmpeg 합성.

## 폴더 규칙
- 영상 한 편 = projects/YYYY-MM-주제/ 폴더 하나
- script.json이 그 영상의 유일한 진실. 컷 번호, 한국어 대본, 영문 프롬프트, 초 단위 길이를 담는다
- 클립은 clips/cut-01.mp4 형식, 음성은 voice/cut-01.mp3 형식. 번호는 두 자리
- 최종 결과물은 output/final.mp4

## 작업 규칙
- 한국어로 짧게 설명, 코드 먼저
- 파일을 만들거나 고친 뒤 확인 방법을 알려준다
- 외부 API 호출(ElevenLabs 등)은 실행 전에 예상 소모량(글자 수·크레딧)을 알려주고 허락을 받는다
- 브라우저 자동화로 Google Flow를 조작할 때는 클립 하나를 먼저 만들어 확인받은 뒤 나머지를 진행한다
- .env 파일을 읽거나 출력하지 않는다. 키는 process.env / os.environ으로만 참조

## 명령
- ffmpeg, python3 (또는 node) 사용 가능

</div>
</div>

만들어진 파일을 **직접 읽어보세요.** 특히 "허락을 받는다" 두 줄은 크레딧과 돈을 지키는 규칙입니다.

## 6. 첫 커밋

```bash
git init
git add .
git commit -m "쇼츠 파이프라인 프로젝트 시작"
```

`git status`에 `.env`가 **안 보이면** 정상입니다.

## 오늘의 체크리스트

- [ ] `ffmpeg -version`이 출력된다
- [ ] `.env`에 ElevenLabs 키가 있고 `.gitignore`에 `.env`가 있다
- [ ] 폴더 구조와 CLAUDE.md가 있다
- [ ] BGM 2곡과 글꼴 1개가 `assets/`에 있다
- [ ] 커밋했다

## 다음 강의

3강, 레퍼런스 채널을 분석하고 첫 영상의 대본을 뽑습니다. 4초 × 22컷.
