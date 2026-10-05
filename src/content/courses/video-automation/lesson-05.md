---
number: 5
title: 첫 편 따라하기 ② Flow 생성→받기→정리
subtitle: aside_flow_submit, 5분 대기, aside_flow_dl, 컷 키로 정리
goal: Flow에 영상 컷과 썸네일을 제출하고, 받은 파일을 컷 키 이름으로 정리하고, 빠진 컷을 재제출하고, 가짜 글자가 생긴 컷을 크롭합니다.
minutes: 40
part: 2부 · 첫 편 만들기
---

## Code 탭에서 이렇게 시키세요

> **기본 방법: 클로드 데스크탑 앱의 Code 탭.** 키트 폴더(`clay-episode-kit`)를 프로젝트 폴더로 열고, 아래 프롬프트를 붙여 넣어 클로드에게 시킵니다. 클로드가 명령을 실행하거나 파일을 바꾸려고 **권한을 물으면, 무엇을 하려는지 읽고** 허용합니다(모르겠으면 "이게 뭐 하는 거야?"라고 되물어 보세요). 끝나면 '③ 결과 확인'을 눈으로 확인합니다. 명령어를 직접 치는 방법은 맨 아래 **'터미널로도 할 수 있어요'** 에 접어 두었습니다.

이 단계는 clay-episode 스킬의 "Flow 생성"과 "받기·정리" 절에 해당합니다. 제출→대기→다운로드·정리→(필요하면) 재제출 순서로, 아래 세 프롬프트를 하나씩 붙여 넣습니다.

### 프롬프트 5-1 · Flow 에 제출

**① 준비 (사람이 먼저)**
- [ ] 어디서: 키트 폴더에서 데스크탑 앱 Code 탭을 열고 이 폴더를 프로젝트 폴더로 고릅니다. Aside 창도 미리 띄워둡니다
- [ ] Aside 앱이 켜져 있고 Flow 탭이 로그인돼 있는지 확인합니다
- [ ] `FLOW_TAB` 환경변수가 살아 있어야 합니다(Aside 를 다시 켰다면 2강 따라하기 2의 명령으로 탭 id 를 다시 읽습니다)
- [ ] 4강의 컷 계획 검사("10.0점 통과")가 끝나 있어야 합니다

**② 스킬 (붙여 넣기)**

<div class="prompt-box not-prose" data-prompt="5-1" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-1</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

clay-episode 스킬을 읽고, 편 키 rainbow 의 영상 컷 11개와 썸네일 이미지 3장을 Flow(구글의 영상 생성 서비스)에 제출해줘. aside_flow_submit.py 를 영상용으로 한 번, --thumbs 옵션으로 썸네일용으로 한 번 돌리고, 화면에 나온 두 프로젝트 URL 을 그대로 보여줘. 값을 지어내지 말고 스크립트 출력만 그대로 인용해. 제출만 하고 여기서 멈춰 — 3~5분 대기와 완료 확인은 내가 Aside 창을 직접 보고 할게.

</div>
</div>

**③ 결과 확인**
- [ ] 클로드가 권한을 물으면 어떤 명령·파일인지 읽고 허용했는지(모르는 것은 허용 전에 물어봅니다)
- [ ] Claude 가 두 프로젝트 URL 을 스크립트 출력 그대로 보여줬는지
- [ ] Aside 창에서 타일이 다 찰 때까지(3~5분) 기다립니다

### 프롬프트 5-2 · 받기·정리

**① 준비 (사람이 먼저)**
- [ ] 5-1 제출이 끝나고 Aside 창의 타일이 다 찼어야 합니다(3~5분 대기)
- [ ] `scratch/flow_tools/flow_projects.txt` 에 rainbow·rainbow_thumbs 줄이 있는지 확인합니다

**② 스킬 (붙여 넣기)**

<div class="prompt-box not-prose" data-prompt="5-2" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-2</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

clay-episode 스킬을 읽고, 편 키 rainbow 의 두 Flow 프로젝트(영상·썸네일)를 다운로드해줘. 프로젝트 URL 은 scratch/flow_tools/flow_projects.txt 의 rainbow 줄과 rainbow_thumbs 줄에서 읽고, 각각 scratch/dl_rainbow, scratch/dl_rainbow_thumbs 에 받아. 받은 mp4 파일들은 data/longform/prompts/rainbow.json 의 new_prompts 캡션과 대조해서 assets/flow/rainbow/<컷키>.mp4 로 옮기고, jpg 3장은 a·b·c 로 assets/flow/rainbow/thumb/ 에 옮겨줘. 헷갈리는 파일은 ffmpeg 로 한 프레임 뽑아서 보고 판단해. 결과를 지어내지 말고, 옮긴 개수와 빠진 컷이 있으면 어떤 키인지만 표로 보여주고 멈춰 — 재제출은 내가 판단할게.

</div>
</div>

**③ 결과 확인**
- [ ] 클로드가 권한을 물으면 어떤 명령·파일인지 읽고 허용했는지(모르는 것은 허용 전에 물어봅니다)
- [ ] 정리된 파일 개수가 실제로 11개(+ 썸네일 3장)인지, `assets/flow/rainbow/` 폴더를 직접 열어 개수를 셉니다
- [ ] 빠진 컷이 있으면 어떤 컷 키인지 표를 확인하고, 있으면 5-3 으로 넘어갑니다
- [ ] **사람이 확인해야 할 체크포인트**: Claude가 "빠진 컷 없음"이라 보고해도 폴더를 직접 열어 개수를 셉니다.

### 프롬프트 5-3 · 빠진 컷 재제출

