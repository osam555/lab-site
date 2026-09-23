---
number: 14
title: HyperFrames & Remotion — 코드로 영상 자동 생성
subtitle: HTML로 모션그래픽, React로 데이터 영상 — Claude Code가 코드를 쓰고 ffmpeg가 렌더링
goal: HyperFrames 스킬을 설치해 /hyperframes 명령으로 모션그래픽 영상을 만들고, Remotion으로 데이터가 바뀔 때마다 자동으로 새 영상을 렌더링합니다.
minutes: 65
part: 5부 · 영상 자동화
---

## 두 도구 비교

| | HyperFrames | Remotion |
|---|---|---|
| **개발사** | HeyGen (오픈소스) | Remotion (오픈소스) |
| **언어** | HTML / CSS / JS | React / TypeScript |
| **Claude 통합** | `/hyperframes` 슬래시 명령 | Remotion Skills (에이전트 모드) |
| **렌더링** | Playwright + ffmpeg | npx remotion render |
| **잘 맞는 용도** | 모션그래픽, 자막, 타이틀 카드 | 데이터 영상, 퍼스널라이즈드, 반복 렌더 |
| **코딩 경험** | 불필요 (Claude가 모두 작성) | 불필요 (Claude가 모두 작성) |

---

## HyperFrames

### 설치

**사전 준비**: Node.js 22+, ffmpeg, Chrome (headless)

```
HyperFrames 스킬을 설치해줘.
npx 또는 npm으로 HyperFrames를 설치하고
/hyperframes 명령을 Claude Code에서 쓸 수 있게 해줘.
```

Claude Code가 설치를 완료하면 터미널에서 `/hyperframes`가 활성화됩니다.

> [!NOTE]
> Claude Code 앱에서 슬래시(/) 명령으로 `/hyperframes`를 입력하면 HeyGen HyperFrames 스킬이 실행됩니다. 앱 버전에 따라 설치 방법이 다를 수 있으니 공식 문서를 확인하세요.

---

### 기본 사용법 — 타이틀 카드 만들기

<div class="prompt-box not-prose" data-prompt="14-1" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 14-1</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

