---
number: 6
title: 더빙 — ElevenLabs & Typecast 선택하기
subtitle: 한국어 자연스러움은 Typecast, 다국어·감정 표현은 ElevenLabs
goal: ElevenLabs와 Typecast 두 서비스의 특징을 비교하고, 내 쇼츠에 맞는 목소리를 선택해 컷별 음성을 자동 생성합니다. 길이가 안 맞는 컷을 손보는 호흡 맞추기까지 완료합니다.
minutes: 55
part: 2부 · 파이프라인 만들기
---

## 두 서비스 비교

| | **Typecast** | **ElevenLabs** |
|---|---|---|
| **개발사** | 네오사피엔스 (한국) | ElevenLabs (미국) |
| **한국어 품질** | ⭐⭐⭐⭐⭐ 네이티브 수준 | ⭐⭐⭐ 다국어 모델 |
| **한국어 목소리** | 100+ (성별·나이·톤 다양) | 20개 내외 |
| **감정 표현** | 보통 | 매우 풍부 |
| **가격** | 무료 플랜 있음, 월정액 | 무료 1만 자/월, 이후 유료 |
| **API** | REST API 제공 | REST API 제공 |
| **적합한 쇼츠** | 한국어 지식·일상 쇼츠 | 영어 혼용·감정 강조 쇼츠 |

**권장**: 한국어 쇼츠 → **Typecast 우선**, 영어·다국어 → ElevenLabs

---

## Typecast 설정

### 1. 가입 및 목소리 선택

1. [typecast.ai](https://typecast.ai) 가입
2. **목소리 탐색** → 카테고리(전문가·청년·중년 등)로 필터
3. 미리듣기 → 마음에 드는 목소리의 **Actor ID** 복사

`.env`에 추가:

```
TYPECAST_API_TOKEN=여기에
TYPECAST_ACTOR_ID=여기에
```

### 2. Typecast 더빙 스크립트

<div class="prompt-box not-prose" data-prompt="6-1" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-1</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

scripts/dub-typecast.py를 만들어줘.
- script.json을 읽어 각 컷의 ko 텍스트를 Typecast API로 음성 변환
- 출력: voice/cut-NN.mp3
- API 토큰·Actor ID는 .env의 TYPECAST_API_TOKEN, TYPECAST_ACTOR_ID에서
- 진행 전 총 글자 수와 예상 크레딧 소모를 출력하고 y 확인 후 실행
- 이미 있는 mp3는 건너뛰기, --only 5,12 옵션으로 특정 컷만 재생성
- Typecast API는 비동기이므로 작업 ID를 받아 3초마다 완료 여부를 폴링
- 각 파일 생성 후 ffprobe로 길이를 재서 voice/durations.json에 기록
- 실패한 컷 번호를 모아 마지막에 출력

</div>
</div>

실행:

```bash
python3 scripts/dub-typecast.py
```

::: windows
`python3`이 없다는 에러가 나면 `python scripts/dub-typecast.py`로. 그래도 없으면 Microsoft Store에서 Python 3 설치.
:::

::: mac
macOS에는 python3이 기본으로 있습니다. `ModuleNotFoundError`가 나면 Claude가 알려주는 `pip3 install ...`을 실행하세요.
:::

---

## ElevenLabs 설정 (대안)

한국어 품질이 Typecast보다 낮지만, 영어 혼용이나 특별한 감정 표현이 필요할 때 사용합니다.

`.env`에 추가:

```
ELEVENLABS_API_KEY=여기에
ELEVENLABS_VOICE_ID=여기에
```

<div class="prompt-box not-prose" data-prompt="6-2" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-2</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

scripts/dub-elevenlabs.py를 만들어줘.
- script.json의 ko 텍스트를 ElevenLabs API로 변환
- 모델: eleven_multilingual_v2 (한국어 품질 최적)
- 나머지 옵션은 dub-typecast.py와 동일하게

</div>
</div>

한국어 품질이 어색하면 `voice_settings`의 `stability`를 0.7 이상으로 올려보세요.

---

## 두 서비스를 컷별로 다르게 쓰기

<div class="prompt-box not-prose" data-prompt="6-3" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-3</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

script.json의 각 컷에 "tts" 필드를 추가해줘. 값: "typecast" 또는 "elevenlabs".
dub.py를 만들어서 컷마다 지정된 서비스를 자동으로 골라 실행해줘.

</div>
</div>

예: 일반 나레이션은 Typecast, 숫자 강조 컷은 ElevenLabs.

---

## 길이 점검 및 호흡 맞추기

두 서비스 모두 동일한 방법으로 확인합니다.

### 길이 확인

<div class="prompt-box not-prose" data-prompt="6-4" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-4</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

voice/durations.json을 표로 보여주고, 4.0초를 넘거나 3.0초에 못 미치는 컷을 표시해줘.

</div>
</div>

| 컷 | 글자 | 길이 | 판정 |
|---|---|---|---|
| 1 | 16 | 3.6s | ✓ |
| 5 | 19 | 4.4s | 김 |
| 9 | 11 | 2.4s | 짧음 |

### 호흡 맞추기 — 우선순위

**1순위: 대본 다듬기** (가장 자연스러움)

<div class="prompt-box not-prose" data-prompt="6-5" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-5</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

5번 컷 "위에는 무려 600만 톤의 돌이 얹혀 있는데"를 "위엔 돌 600만 톤이 얹혀 있는데"로 script.json에서 고치고, 5번만 다시 더빙해줘.

</div>
</div>

**2순위: 무음 패딩** (짧은 컷)

<div class="prompt-box not-prose" data-prompt="6-6" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-6</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

9번 컷은 2.4초라 짧아. 앞뒤에 0.5초씩 무음을 붙여 3.4초로 만들어줘.

</div>
</div>

**3순위: 클립 길이를 음성에 맞추기** (7강에서 처리)

전체 길이가 60~90초를 벗어나지 않는지만 확인합니다.

---

## 이어 듣기 확인

<div class="prompt-box not-prose" data-prompt="6-7" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-7</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

voice/의 mp3를 번호순으로 이어 붙여 voice/preview.mp3를 만들어줘. 컷 사이에 0.3초 무음.

</div>
</div>

눈 감고 끝까지 들어보세요. 발음이 어색한 단어는:

<div class="prompt-box not-prose" data-prompt="6-8" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-8</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

12번 컷의 "쿠푸"를 "쿠푸 왕"으로, 3번 컷의 "2.3m"를 "2.3미터"로 고치고 그 두 컷만 다시 더빙해줘.

</div>
</div>

숫자·단위는 한글로 풀어 쓰면 두 서비스 모두 읽기가 안정됩니다.

---

## 오늘의 체크리스트

- [ ] Typecast 또는 ElevenLabs 중 하나를 선택하고 .env를 설정했다
- [ ] `voice/cut-01.mp3` ~ `cut-NN.mp3`가 생성됐다
- [ ] durations.json에서 모든 컷이 3.0~4.2초 안에 있다
- [ ] preview.mp3를 끝까지 듣고 발음 문제를 수정했다
- [ ] 커밋했다 (`voice/`는 `.gitignore`에 추가)

## 다음 강의

7강, 드디어 합성. 클립 + 음성 + BGM + 자막을 9:16 한 편으로.
