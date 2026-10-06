---
number: 13
title: API 연동
subtitle: 외부 서비스 붙이기
goal: 외부 API를 부르는 구조를 이해하고, 서버 라우트를 통해 AI API(또는 다른 공개 API)를 내 서비스에 연결합니다.
minutes: 50
part: 3부 · 만들기
---

## API는 남의 주방에 주문하는 것

2강의 식당 비유로 돌아갑니다. 우리 식당(서비스)에서 못 만드는 요리가 있으면 옆 식당에 주문합니다. 날씨는 기상청에, 지도는 지도 회사에, "메뉴 추천"은 AI 회사에.

**API 호출 = 주소(URL)로 요청을 보내고 JSON으로 응답을 받는 것.** 그게 전부입니다.

## 절대 규칙: API 키는 브라우저에 두지 않습니다

12강의 Supabase `anon` 키는 브라우저에 노출되어도 되게 설계된 키입니다. 하지만 **AI API 키, 결제 API 키** 같은 것은 다릅니다. 브라우저 코드에 있으면 누구나 F12로 꺼내 여러분 돈으로 마음껏 씁니다.

그래서 구조가 이렇게 됩니다.

```
브라우저 ──(재료 목록)──▶ 내 서버 라우트 ──(재료 + 비밀 키)──▶ AI API
브라우저 ◀──(메뉴 3개)── 내 서버 라우트 ◀──(추천 결과)──── AI API
```

브라우저는 **내 서버**에만 말하고, 비밀 키는 **내 서버**만 압니다. Next.js에서는 `src/app/api/.../route.ts` 파일이 이 "내 서버 라우트"(주소 하나를 맡아 처리하는 서버 쪽 파일)입니다.

## 따라하기 1: API 키 준비

AI API를 쓸 거라면 해당 회사(Anthropic, OpenAI 등)의 개발자 콘솔에서 API 키를 발급받습니다. 소액 결제 등록이 필요할 수 있습니다. 예산 상한을 꼭 걸어두세요 (월 5달러면 이 과정 내내 충분합니다).

`.env.local`에 추가:

```
AI_API_KEY=sk-...
```

**`NEXT_PUBLIC_` 접두사가 없다는 점**이 핵심입니다. 이 접두사가 없는 변수는 브라우저로 절대 나가지 않습니다.

> AI API 대신 무료 공개 API(공공데이터, 날씨, 환율 등)로 연습해도 좋습니다. 구조는 같습니다.

## 따라하기 2: 서버 라우트 만들기

서버 라우트를 **두 단계**로 만듭니다. 먼저 가짜 답을 돌려주는 뼈대, 그 다음 진짜 API 호출입니다. 문제가 생기면 어느 단계 탓인지 바로 알 수 있습니다.

**단계 1: 가짜 답을 돌려주는 라우트**

<div class="prompt-box not-prose" data-prompt="13-1" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 13-1</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

"src/app/api/recommend/route.ts를 만들어줘. POST로 { ingredients: string[] }를 받고, 재료가 비었으면 상태코드 400과 { error: '재료를 입력하세요' }를 반환해. 아직 AI API는 부르지 말고, 재료가 있으면 고정된 메뉴 3개를 { menus: [{ name, description, time }] } 형태로 반환해. 다른 파일은 건드리지 말고, 이 라우트를 curl(터미널에서 주소로 요청을 보내보는 명령)로 테스트하는 방법을 알려줘."

</div>
</div>

**확인:** 개발 서버를 켜고 테스트하면 고정 메뉴 3개가 JSON으로 나오고, 재료를 비우면 400 에러가 나옵니다.

**단계 2: 진짜 AI API 호출로 바꾸기**

<div class="prompt-box not-prose" data-prompt="13-1a" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 13-1a</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

