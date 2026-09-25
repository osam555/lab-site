---
number: 2
title: 설치와 계정
subtitle: Python·Node·ffmpeg, Aside, Typecast, R2, 키트 클론
goal: 파이프라인이 필요로 하는 도구와 계정을 전부 준비하고, 키트를 내려받아 첫 명령까지 실행하고, 스킬 파일을 내 프로젝트에 설치합니다.
minutes: 50
part: 1부 · 준비
---

## 준비물 목록

| 것 | 역할 |
|---|---|
| Python 3.12+ | 컷 계획·검사·조립·업로드 스크립트 |
| Node 20+ | 더빙(`bake_lines.mjs`), Playwright 폴백 |
| ffmpeg | 클립·음성·자막 합성 |
| Aside | Flow·YouTube Studio 브라우저 자동화 |
| Typecast | 한국어 더빙 API |
| Cloudflare R2 | 완성 영상 임시 저장소 |
| Google Drive 앱 (선택) | 만든 클립 재사용 라이브러리 백업 |

## 따라하기 1: Python·Node·ffmpeg

::: windows
PowerShell(관리자 아님):

```powershell
winget install Python.Python.3.12
winget install OpenJS.NodeJS.LTS
winget install ffmpeg
```

설치 중 Python 설치 화면이 뜨면 **"Add python.exe to PATH"를 꼭 체크**합니다. 설치 후 터미널을 닫았다 다시 열고 확인:

```powershell
python --version
node -v
ffmpeg -version
```
:::

::: mac
Homebrew가 있으면:

```bash
brew install python node ffmpeg
```

확인:

```bash
python3 --version
node -v
ffmpeg -version
```
:::

## 따라하기 2: Aside 설치와 로그인

