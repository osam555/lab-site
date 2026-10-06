---
number: 10
title: 블로그 자동화 — 티스토리 & 통합 파이프라인
subtitle: 티스토리 자동 포스팅 + 모든 채널을 한 번에 배포하는 마스터 파이프라인
goal: 티스토리에 자동 포스팅하는 방법을 익히고, 블로그 글 하나를 네이버·티스토리·SNS 전 채널에 배포하는 통합 파이프라인을 완성합니다.
minutes: 55
part: 4부 · 블로그 자동화
---

## 티스토리 자동 포스팅

티스토리는 API를 제공하므로 Playwright보다 안정적인 자동화가 가능합니다.

### 방법 1 — Tistory API (권장)

> **용어 풀이** API = 프로그램끼리 주고받는 창구, Client ID·Secret = 그 창구를 쓰는 내 신분증 같은 값입니다. **Secret은 채팅·캡처·공개 저장소에 노출하지 말고** 프로젝트의 `.env` 같은 비밀 파일에 둡니다.

1. [tistory.com/guide/api](https://tistory.com/guide/api) → 앱 등록 → Client ID·Secret 발급
2. Claude Code에게:

<div class="prompt-box not-prose" data-prompt="10-1" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 10-1</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

티스토리 API를 사용해서 블로그에 글을 자동으로 발행하는 스크립트를 만들어줘.
Client ID: [발급한 ID]
Blog 주소: [내 블로그 주소]

스크립트가 받는 인자:
- 제목
- 본문 (HTML 또는 마크다운)
- 태그 (쉼표 구분)
- 공개 여부 (0=비공개, 3=공개, 기본값: 0으로 임시저장)

사용 예: node post-tistory.js "제목" content.md "태그1,태그2"

</div>
</div>

<div class="prompt-box not-prose" data-prompt="10-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 10-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

실제로 테스트 글 하나를 비공개로 올려줘.

</div>
</div>

Code 탭에서는 위처럼 "테스트 글 올려줘"라고만 하면 됩니다. 스크립트 실행 권한 요청이 뜨면 명령을 읽고 수락하세요.

#### 터미널로도 할 수 있어요

스크립트가 만들어진 뒤에는 터미널에서 직접 실행할 수도 있습니다.

```bash
node post-tistory.js "제목" content.md "태그1,태그2"
```

### 방법 2 — Computer Use (API 없을 때)

1. Aside 브라우저: `https://[내블로그].tistory.com/manage/post` → 로그인
2. 대화창:

<div class="prompt-box not-prose" data-prompt="10-3" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 10-3</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Computer Use로 티스토리 글쓰기 화면에서 초안을 입력해줘.
제목, 본문, 태그를 채우고 임시저장.

</div>
</div>

---

## 통합 파이프라인 — 콘텐츠 원클릭 배포

글 하나를 모든 채널에 배포합니다.

### 파이프라인 파일 만들기

한 번에 8단계를 만들면 어디서 틀렸는지 찾기 어렵습니다. **1단계 — 블로그 쪽(1~4단계)만 먼저** 만들어 실행해 보세요.

<div class="prompt-box not-prose" data-prompt="10-4a" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 10-4a</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

deploy-content.md를 만들어줘. 아래 1~4단계만 먼저 적어줘. 각 단계 끝에 "내가 확인할 것"을 한 줄씩 붙여줘.
1. blog-drafts/[파일명].md 읽기
2. 각 채널용 텍스트 변환 (sns-rules.md 참고)
3. 인스타용 이미지 카드 생성
4. 네이버 블로그 에디터 자동 입력 (임시저장)

</div>
</div>

1~4단계가 의도대로 되는 것을 확인했다면, **2단계 — 아래 프롬프트로 나머지(5~8단계)를 이어 붙여 완성**합니다.

<div class="prompt-box not-prose" data-prompt="10-4" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 10-4</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

deploy-content.md 파일을 만들어줘. 이 파일을 Claude Code에게 보여주면 아래 순서로 자동 실행하는 루틴이야:

1. blog-drafts/[파일명].md 읽기
2. 각 채널용 텍스트 변환 (sns-rules.md 참고)
3. 인스타용 이미지 카드 생성
4. 네이버 블로그 에디터 자동 입력 (임시저장)
5. 티스토리 API로 비공개 발행
6. 크리에이터 스튜디오에서 인스타 예약 (내일 11시)
7. 카카오채널 예약 (내일 10시)
8. X·스레드 텍스트를 클립보드에 복사

각 단계 완료 후 체크리스트를 보여줘.

</div>
</div>

### 실행 방법

이제 매번 이렇게만 하면 됩니다:

<div class="prompt-box not-prose" data-prompt="10-5" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 10-5</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

deploy-content.md 루틴을 실행해줘. 배포할 파일: blog-drafts/2024-12-신메뉴출시.md

</div>
</div>

---

## 저품질 방지 체크리스트

자동화로 인한 네이버 블로그 저품질을 막는 규칙:

> [!CAUTION]
> **자동화는 보조 도구입니다.** 사람이 읽고 검토해야 합니다.

| 규칙 | 이유 |
|---|---|
| 발행 버튼은 사람이 | 내용 확인 없이 대량 발행 시 저품질 위험 |
| 주 1~2편 이상 올리지 않기 | 급격한 포스팅 증가는 의심 신호 |
| 초안을 그대로 발행하지 않기 | 반드시 읽고 개인 경험 한 문단 추가 |
| 이미지는 직접 찍은 것 혼용 | 스톡 사진만 쓰면 저품질 위험 |
| 다른 블로그 복사 금지 | 당연한 이야기지만 강조 |

---

## 완성된 주간 자동화 루틴 (총 40분)

```
화요일 오전:
  ├─ 10분: MCP 키워드 선정 + 리서치
  ├─ 10분: Claude Code 초안 작성
  ├─ 10분: 초안 검토·수정·이미지 준비
  ├─  5분: 파이프라인 실행 (에디터 자동 입력 + SNS 예약)
  └─  5분: 네이버·티스토리 임시저장 글 최종 확인 후 발행

목요일, 토요일:
  └─  5분: X·스레드 예약된 것 확인, 필요 시 수정
```

---

::: practice
**실습 미션 — 티스토리 테스트 글(비공개) + 1~4단계 파이프라인**

- [ ] 티스토리(또는 사용 중인 블로그)에 **비공개** 테스트 글 1개를 올렸고, 블로그 관리 화면에서 글이 보이는지 확인했다
- [ ] Secret·키 값이 채팅이나 코드 파일에 노출되지 않았다
- [ ] `deploy-content.md` 1~4단계를 만들고 실행해, 결과(이미지 카드·임시저장 글)를 **눈으로 확인**했다
- [ ] 저품질 방지 표의 5가지 규칙 중 지금 내가 어기고 있는 것이 없는지 점검했다
- [ ] (선택) 5~8단계(티스토리·SNS 예약)까지 이어 붙여 한 번 실행했다 — 예약 확정 전에 내가 확인했다
:::

---

## 오늘의 체크리스트

- [ ] 티스토리 API 스크립트로 테스트 글을 비공개 발행했다
- [ ] deploy-content.md 파이프라인 파일을 만들었다
- [ ] 원본 글 하나를 파이프라인으로 모든 채널에 배포했다
- [ ] 주간 루틴 시간표를 캘린더에 등록했다
