---
number: 7
title: 스킬 저장과 주간 운영
subtitle: '"이 글 배포해줘" 한 줄'
goal: 변환 → 카드 → 예약 → 리포트 전 과정을 체크포인트가 있는 스킬로 저장하고, 주간 루틴과 문제 대응법을 정합니다.
minutes: 35
part: 3부 · 자동화와 운영
---

## 스킬로 저장

<div class="prompt-box not-prose" data-prompt="7-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 7-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

3강부터 6강까지의 과정을 'SNS 배포 스킬'로 저장해줘. 사용자가 원본 파일 경로나 링크를 주면서 "배포해줘"라고 하면 실행되게.

</div>
</div>

만들어진 파일을 열고 아래 구조를 확인·보강합니다.

```markdown
# SNS 배포

사용자가 "[원본] 배포해줘"라고 하면:

## 0. 준비
- sources/에 원본 저장, posts/YYYY-MM-슬러그/ 생성
- source.md 위에 핵심 1 · 포인트 3 · 얻는 것 1

## 1. 변환 (3강)
- channels.json + VOICE.md로 variants.json, 후크 후보 3개씩
- ⏸ 사용자 후크 선택
- 문체 검사표 출력, 지시받은 것만 수정

## 2. 카드 (4강)
- scripts/render-cards.py 실행 → cards/
- ⏸ 사용자 검수

## 3. 예약 (5강)
- schedule.json 생성 (간격 3시간, 재활용 슬롯 1)
- 전체 표 출력 → ⏸ "예약해" 대기 → 등록 → schedule.json 갱신
- API 없는 채널은 clip.py 안내

## 4. 리포트 (6강, 7일 뒤)
- 사용자가 "리포트"라고 하면 metrics 수집(API 또는 캡처) → report.md

## 규칙
- 즉시 발행 호출 금지, 답글·팔로우 자동화 금지
- ⏸ 에서는 반드시 멈춘다
- 모든 링크에 UTM
```

체크포인트 세 곳: **후크 선택, 카드 검수, 예약 승인.** 이 셋이 "내 계정에 내 이름으로 올라가는 것"을 지킵니다.

## 두 번째 배포

새 대화에서:

<div class="prompt-box not-prose" data-prompt="7-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 7-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

sources/winter-camping-tips.md 배포해줘.

</div>
</div>

후크 고르고, 카드 보고, 표 확인하고 "예약해". **15분**입니다.

## 주간 루틴

| 요일 | 할 일 | 시간 |
|---|---|---|
| 월 | 이번 주 원본 2~3개 배포 (스킬 실행 × N) | 45분 |
| 매일 | 댓글·DM 답글 — 손으로 | 10분 |
| 목 | 지난주 배포 리포트 | 15분 |
| 월말 | 4주 종합 → channels.json/VOICE.md 갱신 | 30분 |

원본이 [네이버 블로그](/lectures/naver-blog)나 [쇼츠](/lectures/shorts) 파이프라인에서 나온다면, 그 스킬의 마지막 단계에 "완료 후 SNS 배포 스킬 실행 여부를 물어본다"를 추가하면 두 공장이 이어집니다.

## 문제 대응

| 문제 | 처방 |
|---|---|
| 채널 토큰 만료 (한 달에 한 번쯤) | 스케줄러에서 재연결. 스킬 0단계에 "채널 연결 상태 확인" 추가 |
| API 정책 변경으로 채널 하나가 막힘 | 그 채널만 clip.py로. 규칙은 유지 |
| 반응이 전반적으로 떨어짐 | 후크 패턴이 굳었을 가능성. VOICE.md에 "최근 4주 쓴 후크 패턴 회피" 추가 |
| 채널이 너무 많아 답글이 밀림 | 채널을 줄이세요. 답글 없는 채널은 자동화해도 죽습니다 |

## 이 과정을 마치며

- `sns-factory/` — channels.json, VOICE.md, 카드 템플릿, render/clip 스크립트, 스킬. 계정이 바뀌어도 그대로
- 세 군데 체크포인트와 **손으로 하는 답글**
- 데이터로 규칙을 고치는 월 1회 순환

## 마지막 체크리스트

- [ ] 스킬 파일에 4단계와 ⏸ 3곳이 있다
- [ ] "배포해줘" 한 줄로 두 번째 원본을 예약까지 했다
- [ ] 첫 리포트를 만들었다
- [ ] 주간 루틴을 캘린더에 넣었다

수고하셨습니다. 이제 **만드는 데 쓰던 시간을 대화에 쓸 수 있습니다** — 그게 SNS가 자라는 방식입니다.

## 다음 강의

8강, Facebook 페이지(Graph API)와 Threads(Threads API)를 스케줄러 없이 직접 연동합니다. 개인 프로필은 Aside 브라우저로.
