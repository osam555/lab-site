---
number: 7
title: SNS 자동 배포 — 글 하나를 다섯 채널로
subtitle: 인스타·X·스레드·카카오채널에 Playwright MCP로 자동 포스팅
goal: 하나의 원본 글을 채널별 형식으로 자동 변환하고, Playwright MCP와 Computer Use로 인스타그램·X(트위터)·스레드·카카오채널에 자동 또는 반자동으로 포스팅합니다.
minutes: 60
part: 3부 · SNS 자동 배포
---

## SNS 자동 배포의 구조

```
원본 콘텐츠 (블로그 글, 사진, 이벤트 공지)
        │
        ▼
  Claude Code — 채널별 변환
  ┌─────┬──────┬──────┬────────┐
  │인스타│  X   │스레드│카카오채널│
  │(캡션)│(280자)│(500자)│(긴 형식)│
  └──┬──┴───┬──┴───┬──┴────┬──┘
     │      │      │       │
  Playwright MCP / Computer Use 로 각 채널에 포스팅
```

---

## 1. 채널별 글 자동 변환

원본 글이 있으면 Claude Code에게:

<div class="prompt-box not-prose" data-prompt="7-1" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 7-1</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

아래 원본 콘텐츠를 각 채널 형식으로 변환해줘:

[원본 내용: 이번 주 신메뉴 출시 — 딸기 라떼 한정판, 가격 6,500원, 이번 주말만]

- 인스타그램: 이모지 풍부하게, 해시태그 15개, 150자 이내 캡션
- X (트위터): 280자 이내, 해시태그 2개, 링크 포함
- 스레드: 500자, 자연스러운 대화체
- 카카오채널: 구어체 500자, 이벤트 참여 유도 CTA 포함
- 카카오 채팅: 30자 이내 알림 문구

</div>
</div>

---

## 2. 인스타그램 자동 포스팅

### 이미지 카드 자동 생성

<div class="prompt-box not-prose" data-prompt="7-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 7-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

images/menu-new.jpg와 텍스트 "[메뉴 이름] 출시"를 합쳐서 인스타그램용 이미지 카드를 만들어줘.
1:1 비율, 가게 로고색 배경, 흰 글씨, 하단에 "@내아이디" 워터마크.

</div>
</div>

### 크리에이터 스튜디오 / Meta Business Suite

1. Aside 브라우저: `https://business.facebook.com/creatorstudio`
2. Facebook/Instagram 계정 로그인 (직접)
3. 대화창:

<div class="prompt-box not-prose" data-prompt="7-3" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 7-3</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Computer Use로 크리에이터 스튜디오에서 인스타그램 새 게시물을 만들어줘.
이미지: [드래그하거나 경로 알려주기]
캡션: [변환된 인스타 캡션]
예약: 내일 오전 11시

</div>
</div>

---

## 3. X (트위터) 자동 포스팅

### Playwright MCP 활용

<div class="prompt-box not-prose" data-prompt="7-4" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 7-4</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Playwright MCP로 x.com에 접속해서 글을 올려줘.
텍스트: [변환된 X 텍스트]
이미지가 있으면 첨부도.

</div>
</div>

> [!NOTE]
> X는 자동화를 강하게 감지합니다. Playwright가 차단되면 Computer Use로 Aside 브라우저에서 직접 입력 방식으로 전환하세요.

### 반자동 방식 (안전)

<div class="prompt-box not-prose" data-prompt="7-5" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 7-5</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

X 포스팅용 텍스트를 클립보드에 복사해줘.
내가 x.com에서 붙여넣기 할게.

</div>
</div>

---

## 4. 스레드(Threads) 포스팅

<div class="prompt-box not-prose" data-prompt="7-6" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 7-6</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Computer Use로 Aside 브라우저에서 threads.net에 접속해서 글을 올려줘.
텍스트: [변환된 스레드 텍스트]

</div>
</div>

---

## 5. 카카오채널 포스팅

1. Aside 브라우저: `https://business.kakao.com/dashboard`
2. 카카오 계정 로그인 (직접)
3. 대화창:

<div class="prompt-box not-prose" data-prompt="7-7" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 7-7</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Computer Use로 카카오 비즈니스 대시보드에서 채널 메시지를 작성해줘.
채널명: [내 채널 이름]
메시지 유형: 기본 텍스트
내용: [변환된 카카오채널 텍스트]
예약: 내일 오전 10시

</div>
</div>

---

## 6. 전체 파이프라인 자동화

한 번의 명령으로 모든 채널을 처리합니다.

<div class="prompt-box not-prose" data-prompt="7-8" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 7-8</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

아래 내용을 모든 SNS에 배포하는 파이프라인을 실행해줘:

원본: [원본 내용]
이미지: images/new-menu.jpg

1. 각 채널용 텍스트 변환
2. 인스타용 이미지 카드 생성 → images/sns-insta.jpg로 저장
3. 크리에이터 스튜디오에서 인스타 예약 (내일 11시)
4. 카카오채널 예약 (내일 10시)
5. X와 스레드 텍스트는 클립보드에 복사해줘 (내가 붙여넣기 할게)

</div>
</div>

---

## SNS 운영 주간 루틴

```
월요일: 이번 주 3개 포스팅 계획 (Claude Code로 캘린더 작성)
화·목·토: 파이프라인 실행 → 예약
일요일: 각 채널 성과 확인 → 잘 된 패턴 기록
```

---

## 오늘의 체크리스트

- [ ] 원본 글을 4개 채널 형식으로 변환했다
- [ ] 인스타그램용 이미지 카드를 자동 생성했다
- [ ] 최소 1개 채널에 Computer Use 또는 Playwright로 포스팅했다
- [ ] 전체 파이프라인을 한 번 실행해봤다
