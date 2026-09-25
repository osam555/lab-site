---
number: 8
title: 시리즈로 운영하기
subtitle: 여러 편 묶기, 서브에이전트에게 맡기기, 큐+드레이너, 재사용 라이브러리
goal: 여러 편을 한꺼번에 제출·다운로드하고, 기계적인 단계를 서브에이전트에게 맡기고, 채널 일일 한도를 큐로 넘기고, 스킬 파일로 시리즈를 운영하는 주간 루틴을 만듭니다.
minutes: 50
part: 3부 · 내 주제로 운영
---

## 여러 편을 한꺼번에 묶는 이유

편마다 대화를 오가며 제출·대기·다운로드를 반복하면 시간이 편 수만큼 늘어납니다. SKILL.md **§9(여러 편을 싸게 만드는 요령)**의 핵심은 **묶어서 처리**하는 것입니다.

- **영상 제출을 전부 먼저, 썸네일은 뒤에 몰아서** — Flow 의 모드 설정이 계정 전체에 걸리기 때문입니다.
- **다운로드도 프로젝트 단위로** — 편이 끝날 때마다 받지 말고, 여러 프로젝트 URL 을 모았다가 한 번에.
- **시리즈 단위로 대화** — 9편이면 "9편 다 제출해줘"처럼 한 번에 시키는 게, 편마다 오가는 것보다 훨씬 쌉니다.

## 기계적인 단계는 서브에이전트에게

대본·컷 계획·최종 시트 확인은 사람(또는 상위 모델)이 하고, 더빙·제출·다운로드·정리·조립·검사·업로드 큐는 서브에이전트(가벼운 모델)에게 맡깁니다. 서브에이전트에게 시킬 때 꼭 넣을 두 문장이 있습니다.

1. **"긴 대기는 폴링하지 말고 `until … ; do sleep 30; done` 한 번의 명령으로"** — Flow 생성 대기(3~5분)처럼 시간이 걸리는 단계를 반복 확인하며 대화 턴을 낭비하지 않습니다.
2. **"결과를 지어내지 말 것"** — 스크립트 출력(점수, 파일 개수, 통과 여부)을 실제로 읽고 보고하게 합니다. 특히 `qa_gate`·`cutplan_check` 의 점수는 절대 짐작해서 말하지 않게 합니다.

::: windows
```powershell
until (Test-Path scratch\flow_tools\rainbow_done.flag) { Start-Sleep -Seconds 30 }
```
:::

::: mac
```bash
until [ -f scratch/flow_tools/rainbow_done.flag ]; do sleep 30; done
```
:::

(실제 완료 플래그 파일명은 스크립트 출력을 보고 맞춰 씁니다 — 위는 패턴 예시입니다.)

## 큐 + 드레이너, 채널 한도 이월

6강에서 쓴 큐 파일(`scratch/flow_tools/aside_queue.txt`)에 여러 편을 한 번에 채웁니다.

::: windows
```powershell
"volcano long main`nvolcano short main`nrainbow2 long main" | Out-File -Append -Encoding utf8 scratch\flow_tools\aside_queue.txt
```
:::

