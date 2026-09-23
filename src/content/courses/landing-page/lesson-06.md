---
number: 6
title: "사례 4: 이벤트·프로모션·뉴스레터"
subtitle: 세미나, 할인 행사, 구독 유도 페이지
goal: 기간 한정 이벤트와 뉴스레터 구독 랜딩페이지를 만듭니다.
minutes: 40
part: 2부 · 유형별 실전
---

## 이 유형이 필요한 경우

- 세미나·웨비나 참가 신청을 받을 때
- 기간 한정 할인·프로모션을 알릴 때
- 뉴스레터·이메일 구독자를 모을 때

## 사례 A: 온라인 세미나·웨비나

<div class="prompt-box not-prose" data-prompt="6-1" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-1</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

index.html을 만들어줘. "AI 시대의 마케팅 전략" 무료 웨비나 신청 페이지.
1. 히어로: "AI가 바꾸는 마케팅, 1시간이면 따라잡습니다" + "무료 참가 신청" 버튼, 아래에 "12월 15일 (금) 오후 8시 · Zoom · 무료"
2. 발표 내용: 번호 + 주제 3개 (1.AI 도구 현황 / 2.실전 자동화 사례 / 3.바로 쓸 수 있는 프롬프트 10개)
3. 연사 소개: 사진 + 이름 + 현직 + 경력 2줄
4. 참가 혜택: 체크리스트 (✓ 프롬프트 모음 PDF ✓ 녹화본 제공 ✓ Q&A 시간)
5. 신청 폼: 이름 + 이메일 + 직무 입력 → "무료 참가 신청" 버튼
6. "이미 342명이 신청했습니다" + 최근 신청자 3명 닉네임 롤링 (CSS 애니메이션)
7. FAQ: 녹화본, 취소, Zoom 링크 발송 시점
깔끔한 비즈니스 스타일. 네이비 + 흰색.

</div>
</div>

## 사례 B: 기간 한정 프로모션

<div class="prompt-box not-prose" data-prompt="6-2" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-2</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

index.html을 만들어줘. "연말 감사 세일" 쇼핑몰 프로모션 랜딩페이지.
1. 히어로: 큰 배경에 "올해의 마지막 할인, 최대 70% OFF", 카운트다운 타이머 (JavaScript로 D-day까지), "세일 상품 보기" 버튼 (빨간색)
2. 카테고리별 할인: 카드 4개 (의류 50% / 가방 40% / 신발 30% / 악세서리 70%). 각각 대표 이미지 + "쇼핑하기" 버튼
3. 타임 딜: "오늘만 이 가격" 카드 2개. 원래 가격 취소선 + 할인 가격 + 남은 수량
4. 무료배송 배너: "5만원 이상 무료배송 + 사은품"
5. 고객 후기: 별점 + 구매 상품 + 한 줄 후기 3개
6. 마지막 CTA: "마감까지 남은 시간" + 카운트다운 반복 + "지금 쇼핑하기" 버튼
축제 느낌. 빨간색·금색 포인트. 긴급한 느낌.

</div>
</div>

## 사례 C: 뉴스레터 구독

<div class="not-prose my-4">
  <div class="tip-box">
    <div class="flex items-center justify-between flex-wrap gap-2">
      <div>
        <span class="font-bold text-accent">🎨 대표 실습 샘플:</span> 뉴스레터 구독 랜딩페이지 미리보기
      </div>
      <a href="/examples/landing-newsletter.html" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-accent text-white rounded-lg hover:opacity-90 transition-opacity">
        실제 결과물 완성 샘플 보기 ↗
      </a>
    </div>
  </div>
</div>

<div class="prompt-box not-prose" data-prompt="6-3" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-3</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

index.html을 만들어줘. "주간 AI 트렌드" 뉴스레터 구독 랜딩페이지.
1. 히어로: "매주 월요일, AI 소식을 5분으로 정리해드립니다" + 이메일 입력 + "무료 구독" 버튼. 아래 "구독자 2,400명이 읽고 있습니다"
2. 최근 뉴스레터 3개: 제목 + 날짜 + 요약 1줄. 클릭하면 샘플 볼 수 있게 (별도 HTML 또는 외부 링크)
3. 왜 이 뉴스레터인가: 아이콘 3개 ("큐레이션 — 쏟아지는 뉴스 중 핵심만", "실전 — 바로 써볼 수 있는 팁", "5분 — 출근길에 읽는 분량")
4. 독자 후기: 트위터/X 임베드 스타일 카드 3개
5. 마지막 CTA: 이메일 입력 반복 + "스팸 없습니다. 언제든 구독 해제."
미니멀. 흰 배경 + 한 가지 포인트 색. 이메일 입력이 핵심.

</div>
</div>

## 사례 D: 오프라인 이벤트

<div class="prompt-box not-prose" data-prompt="6-4" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-4</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

index.html을 만들어줘. "성수동 플리마켓" 참가 신청 페이지.
1. 히어로: images/event.jpg 배경, "성수동 핸드메이드 플리마켓", 날짜 "12.21 토 11:00~18:00", "참가 신청" 버튼
2. 참가 셀러 소개: 프로필 카드 6개 (사진 + 브랜드명 + 품목)
3. 장소·교통: 약도 + 주소 + 주차 + 대중교통
4. 타임테이블: 11:00 오픈 / 13:00 미니 공연 / 15:00 럭키드로우
5. 방문자 혜택: "SNS 인증샷 이벤트 — 음료 교환권"
6. 참가 신청 폼: 이름 + 연락처 + 품목 → "셀러 신청" 버튼. 방문자는 자유 입장
밝고 활기찬 느낌. 노란색 + 민트색.

</div>
</div>

## 이벤트·프로모션 핵심 체크

- [ ] **긴급성**: 카운트다운, 마감일, "선착순 N명"
- [ ] **혜택이 명확**: 할인율, 사은품, 무료 콘텐츠
- [ ] **폼이 짧다**: 이름·이메일만. 많으면 이탈
- [ ] **사회적 증거**: "342명 신청", "2,400명 구독 중"

<div class="not-prose my-6">
  <div class="help-box">
    <div class="font-bold text-amber-400 text-sm mb-1">🚨 카운트다운 타이머가 안 움직이나요?</div>
    <div class="text-sm text-text-muted">
      AI가 작성한 JavaScript 카운트다운 날짜가 과거로 설정되어 있으면 "00일 00시간 00분"으로 고정될 수 있습니다. AI에게 <i>"카운트다운 목표 날짜를 오늘부터 7일 뒤로 자동 계산하도록 수정해줘"</i>라고 요청하세요.
    </div>
  </div>
</div>

## 다음 강의

7강에서 포트폴리오·개인 브랜딩 랜딩페이지를 만듭니다.
