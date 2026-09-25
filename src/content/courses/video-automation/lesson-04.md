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

## 따라하기 1: 편 만들기

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

## 따라하기 2: 작업 파일 뽑기 + 더빙

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

## 따라하기 3: 컷 계획 → 검사

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

## 검사가 보는 것

| 검사 항목 | 통과 조건 |
|---|---|
| 줄 배정 | 대본 1~24 모든 줄이 어떤 컷에든 배정돼 있다 |
| 캐릭터 상수 | 사람이 나오는 컷은 `{C2}` `{MP}` 등 kit.config.json 의 상수로만 묘사한다 |
| 금지어 | 어두운 낱말(dark, night, scary…), 사물 위 글자·로고 지시가 없다 |
| 썸네일 헤드라인 | 두 줄 합쳐 14자 이하, 둘째 줄(빨간 박스) 폰트 120px 이상 |

✗ 표시가 나오면 그 항목을 고치고 `top10_plan.py`→`cutplan_check.py` 를 다시 돌립니다. **여기서 걸리는 걸 그대로 Flow 에 보내면 크레딧만 날립니다** — 컷 하나가 10크레딧입니다.

## 이 강에서 스킬 쓰기

이 단계는 SKILL.md **B절(첫 편 30분 따라 하기)의 B-2~B-3**과 **§1(대본 쓰기)·§2(컷 계획 쓰기)**에 해당합니다. 예시 편은 컷 계획이 이미 있으니, 여기서는 검사 통과까지만 스킬에게 맡깁니다.

<div class="prompt-box not-prose" data-prompt="4-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

/clay-episode 로 4단계(컷 계획)만 해줘 — 편 키 rainbow, cutplan_check 통과할 때까지. prepare_lines→bake_lines→top10_plan→cutplan_check 순서로 돌리고, ✗ 가 나오면 SKILL.md §2 의 표를 보고 고쳐서 다시 돌려. 값을 지어내지 말고 스크립트 출력만 보고 판단해.

</div>
</div>

**사람이 확인해야 할 체크포인트**: `bake_lines` 마지막 줄의 문장 수가 대본 줄 수(24)와 정확히 같은지, `cutplan_check` 가 실제로 "10.0점 통과"를 출력했는지 화면을 직접 봅니다 — 스킬의 보고만 믿지 않습니다.

## 오늘의 체크리스트

- [ ] `data/longform/rainbow.json` 이 생겼다
- [ ] `bake_lines` 마지막 줄이 "rainbow: 24문장"
- [ ] `cutplan_check` 가 "10.0점 통과"를 출력했다
- [ ] 검사 항목 네 가지(줄 배정·캐릭터 상수·금지어·헤드라인 길이)를 설명할 수 있다

## 다음 강의

5강에서 이 컷 계획을 Google Flow 로 보내 실제 영상 클립을 만듭니다.
