---
number: 4
title: 첫 편 따라하기 ① 대본→더빙→컷 계획
subtitle: 예시 대본 「무지개는 왜 생길까」로 절차 손에 익히기
goal: 예시 편(examples/generic_episode.json)을 복사해 prepare_lines·bake_lines·top10_plan·cutplan_check를 순서대로 돌리고, 검사에서 걸린 항목을 고치는 법을 익힙니다.
minutes: 45
part: 2부 · 첫 편 만들기
---

## 왜 예시 대본부터인가

내 주제로 바로 시작하면 대본 문제와 도구 사용법 문제가 뒤섞여 헷갈립니다. 키트에 완성된 대본 「무지개는 왜 생길까」(`examples/generic_episode.json`, 24줄, 키워드 카드 4장, 컷 계획까지 이미 들어 있음)가 있습니다. 이걸 그대로 한 편 뽑아보면 도구 사용법만 익힐 수 있습니다.

## Code 탭에서 이렇게 시키세요

> **기본 방법: 클로드 데스크탑 앱의 Code 탭.** 키트 폴더(`clay-episode-kit`)를 프로젝트 폴더로 열고, 아래 프롬프트를 붙여 넣어 클로드에게 시킵니다. 클로드가 명령을 실행하거나 파일을 바꾸려고 **권한을 물으면, 무엇을 하려는지 읽고** 허용합니다(모르겠으면 "이게 뭐 하는 거야?"라고 되물어 보세요). 끝나면 '③ 결과 확인'을 눈으로 확인합니다. 명령어를 직접 치는 방법은 맨 아래 **'터미널로도 할 수 있어요'** 에 접어 두었습니다.

이 단계는 clay-episode 스킬의 "첫 편 30분 따라 하기"와 "대본 쓰기·컷 계획 쓰기" 절에 해당합니다. 예시 편은 컷 계획이 이미 있으니, 여기서는 검사 통과까지만 스킬에게 맡깁니다.

이 강은 두 단계로 나눕니다. **4-1 더빙**(소리 만들기)을 끝내고 확인한 다음, **4-2 컷 계획 검사**로 넘어갑니다. 용어: **컷 계획**은 "대본 줄마다 어떤 6초 장면을 보여줄지" 적은 설계도, **Typecast** 더빙은 대본을 문장별 목소리 파일(wav)로 굽는 일입니다.

### 프롬프트 4-1 · 대본→더빙

**① 준비 (사람이 먼저)**
- [ ] 어디서: 키트 폴더(`clay-episode-kit`)에서 데스크탑 앱 Code 탭을 열고 이 폴더를 프로젝트 폴더로 고릅니다
- [ ] `.env.local` 에 Typecast 키가 있고 `ESBUILD` 환경변수가 살아 있어야 합니다(2강)
- [ ] 예시 편 파일 `data/longform/rainbow.json` 이 만들어져 있어야 합니다(따라하기 1 — 클로드에게 "examples/generic_episode.json 을 data/longform/rainbow.json 으로 복사해줘"라고 시켜도 됩니다)

**② 스킬 (붙여 넣기)**

<div class="prompt-box not-prose" data-prompt="4-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

clay-episode 스킬을 읽고, 편 키 rainbow 의 prepare_lines 와 bake_lines 스크립트만 순서대로 돌려줘. 값을 지어내지 말고 스크립트가 실제로 출력한 문장 수만 보고해. bake_lines 마지막 줄의 "rainbow: N문장" 을 그대로 보여주고 멈춰 — 컷 계획 검사는 내가 확인한 뒤 4-2 로 따로 시킬게.

</div>
</div>

**③ 결과 확인**
- [ ] 클로드가 권한을 물으면 어떤 명령·파일인지 읽고 허용했는지(모르는 것은 허용 전에 물어봅니다)
- [ ] `bake_lines` 마지막 줄의 문장 수가 대본 줄 수(24)와 정확히 같은지 화면에서 직접 봅니다
- [ ] `scratch/flow_rainbow/` 폴더에 `n01.wav` … 파일이 생겼는지 직접 열어 봅니다(더블클릭하면 목소리가 들립니다)

### 프롬프트 4-2 · 컷 계획 검사 통과

**① 준비 (사람이 먼저)**
- [ ] 4-1 이 끝나 "rainbow: 24문장" 을 확인했어야 합니다

**② 스킬 (붙여 넣기)**

<div class="prompt-box not-prose" data-prompt="4-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

clay-episode 스킬을 읽고, 편 키 rainbow 의 컷 계획 검사만 통과시켜줘. top10_plan 과 cutplan_check 스크립트를 순서대로 돌리고, ✗ 표시가 나오면 스킬 안의 검사 항목 표를 보고 원인을 고쳐서 다시 돌려. 값을 지어내지 말고 스크립트가 실제로 출력한 점수만 보고 판단해. cutplan_check 가 "10.0점 통과"를 출력하면 거기서 멈추고 결과를 보여줘 — 다음 단계(Flow 생성)는 내가 확인한 뒤 시킬게.

</div>
</div>

**③ 결과 확인**
- [ ] 클로드가 권한을 물으면 어떤 명령·파일인지 읽고 허용했는지(모르는 것은 허용 전에 물어봅니다)
- [ ] **사람이 확인해야 할 체크포인트**: `cutplan_check` 가 실제로 "10.0점 통과"를 출력했는지 화면을 직접 봅니다 — 스킬의 보고만 믿지 않습니다.

## 검사가 보는 것

