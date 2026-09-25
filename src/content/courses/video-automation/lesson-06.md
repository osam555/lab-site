---
number: 6
title: 첫 편 따라하기 ③ 썸네일·조립·검사·업로드
subtitle: make_thumb, flow_assemble, qa_gate, 큐 파일, drain_uploads
goal: 썸네일 3종을 만들고 롱폼·쇼츠를 조립·검사한 뒤, 시트를 눈으로 확인하고, 업로드 큐를 채워 유튜브에 올립니다.
minutes: 45
part: 2부 · 첫 편 만들기
---

## 따라하기 1: 썸네일·조립·검사

::: windows
```powershell
python scripts/make_thumb.py rainbow
python scripts/flow_assemble.py rainbow --deploy
python scripts/flow_assemble.py rainbow --short
python scripts/qa_gate.py post rainbow
python scripts/sheet.py rainbow
```
:::

::: mac
```bash
python3 scripts/make_thumb.py rainbow
python3 scripts/flow_assemble.py rainbow --deploy
python3 scripts/flow_assemble.py rainbow --short
python3 scripts/qa_gate.py post rainbow
python3 scripts/sheet.py rainbow
```
:::

| 명령 | 하는 일 | 통과 기준 |
|---|---|---|
| `make_thumb.py` | `assets/longform/rainbow/thumb/final-a/b/c.png` 생성 | 셋 다 "썸네일 검사 PASS" |
| `flow_assemble.py --deploy` | 롱폼(2~3분) 조립, 5~10분 소요 | `remotion/out/rainbow_deploy.mp4` 생성 |
| `flow_assemble.py --short` | 세로 쇼츠 45초 조립 | `scratch/flow_rainbow/rainbow_short.mp4` 생성 |
| `qa_gate.py post` | 완성 영상 자동 채점 | 8.0 이상 |
| `sheet.py` | 12장면 시트 한 장 → `scratch/flow_tools/rainbow_sheet.jpg` | 사람이 눈으로 확인 |

## 눈으로 보는 4가지 체크포인트

`sheet.py` 가 만든 시트(`scratch/flow_tools/rainbow_sheet.jpg`)를 열어 아래 네 가지만 봅니다. 자동 검사가 못 잡는 부분입니다.

1. **가짜 글자** — 사물 위에 뜻 모를 글자·로고가 있나
2. **어두운 장면** — 조명이 어둡거나 무서운 톤의 컷이 있나
3. **카드 가림** — 화면 위 키워드 카드가 얼굴을 가리지 않나
4. **인물 일관성** — 아이·엄마·친구가 컷마다 다른 얼굴로 바뀌지 않았나

하나라도 걸리면 그 컷만 손봅니다. 가짜 글자는 5강의 크롭 명령으로, 인물 불일치는 3강의 `characters` 문구를 더 구체적으로 고쳐 재생성합니다.

`qa_gate` 가 「밀도 … 미달(정지 %)」을 내면 그 시각의 컷이 거의 안 움직이는 것입니다. 4강의 `top10_plan.py` 의 `map` 에서 그 줄을 움직임 있는 컷으로 바꾸고 `--deploy` 를 다시 돌립니다.

## 따라하기 2: 업로드

::: windows
```powershell
python scripts/prep_more.py rainbow
```
:::

::: mac
```bash
python3 scripts/prep_more.py rainbow
```
:::

3강의 `storage` 설정대로 R2 에 영상·쇼츠·썸네일을 올리고, 제목·설명·태그(`scratch/flow_tools/yt_meta.json`)를 생성합니다(`DRIVE_LIB` 를 설정했다면 Google Drive 백업도 백그라운드로 시작). 시작 전 Aside 의 Studio 탭이 로그인돼 있는지 확인합니다.

큐 파일 `scratch/flow_tools/aside_queue.txt` 에 두 줄을 추가합니다: `rainbow long main`과 `rainbow short main`.

::: windows
```powershell
"rainbow long main" | Out-File -Append -Encoding utf8 scratch\flow_tools\aside_queue.txt
"rainbow short main" | Out-File -Append -Encoding utf8 scratch\flow_tools\aside_queue.txt
```
:::

::: mac
```bash
echo "rainbow long main" >> scratch/flow_tools/aside_queue.txt
echo "rainbow short main" >> scratch/flow_tools/aside_queue.txt
```
:::

::: windows
```powershell
python scripts/drain_uploads.py
```
:::

::: mac
```bash
python3 scripts/drain_uploads.py
```
:::

Aside 의 Studio 탭이 움직이며 제목·설명·태그·재생목록·공개까지 눌러 줍니다. 끝날 때까지 창을 켜둡니다. 유튜브는 **채널당 하루 업로드 한도**(대략 20~25건)가 있어, 걸리면 드레이너가 그 채널을 건너뛰고 남은 줄을 큐에 두니 다음 날 다시 실행합니다. 업로드된 ID 는 편 JSON(`data/longform/rainbow.json`)의 `yt`, `hook_short.yt` 에 기록됩니다.

