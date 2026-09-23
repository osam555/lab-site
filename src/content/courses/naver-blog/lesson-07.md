---
number: 7
title: 스킬 저장과 주 3편 운영
subtitle: 키워드 하나로 임시저장까지
goal: 3~6강 전 과정을 체크포인트가 있는 스킬로 저장하고, 주 3편 루틴과 통계 확인·갱신·저품질 대응 방법을 정합니다.
minutes: 40
part: 3부 · 자동화와 운영
---

## 스킬로 저장

<div class="prompt-box not-prose" data-prompt="7-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 7-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

3강부터 6강까지 한 글 제작 과정을 '네이버 블로그 글 제작 스킬'로 저장해줘. 사용자가 키워드나 캘린더의 가제를 말하면 실행되게.

</div>
</div>

만들어진 `.claude/skills/…` 파일을 열고 아래 구조가 있는지 확인·보강합니다.

```markdown
# 네이버 블로그 글 제작

사용자가 "OOO 글 써줘" 또는 캘린더의 항목을 말하면:

## 0. 준비
- keywords/calendar-*.md에서 해당 항목 확인, posts/YYYY-MM-슬러그/ 준비
- meta.json status → "in_progress"

## 1. 리서치 (4강)
- 출처 URL 필수, 상위 10개 소제목 구조, 진짜 질문 5개, 빈틈 2개 → research.md

## 2. 초안 (4강)
- VOICE.md 문체, [내 경험] 2곳 이상, [사진] 5~7곳, 출처 번호 → draft.md
- ⏸ 사용자가 [내 경험]을 채울 때까지 대기. 채워지면 문체만 다듬고 AI 티 검사표 출력
- ⏸ 사용자 사실 확인 후 final.md

## 3. 준비물 (5강)
- images/ 정리·축소·EXIF 제거, 사진 설명, 썸네일(scripts/thumb.py), 제목 3안, 태그 10, 요약 → meta.json
- ⏸ 사용자가 제목 선택
- editor.md 변환

## 4. 에디터 입력 (6강)
- scripts/fill-editor.md 절차대로 입력, 임시저장까지
- ⏸ 사용자 확인·발행. **발행 버튼은 누르지 않는다**
- 발행 후 meta.json 갱신

## 규칙
- 하루 1편까지만 에디터 입력
- ⏸ 에서는 반드시 멈춘다
- 실패한 단계만 재시도
```

체크포인트는 네 곳: **경험 채우기, 사실 확인, 제목 선택, 발행.** 이 넷은 자동화하지 않습니다.

## 두 번째 글

새 대화에서:

<div class="prompt-box not-prose" data-prompt="7-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 7-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

캘린더 1월 8일 "릴렉스체어 vs 로우체어" 써줘.

</div>
</div>

체크포인트마다 여러분이 개입하고, 나머지는 흘러갑니다. 첫 글이 이틀 걸렸다면 두 번째는 **40분**(경험 쓰는 15분 포함)입니다.

## 주 3편 루틴

| 요일 | 할 일 | 시간 |
|---|---|---|
| 일 | 다음 주 3편의 사진 찍기/모으기 | 30분 |
| 월·수·금 오전 | 스킬 실행 → 경험 채우기 → 사실 확인 → 제목 → 임시저장 확인 → 발행(또는 예약) | 각 40분 |
| 매일 저녁 | 댓글·이웃 답글 | 10분 |
| 토 | 블로그 통계 확인, 다음 달 캘린더 조정 | 20분 |

주 3편이 벅차면 2편으로. **꾸준함이 편수보다 중요합니다.**

## 통계 보는 법

blog.naver.com → 내 블로그 → 통계.

- **유입 키워드**: 내가 노린 키워드로 들어오는가. 다른 키워드로 들어온다면 그 키워드로 다음 글을
- **평균 사용 시간**: 1분 미만인 글은 앞부분이 약한 것. 첫 단락과 첫 사진을 손봅니다
- **유입 경로**: 검색 비율이 오르면 신뢰도가 쌓이는 중

월 1회 Claude에게:

<div class="prompt-box not-prose" data-prompt="7-3" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 7-3</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

통계 화면 캡처야. 유입 키워드 상위 10개와 사용 시간이 낮은 글 3개를 보고, 다음 달 캘린더에서 바꿀 것을 제안해줘.

</div>
</div>

## 오래된 글 갱신

발행 3개월 지난 글 중 유입이 있는 글은 **갱신이 새 글보다 효율이 좋습니다.**

<div class="prompt-box not-prose" data-prompt="7-4" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 7-4</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

posts/에서 published 3개월 이상이고 meta.json에 유입 기록이 있는 글 목록을 보여줘. 각각 갱신할 항목(가격 변동, 새 제품, 계절 정보)을 research 다시 해서 제안해줘.

</div>
</div>

갱신도 에디터 자동 입력 → 확인 → **수정 발행**은 손으로.

## 저품질 징후와 대응

이런 신호가 보이면 멈추고 점검합니다.

- 새 글이 발행 24시간 후에도 제목 검색으로 안 나옴
- 검색 유입이 갑자기 0에 가까워짐

점검 순서: ① 최근 2주 발행 간격이 기계적이지 않았나 ② 경험 없이 나간 글이 있나 ③ 분야 밖 글이 섞였나 ④ 사진이 다른 곳에서 가져온 것뿐인 글이 있나. 해당 글은 비공개로 돌리고, 2주간 **경험 비중을 높인 글**만 주 2편으로.

자동화 자체가 문제가 아니라, **자동화로 생긴 여유를 경험에 쓰지 않은 것**이 문제입니다.

## 이 과정을 마치며

- `naver-blog-factory/` — VOICE.md, 30개 캘린더, thumb 템플릿, fill-editor 절차, 스킬. 분야를 바꿔도 그대로
- 네 군데 체크포인트 — 경험, 사실, 제목, 발행
- 첫 글 3편과 주 3편 루틴

## 마지막 체크리스트

- [ ] 스킬 파일에 4단계와 ⏸ 4곳이 있다
- [ ] 캘린더 항목 한 줄로 두 번째 글을 임시저장까지 만들었다
- [ ] 3편을 발행했다 (내 손으로)
- [ ] 주 3편 루틴을 캘린더에 넣었다

수고하셨습니다. 이제 **준비는 5분, 경험은 15분, 발행은 내 손으로** — 그 리듬이 여러분 블로그를 키웁니다.