1. [aside.com/download](https://aside.com/download) 에서 내 운영체제용 설치 파일을 받습니다.
2. 설치 후 터미널에서 로그인합니다.

::: windows
```powershell
aside login
```
:::

::: mac
```bash
aside login
```
:::

3. Aside 앱을 열고 탭을 두 개 엽니다: `https://flow.google.com`(Google Flow, **유료 플랜**이어야 Veo 영상이 나옵니다)과 `https://studio.youtube.com`(업로드할 채널). 각각 Google 로그인을 해둡니다.
4. 터미널에서 탭 id 를 읽습니다:

::: windows
```powershell
aside repl 'console.log(JSON.stringify((await listBrowserTabs()).map(t=>[t.targetId,t.url])))'
```
:::

::: mac
```bash
aside repl 'console.log(JSON.stringify((await listBrowserTabs()).map(t=>[t.targetId,t.url])))'
```
:::

`[["A1B2…","https://flow.google.com/"],["C3D4…","https://studio.youtube.com/channel/UC…"]]` 처럼 나옵니다. Flow 탭 id 는 환경변수로 저장합니다.

::: windows
```powershell
$env:FLOW_TAB="A1B2…"
```
:::

::: mac
```bash
export FLOW_TAB=A1B2…
```
:::

Studio 탭 id 는 3강의 `kit.config.json` 에 적습니다. Aside 를 다시 열면 id 가 바뀌니, 나중에 "No open browser tab" 오류가 나면 이 단계를 다시 합니다.

## 따라하기 3: Typecast API 키

typecast.ai 에 가입하고 API 키를 발급받습니다. **이 키는 대화창이나 코드에 절대 붙여넣지 않습니다** — 다음 단계에서 파일로만 저장합니다.

## 따라하기 4: Cloudflare R2

1. Cloudflare 무료 계정 → R2 → 버킷 하나 생성 → 공개 URL(Public Access) 켜기.
2. wrangler 로그인:

::: windows
```powershell
npx wrangler login
```
:::

::: mac
```bash
npx wrangler login
```
:::

## 따라하기 5: Google Drive (선택)

만든 클립을 재사용 라이브러리로 자동 백업하고 싶다면 Google Drive 데스크톱 앱을 설치하고 로그인한 뒤, 경로를 환경변수로 둡니다.

::: windows
```powershell
$env:DRIVE_LIB="G:\My Drive\clay-library"
```
:::

::: mac
```bash
export DRIVE_LIB=~/Library/CloudStorage/GoogleDrive-내계정/My\ Drive/clay-library
```
:::

당장 안 써도 됩니다. 필요할 때(8강) 설정해도 늦지 않습니다.

## 따라하기 6: 키트 클론과 설치

::: windows
```powershell
git clone https://github.com/osam555/clay-episode-kit.git
cd clay-episode-kit
pip install -r requirements.txt
npm install
npx playwright install chromium
```

더빙에 필요한 esbuild 경로도 지정해둡니다:

```powershell
$env:ESBUILD="$PWD\node_modules\@esbuild\win32-x64\esbuild.exe"
```
:::

::: mac
```bash
git clone https://github.com/osam555/clay-episode-kit.git
cd clay-episode-kit
pip3 install -r requirements.txt
npm install
npx playwright install chromium
```

Apple Silicon 기준 esbuild 경로:

```bash
export ESBUILD=$PWD/node_modules/@esbuild/darwin-arm64/bin/esbuild
```
:::

`.env.local` 파일을 프로젝트 루트에 만들고 Typecast 키를 한 줄 넣습니다: `TYPECAST_API_KEY=여기에_키`. 이 파일은 절대 GitHub 에 올리지 않습니다 — `.gitignore` 에 이미 들어 있는지 확인하세요.

## 이 강에서 스킬 쓰기

키트의 Claude Code 스킬 파일은 `skills/clay-episode/SKILL.md` 입니다. 내 프로젝트에서 `/clay-episode` 로 부르려면 한 번 복사해둡니다.

::: windows
```powershell
mkdir .claude\skills\clay-episode -Force
copy skills\clay-episode\SKILL.md .claude\skills\clay-episode\SKILL.md
```
:::

::: mac
```bash
mkdir -p .claude/skills/clay-episode
cp skills/clay-episode/SKILL.md .claude/skills/clay-episode/SKILL.md
```
:::

복사가 끝났으면 Claude Code 에게 **설치 점검**을 시킵니다. 순서:

1. 터미널에서 키트 폴더(`clay-episode-kit`)로 이동한 뒤 `claude` 를 쳐서 Claude Code 를 엽니다(데스크탑 앱이면 이 폴더를 열면 됩니다).
2. 아래 프롬프트를 그대로 붙여 넣고 엔터.
3. Claude 가 여섯 항목을 「있음/없음」 표로 보고합니다. 「없음」이 있으면 이 강의 해당 따라하기로 돌아가 설치합니다.

<div class="prompt-box not-prose" data-prompt="2-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 2-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

clay-episode 스킬을 읽고, 그 안의 "0. 설치" 표에 있는 준비물이 내 컴퓨터에 다 있는지 점검해줘. 확인할 것: (1) python 버전 3.12 이상, (2) node 버전 20 이상, (3) ffmpeg 실행 가능, (4) 프로젝트 폴더에 .env.local 파일이 있고 그 안에 TYPECAST_API_KEY 줄이 있는지, (5) FLOW_TAB 환경변수가 설정됐는지, (6) wrangler 가 로그인돼 있는지. 결과는 항목마다 「있음/없음 + 없으면 어떻게 설치하는지 한 줄」 표로만 보여줘. API 키나 탭 id 같은 값은 절대 화면에 출력하지 마.

</div>
</div>

**사람이 확인해야 할 체크포인트**: `.env.local` 의 API 키 값은 Claude가 화면에 출력하지 않았는지, 터미널 히스토리에도 안 남았는지 직접 확인합니다.

## 오늘의 체크리스트

- [ ] `python --version`(또는 `python3`), `node -v`, `ffmpeg -version` 이 모두 출력된다
- [ ] Aside 로그인 완료, `FLOW_TAB` 환경변수 설정 완료
- [ ] Typecast API 키가 `.env.local` 에만 있다 (커밋 안 됨)
- [ ] R2 버킷 생성 + `wrangler login` 완료
- [ ] 키트 클론 완료, `.claude/skills/clay-episode/SKILL.md` 존재

## 다음 강의

3강에서 `kit.config.json` 을 채워 내 브랜드·캐릭터·채널을 설정합니다.
