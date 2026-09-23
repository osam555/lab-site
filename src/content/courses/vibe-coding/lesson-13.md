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

브라우저는 **내 서버**에만 말하고, 비밀 키는 **내 서버**만 압니다. Next.js에서는 `src/app/api/.../route.ts` 파일이 이 "내 서버 라우트"입니다.

## 따라하기 1: API 키 준비

AI API를 쓸 거라면 해당 회사(Anthropic, OpenAI 등)의 개발자 콘솔에서 API 키를 발급받습니다. 소액 결제 등록이 필요할 수 있습니다. 예산 상한을 꼭 걸어두세요 (월 5달러면 이 과정 내내 충분합니다).

`.env.local`에 추가:

```
AI_API_KEY=sk-...
```

**`NEXT_PUBLIC_` 접두사가 없다는 점**이 핵심입니다. 이 접두사가 없는 변수는 브라우저로 절대 나가지 않습니다.

> AI API 대신 무료 공개 API(공공데이터, 날씨, 환율 등)로 연습해도 좋습니다. 구조는 같습니다.

## 따라하기 2: 서버 라우트 만들기

<div class="prompt-box not-prose" data-prompt="13-1" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 13-1</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

"src/app/api/recommend/route.ts를 만들어줘.
- POST로 { ingredients: string[] }를 받는다
- process.env.AI_API_KEY로 [사용할 AI API]를 호출해서 '이 재료로 만들 수 있는 저녁 메뉴 3개를 JSON 배열로. 각 항목은 name, description(한 줄), time(분)' 을 요청한다
- 응답을 파싱해서 { menus: [...] }로 반환한다
- 재료가 비었거나 API가 실패하면 상태코드 400/500과 { error: '메시지' }를 반환한다
- 키는 절대 클라이언트로 보내지 않는다
다른 파일은 건드리지 말고, 터미널에서 curl로 테스트하는 명령을 알려줘."

</div>
</div>

AI가 알려준 curl 명령으로 터미널에서 먼저 테스트합니다. 화면과 분리해서 서버만 확인하는 습관입니다.

## 따라하기 3: 화면에 연결

<div class="prompt-box not-prose" data-prompt="13-2" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 13-2</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

"'추천받기' 버튼을 누르면 가짜 데이터 대신 /api/recommend를 POST로 호출하고, 응답의 menus를 카드로 보여줘. 호출 중에는 버튼을 비활성화하고 '추천 중…' 표시. 실패하면 빨간 글씨로 에러 메시지."

</div>
</div>

확인 → 커밋 → push → Vercel 환경변수에 `AI_API_KEY` 추가 → Redeploy → 폰에서 확인.

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

- **401 Unauthorized**: 키가 틀렸거나 `.env.local` 수정 후 `npm run dev`를 재시작 안 함
- **CORS 에러**: 브라우저에서 외부 API를 직접 불렀다는 뜻. 서버 라우트를 거치게 고치세요.
- **응답 파싱 실패**: AI API가 JSON 앞뒤에 말을 붙임. "응답에서 JSON 부분만 추출하도록 고쳐줘".
- **배포에서만 실패**: Vercel 환경변수 누락. 12강 참고.

## 오늘의 체크리스트

- [ ] 브라우저 → 내 서버 → 외부 API 구조를 그림으로 그릴 수 있다
- [ ] `NEXT_PUBLIC_` 유무의 차이를 설명할 수 있다
- [ ] curl로 서버 라우트를 테스트해봤다
- [ ] 화면에서 진짜 응답이 보이고, 배포 주소에서도 동작한다

## 다음 강의

14강, 로그인. "내 메뉴"가 진짜 "내" 메뉴가 되게.
