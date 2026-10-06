---
number: 7
title: ffmpeg로 합성하기
subtitle: 클립·음성·BGM·자막을 한 편으로
goal: 클립과 음성을 컷 단위로 맞춰 잇고, BGM과 자막을 입혀 9:16 최종 영상과 썸네일을 만드는 합성 스크립트를 완성합니다.
minutes: 60
part: 2부 · 파이프라인 만들기
---

## 합성의 순서

```
컷별: clip-NN.mp4 + voice-NN.mp3 → seg-NN.mp4 (길이 = 음성 길이 + 여유)
  ↓ 22개 이어 붙이기
본편.mp4 (영상 + 나레이션)
  ↓ BGM 깔기 (나레이션 있을 땐 작게)
  ↓ 자막 굽기 (script.json의 ko를 컷 타이밍에)
output/final.mp4 (1080×1920, 9:16)
  ↓
output/thumb.jpg
```

전부 ffmpeg 명령이고, 전부 Claude Code가 씁니다. 여러분은 **순서를 알고 결과를 보는 사람**입니다.

## 따라하기 1: 합성 스크립트

7-1에서 세그먼트(컷별 영상+음성)를 만들어 확인하고, 7-1b에서 이어 붙입니다. 두 단계 사이에 `work/seg-01.mp4` 하나를 재생해 소리와 화면이 맞는지 보세요.

한 번에 다 시키지 말고 단계별로 만들어 확인합니다.

<div class="prompt-box not-prose" data-prompt="7-1" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 7-1</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

scripts/assemble.py를 만들어줘. 1단계만:
- script.json과 voice/durations.json을 읽어서
- 컷마다 clips/cut-NN.mp4를 음성 길이 + 0.3초로 자르고(클립이 짧으면 마지막 프레임을 늘려서), voice/cut-NN.mp3를 얹어 work/seg-NN.mp4로 저장
- 모든 세그먼트를 1080×1920, 30fps로 통일
실행 후 work/ 안에 seg 파일이 몇 개 생겼는지 알려줘.

</div>
</div>

<div class="prompt-box not-prose" data-prompt="7-1b" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 7-1b</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

assemble.py에 이어서 추가: 세그먼트를 순서대로 이어 work/body.mp4를 만들고, 각 컷의 시작 시각을 work/timeline.json에 기록해줘(자막용). 실행 후 body.mp4 길이를 출력해줘.

</div>
</div>

Code 탭에서는 이렇게 시키세요.

> scripts/assemble.py를 실행해서 body.mp4를 만들고, 길이를 알려줘.

권한 요청의 명령을 읽고 수락합니다. 터미널로도 할 수 있어요.

```bash
python3 scripts/assemble.py
```

`work/body.mp4`를 열어 **끝까지 봅니다.** 확인: 컷 전환이 나레이션과 맞는가, 총 길이가 80~100초인가, 화면이 늘어지거나 검은 프레임이 없는가.


::: practice
- [ ] `work/body.mp4`를 끝까지 재생했다 (검은 프레임·늘어진 화면이 없는지)
- [ ] 총 길이가 80~100초인지 확인했다
- [ ] 컷 전환이 나레이션 문장과 맞는 곳 3군데를 골라 확인했다
:::

## 따라하기 2: BGM

<div class="prompt-box not-prose" data-prompt="7-3" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 7-3</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

assemble.py에 2단계 추가: assets/bgm/[파일명]을 body.mp4 길이에 맞춰 깔아줘. 볼륨은 나레이션 대비 -18dB, 나레이션이 나올 때 자동으로 더 줄어들게(sidechain ducking), 시작 1초 페이드인, 끝 2초 페이드아웃. 결과는 work/with-bgm.mp4.

</div>
</div>

들어보고 BGM이 크면 "-22dB로", 덕킹이 너무 티 나면 "덕킹 깊이를 절반으로".

## 따라하기 3: 자막

쇼츠는 **무음으로 보는 사람이 많습니다.** 자막은 선택이 아닙니다.

<div class="prompt-box not-prose" data-prompt="7-4" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 7-4</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

