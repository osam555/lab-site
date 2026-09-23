---
number: 20
title: 모바일 앱
subtitle: 앱스토어 없이 앱 만들기
goal: 서비스를 PWA로 만들어 폰 홈 화면에 설치되게 하고, 20일 과정을 정리하며 다음 프로젝트를 정합니다.
minutes: 45
part: 4부 · 세상에 내놓기
---

## 앱스토어를 거치지 않아도 앱입니다

"앱"이라고 하면 앱스토어에서 받는 걸 떠올리지만, 사용자 입장에서 앱은 **홈 화면에 아이콘이 있고, 누르면 전체 화면으로 열리는 것**입니다. 이건 웹 서비스도 할 수 있습니다. **PWA(Progressive Web App)** 라고 합니다.

| | 앱스토어 앱 | PWA |
|---|---|---|
| 홈 화면 아이콘 | ○ | ○ |
| 전체 화면 (주소창 없음) | ○ | ○ |
| 오프라인 일부 동작 | ○ | ○ |
| 푸시 알림 | ○ | △ (iOS는 제한) |
| 심사 / 연회비 | 필요 | 없음 |
| 업데이트 | 심사 후 | push하면 즉시 |
| 만드는 데 걸리는 시간 | 수 주 | **오늘 1시간** |

이 과정의 마무리로는 PWA가 정답입니다. 진짜 앱스토어 출시는 사용자가 생긴 뒤에 고민해도 늦지 않습니다.

## PWA에 필요한 것 세 가지

1. **manifest** — 앱 이름, 아이콘, 색, 시작 주소를 적은 파일
2. **서비스 워커** — 오프라인에서 최소한의 화면을 보여주는 코드
3. **HTTPS** — Vercel이 이미 해줬습니다

## 따라하기 1: 아이콘 만들기

512×512 PNG 하나면 됩니다. 18강 강조색 배경에 서비스 첫 글자 하나, 또는 간단한 도형. 이미지 생성 AI에게 부탁하거나, AI 코딩 도구에게 SVG를 만들게 한 뒤 PNG로 변환해도 됩니다.

<div class="prompt-box not-prose" data-prompt="20-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 20-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

"public/icon.svg를 만들어줘. 512×512, 배경은 #2f8f5b 둥근 사각형, 가운데 흰색 굵은 글자 '냉'. 그리고 이걸 512와 192 크기 PNG로 변환하는 방법을 알려줘."

</div>
</div>

## 따라하기 2: PWA 설정

<div class="prompt-box not-prose" data-prompt="20-2" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 20-2</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

"이 Next.js 앱을 PWA로 만들어줘.
- src/app/manifest.ts로 manifest를 만들어줘. 이름은 '[서비스 이름]', 짧은 이름 '[4글자]', 테마색 #2f8f5b, 배경 #fbfaf7, display는 standalone, 아이콘은 public/icon-192.png와 icon-512.png
- 오프라인에서 '인터넷 연결을 확인하세요' 화면이 보이도록 최소한의 서비스 워커
- iOS 홈 화면 추가에 필요한 meta 태그도 layout.tsx에 추가
완료 후 폰에서 설치하는 방법을 Android와 iOS 각각 알려줘."

</div>
</div>

## 따라하기 3: 폰에 설치

push → 배포 → 폰 브라우저에서 열기:

- **Android (Chrome)**: 메뉴(⋮) → "홈 화면에 추가" 또는 자동으로 뜨는 설치 배너
- **iOS (Safari)**: 공유 버튼 → "홈 화면에 추가"

홈 화면의 아이콘을 눌러보세요. 주소창 없이 전체 화면으로 열립니다. **여러분이 만든 앱입니다.**

## 마무리: 20일을 돌아보기

1강에서 적은 한 줄을 다시 읽어보세요.

<div class="prompt-box not-prose" data-prompt="20-3" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 20-3</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

나는 [누구]를 위해 [무엇을 해주는] 서비스를 만든다.

</div>
</div>

이제 여러분에게는:
- 인터넷에 공개된 서비스와 폰에 설치된 앱
- PLAN.md, CLAUDE.md, DESIGN.md, TODO.md, 프롬프트/버그 템플릿 — **다음 프로젝트에 그대로 복사해 쓸 자산**
- 요청 → 확인 → 커밋 → 되돌리기라는 **작업 리듬**

세 번째가 가장 중요합니다. 도구는 바뀌어도 리듬은 남습니다.

## 다음 프로젝트를 위한 세 가지 조언

### 1. 두 번째 프로젝트는 첫 번째의 절반 크기로
첫 프로젝트는 배우느라 컸습니다. 두 번째는 "주말 안에 배포"를 목표로 작게. 속도가 붙는 걸 느끼게 됩니다.

### 2. 17강을 계속 반복하세요
서비스는 만들고 끝이 아닙니다. 매주 한 명에게 보여주고 하나 고치기. 이것만 3개월 하면 대부분의 서비스보다 나아집니다.

### 3. 코드를 조금씩 더 읽으세요
쓰지 않아도 됩니다. 하지만 AI가 만든 파일을 열어 "이건 뭐 하는 줄이야?"라고 물어보는 습관을 들이면, 반년 뒤엔 AI의 실수를 먼저 알아채는 사람이 되어 있을 겁니다.

## 마지막 체크리스트

- [ ] 폰 홈 화면에 내 앱 아이콘이 있다
- [ ] 아이콘을 누르면 전체 화면으로 열린다
- [ ] 1강의 한 줄과 지금의 서비스를 비교해봤다
- [ ] 다음 프로젝트 한 줄을 적었다

20일 동안 수고하셨습니다. 이제 여러분은 아이디어를 직접 검증할 수 있는 사람입니다.
