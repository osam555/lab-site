---
number: 3
title: "사례 1: 제품·서비스 출시"
subtitle: SaaS 도구, 핸드메이드 제품, 구독 서비스 랜딩페이지
goal: 제품 출시 랜딩페이지를 Claude Code로 만들고, CTA 버튼이 눈에 띄는 구조를 완성합니다.
minutes: 45
part: 2부 · 유형별 실전
---

## 이 유형이 필요한 경우

- 새로 만든 서비스/제품을 알리고 싶을 때
- "지금 시작하기", "구매하기" 버튼을 누르게 하고 싶을 때
- 킥스타터·텀블벅 같은 펀딩 페이지 대신 내 페이지가 필요할 때

<div class="tip-box not-prose">
  <div class="tip-box-title">💡 실제 완성된 라이브 예시 미리보기</div>
  <p>이 프롬프트로 완성된 실제 결과물을 <a href="/examples/landing-saas.html" target="_blank" class="font-bold text-accent underline">SaaS 랜딩페이지 라이브 데모 ↗</a>를 클릭해 새 탭에서 바로 체험해보세요.</p>
</div>

<div class="help-box not-prose">
  <div class="help-box-title">❓ 초보자 질문: Claude Code가 만든 화면은 어떻게 보나요?</div>
  <p><code>index.html</code> 파일이 생성되면, 내 컴퓨터의 폴더에서 <code>index.html</code>을 더블클릭하거나 브라우저(Chrome) 창으로 드래그해 놓으시면 즉시 화면 결과를 확인하실 수 있습니다.</p>
</div>

## 사례 A: SaaS 도구

<div class="prompt-box not-prose" data-prompt="3-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

CLAUDE.md를 만들어줘. 이 프로젝트는 SaaS 서비스 랜딩페이지다. HTML과 CSS만 쓴다. 나는 코딩을 모른다. 한국어로 설명해줘.

</div>
</div>

<div class="prompt-box not-prose" data-prompt="3-2" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-2</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

index.html을 만들어줘. "PageMaker" 서비스 랜딩페이지야.
1. 히어로: 헤드라인 "클릭 3번이면 홈페이지 완성", 서브 "코딩 없이 5분 만에 전문가 수준의 페이지를", "무료로 시작하기" 버튼 (크고 눈에 띄는 보라색), 오른쪽에 images/product.jpg
2. 신뢰 배너: "1,200명이 사용 중" + 고객사 로고 4개 (회색 텍스트 로고로 대체)
3. 핵심 기능 3개: 아이콘 + 제목 + 설명 1줄. "드래그 앤 드롭", "모바일 자동 최적화", "원클릭 배포"
4. 시연: 가운데 큰 스크린샷 또는 YouTube 임베드 자리
5. 가격표: 무료 / Pro ₩9,900 / Team ₩29,900 카드 3개. Pro에 "인기" 뱃지. 각각 기능 목록 + CTA 버튼
6. 고객 후기: 카드 3개 (프로필 아이콘 + 이름 + 직함 + 한 줄 후기)
7. FAQ: 아코디언 4개
8. 마지막 CTA: "지금 무료로 시작하세요" + 버튼
9. 하단: 회사명, 이메일, 개인정보처리방침 링크
세련된 SaaS 스타일. 다크 배경에 보라색 포인트. 반응형.

</div>
</div>

## 사례 B: 핸드메이드·실물 제품

<div class="prompt-box not-prose" data-prompt="3-3" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-3</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

index.html을 만들어줘. "소소한가죽" 수제 가죽공방 랜딩페이지.
1. 히어로: images/product.jpg 전체 배경, "당신만의 가죽 지갑을 만들어드립니다", "주문 제작 신청" 버튼 (따뜻한 갈색)
2. 스토리: "왜 수제 가죽인가" — 장인 사진 + 3줄 소개
3. 제품 라인업: 카드 3개 (지갑·벨트·키링) 각각 사진 + 가격 + "주문하기" 버튼
4. 제작 과정: 타임라인 4단계 (상담 → 가죽 선택 → 제작 → 배송)
5. 고객 후기: 사진 + 별점 + 한 줄 후기 3개
6. FAQ: 제작 기간, 교환/환불, AS
7. 마지막 CTA: "나만의 가죽 소품, 지금 신청하세요" + 버튼 + 카카오톡 링크
따뜻하고 고급스러운 느낌. 밝은 배경 + 갈색 포인트.

</div>
</div>

## 사례 C: 구독 서비스

<div class="prompt-box not-prose" data-prompt="3-4" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-4</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

index.html을 만들어줘. "주간 커피박스" 원두 정기구독 랜딩페이지.
1. 히어로: "매주 새로운 원두가 문 앞에", "첫 달 50% 할인" 뱃지, "구독 시작하기" 버튼
2. 작동 방식 3단계: 1.취향 선택 → 2.매주 배송 → 3.새로운 맛 발견
3. 이번 주 원두 소개: 사진 + 원산지 + 로스팅 + 맛 노트
4. 가격: 월 ₩19,900 / 3개월 ₩49,900 / 6개월 ₩89,900. 6개월에 "최저가" 표시
5. 구독자 후기 3개
6. FAQ: 해지, 배송 주기 변경, 원두 교체
7. 마지막 CTA + 카운트다운 타이머 자리 (얼리버드 마감)
따뜻한 크림색 배경. 초록색 CTA 버튼.

</div>
</div>

## 공통 포인트

- **CTA 버튼은 페이지에서 가장 눈에 띄는 색**
- **같은 CTA를 최소 3번** 반복 (히어로, 가격, 마지막)
- **숫자로 증거**: "1,200명 사용 중", "4.9점", "30초면"
- **내비게이션 메뉴 없음** — 스크롤만 유도

## 고치기 연습

만든 뒤 미리보기를 보면서 하나씩:

<div class="prompt-box not-prose" data-prompt="3-5" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-5</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

CTA 버튼을 더 크게, 위아래 패딩을 넓혀줘.

</div>
</div>

<div class="prompt-box not-prose" data-prompt="3-6" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-6</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

히어로 헤드라인 글자 크기를 48px로, 볼드로.

</div>
</div>

<div class="prompt-box not-prose" data-prompt="3-7" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-7</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

가격표에서 Pro 카드만 테두리를 두껍게 해서 강조해줘.

</div>
</div>

## 오늘의 체크리스트

- [ ] 사례 A/B/C 중 하나를 내 제품에 맞게 완성했다
- [ ] CTA 버튼이 3번 이상 반복된다
- [ ] 미리보기에서 폰 화면도 확인했다
- [ ] `git commit` 했다

## 다음 강의

4강에서 강좌·워크숍 모집 랜딩페이지를 만듭니다.
