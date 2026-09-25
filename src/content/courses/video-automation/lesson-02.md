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

Aside 는 "Claude 가 대신 클릭해 주는 브라우저"입니다. 이 과정에서는 Google Flow 와 YouTube Studio 를 이 브라우저 안에서 자동 조작합니다.

1. [aside.com/download](https://aside.com/download) 에서 내 운영체제용 설치 파일을 받아 설치합니다(Windows·macOS 둘 다 있습니다, 무료 플랜이면 충분).
2. Aside 앱을 한 번 열어 계정을 만들고 로그인합니다. 그러면 터미널용 `aside` 명령도 함께 설치됩니다. 터미널을 **새로 열고** 로그인합니다:

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

`aside` 명령을 찾을 수 없다고 나오면 앱 메뉴(설정 → CLI 설치)에서 명령줄 도구를 설치한 뒤 터미널을 다시 엽니다.

3. Aside 앱 **안에서** 탭을 두 개 엽니다(일반 크롬이 아니라 Aside 창입니다): `https://flow.google.com`(Google Flow — **Google AI Pro 이상 구독**이 있는 Google 계정으로 로그인해야 영상이 생성됩니다)과 `https://studio.youtube.com`(업로드할 채널). 각각 Google 로그인을 해 둡니다.
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

`[["A1B2…","https://flow.google.com/"],["C3D4…","https://studio.youtube.com/channel/UC…"]]` 처럼 나옵니다. 앞의 긴 문자열이 **탭 id** 입니다. Flow 탭 id 는 환경변수 `FLOW_TAB` 로 저장합니다 — 터미널을 닫아도 남게 **영구 저장**합니다.

::: windows
```powershell
setx FLOW_TAB "A1B2…"        # 영구 저장 (새 터미널부터 적용)
$env:FLOW_TAB="A1B2…"        # 지금 열린 터미널에도 바로 적용
```
:::

::: mac
```bash
echo 'export FLOW_TAB=A1B2…' >> ~/.zshrc   # 영구 저장
export FLOW_TAB=A1B2…                     # 지금 열린 터미널에도 바로 적용
```
:::

`C3D4…`(Studio 탭 id)와 채널 ID(`UC…`, 주소에 보입니다)는 메모해 두었다가 3강의 설정 파일에 적습니다.

Studio 탭 id 는 3강의 `kit.config.json` 에 적습니다. Aside 를 다시 열면 id 가 바뀌니, 나중에 "No open browser tab" 오류가 나면 이 단계를 다시 합니다.

## 따라하기 3: Typecast API 키

Typecast 는 한국어 더빙 목소리를 만들어 주는 서비스입니다.

1. [typecast.ai](https://typecast.ai) 가입 → 유료 플랜 선택(API 사용은 유료 플랜에서 열립니다).
2. 오른쪽 위 프로필 → **API** (또는 개발자/Developers) 메뉴 → **API 키 발급** → 키를 복사합니다.
3. **이 키는 대화창·코드·GitHub 에 절대 붙여넣지 않습니다.** 따라하기 6에서 `.env.local` 파일에만 저장합니다.

## 따라하기 4: Cloudflare R2 — 완성 영상을 잠깐 올려 두는 창고

업로드 스크립트는 완성된 영상을 먼저 R2(클라우드 저장소)에 올리고, 거기서 파일을 가져가 유튜브에 올립니다. 무료 티어(10GB)로 충분합니다. **대시보드를 클릭할 필요가 없습니다** — 가입과 로그인 허용만 사람이 하고, 버킷 생성·공개 주소·설정 기입은 명령 한 줄이 합니다.

1. [dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up) 에서 무료 계정을 만듭니다(이메일 인증까지). R2 는 결제 수단 등록을 요구하지만 무료 한도 안에서는 청구되지 않습니다.
2. 터미널에서 로그인합니다. "wrangler 를 설치할까요?" 라고 물으면 `y`, 브라우저가 열리면 **Allow**.

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

3. 키트 폴더(따라하기 6 이후)에서 한 줄. 버킷 이름은 소문자·숫자·하이픈만(예 `my-videos`).

::: windows
```powershell
python scripts/setup_r2.py my-videos
```
:::

::: mac
```bash
python3 scripts/setup_r2.py my-videos
```
:::

버킷을 만들고, `https://pub-….r2.dev` 공개 주소를 켜고, `kit.config.json` 의 `storage` 칸까지 채워 줍니다. 마지막 줄에 `kit.config.json storage 기입 완료` 가 나오면 끝입니다. 3강의 프롬프트 3-1 이 이 명령을 대신 돌려 주기도 합니다.

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

더빙에 필요한 esbuild 경로도 영구 저장해 둡니다(키트 폴더 안에서 실행):

```powershell
setx ESBUILD "$PWD\node_modules\@esbuild\win32-x64\esbuild.exe"
$env:ESBUILD="$PWD\node_modules\@esbuild\win32-x64\esbuild.exe"
```

Typecast 키 파일을 만듭니다(따옴표 안의 키 자리만 바꿉니다):

```powershell
Set-Content -Path .env.local -Value "TYPECAST_API_KEY=여기에_키"
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

Apple Silicon 기준 esbuild 경로(영구 저장 + 지금 적용):

```bash
echo "export ESBUILD=$PWD/node_modules/@esbuild/darwin-arm64/bin/esbuild" >> ~/.zshrc
export ESBUILD=$PWD/node_modules/@esbuild/darwin-arm64/bin/esbuild
```

Typecast 키 파일을 만듭니다(키 자리만 바꿉니다):

```bash
echo "TYPECAST_API_KEY=여기에_키" > .env.local
```
:::

`.env.local` 은 키트 폴더 바로 안에 생깁니다. 절대 GitHub 에 올리지 않습니다(`.gitignore` 에 이미 들어 있습니다). **이 키트 폴더(`clay-episode-kit`)가 곧 여러분의 프로젝트 폴더**입니다 — 앞으로 모든 명령은 이 폴더 안에서 칩니다.

## 스킬로 하기 — 준비 → 프롬프트 → 결과 확인

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

위 따라하기 1·6(도구 설치, 키트 클론, ESBUILD, .env.local)은 Claude Code 가 대신 할 수 있습니다. 사람이 직접 해야 하는 건 **Aside 앱 설치·로그인, Typecast 키 복사, Cloudflare 가입** 뿐입니다.

### 프롬프트 2-1 · 설치를 Claude 에게 통째로 맡기기 (선택)

**① 준비 (사람이 먼저)**
- [ ] Cloudflare 가입: https://dash.cloudflare.com/sign-up (무료) → 터미널에서 `npx wrangler login` (브라우저가 열리면 Allow)
- [ ] Aside 설치: https://aside.com/download → 앱에서 계정 생성·로그인 → 터미널 `aside login` → Aside 안에서 `https://flow.google.com` 과 `https://studio.youtube.com` 로그인
- [ ] Typecast 가입: https://typecast.ai (유료 플랜) → 프로필 → API 메뉴 → API 키를 복사해 손에 들고 있기 (대화창에는 아직 붙여넣지 않기)
- [ ] Google Flow: **Google AI Pro 이상 구독**된 Google 계정 준비
- [ ] 어디서: 아무 폴더에서 Claude Code 를 엽니다(키트를 아직 안 받았어도 됩니다)

**② 스킬 (붙여 넣기)**

<div class="prompt-box not-prose" data-prompt="2-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 2-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

https://github.com/osam555/clay-episode-kit 을 클론하고 그 폴더로 들어가서 설치를 끝내줘. 순서: (1) python 3.12 이상, node 20 이상, ffmpeg 가 없으면 이 컴퓨터의 패키지 관리자(Windows 는 winget, mac 은 brew)로 설치하고 버전을 보여줘. (2) pip install -r requirements.txt, npm install, npx playwright install chromium 을 실행해. (3) ESBUILD 환경변수를 이 운영체제에 맞는 esbuild 실행파일 경로로 영구 저장(Windows 는 setx, mac 은 ~/.zshrc)하고 지금 터미널에도 적용해. (4) 다 되면 내가 Typecast API 키를 줄 테니, 그 키는 .env.local 파일에 TYPECAST_API_KEY=… 한 줄로만 저장하고 화면·로그·git 에 절대 남기지 마. 지금은 설치까지만 하고 키를 물어본 뒤 멈춰.

</div>
</div>

Claude 가 설치를 마치고 Typecast 키를 물으면, **그때 키를 붙여 넣습니다**(파일에만 저장됩니다).

**③ 결과 확인**
- [ ] `python --version` 등 확인 명령 결과가 실제로 출력됐는지 직접 봅니다
- [ ] **사람이 확인해야 할 체크포인트**: 키를 붙여 넣은 뒤 Claude 의 답변에 키 값이 그대로 보이지 않는지, `.env.local` 이 키트 폴더 안에 생겼는지 직접 확인합니다.

### 프롬프트 2-2 · 설치 점검

**① 준비 (사람이 먼저)**
- [ ] 터미널에서 키트 폴더(`clay-episode-kit`)로 이동한 뒤 `claude` 를 쳐서 Claude Code 를 엽니다(데스크탑 앱이면 이 폴더를 열면 됩니다)
- [ ] 2-1(또는 이 강의 따라하기 1·6)이 끝나 있어야 합니다
- [ ] 스킬 파일 복사(위 명령)가 끝나 있어야 합니다

**② 스킬 (붙여 넣기)**

<div class="prompt-box not-prose" data-prompt="2-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 2-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

clay-episode 스킬을 읽고, 그 안의 "0. 설치" 표에 있는 준비물이 내 컴퓨터에 다 있는지 점검해줘. 확인할 것: (1) python 버전 3.12 이상, (2) node 버전 20 이상, (3) ffmpeg 실행 가능, (4) 프로젝트 폴더에 .env.local 파일이 있고 그 안에 TYPECAST_API_KEY 줄이 있는지, (5) FLOW_TAB 환경변수가 설정됐는지, (6) wrangler 가 로그인돼 있는지. 결과는 항목마다 「있음/없음 + 없으면 어떻게 설치하는지 한 줄」 표로만 보여줘. API 키나 탭 id 같은 값은 절대 화면에 출력하지 마.

</div>
</div>

**③ 결과 확인**
- [ ] 여섯 항목이 「있음/없음」 표로 나왔는지, 「없음」이 있으면 이 강의 해당 따라하기로 돌아가 설치
- [ ] **사람이 확인해야 할 체크포인트**: `.env.local` 의 API 키 값은 Claude가 화면에 출력하지 않았는지, 터미널 히스토리에도 안 남았는지 직접 확인합니다.

## 오늘의 체크리스트

- [ ] `python --version`(또는 `python3`), `node -v`, `ffmpeg -version` 이 모두 출력된다
- [ ] Aside 로그인 완료, Aside 안에서 Flow·Studio 로그인 완료, `FLOW_TAB` 영구 저장 완료, Studio 탭 id·채널 ID 메모
- [ ] Typecast API 키가 `.env.local` 에만 있다 (커밋 안 됨), `ESBUILD` 영구 저장
- [ ] `npx wrangler login` 완료, `setup_r2.py` 가 「storage 기입 완료」를 출력했다(또는 3강 3-1 에서 할 예정)
- [ ] 키트 클론 완료, `.claude/skills/clay-episode/SKILL.md` 존재

## 다음 강의

3강에서 `kit.config.json` 을 채워 내 브랜드·캐릭터·채널을 설정합니다.
