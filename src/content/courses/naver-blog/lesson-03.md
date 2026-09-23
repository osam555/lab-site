---
number: 3
title: 키워드 발굴과 캘린더
subtitle: 검색되는 주제 30개, 한 달치
goal: 네이버 키워드 도구 데이터를 Claude Code로 분석해 쓸 만한 키워드 30개를 고르고, 주제 일관성을 지키는 한 달 캘린더를 만듭니다.
minutes: 45
part: 2부 · 파이프라인 만들기
---

## 검색되는 글은 키워드에서 시작합니다

"오늘 뭐 쓰지"로 시작한 글은 검색에 안 잡힙니다. 사람들이 **실제로 검색창에 치는 말**에서 시작해야 합니다. 그게 키워드이고, 네이버는 그 데이터를 무료로 줍니다.

## 따라하기 1: 키워드 도구에서 내보내기

1. searchad.naver.com → 도구 → 키워드 도구
2. 분야의 씨앗 단어 5개를 넣습니다. 예: `캠핑의자`, `캠핑테이블`, `감성캠핑`, `차박용품`, `캠핑초보`
3. 결과 표 오른쪽 위 **다운로드** → CSV → `keywords/seed-2025-01.csv`로 저장

::: windows
다운로드된 CSV가 엑셀에서 한글이 깨져 보여도 됩니다. Claude가 읽는 데는 문제없습니다. 파일을 `keywords/`로 옮기는 건 "Downloads의 최근 csv를 keywords/seed-2025-01.csv로 옮겨줘".
:::

::: mac
CSV를 미리보기로 열면 깨져 보일 수 있지만 상관없습니다. "~/Downloads의 최근 csv를 keywords/seed-2025-01.csv로 옮겨줘".
:::

씨앗 단어를 바꿔 2~3번 반복하면 500~1,000개 키워드가 모입니다.

## 따라하기 2: 분석

<div class="prompt-box not-prose" data-prompt="3-1" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-1</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

keywords/의 CSV를 전부 읽고 분석해줘.
1. 월간 검색수(PC+모바일) 300 이상, 경쟁 정도 '낮음' 또는 '중간'인 것만
2. blog-plan.md의 분야·독자에 맞지 않는 것 제외 (예: 판매·도매·B2B 키워드)
3. 검색 의도별로 분류: 정보(뭐가 좋아?), 비교(A vs B), 방법(어떻게), 후기(써봤더니), 장소(어디)
4. 각 키워드에 "내가 경험으로 쓸 수 있는가" 판단 근거를 blog-plan.md 기준으로 한 줄
5. 점수 = 검색수 × 경쟁 가중치 × 경험 적합도 로 상위 50개
결과를 keywords/analysis.md 표로. 아직 캘린더는 만들지 마.

</div>
</div>

표를 읽고 **직접 30개를 고르세요.** 기준은 하나: **이 키워드로 내 경험이 담긴 글을 쓸 수 있는가.** 검색량이 아무리 커도 경험이 없으면 빼세요. 그 글은 AI 티가 납니다.

## 검색 의도 → 글 형태

| 의도 | 키워드 예 | 글 형태 | 길이 |
|---|---|---|---|
| 정보 | 캠핑의자 추천 | 기준 3개 + 후보 3~5개 + 내 선택 | 2,000자 |
| 비교 | 릴렉스체어 vs 로우체어 | 표 + 상황별 결론 | 1,800자 |
| 방법 | 캠핑의자 세탁 방법 | 단계별 사진 | 1,500자 |
| 후기 | OO 캠핑의자 1년 사용기 | 시간순 + 장단점 + 재구매 여부 | 2,000자 |
| 장소 | 부산 근교 캠핑장 | 지도 + 조건별 추천 | 2,500자 |

## 따라하기 3: 캘린더

<div class="prompt-box not-prose" data-prompt="3-2" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-2</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

내가 고른 30개 키워드야: [붙여넣기]
한 달 캘린더를 keywords/calendar-2025-01.md로 만들어줘.
- 주 3편, 월·수·금
- 같은 주에 같은 의도(정보/비교/…)가 몰리지 않게
- 시리즈가 될 수 있는 것은 2주 간격으로 배치 (예: 1편 추천 → 2편 사용기)
- 계절 키워드는 데이터랩 추세를 고려해 앞뒤로 (내가 확인한 추세: [예: 차박은 4~5월 급상승])
- 각 행: 날짜 / 키워드 / 의도 / 글 형태 / 가제 / 필요한 사진
그리고 각 키워드를 posts/ 폴더로 미리 만들고 meta.json에 keyword, intent, status: "planned"를 넣어줘.

</div>
</div>

## 주제 일관성 점검

30개를 훑으며: 카테고리가 3개 이상이면 줄입니다. "캠핑 장비 / 캠핑장 / 캠핑 요리"는 한 블로그에 괜찮지만, 거기에 "주식"이 섞이면 안 됩니다. 1강의 경계입니다.

```bash
git add .
git commit -m "키워드 30개, 1월 캘린더"
```

## 오늘의 체크리스트

- [ ] keywords/analysis.md에 상위 50개가 있다
- [ ] 내가 직접 고른 30개가 캘린더에 있다
- [ ] 30개 전부 "내 경험으로 쓸 수 있다"
- [ ] posts/에 30개 폴더와 meta.json이 있다
- [ ] 커밋했다

## 다음 강의

4강, 캘린더 첫 글의 리서치와 초안. 출처가 붙고, 내 경험 자리가 비어 있는 초안.
