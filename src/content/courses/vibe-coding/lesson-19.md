---
number: 19
title: 자동화
subtitle: 반복 작업을 AI에게 맡기기
goal: 프로젝트 안팎의 반복 작업을 찾아 스크립트·예약 작업·AI 스킬 세 가지 방법으로 자동화합니다.
minutes: 45
part: 4부 · 세상에 내놓기
---

## 두 번 했으면 자동화 후보입니다

18일 동안 여러분은 같은 일을 여러 번 했습니다.

- 커밋 메시지 쓰기
- 배포 전 `npm run build` 돌리고 에러 고치기
- Supabase 테이블 열어 데이터 확인
- 새 화면 만들 때 DESIGN.md 규칙 다시 말하기

그리고 서비스 자체에도 반복이 있습니다.

- 매일 아침 사용자에게 추천 메뉴 보내기
- 일주일 지난 임시 데이터 정리
- 새 가입자에게 환영 메일

자동화는 **세 가지 도구**로 대부분 해결됩니다.

## 도구 1: 스크립트 — 명령 한 줄로 묶기

`package.json`의 `scripts`(자주 쓰는 명령에 붙이는 이름표 목록)에 자주 하는 명령을 등록하면 `npm run 이름`으로 실행됩니다.

<div class="prompt-box not-prose" data-prompt="19-1" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 19-1</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

"package.json scripts에 'check' 명령을 추가해줘. lint(코드 모양·실수 검사) → 타입 검사 → build를 순서대로 실행하고, 하나라도 실패하면 멈추게."

</div>
</div>

이제 push 전에 Code 탭에 "check 실행해줘"(터미널이면 `npm run check` 한 줄). 16강의 "빌드 통과 확인"이 자동입니다.

**확인:** package.json의 scripts에 `check`가 보이고, 실행하면 세 단계가 차례로 돌고 마지막에 통과 메시지가 나옵니다. (커밋 전에 자동으로 돌리는 방법은 아래 "더 해보기"에 있습니다.)

## 도구 2: 예약 작업 — 정해진 시간에 서버가 알아서

"매일 아침 8시에 추천 메뉴 보내기" 같은 것은 **크론(cron)** 이라는 예약 작업입니다. Vercel은 `vercel.json`에 적으면 정해진 시간에 내 서버 라우트를 호출해줍니다. 실습은 "더 해보기"에 있습니다.

Supabase에도 `pg_cron`이라는 데이터베이스 안 예약 기능이 있습니다. "일주일 지난 데이터 삭제"처럼 데이터베이스만 관련된 작업은 이쪽이 간단합니다.

## 도구 3: AI 스킬 — AI에게 반복 작업 매뉴얼 주기

9강의 CLAUDE.md가 "항상 지킬 규칙"이라면, **스킬**은 "이 작업은 이 순서로"라는 매뉴얼입니다. 프로젝트에 `.claude/skills/` 같은 폴더를 만들고 작업별 마크다운을 둡니다. (도구마다 폴더 이름은 다르지만 개념은 같습니다.)

예: `새 화면 만들기` 스킬

```markdown
# 새 화면 만들기

사용자가 "OOO 화면 만들어줘"라고 하면:
1. PLAN.md와 DESIGN.md를 읽는다
2. src/app/OOO/page.tsx를 만든다
3. layout.tsx 헤더에 링크를 추가한다
4. 로그인이 필요한 화면이면 로그인 확인 코드를 넣는다
5. 빈 상태와 로딩 상태를 포함한다
6. 폰 너비에서 확인할 항목을 알려준다
```

이후 "통계 화면 만들어줘" 한 마디면 여섯 단계가 자동으로 지켜집니다. 18일 동안 반복해서 말한 것들이 있다면 전부 스킬 후보입니다.

<div class="prompt-box not-prose" data-prompt="19-4" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 19-4</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

"내가 이 과정에서 가장 많이 반복한 요청을 .claude/skills/ 아래 스킬(SKILL.md, 맨 위에 name과 description)로 만들어줘. 위 '새 화면 만들기' 예시처럼 번호 단계로 써줘. 어떤 요청으로 할지는 먼저 3개 후보를 보여주고 내가 고를게."

</div>
</div>

**확인:** 후보 3개를 먼저 보여주는지 보세요. 하나를 고르면 `.claude/skills/…/SKILL.md`가 생기고, **새 대화**에서 그 요청을 말하면 번호 단계대로 일하는지 지켜봅니다.

## 따라하기: 내 자동화 2개

1. **`npm run check`** 스크립트 (도구 1) — 10분
2. **가장 자주 반복한 요청 하나를 스킬로** (도구 3) — 15분

(도구 2 크론은 서버·비밀값이 얽혀 있어 "더 해보기"로 뒀습니다.) 각각 커밋하고, 스킬은 만든 뒤 새 대화에서 실제로 불러 써보세요.

::: practice
- [ ] package.json에 `check`가 있고, 실행하니 lint → 타입 검사 → build가 차례로 돌았다
- [ ] `.claude/skills/` 아래 스킬 파일이 VS Code 탐색기에 보인다
- [ ] 새 대화에서 그 요청을 말했더니 스킬의 번호 단계대로 일했다
:::

## 자동화하지 말 것

- **한 번만 할 일**: 자동화하는 시간이 더 듭니다.
- **판단이 필요한 일**: "이 피드백을 반영할지"는 여러분 일입니다.
- **돈이 나가는 일의 무한 반복**: AI API를 크론으로 돌릴 때는 반드시 실행 횟수와 예산 상한을 확인하세요.

## 오늘의 체크리스트

직접 해보고 **눈으로 확인한 것만** 체크하세요.

::: practice
- [ ] `npm run check`가 통과 메시지까지 돈다
- [ ] 스킬 하나를 만들어 새 대화에서 써봤다
- [ ] 서비스 안의 반복 작업 하나가 TODO.md에 조각으로 있다
- [ ] (선택) 크론 라우트를 만들고 Vercel에서 실행 기록을 확인했다
:::

## 더 해보기(선택)

본 과정에 꼭 필요하지 않은 심화입니다. 시간이 남거나 더 궁금할 때 해보세요.

### 크론 실습: 매일 아침 8시에 자동 실행

<div class="prompt-box not-prose" data-prompt="19-3" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 19-3</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

"매일 아침 8시(KST)에 실행되는 Vercel Cron을 추가해줘.
- src/app/api/cron/daily/route.ts를 만들고
- CRON_SECRET 환경변수로 외부 호출을 막고
- 지금은 '실행됨' 로그만 남기게. 실제 동작은 다음에 붙일게.
vercel.json 설정과 Vercel에서 확인하는 방법을 알려줘."

</div>
</div>

**확인:** Vercel → 프로젝트 → Settings → Cron Jobs에 항목이 보입니다. 실행 기록은 Logs에서 "실행됨" 문구로 확인합니다.

### 커밋 전에 자동 점검 (git hook)

git hook(커밋 같은 순간에 자동 실행되는 작업)을 걸어 둘 수 있습니다.

<div class="prompt-box not-prose" data-prompt="19-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 19-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

"커밋할 때 자동으로 npm run check가 돌게 git hook을 설정해줘. husky 설치를 허락할게."

</div>
</div>

**확인:** 일부러 에러가 나는 코드로 커밋을 시도하면 막히고, 고친 뒤에는 커밋이 됩니다.

## 다음 강의

마지막 20강. 앱스토어 없이, 폰 홈 화면에 설치되는 앱으로 만듭니다.