3단계: timeline.json과 script.json의 ko로 자막을 만들어 굽는다.
- 위치: 화면 세로 중앙보다 약간 아래 (하단 UI에 안 가리게, 아래에서 약 28% 지점)
- 글꼴: assets/fonts/의 볼드, 크기 64px, 흰색, 검은 외곽선 4px, 가로 여백 80px 안에서 최대 2줄
- 한 컷의 자막은 그 컷 음성 시작~끝 동안 표시
- ASS 형식으로 만든 뒤 굽기. 결과 output/final.mp4

</div>
</div>

폰에서 확인하는 게 정확합니다. `final.mp4`를 폰으로 보내 세로로 보세요. 글자가 작으면 72px, 두 줄이 넘치면 3강 기준(12~18자)을 벗어난 컷입니다.

## 따라하기 4: 썸네일과 메타

<div class="prompt-box not-prose" data-prompt="7-6" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 7-6</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

4단계: final.mp4에서 가장 극적인 프레임(훅 컷 근처)을 골라 output/thumb.jpg로, 제목 문구 "[제목]"을 상단에 크게 얹어서. 그리고 output/meta.md에 유튜브용 제목 3안, 설명문(첫 줄에 훅, 마지막에 해시태그 5개), 태그 15개를 script.json 기준으로 써줘.

</div>
</div>

::: practice
- [ ] `output/final.mp4`를 폰으로 옮겨 세로로 재생했다
- [ ] 무음으로 틀어도 자막만으로 내용이 이해된다
- [ ] `output/thumb.jpg`를 열어 제목 글자가 잘리지 않았는지 확인했다
- [ ] `output/meta.md`의 제목 3안 중 하나를 골랐다 (최종 선택은 사람이)
:::

## 최종 점검

폰으로 `final.mp4`를 보며:

- [ ] 첫 3초 안에 훅 자막과 화면이 동시에 뜬다
- [ ] 나레이션과 자막이 어긋나는 컷이 없다
- [ ] BGM이 나레이션을 가리지 않는다
- [ ] 마지막 컷이 뚝 끊기지 않는다 (0.5초 여유 또는 페이드)
- [ ] 세로 1080×1920, 총 80~100초

문제가 있으면 **해당 단계만** 다시. 자막 문제면 3단계, 타이밍이면 1단계.

## 한 번에 실행하기

네 단계가 각각 되면:

<div class="prompt-box not-prose" data-prompt="7-7" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 7-7</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

assemble.py를 `python3 scripts/assemble.py --all`로 1~4단계를 순서대로 실행하고, `--from 3`처럼 중간부터 실행할 수 있게 정리해줘. 각 단계 시작·완료를 출력.

</div>
</div>

Code 탭에서는 이렇게 시키세요.

> 바뀐 파일을 "pyramid: 합성 스크립트 완성, 첫 영상"이라는 메시지로 커밋해줘.

터미널로도 할 수 있어요.

```bash
git add .
git commit -m "pyramid: 합성 스크립트 완성, 첫 영상"
```

`output/`도 `.gitignore`에. 스크립트만 커밋합니다.

## 더 해보기(선택): 전환 효과와 자막 강조

기본 영상이 완성된 뒤 취향대로 더하세요. 안 해도 최종 영상은 문제없습니다.

### 컷 전환을 부드럽게

<div class="prompt-box not-prose" data-prompt="7-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 7-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

세그먼트 사이에 0.2초 크로스 디졸브를 넣어줘. 컷 전환이 너무 딱딱해.

</div>
</div>

### 자막 숫자·이름 강조
<div class="prompt-box not-prose" data-prompt="7-5" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 7-5</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

자막 강조: 각 컷에서 숫자와 고유명사만 노란색(#FFD400)으로.

</div>
</div>

이런 것도 script.json에 `highlight` 필드를 추가해 Claude가 처리하게 할 수 있습니다.

## 오늘의 체크리스트

- [ ] `output/final.mp4`가 있고 폰에서 확인했다
- [ ] 자막·BGM·전환이 들어가 있다
- [ ] `thumb.jpg`와 `meta.md`가 있다
- [ ] `--all`로 처음부터 끝까지 한 번에 실행된다
- [ ] 커밋했다

## 다음 강의

마지막 8강. 오늘까지의 전 과정을 **스킬 하나**로 저장해 "모아이 석상"만 입력하면 돌아가게 만들고, 업로드와 운영 루틴을 정리합니다.
