---
number: 19
title: 통합 관리 대시보드
subtitle: 방문자·예약·검색 현황을 한 화면에서 보는 내 가게 대시보드
goal: 간단한 admin.html 대시보드를 만들어 Vercel Analytics, Supabase 예약 데이터, 구글·네이버 검색 현황을 한 곳에서 확인합니다. 비밀번호로 보호합니다.
minutes: 60
part: 고급 · SEO & 대시보드
---

## 대시보드가 필요한 이유

지금까지 만든 도구들이 여러 곳에 흩어져 있습니다.

| 데이터 | 확인하는 곳 |
|---|---|
| 방문자 수·체류 시간 | Vercel Analytics 대시보드 |
| 예약·문의 | Supabase Studio |
| 구글 검색 성과 | 구글 서치 콘솔 |
| 네이버 검색 현황 | 네이버 서치 어드바이저 |
| 홈페이지 속도 | PageSpeed Insights |

**목표**: `mycafe.kr/admin` 에 접속하면 이것들을 한 화면에서 볼 수 있게.

---

## 1. admin.html 기본 골격

Claude Code에게:

<div class="prompt-box not-prose" data-prompt="19-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 19-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

admin.html을 만들어줘. 비밀번호 보호가 있는 관리자 대시보드야.
- 접속 시 비밀번호 입력창 (틀리면 3회 후 잠금)
- 비밀번호: "[내가 정한 비밀번호]" (코드에 직접 넣어도 됨, 개인 소규모 사이트니까)
- 로그인 성공 시 대시보드 화면 표시
- 디자인은 홈페이지와 같은 색상 사용
- 다크 모드 지원

</div>
</div>

> [!NOTE]
> 이 방식은 간단한 비밀번호 보호입니다. 민감한 정보를 다룬다면 Supabase Auth로 로그인을 연결하세요 (17강 참고).

---

## 2. 카드 레이아웃

대시보드는 **카드** 단위로 각 지표를 보여줍니다.

<div class="prompt-box not-prose" data-prompt="19-2" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 19-2</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

admin.html 대시보드에 다음 카드들을 추가해줘:

**카드 1 — 오늘의 요약** (상단)
- 오늘 날짜와 요일
- 오늘 예약 건수 (Supabase에서 실시간)
- 미확인 문의 건수 (Supabase에서 실시간)
- 최근 7일 방문자 (Vercel Analytics API에서)

**카드 2 — 예약 현황**
- 오늘과 내일 예약 목록 (이름, 시간, 인원)
- 상태 변경 버튼 (확인/취소)
- Supabase realtime으로 새 예약이 오면 자동 갱신

**카드 3 — 최근 문의**
- 지난 7일 문의 목록
- 읽음/안읽음 표시

**카드 4 — 빠른 링크**
- 구글 서치 콘솔 (새 탭으로)
- 네이버 서치 어드바이저 (새 탭으로)
- Vercel 대시보드 (새 탭으로)
- Supabase Studio (새 탭으로)

**카드 5 — 홈페이지 상태**
- 마지막 배포 시각 (Vercel API에서)
- 각 페이지 링크 (새 탭으로)

</div>
</div>

---

## 3. Supabase 실시간 연결

예약 카드가 자동으로 갱신되게 합니다.

<div class="prompt-box not-prose" data-prompt="19-3" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 19-3</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

admin.html의 예약 카드에 Supabase Realtime을 연결해줘.
reservations 테이블에 새 행이 추가되면 카드가 자동으로 갱신돼.
새 예약이 오면 브라우저 알림(Notification API)도 보내줘.

</div>
</div>

---

## 4. Vercel Analytics API 연결 (선택)

Vercel은 Analytics 데이터를 API로 제공합니다.

<div class="prompt-box not-prose" data-prompt="19-4" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 19-4</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Vercel Analytics API를 써서 최근 7일 방문자 수와 페이지뷰를 가져와 카드 1에 표시해줘.
Vercel API Token: [Vercel 계정 Settings → Tokens에서 발급]
Team ID/Project ID: [Vercel 프로젝트 URL에서 확인]

</div>
</div>

---

## 5. admin 페이지 보호 (vercel.json)

`/admin` 을 검색 엔진에서 숨깁니다.

<div class="prompt-box not-prose" data-prompt="19-5" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 19-5</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

vercel.json에 /admin 경로를 robots.txt에서 제외하고,
X-Robots-Tag: noindex 헤더를 추가해줘.
robots.txt에도 Disallow: /admin 추가해줘.

</div>
</div>

---

## 6. 모바일에서도 사용하기

대시보드를 폰에 홈 화면으로 추가하면 앱처럼 씁니다.

<div class="prompt-box not-prose" data-prompt="19-6" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 19-6</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

admin.html을 PWA(Progressive Web App)로 만들어줘.
- manifest.json 추가 (이름: "[가게 이름] 관리", 테마색: [색])
- 오프라인에서도 로그인 화면은 보이게
iPhone에서 "홈 화면에 추가"하면 앱 아이콘으로 열려야 해.

</div>
</div>

폰에서 `mycafe.kr/admin` → 주소창 없이 전체 화면으로 열립니다.

---

## 완성된 대시보드 루틴

매일 아침 `mycafe.kr/admin` 열기:

```
1. 카드 1 — 오늘 예약 몇 건?
2. 카드 2 — 각 예약 확인(confirmed)으로 변경
3. 카드 3 — 새 문의 확인·답장
4. 카드 4 — 구글/네이버 현황 주 1회 확인
```

---

## 오늘의 체크리스트

- [ ] `mycafe.kr/admin`이 비밀번호 입력 없이는 안 열린다
- [ ] 로그인 후 카드 레이아웃이 보인다
- [ ] 예약 카드에서 실시간 예약이 보이고 상태를 바꿀 수 있다
- [ ] 빠른 링크 카드에서 서치 콘솔·어드바이저로 이동된다
- [ ] `/admin`이 robots.txt에서 제외됐다
- [ ] 폰 홈 화면에 아이콘으로 추가했다