::: mac
```bash
printf 'volcano long main\nvolcano short main\nrainbow2 long main\n' >> scratch/flow_tools/aside_queue.txt
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

유튜브 채널당 하루 업로드 한도(대략 20~25건)에 걸리면 드레이너가 그 채널을 건너뛰고 **남은 줄은 큐 파일에 그대로 남깁니다**. 다음 날 `drain_uploads` 를 다시 실행하면 이어서 올라갑니다. 여러 채널에 나눠 올리는 시리즈라면 한 채널이 막혀도 다른 채널 줄은 그대로 진행됩니다.

## Drive 재사용 라이브러리

2강에서 설정한 `DRIVE_LIB` 환경변수가 있으면, `prep_more.py` 가 완성 클립을 자동으로 Google Drive 에 백업합니다. 이후 편에서 비슷한 장면(예: 같은 교실 배경)이 필요할 때 새로 생성하지 않고 재사용할 수 있어 크레딧을 아낍니다.

## 주간 루틴

| 요일 | 할 일 | 시간 |
|---|---|---|
| 월 | 다음 편 주제·대본 확정(7강 구조), 사실 확인 | 40분 |
| 화 | 컷 계획 작성·검사, 여러 편이면 한꺼번에 Flow 제출 | 40분 |
| 수 | 받기·정리, 조립·검사, 시트로 4가지 체크포인트 확인 | 40분 |
| 목 | 큐에 넣고 `drain_uploads` 실행, 이전 편 반응 확인 | 20분 |
| 주말 | 유튜브 스튜디오에서 이탈 지점 확인 → 다음 대본 훅에 반영 | 15분 |

## 흔한 문제

| 증상 | 원인·처방 |
|---|---|
| `cutplan_check` ✗ "사람이 나오는데 CHARACTERS 문구를 안 썼다" | 프롬프트에 사람을 직접 묘사함 → `{C2}` 등 상수로 바꾸거나 사물만 나오는 `diagram` 으로 |
| ✗ "헤드라인 N자" | 썸네일 두 줄 합쳐 14자 넘음 → 줄임 |
| `make_thumb` "펀치라인 폰트가 작다" | 둘째 줄 글자가 길어 120px 아래로 줄어듦 → 둘째 줄을 4~6자로 |
| `qa_gate` "밀도 … 미달(정지 %)" | 그 시각의 컷이 거의 안 움직임 → `map` 에서 움직임 있는 컷으로 바꾸고 `--deploy` 다시 |
| 받은 파일이 프롬프트 수보다 적음 | Flow 가 빼먹음 → 그 프롬프트만 재제출 |
| 인물이 컷마다 다름 | `characters` 문구가 짧음 → 옷 색·머리·피부 명시 |
| Studio 다이얼로그가 「Creating link…」에서 멈춤 | 그 채널 일일 한도 → 내일 |
| Aside 탭 id 오류 "No open browser tab" | Aside 를 다시 열면 id 가 바뀜 → 2강의 명령으로 다시 읽어 `FLOW_TAB`/`channels` 갱신 |
| Aside 를 못 쓰는 환경 | `npm install && npx playwright install chromium` 후 Playwright 폴백(SKILL.md §8) — 탭 id 대신 URL 일부나 탭 번호를 씀 |

## 이 강에서 스킬 쓰기

이 단계는 SKILL.md **§9(여러 편을 싸게 만드는 요령)**를 그대로 실천하는 것이고, 문제가 생기면 **§7(이럴 땐)**과 **§8(Aside 없이)**을 참고합니다.

<div class="prompt-box not-prose" data-prompt="8-1" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 8-1</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

/clay-episode 로 SKILL.md §9 방식대로 volcano, ocean, star_sky 세 편을 한꺼번에 진행해줘. 컷 계획 검사(§2)가 셋 다 통과한 상태라고 가정하고, 영상 제출을 세 편 다 먼저 하고 썸네일은 마지막에 몰아서 제출해(§3). 다운로드·정리(§4)도 프로젝트 단위로 묶어서 처리해. 각 단계 대기는 sleep 루프 한 번으로 하고, 폴링하며 대화 턴을 쓰지 마. 점수나 파일 개수는 스크립트 출력을 그대로 인용하고 지어내지 마. 조립·업로드(§5~§6)는 내가 시트를 확인한 뒤 편별로 따로 요청할게.

</div>
</div>

**사람이 확인해야 할 체크포인트**: 서브에이전트가 "N편 모두 완료"라고 요약 보고해도, 실제로 `assets/flow/<key>/` 폴더별 파일 개수와 `qa_gate` 점수를 편마다 직접 한 번씩 훑어봅니다 — 묶어서 처리할수록 중간에 조용히 빠진 편을 놓치기 쉽습니다.

## 마지막 체크리스트

- [ ] 여러 편을 영상 먼저·썸네일 나중 순서로 제출하는 이유를 설명할 수 있다
- [ ] 서브에이전트에게 폴링 금지·결과 날조 금지 두 문장을 넣어 시켰다
- [ ] 큐 파일에 여러 줄을 넣고 채널 한도 이월을 경험했다(또는 원리를 이해했다)
- [ ] 주간 루틴을 캘린더에 넣었다
- [ ] 흔한 문제 표를 한 번 훑었다

## 이 과정을 마치며

여러분에게 남은 것:

- 내 주제·캐릭터·브랜드로 채운 `kit.config.json`
- `data/longform/<key>.json` + `PLANS[<key>]` — 편마다 새로 쓰지만 구조는 같은 대본·컷 계획
- 완성한 첫 편(롱폼+쇼츠+썸네일 3종)과 두 번째 편 이상의 경험
- `.claude/skills/clay-episode/SKILL.md` — 다음 편도 `/clay-episode` 로 그 단계만 불러 쓰는 습관
- 큐 파일 + 주간 루틴 — 시리즈로 굴러가는 운영 리듬

다음 편을 시작하려면 7강처럼 `new_episode.py` 로 뼈대를 만들고 컷 계획을 쓰면 됩니다. 두 번째 편부터는 이 8강 전체가 20~30분이면 끝납니다.
