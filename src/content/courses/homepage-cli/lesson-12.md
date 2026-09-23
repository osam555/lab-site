---
number: 12
title: Vercel Analytics & Speed Insights
subtitle: 내 홈페이지에 누가 언제 얼마나 오는지 알아봅니다
goal: Vercel Analytics와 Speed Insights를 활성화해 방문자 통계와 성능 지표를 확인하고, 전화·예약 버튼 클릭을 목표로 추적합니다.
minutes: 40
part: 고급 · 도구 활용
---

## Vercel이 제공하는 두 가지 측정

| | Analytics | Speed Insights |
|---|---|---|
| **무엇을** | 방문자·페이지뷰·체류시간·이탈률 | LCP, FID, CLS (Core Web Vitals) |
| **언제 유용** | "누가 어느 페이지를 많이 보는지" | "홈페이지가 느린지, 빠른지" |
| **무료 범위** | 월 2,500 이벤트 / 프로젝트 1개 | 2,500 이벤트 |

개인·소규모 홈페이지는 무료로 충분합니다.

## 1. Analytics 켜기

**Vercel 대시보드에서만** 클릭 두 번으로 됩니다.

1. [vercel.com/dashboard](https://vercel.com/dashboard) → 내 프로젝트 선택
2. 상단 탭 **Analytics** → **Enable**
3. 바로 수집 시작. 데이터는 방문이 생기면 30분~1시간 뒤 표시됩니다

> 코드 수정 없이 Vercel이 자동으로 페이지뷰를 수집합니다.

## 2. Speed Insights 추가

Analytics보다 한 줄의 코드가 필요합니다. Claude Code에게:

<div class="prompt-box not-prose" data-prompt="12-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 12-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Vercel Speed Insights를 내 홈페이지에 추가해줘.
index.html, menu.html, location.html, contact.html 모든 페이지에.
스크립트 한 줄이면 된다고 알고 있어.

</div>
</div>

Claude가 각 HTML 파일 `</body>` 앞에 Vercel Speed Insights 스크립트를 삽입합니다.

```bash
git add .
git commit -m "Speed Insights 추가"
git push
```

push 후 Vercel 대시보드 → **Speed Insights** 탭에서 LCP·FID·CLS가 보이기 시작합니다.

## 3. 대시보드 읽는 법

### Analytics 탭 주요 지표

| 지표 | 의미 | 목표값 |
|---|---|---|
| **Visitors** | 순 방문자 (쿠키 기준) | 주간 추이가 우상향 |
| **Page Views** | 총 페이지 열람 수 | Visitors × 2 이상이면 여러 페이지를 봄 |
| **Bounce Rate** | 한 페이지만 보고 나간 비율 | 60% 이하 권장 |
| **Avg Duration** | 평균 체류 시간 | 1분 이상이면 읽고 있다는 신호 |

### 많이 보이는 패턴

- **메뉴 페이지 뷰가 가장 많음**: 정상. 방문 목적이 메뉴 확인
- **오시는 길 페이지 체류 짧음**: 지도만 보고 나감. 정상
- **첫 화면 이탈률 80% 이상**: 첫 문장이나 속도 문제. 6강 디자인 재점검

### Speed Insights 탭 주요 지표

| 지표 | 의미 | 좋음 기준 |
|---|---|---|
| **LCP** | 가장 큰 요소(보통 hero 이미지)가 뜨는 시간 | 2.5초 이하 |
| **FID/INP** | 첫 클릭 반응 속도 | 200ms 이하 |
| **CLS** | 페이지 레이아웃이 갑자기 밀리는 현상 | 0.1 이하 |

LCP가 느리면:

<div class="prompt-box not-prose" data-prompt="12-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 12-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Speed Insights에서 LCP가 4초야. hero 이미지 때문인 것 같아. 개선 방법 알려줘.

</div>
</div>

## 4. 전화·예약 버튼 클릭 추적 (Conversion Goal)

"방문자 수"보다 "전화 버튼을 누른 사람 수"가 더 중요한 지표입니다.

### Vercel Analytics 커스텀 이벤트

Claude Code에게:

<div class="prompt-box not-prose" data-prompt="12-3" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 12-3</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Vercel Analytics 커스텀 이벤트를 추가해줘.
- 전화번호를 클릭하면 'phone_click' 이벤트를 보내
- 예약하기 버튼을 클릭하면 'reservation_click' 이벤트를 보내
- 인스타그램 링크를 클릭하면 'instagram_click' 이벤트를 보내

</div>
</div>

커밋 → push 후 Vercel Analytics 대시보드 → **Custom Events**에서 클릭 수를 볼 수 있습니다.

## 5. 주간 리포트 이메일

Vercel 대시보드 → 우측 상단 프로필 → **Notifications** → **Weekly Summary** 토글 ON.

매주 월요일 방문자·성능 요약 이메일이 옵니다.

## 오늘의 체크리스트

- [ ] Analytics가 켜졌고 대시보드에서 데이터가 보인다
- [ ] Speed Insights 스크립트가 모든 페이지에 추가됐다
- [ ] LCP가 2.5초 이하다 (느리면 이미지 용량 확인)
- [ ] 전화·예약 커스텀 이벤트가 동작한다
- [ ] 주간 이메일 알림을 설정했다