/hyperframes 신메뉴 출시 타이틀 카드를 만들어줘.
- 배경: 진한 에스프레소색 (#2C1810)
- 중앙 텍스트: "뱅쇼 라떼 출시" (흰색, 큰 글씨, 페이드인 애니메이션)
- 하단: "이번 겨울만 한정 판매" (작은 서브텍스트, 0.5초 딜레이)
- 로고: images/logo.png 우측 상단
- 길이: 3초, 9:16 비율
- 출력: videos/title-card.mp4

</div>
</div>

Claude Code가 HTML/CSS/JS 씬 파일을 작성하고, Playwright가 캡처하고, ffmpeg가 MP4로 합칩니다.

---

### 실전 예시들

**인스타 소식 카드**

<div class="prompt-box not-prose" data-prompt="14-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 14-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

/hyperframes 가게 주간 소식 영상을 만들어줘.
씬 1 (2초): "이번 주 소식" 타이틀
씬 2 (3초): "① 신메뉴 뱅쇼 라떼 출시" — 왼쪽에서 슬라이드인
씬 3 (3초): "② 12월 5일 창립 기념 할인 20%" — 아래에서 등장
씬 4 (2초): "@mycafe" 로고 + 아이콘 페이드아웃
배경: 브랜드 색 그라디언트, 9:16

</div>
</div>

**유튜브 오프닝 인트로**

<div class="prompt-box not-prose" data-prompt="14-3" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 14-3</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

/hyperframes 유튜브 채널 인트로를 만들어줘.
채널명: "마이카페 일상"
로고: images/logo.png
인트로 길이: 5초
스타일: 로고가 중앙에서 확대되며 등장, 채널명 타이핑 효과
출력: videos/intro.mp4, 16:9

</div>
</div>

**자막 바 (Lower Third)**

<div class="prompt-box not-prose" data-prompt="14-4" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 14-4</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

/hyperframes 인터뷰 자막 바를 만들어줘.
텍스트: "김민준 대표 / 마이카페"
스타일: 하단 왼쪽, 브랜드색 바 배경, 흰 글씨
애니메이션: 왼쪽에서 슬라이드인, 3초 유지 후 페이드아웃
투명 배경(알파채널) PNG 시퀀스로도 출력해줘.

</div>
</div>

---

### 반복 렌더 — 주간 일정 영상

데이터만 바꿔서 매주 새 영상을 만듭니다.

<div class="prompt-box not-prose" data-prompt="14-5" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 14-5</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

/hyperframes 주간 메뉴 영상 템플릿을 만들어줘.
데이터 파일(weekly-menu.json)을 읽어서 메뉴 이름과 가격을 씬에 넣어.
씬마다 메뉴 하나씩, 총 5씬.
템플릿이 완성되면 weekly-menu.json만 바꿔도 새 영상이 나와야 해.

</div>
</div>

매주:

```json
// weekly-menu.json 만 수정
{
  "items": [
    { "name": "뱅쇼 라떼", "price": "6,500원" },
    { "name": "시나몬 롤", "price": "4,000원" }
  ]
}
```

<div class="prompt-box not-prose" data-prompt="14-6" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 14-6</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

/hyperframes weekly-menu.json을 읽어서 주간 메뉴 영상을 렌더해줘.

</div>
</div>

---

## Remotion

### 설치

```
Remotion 프로젝트를 현재 폴더 안에 video-remotion/ 디렉토리로 만들어줘.
npx create-video@latest ./video-remotion
TypeScript + npm 조합으로.
```

설치 완료 후:

```
cd video-remotion && npm run dev 으로 Remotion Studio를 열어줘.
```

브라우저에서 `http://localhost:3000` → Remotion Studio가 열립니다.

---

### Remotion 스킬 (에이전트 모드)

Claude Code에게 자연어로 요청하면 React 컴포넌트를 직접 작성합니다.

<div class="prompt-box not-prose" data-prompt="14-7" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 14-7</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Remotion 스킬을 활성화해서 아래 영상을 만들어줘:

가게 월간 리포트 영상 (30초, 16:9):
- 씬 1 (10초): 이번 달 방문자 수 카운트업 애니메이션 (0 → 1,247명)
- 씬 2 (10초): 인기 메뉴 Top 3 바 차트 (왼쪽에서 순서대로 등장)
- 씬 3 (10초): 다음 달 이벤트 예고 텍스트
색상은 브랜드 색 (#2C1810, #D4A96A) 사용.

</div>
</div>

Claude가 React 컴포넌트(`src/compositions/MonthlyReport.tsx`)를 작성합니다.

---

### 데이터 기반 반복 렌더 — Remotion의 강점

숫자만 바꿔서 매달 새 영상을 자동 생성합니다.

<div class="prompt-box not-prose" data-prompt="14-8" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 14-8</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Remotion 컴포넌트가 props로 데이터를 받도록 수정해줘:
- visitorCount: number
- topMenus: { name: string; count: number }[]
- nextEvent: string

그 다음 아래 데이터로 렌더해줘:
visitorCount: 1247
topMenus: [{ name: "뱅쇼 라떼", count: 342 }, { name: "아메리카노", count: 289 }]
nextEvent: "12월 창립기념 20% 할인"

</div>
</div>

렌더 명령:

```
npx remotion render MonthlyReport out/report-dec.mp4 --props='{"visitorCount":1247}'
```

매달 props 값만 바꾸면 새 MP4가 자동으로 나옵니다.

---

### 쇼츠·릴스용 9:16 영상

<div class="prompt-box not-prose" data-prompt="14-9" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 14-9</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Remotion으로 쇼츠용 영상을 만들어줘. 9:16 비율, 60초.
- 첫 3초: 강한 후크 텍스트 (큰 글씨, 배경 색 전환)
- 본문: 핵심 3가지를 순서대로 슬라이드 (각 15초)
- 마지막 12초: CTA 애니메이션 + 채널 로고
내용: [원하는 내용 입력]

</div>
</div>

---

### Remotion → 유튜브 자동 배포 연동

렌더 완료 후 바로 12강의 유튜브 업로드 스킬로 연결합니다.

<div class="prompt-box not-prose" data-prompt="14-10" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 14-10</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

video-remotion을 렌더해서 out/report-dec.mp4를 만들고,
유튜브 업로드 스킬을 써서 바로 예약 업로드해줘.
주제: 12월 카페 운영 리포트

</div>
</div>

---

## HyperFrames vs Remotion 선택 기준

```
빠르게 짧은 모션그래픽이 필요할 때
  → HyperFrames (/hyperframes 명령 한 줄)

숫자·데이터가 바뀔 때마다 같은 포맷으로 반복 렌더
  → Remotion (props만 바꿔서 자동화)

둘 다 조합:
  HyperFrames → 인트로·타이틀·자막 바 제작
  Remotion    → 본편 데이터 씬 제작
  ffmpeg      → 두 결과를 하나의 MP4로 합치기
```

---

## 완성 파이프라인

<div class="prompt-box not-prose" data-prompt="14-11" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 14-11</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

이번 달 리포트 영상을 만들어줘:
1. HyperFrames로 인트로 (5초) + 아웃트로 (3초) 렌더
2. Remotion으로 데이터 본편 (30초) 렌더
3. ffmpeg로 인트로 + 본편 + 아웃트로 합치기 → out/monthly-report.mp4
4. 유튜브 업로드 스킬로 예약 업로드

</div>
</div>

---

## 오늘의 체크리스트

- [ ] HyperFrames를 설치하고 /hyperframes 명령을 실행했다
- [ ] 타이틀 카드 영상(MP4)이 출력됐다
- [ ] Remotion Studio가 localhost에서 열렸다
- [ ] Claude Code로 React 컴포넌트를 자동 작성했다
- [ ] props를 바꿔서 새 영상이 렌더됐다
- [ ] (선택) HyperFrames + Remotion + ffmpeg 통합 파이프라인을 실행했다