## 스킬로 하기 — 준비 → 프롬프트 → 결과 확인

이 단계는 clay-episode 스킬의 "썸네일·조립·검사"와 "올리기" 절에 해당합니다. 조립·검사를 먼저 시키고 사람이 시트를 확인한 뒤에, 업로드는 별도 프롬프트로 따로 시킵니다.

### 프롬프트 6-1 · 썸네일·조립·검사

**① 준비 (사람이 먼저)**
- [ ] 어디서: 키트 폴더에서 Claude Code 를 엽니다
- [ ] 5강에서 `assets/flow/rainbow/` 에 컷 11개, `thumb/` 에 a·b·c 3장이 모두 있어야 합니다
- [ ] 조립에 5~10분이 걸리니 그동안 다른 일을 하려면 미리 계획해 둡니다

**② 스킬 (붙여 넣기)**

<div class="prompt-box not-prose" data-prompt="6-1" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-1</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

clay-episode 스킬을 읽고, 편 키 rainbow 의 썸네일을 만들고 롱폼·쇼츠를 조립하고 자동 검사를 돌려줘. make_thumb→flow_assemble --deploy→flow_assemble --short→qa_gate post→sheet 순서로 실행하고, qa_gate 점수와 sheet.py 가 만든 시트 파일 경로를 스크립트 출력 그대로 알려줘. 점수를 지어내지 마. 8.0 미만이면 스킬 안의 문제 해결 표를 보고 원인을 짐작해서 알려주되, 재생성은 하지 말고 내가 확인한 뒤에 시킬게. 여기까지만 하고 멈춰 — 업로드는 내가 시트를 눈으로 확인한 다음 따로 요청할게.

</div>
</div>

**③ 결과 확인**
- [ ] 썸네일 3장 모두 "PASS", `qa_gate` 점수가 8.0 이상인지 스크립트 출력을 직접 봅니다
- [ ] Claude 가 알려준 시트 경로(`scratch/flow_tools/rainbow_sheet.jpg`)의 이미지를 직접 엽니다
- [ ] **사람이 확인해야 할 체크포인트**: 시트의 4가지 체크포인트(가짜 글자·어두운 장면·카드 가림·인물 일관성)는 스킬이 대신 판단하지 않게 하고, 반드시 사람이 이미지를 직접 봅니다.

### 프롬프트 6-2 · 업로드

**① 준비 (사람이 먼저)**
- [ ] 6-1 의 시트를 직접 눈으로 확인해 문제가 없어야 합니다
- [ ] Aside 앱의 Studio 탭이 로그인돼 있는지 확인합니다
- [ ] 업로드는 공개로 가는 되돌리기 어려운 단계이므로, 제목·설명 방향을 미리 생각해 둡니다

**② 스킬 (붙여 넣기)**

<div class="prompt-box not-prose" data-prompt="6-2" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-2</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

clay-episode 스킬을 읽고, 편 키 rainbow 를 업로드해줘. prep_more.py 를 돌려 R2 업로드와 yt_meta.json(제목·설명·태그)을 만들고, 그 내용을 표로 보여줘. 그다음 큐 파일(scratch/flow_tools/aside_queue.txt)에 "rainbow long main"과 "rainbow short main" 두 줄을 추가하고 drain_uploads.py 를 돌려줘. 업로드는 공개로 가는 되돌리기 어려운 단계이니, yt_meta.json 내용을 보여준 다음 실제로 큐에 넣기 전에 한 번 멈춰서 내 확인을 기다려줘.

</div>
</div>

**③ 결과 확인**
- [ ] `yt_meta.json` 의 제목·설명·태그를 눈으로 확인합니다(큐에 넣기 전)
- [ ] `drain_uploads` 가 끝난 뒤 편 JSON(`data/longform/rainbow.json`)에 유튜브 영상 ID 가 기록됐는지 확인합니다
- [ ] **사람이 확인해야 할 체크포인트**: 업로드는 공개 상태로 가는 되돌리기 어려운 단계이니, 큐에 넣기 전에 제목·설명이 맞는지 `yt_meta.json` 을 눈으로 확인합니다.

## 오늘의 체크리스트

- [ ] 썸네일 3장 모두 "PASS"
- [ ] 롱폼·쇼츠 조립 완료, `qa_gate` 8.0 이상
- [ ] 시트를 열어 4가지 체크포인트를 직접 확인했다
- [ ] 큐에 두 줄을 넣고 `drain_uploads` 로 업로드했다
- [ ] 편 JSON 에 유튜브 영상 ID 가 기록됐다

## 다음 강의

7강부터는 예시 대본을 떠나 내 주제로 대본과 컷 계획을 직접 씁니다.
