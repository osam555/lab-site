---
number: 5
title: 첫 편 따라하기 ② Flow 생성→받기→정리
subtitle: aside_flow_submit, 5분 대기, aside_flow_dl, 컷 키로 정리
goal: Flow에 영상 컷과 썸네일을 제출하고, 받은 파일을 컷 키 이름으로 정리하고, 빠진 컷을 재제출하고, 가짜 글자가 생긴 컷을 크롭합니다.
minutes: 40
part: 2부 · 첫 편 만들기
---

## 따라하기 1: Flow 에 제출

::: windows
```powershell
python scripts/aside_flow_submit.py rainbow
python scripts/aside_flow_submit.py rainbow --thumbs
```
:::

::: mac
```bash
python3 scripts/aside_flow_submit.py rainbow
python3 scripts/aside_flow_submit.py rainbow --thumbs
```
:::

첫 명령이 영상 컷 11개를 Flow 프로젝트로 제출합니다(크레딧 ~110). 터미널에 프로젝트 URL 이 출력되니 적어둡니다. 두 번째 명령은 썸네일 이미지 3장을 제출합니다(모드가 잠깐 이미지로 바뀌었다가 영상 모드로 복귀합니다, 무료).

**주의**: Aside 의 Flow 탭은 하나라 편 두 개를 동시에 돌리지 않습니다. 여러 편을 만들 땐 8강에서 다루는 순서(영상 제출 전부 먼저, 썸네일은 뒤에 몰아서)를 따릅니다.

## 대기

3~5분 걸립니다. Aside 창의 Flow 탭에서 타일이 하나씩 차오르는 게 보입니다. 타일이 「Failed — unusual activity」로 뜨면 과금 없는 일시 제한이니 1분 뒤 그 타일의 Retry 버튼을 누릅니다.

## 따라하기 2: 받기

::: windows
```powershell
python scripts/aside_flow_dl.py <영상 프로젝트 URL> scratch\dl_rainbow
python scripts/aside_flow_dl.py <썸네일 프로젝트 URL> scratch\dl_rainbow_thumbs
```
:::

::: mac
```bash
python3 scripts/aside_flow_dl.py <영상 프로젝트 URL> scratch/dl_rainbow
python3 scripts/aside_flow_dl.py <썸네일 프로젝트 URL> scratch/dl_rainbow_thumbs
```
:::

## 따라하기 3: 컷 키 이름으로 정리

받은 파일 이름은 Flow 가 붙인 영어 캡션입니다(예 `Clay_child_pointing_at_rainbow_….mp4`). 프롬프트와 대조해 `assets/flow/rainbow/<컷키>.mp4` 로 이름을 바꿔 옮깁니다. 헷갈리면 한 프레임만 뽑아 봅니다.

::: windows
```powershell
ffmpeg -ss 2 -i 파일명.mp4 -frames:v 1 x.png
```
:::

::: mac
```bash
ffmpeg -ss 2 -i 파일명.mp4 -frames:v 1 x.png
```
:::

썸네일은 `assets/flow/rainbow/thumb/a.jpg` `b.jpg` `c.jpg` 로 넣습니다(a=아이 미디엄샷, b=어른+물방울, c=얼굴 클로즈업).

이 정리 작업은 손으로 하면 지루하고 실수하기 쉬우니 Claude Code 에게 맡기는 걸 권합니다 — 아래 스킬 프롬프트가 그 역할입니다.

## 빠진 컷·가짜 글자 처리

- 받은 개수가 프롬프트 수(11개)보다 적으면 Flow 가 조용히 빼먹은 것입니다(10개 중 1개꼴). 같은 프로젝트에서 그 프롬프트만 다시 제출합니다.
- 같은 파일이 두 번 받히면 캡션이 같은 타일이 두 개 있었던 것 — 첫 번째만 쓰고 나머지는 지웁니다.
- 사물에 가짜 글자가 새겨진 컷은 **재생성 대신 크롭**합니다(크레딧 절약):

::: windows
```powershell
ffmpeg -i in.mp4 -vf "crop=iw*0.68:ih*0.68:(iw-iw*0.68)/2:ih-ih*0.68,scale=1280:720" -c:v libx264 -crf 16 -pix_fmt yuv420p -an out.mp4
```
:::

::: mac
```bash
ffmpeg -i in.mp4 -vf "crop=iw*0.68:ih*0.68:(iw-iw*0.68)/2:ih-ih*0.68,scale=1280:720" -c:v libx264 -crf 16 -pix_fmt yuv420p -an out.mp4
```
:::

## 이 강에서 스킬 쓰기

이 단계는 SKILL.md **§3(Flow 생성)**과 **§4(받기·정리)**에 해당합니다. 제출과 대기는 사람이 직접 하고(터미널 명령), 정리는 스킬에게 맡깁니다.

<div class="prompt-box not-prose" data-prompt="5-1" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-1</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

/clay-episode 로 SKILL.md §4 절차대로, scratch/dl_rainbow/ 에 받은 mp4 파일들을 data/longform/prompts/rainbow.json 의 new_prompts 프롬프트·캡션과 대조해서 assets/flow/rainbow/<컷키>.mp4 로 옮겨줘. 헷갈리는 건 ffmpeg 로 한 프레임 뽑아서 보고 정해. 개수가 11개인지, 파일이 겹치지 않는지 확인하고, 빠진 컷이 있으면 어떤 키인지만 알려줘 — 재제출은 내가 판단할게. scratch/dl_rainbow_thumbs/ 의 jpg 3장은 a·b·c 로 assets/flow/rainbow/thumb/ 에.

</div>
</div>

**사람이 확인해야 할 체크포인트**: 정리된 파일 개수가 실제로 11개(+ 썸네일 3장)인지, 스킬이 "빠진 컷 없음"이라 보고해도 `assets/flow/rainbow/` 폴더를 직접 열어 개수를 셉니다.

## 오늘의 체크리스트

- [ ] 영상 컷 11개, 썸네일 3장을 Flow 에 제출했다
- [ ] `assets/flow/rainbow/` 에 컷 키 이름으로 11개 mp4 가 있다
- [ ] `assets/flow/rainbow/thumb/` 에 a·b·c 세 장이 있다
- [ ] 빠진 컷·가짜 글자 컷을 처리했다(있었다면)

## 다음 강의

6강에서 썸네일을 만들고, 롱폼·쇼츠를 조립하고, 자동 검사를 통과시켜 유튜브에 올립니다.