| 검사 항목 | 통과 조건 |
|---|---|
| 줄 배정 | 대본 1~24 모든 줄이 어떤 컷에든 배정돼 있다 |
| 캐릭터 상수 | 사람이 나오는 컷은 `{C2}` `{MP}` 등 kit.config.json 의 상수로만 묘사한다 |
| 금지어 | 어두운 낱말(dark, night, scary…), 사물 위 글자·로고 지시가 없다 |
| 썸네일 헤드라인 | 두 줄 합쳐 14자 이하, 둘째 줄(빨간 박스) 폰트 120px 이상 |

✗ 표시가 나오면 그 항목을 고치고 `top10_plan.py`→`cutplan_check.py` 를 다시 돌립니다. **여기서 걸리는 걸 그대로 Flow 에 보내면 크레딧만 날립니다** — 컷 하나가 10크레딧입니다.

## 터미널로도 할 수 있어요

위 프롬프트가 하는 일을 직접 명령으로 치고 싶을 때 보세요. 운영체제 탭(Windows·macOS)에 맞는 명령을 씁니다.

<details>
<summary><strong>따라하기 1: 편 만들기</strong></summary>

::: windows
```powershell
copy examples\generic_episode.json data\longform\rainbow.json
```
:::

::: mac
```bash
cp examples/generic_episode.json data/longform/rainbow.json
```
:::

편 하나의 영문 이름을 **키(key)** 라 부릅니다(여기선 `rainbow`). 파일·폴더 이름에 그대로 쓰이므로 소문자·밑줄만 씁니다.

</details>

<details>
<summary><strong>따라하기 2: 작업 파일 뽑기 + 더빙</strong></summary>

시작 전 확인: 키트 폴더 안이고, `.env.local` 에 Typecast 키가 있고, `ESBUILD` 환경변수가 살아 있어야 합니다(2강에서 영구 저장했다면 새 터미널에서도 됩니다). 더빙은 Typecast 사용량(이 편은 24문장)을 씁니다.

::: windows
```powershell
python scripts/prepare_lines.py rainbow
node scripts/bake_lines.mjs rainbow
```
:::

::: mac
```bash
python3 scripts/prepare_lines.py rainbow
node scripts/bake_lines.mjs rainbow
```
:::

`prepare_lines.py` 는 대본(`script_v2`)과 카드를 `scratch/flow_rainbow/lines.json`·`cards.json` 작업 파일로 뽑습니다. `bake_lines.mjs` 는 Typecast 로 문장마다 wav 를 굽습니다(`scratch/flow_rainbow/n01.wav …`). 1분 정도 걸리고, 마지막 줄에 **"rainbow: 24문장"** 이 나와야 정상입니다 — 대본 줄 수와 다르면 대본이나 작업 파일이 어긋난 것입니다.

다시 굽기 전에는 옛 wav 파일을 치워둡니다. 번호가 섞이면 자막과 소리가 어긋납니다.

::: windows
```powershell
mkdir scratch\flow_rainbow\_old_wav -Force
move scratch\flow_rainbow\n*.wav scratch\flow_rainbow\_old_wav\
```
:::

::: mac
```bash
mkdir -p scratch/flow_rainbow/_old_wav
mv scratch/flow_rainbow/n*.wav scratch/flow_rainbow/_old_wav/
```
:::

</details>

<details>
<summary><strong>따라하기 3: 컷 계획 → 검사</strong></summary>

예시 편의 컷 계획은 `scripts/top10_plan.py` 안에 `PLANS['rainbow']` 로 이미 들어 있습니다. 생성하고 검사만 합니다.

::: windows
```powershell
python scripts/top10_plan.py rainbow
python scripts/cutplan_check.py rainbow
```
:::

::: mac
```bash
python3 scripts/top10_plan.py rainbow
python3 scripts/cutplan_check.py rainbow
```
:::

`top10_plan.py` 가 `data/longform/prompts/rainbow.json` 에 컷별 영문 프롬프트를 만듭니다. `cutplan_check.py` 가 그걸 채점합니다 — **"10.0점 통과"** 가 나와야 다음 단계(5강, Flow 생성)로 갑니다.

</details>

::: practice
- [ ] `scratch/flow_rainbow/` 폴더를 열어 `n01.wav` 를 재생해 보고, **한국어 목소리로 대본 첫 줄이 읽히는지** 귀로 확인한다
- [ ] 화면에 "rainbow: 24문장" 이 찍힌 것을 직접 본다
- [ ] `data/longform/prompts/rainbow.json` 이 생겼고, 열면 컷별 영어 프롬프트가 보인다(모르는 단어는 클로드에게 물어도 좋다)
- [ ] 일부러 `{C2}` 가 들어간 줄 하나를 `a boy` 로 바꿔 `cutplan_check` 를 돌려 ✗ 가 뜨는 걸 보고, 다시 원래대로 되돌려 "10.0점 통과"를 되찾는다 (검사가 실제로 잡아 주는 걸 눈으로 확인하는 연습, 선택)
:::

## 오늘의 체크리스트

- [ ] `data/longform/rainbow.json` 이 생겼다
- [ ] `bake_lines` 마지막 줄이 "rainbow: 24문장"
- [ ] `cutplan_check` 가 "10.0점 통과"를 출력했다(프롬프트 4-2)
- [ ] 검사 항목 네 가지(줄 배정·캐릭터 상수·금지어·헤드라인 길이)를 설명할 수 있다

## 다음 강의

5강에서 이 컷 계획을 Google Flow 로 보내 실제 영상 클립을 만듭니다.