"@src/app/api/recommend/route.ts 고정 메뉴 대신 process.env.AI_API_KEY로 [사용할 AI API]를 호출해서 '이 재료로 만들 수 있는 저녁 메뉴 3개를 JSON 배열로. 각 항목은 name, description(한 줄), time(분)'을 요청하고, 응답을 파싱(해석)해서 { menus: [...] }로 반환해줘. API가 실패하면 상태코드 500과 { error: '메시지' }를 반환해. 키는 절대 클라이언트로 보내지 마. 이 파일만 고쳐줘."

</div>
</div>

단계마다 Code 탭에서 "개발 서버를 켜고, 방금 만든 라우트를 직접 호출해서 결과를 보여줘"라고 시키면 Claude가 테스트까지 실행해 줍니다. 실행할 명령을 읽고 수락하세요. 화면과 분리해서 서버만 확인하는 습관입니다.

### 터미널로도 할 수 있어요

AI가 알려준 curl 명령을 터미널에 붙여넣어 먼저 테스트합니다.

## 따라하기 3: 화면에 연결

<div class="prompt-box not-prose" data-prompt="13-2" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 13-2</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

"'추천받기' 버튼을 누르면 가짜 데이터 대신 /api/recommend를 POST로 호출하고, 응답의 menus를 카드로 보여줘. 호출 중에는 버튼을 비활성화하고 '추천 중…' 표시. 실패하면 빨간 글씨로 에러 메시지."

</div>
</div>

확인 → 커밋 → push → Vercel 환경변수에 `AI_API_KEY` 추가 → Redeploy → 폰에서 확인.

::: practice
- [ ] 브라우저에서 재료를 넣고 추천받기를 누르면 **진짜 AI가 만든** 메뉴 카드가 보인다
- [ ] 호출 중에는 버튼이 비활성화되고 "추천 중…"이 보인다
- [ ] 재료를 비우거나 API 키를 일부러 틀리게 하면 화면에 빨간 에러 문구가 보인다 (확인 뒤 키를 되돌렸다)
- [ ] F12 → Network 탭에서 `recommend` 요청을 눌러 봐도 응답에 **API 키가 없다**
:::

## 응답을 읽는 법

API가 주는 JSON은 이렇게 생겼습니다.

```json
{
  "menus": [
    { "name": "김치볶음밥", "description": "남은 김치와 밥으로 10분", "time": 10 },
    { "name": "계란말이", "description": "계란 3개면 충분", "time": 15 }
  ]
}
```

`{ }`는 묶음, `[ ]`는 목록, `"이름": 값`은 한 칸. 엑셀 표를 글자로 쓴 거라고 보면 됩니다. AI가 "응답 구조가 이렇다"고 보여주면 여기서 무엇을 화면에 쓸지 결정하면 됩니다.

## 자주 생기는 문제

- **401 Unauthorized**: 키가 틀렸거나 `.env.local` 수정 후 개발 서버(`npm run dev`)를 재시작 안 함. Code 탭에서 "개발 서버 다시 시작해줘"라고 하세요.
- **CORS 에러**: 브라우저에서 외부 API를 직접 불렀다는 뜻. 서버 라우트를 거치게 고치세요.
- **응답 파싱 실패**: AI API가 JSON 앞뒤에 말을 붙임. "응답에서 JSON 부분만 추출하도록 고쳐줘".
- **배포에서만 실패**: Vercel 환경변수 누락. 12강 참고.

## 오늘의 체크리스트

직접 해보고 **눈으로 확인한 것만** 체크하세요.

::: practice
- [ ] 브라우저 → 내 서버 → 외부 API 구조를 종이에 그려 설명할 수 있다
- [ ] `NEXT_PUBLIC_`가 있는 변수와 없는 변수의 차이를 한 줄로 말할 수 있다
- [ ] curl(또는 Code 탭 호출)로 서버 라우트만 따로 테스트해 JSON이 나오는 것을 봤다
- [ ] 배포 주소에서도 추천 결과가 나온다
:::

## 다음 강의

14강, 로그인. "내 메뉴"가 진짜 "내" 메뉴가 되게.