**① 준비 (사람이 먼저)**
- [ ] 5-2 의 결과 표에서 빠진 컷 키를 확인해 둡니다(없으면 이 프롬프트는 건너뜁니다)
- [ ] Aside 창의 Flow 탭이 여전히 열려 있어야 합니다

**② 스킬 (붙여 넣기)**

<div class="prompt-box not-prose" data-prompt="5-3" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-3</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

clay-episode 스킬을 읽고, 편 키 rainbow 에서 방금 빠졌다고 보고한 컷들만 같은 Flow 프로젝트에 다시 제출해줘. 어떤 컷이 빠졌는지는 위 보고 내용을 그대로 쓰고 새로 지어내지 마. 재제출한 컷 키 목록을 표로 보여주고 멈춰 — 받기는 3~5분 뒤 내가 다시 시킬게.

</div>
</div>

**③ 결과 확인**
- [ ] 클로드가 권한을 물으면 어떤 명령·파일인지 읽고 허용했는지(모르는 것은 허용 전에 물어봅니다)
- [ ] 재제출한 컷 키 목록이 5-2 의 빠진 목록과 정확히 일치하는지
- [ ] 3~5분 뒤 5-2 프롬프트를 다시 실행해 최종 개수를 확인합니다

## 대기

3~5분 걸립니다. Aside 창의 Flow 탭에서 타일이 하나씩 차오르는 게 보입니다. 타일이 「Failed — unusual activity」로 뜨면 과금 없는 일시 제한이니 1분 뒤 그 타일의 Retry 버튼을 누릅니다.

## 빠진 컷·가짜 글자 처리

- 받은 개수가 프롬프트 수(11개)보다 적으면 Flow 가 조용히 빼먹은 것입니다(10개 중 1개꼴). 같은 프로젝트에서 그 프롬프트만 다시 제출합니다.
- 같은 파일이 두 번 받히면 캡션이 같은 타일이 두 개 있었던 것 — 첫 번째만 쓰고 나머지는 지웁니다.
- 사물에 가짜 글자가 새겨진 컷은 **재생성 대신 크롭**합니다(크레딧 절약):


  Code 탭에서는 "이 컷의 아래쪽 중앙 68% 영역만 남기고 1280x720 으로 잘라서 새 파일로 저장해줘"라고 시킬 수 있습니다.

<details>
<summary><strong>터미널로도 할 수 있어요 — 크롭 명령</strong></summary>

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

</details>

## 터미널로도 할 수 있어요

위 프롬프트가 하는 일을 직접 명령으로 치고 싶을 때 보세요. 운영체제 탭(Windows·macOS)에 맞는 명령을 씁니다.

<details>
<summary><strong>따라하기 1: Flow 에 제출</strong></summary>

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

시작 전 확인: Aside 앱이 켜져 있고 Flow 탭에 로그인돼 있으며, `FLOW_TAB` 환경변수가 살아 있어야 합니다(Aside 를 다시 켰다면 2강 따라하기 2의 명령으로 탭 id 를 다시 읽습니다).

첫 명령이 영상 컷 11개를 Flow 프로젝트로 제출합니다(크레딧 ~110). 터미널에 프로젝트 URL 이 출력되고, `scratch/flow_tools/flow_projects.txt` 에도 `rainbow <URL>` / `rainbow_thumbs <URL>` 줄로 기록되니 잊어도 됩니다. 두 번째 명령은 썸네일 이미지 3장을 제출합니다(모드가 잠깐 이미지로 바뀌었다가 영상 모드로 복귀합니다, 무료).

**주의**: Aside 의 Flow 탭은 하나라 편 두 개를 동시에 돌리지 않습니다. 여러 편을 만들 땐 8강에서 다루는 순서(영상 제출 전부 먼저, 썸네일은 뒤에 몰아서)를 따릅니다.

</details>

<details>
<summary><strong>따라하기 2: 받기</strong></summary>

`<…URL>` 자리에는 `scratch/flow_tools/flow_projects.txt` 의 `rainbow` 줄과 `rainbow_thumbs` 줄에 적힌 주소를 넣습니다.

::: windows
```powershell
type scratch\flow_tools\flow_projects.txt
python scripts/aside_flow_dl.py <영상 프로젝트 URL> scratch\dl_rainbow
python scripts/aside_flow_dl.py <썸네일 프로젝트 URL> scratch\dl_rainbow_thumbs
```
:::

::: mac
```bash
cat scratch/flow_tools/flow_projects.txt
python3 scripts/aside_flow_dl.py <영상 프로젝트 URL> scratch/dl_rainbow
python3 scripts/aside_flow_dl.py <썸네일 프로젝트 URL> scratch/dl_rainbow_thumbs
```
:::

</details>

<details>
<summary><strong>따라하기 3: 컷 키 이름으로 정리</strong></summary>

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

이 정리 작업은 손으로 하면 지루하고 실수하기 쉬우니 클로드에게 맡기는 걸 권합니다 — 위 'Code 탭에서 이렇게 시키세요'의 프롬프트 5-2 가 그 역할입니다.

</details>

## 오늘의 체크리스트

- [ ] 영상 컷 11개, 썸네일 3장을 Flow 에 제출했다
- [ ] `assets/flow/rainbow/` 에 컷 키 이름으로 11개 mp4 가 있다
- [ ] `assets/flow/rainbow/thumb/` 에 a·b·c 세 장이 있다
- [ ] 빠진 컷·가짜 글자 컷을 처리했다(있었다면)

## 다음 강의

6강에서 썸네일을 만들고, 롱폼·쇼츠를 조립하고, 자동 검사를 통과시켜 유튜브에 올립니다.
