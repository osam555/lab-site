---
number: 1
title: 쇼츠 자동화 파이프라인 이해하기
subtitle: 다섯 단계, 도구 넷, 한 달 4편
goal: 쇼츠 한 편이 만들어지는 다섯 단계와 각 단계를 맡는 도구를 이해하고, 첫 영상의 주제와 레퍼런스 채널을 정합니다.
minutes: 25
part: 1부 · 준비
---

## 쇼츠 한 편은 다섯 단계입니다

80~100초짜리 지식 쇼츠(예: "피라미드 왕의 방이 무너지지 않는 비밀")는 손으로 만들면 하루가 걸립니다. 단계로 쪼개면 대부분을 도구에 넘길 수 있습니다.

```
① 주제·대본  →  ② 비주얼 프롬프트  →  ③ 영상 클립 생성  →  ④ 더빙  →  ⑤ 합성·자막
   Claude Code      Claude Code          Google Flow          ElevenLabs    ffmpeg
```

| 단계 | 하는 일 | 도구 | 사람이 하는 것 |
|---|---|---|---|
| ① 대본 | 레퍼런스 채널 분석 → 4초 × 20~25컷 대본 | Claude Code | 주제 정하기, 사실 확인 |
| ② 프롬프트 | 컷마다 영상 생성용 영문 프롬프트 | Claude Code | 스타일 방향 |
| ③ 클립 | 4초 클립 20~25개 생성·다운로드 | Google Flow | 이상한 컷 골라내기 |
| ④ 더빙 | 컷별 나레이션 음성 | ElevenLabs API | 호흡 어색한 컷 손보기 |
| ⑤ 합성 | 클립+음성+BGM+자막 → 9:16 mp4 | ffmpeg (Claude가 조작) | 최종 시청 |

이 과정에서 여러분이 배우는 건 각 도구의 사용법이 아니라, **Claude Code에게 다섯 단계를 순서대로 시키고 결과를 검수하는 법**입니다. 8강에서는 이 전체를 **스킬 하나**로 저장해 "모아이 석상"만 입력하면 끝까지 돌아가게 만듭니다.

## 왜 4초 단위인가

영상 생성 도구는 한 번에 몇 초짜리 클립을 만듭니다. Google Flow 기준 한 클립이 약 4초(모델·설정에 따라 다름)이고, 20~25개를 이으면 80~100초 — 쇼츠 상한(3분) 안에서 시청 유지율이 좋은 길이입니다.

그래서 **대본도 4초 호흡으로 씁니다.** 한 컷에 한 문장, 한국어로 12~18자. 이 제약이 대본 품질을 오히려 올려줍니다.

## 비용과 크레딧

| 항목 | 비용 | 비고 |
|---|---|---|
| Claude Code | Claude 구독 또는 API | 이미 쓰고 있다면 추가 없음 |
| Google Flow | Gemini Pro(구 Google One AI Premium) 구독에 포함된 월 크레딧 | 클립당 크레딧 소모. 영상 1편에 약 250 크레딧 → **월 약 4편** |
| ElevenLabs | 무료 플랜 월 10분 분량, 유료는 $5~부터 | 편당 나레이션 90초 → 무료로 월 6편 가능 |
| ffmpeg | 무료 | 2강에서 설치 |

크레딧과 요금은 바뀌니 시작 전에 각 서비스 요금 페이지를 한 번 확인하세요. 핵심은 **영상 생성 크레딧이 병목**이라는 것. 그래서 3강에서 대본을 확정한 뒤에 5강에서 클립을 만듭니다. 대본 고치느라 클립을 다시 만들면 크레딧이 날아갑니다.

## 준비물 체크

- [ ] Claude Code가 설치되어 있고 `claude`로 실행된다 (없다면 [홈페이지 만들기 3강](/lectures/homepage/lesson-03)부터)
- [ ] Google 계정 + Gemini Pro 구독 (Google Flow 크레딧용). 없으면 무료 크레딧 범위에서 연습
- [ ] ElevenLabs 계정 (무료로 시작)
- [ ] 유튜브 채널 (없으면 8강에서 만듭니다)

## 따라하기: 주제와 레퍼런스 정하기

### 1. 소재 분야 하나
이 과정은 **건축·구조물**을 예시로 씁니다. 다른 분야(역사, 우주, 생물)도 방법은 같습니다. 분야를 하나로 고정해야 8강의 스킬이 잘 작동합니다.

### 2. 레퍼런스 채널 1~2개
유튜브에서 내 분야 쇼츠를 잘 만드는 채널을 찾아 URL을 적어둡니다. 기준: 구독자보다 **컷 편집 리듬과 나레이션 톤이 내가 원하는 것**인가. 3강에서 Claude Code가 이 채널의 구성을 분석합니다.

### 3. 첫 영상 주제 3개
"한 문장으로 궁금증이 생기는 것"이 좋은 주제입니다.

<div class="prompt-box not-prose" data-prompt="1-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 1-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

- 피라미드 왕의 방은 어떻게 4,500년을 버텼나
- 파르테논 기둥이 일부러 휘어 있는 이유
- 진시황 병마용 갱은 왜 무너지지 않았나

</div>
</div>

`topics.md` 파일에 적어두세요. 2강에서 프로젝트 폴더를 만들 때 넣습니다.

## 오늘의 체크리스트

- [ ] 다섯 단계와 각 도구를 말할 수 있다
- [ ] 4초 × 20~25컷 구조를 이해했다
- [ ] 소재 분야, 레퍼런스 채널 URL, 주제 3개를 적었다
- [ ] 각 서비스 요금·크레딧을 확인했다

## 다음 강의

2강에서 ffmpeg를 설치하고, ElevenLabs API 키를 안전하게 보관하고, 프로젝트 폴더와 CLAUDE.md를 만듭니다.
