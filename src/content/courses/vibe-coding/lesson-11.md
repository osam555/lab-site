---
number: 11
title: 프론트엔드 기초
subtitle: 화면 만들기
goal: 컴포넌트, 상태, 이벤트라는 세 개념으로 화면이 어떻게 움직이는지 이해하고, TODO.md의 화면 조각 2개를 완성합니다.
minutes: 45
part: 3부 · 만들기
---

## 화면은 세 가지로 움직입니다

AI가 만들어주는 화면 코드를 읽으려면 세 단어만 알면 됩니다.

### 1. 컴포넌트 — 레고 블록 (화면의 재사용 조각)
화면은 작은 블록의 조합입니다. `<Header />`, `<IngredientInput />`, `<MenuCard />`. 블록 하나는 파일 하나이고, 큰 화면은 블록을 쌓아 만듭니다.

```tsx
// src/app/page.tsx — 페이지는 블록의 조합
<main>
  <Header />
  <IngredientInput />
  <MenuList />
</main>
```

### 2. 상태(state) — 지금 기억하고 있는 값
"입력창에 뭐가 적혀 있는지", "재료 목록에 뭐가 있는지", "로딩 중인지". 화면이 기억하는 값이 **상태**이고, 상태가 바뀌면 화면이 자동으로 다시 그려집니다.

```tsx
const [ingredients, setIngredients] = useState<string[]>([]);
//     ↑ 현재 값        ↑ 값을 바꾸는 함수
```

AI 코드에서 `useState`가 보이면 "아, 여기서 뭔가를 기억하는구나"라고 읽으면 됩니다.

### 3. 이벤트 — 사용자가 한 행동
클릭, 입력, 스크롤. 이벤트가 일어나면 상태를 바꾸고, 상태가 바뀌면 화면이 바뀝니다.

```tsx
<button onClick={() => setIngredients([...ingredients, input])}>추가</button>
//      ↑ 클릭하면          ↑ 상태를 바꾼다
```

**이벤트 → 상태 변경 → 화면 갱신.** 모든 웹 화면은 이 순환입니다.

## 폴더 구조: 어디에 뭐가 있나

```
src/
├─ app/
│  ├─ page.tsx        ← 첫 화면 (/)
│  ├─ layout.tsx      ← 모든 화면의 공통 틀 (헤더, 푸터)
│  └─ menus/
│     └─ page.tsx     ← /menus 화면
└─ components/
   ├─ IngredientInput.tsx
   └─ MenuCard.tsx
```

`app/` 안의 폴더 이름이 곧 주소입니다. `app/menus/page.tsx`를 만들면 `/menus`가 생깁니다. AI에게 "새 화면 만들어줘"라고 하면 여기에 폴더를 만듭니다.

## 따라하기: 화면 조각 만들기

TODO.md에서 "화면만, 가짜 데이터" 조각을 하나 고르세요. 긴 요청 하나 대신 **3단계로 나눠** 보냅니다. 한 단계가 끝나면 브라우저에서 확인하고 다음으로 갑니다. 예시:

**단계 1: 입력창과 추가 버튼**

<div class="prompt-box not-prose" data-prompt="11-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 11-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

"IngredientInput 컴포넌트를 src/components/에 만들어줘. 입력창과 '추가' 버튼만. 추가를 누르면 입력한 재료가 입력창 아래에 한 줄씩 쌓여. 상태는 이 컴포넌트 안에서 useState로 관리하고, page.tsx에 배치해줘. 다른 파일은 건드리지 마. 완료 후 확인 방법 3단계."

</div>
</div>

**확인:** 브라우저에서 재료를 두 개 입력해 추가하면 아래에 두 줄이 쌓입니다.

**단계 2: 칩과 삭제 버튼**

<div class="prompt-box not-prose" data-prompt="11-1a" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 11-1a</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

"@src/components/IngredientInput.tsx 쌓인 재료를 칩(둥근 태그) 모양으로 바꾸고, 각 칩에 × 삭제 버튼을 달아줘. × 를 누르면 그 재료만 사라져야 해. 이 파일만 고쳐줘."

</div>
</div>

**확인:** 칩이 둥근 태그 모양으로 보이고, × 를 누른 재료만 사라집니다.

**단계 3: 실수 막기**

<div class="prompt-box not-prose" data-prompt="11-1b" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 11-1b</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

"@src/components/IngredientInput.tsx Enter 키로도 추가되게 하고, 빈 문자열과 중복된 재료는 추가되지 않게 해줘. 이 파일만 고쳐줘."

</div>
</div>

**확인:** 아무것도 안 쓰고 추가 → 변화 없음 / 같은 재료 두 번 → 한 번만 들어감 / Enter로 추가됨.

각 단계가 되면 커밋합니다. 두 번째 화면 조각(예: 가짜 메뉴 3개를 카드로 보여주기)도 같은 리듬으로 하세요.

::: practice
- [ ] 단계 1·2·3 결과를 브라우저에서 각각 눈으로 확인했다
- [ ] 재료를 추가·삭제하는 것을 직접 눌러봤다
- [ ] 배포된 `.vercel.app` 주소에서도 같은 동작이 된다
:::

## 코드를 읽는 법

AI가 만든 파일을 열고 이것만 찾아보세요.

- `useState`가 몇 개인가? → 이 컴포넌트가 기억하는 값의 개수
- `onClick`, `onChange`, `onSubmit`이 어디 있나? → 사용자 행동에 반응하는 곳
- `return (` 아래가 실제 화면 모양

전부 이해할 필요 없습니다. **"어디에 뭐가 있는지"** 만 알면 "삭제 버튼을 왼쪽으로 옮겨줘" 같은 요청을 정확한 위치로 보낼 수 있습니다.

## 자주 생기는 문제

- **화면이 하얗게 됨**: 브라우저에서 `F12` → Console 탭의 빨간 에러를 복사해 AI에게. 15강에서 자세히.
- **`"use client"` 에러**: 버튼 클릭 같은 동작이 있는 컴포넌트는 파일 맨 위에 `"use client"`가 필요합니다. AI에게 에러를 보여주면 바로 고칩니다.
- **스타일이 안 먹음**: Tailwind 클래스 오타. "이 컴포넌트 스타일이 안 보여, 확인해줘".

## 오늘의 체크리스트

직접 해보고 **눈으로 확인한 것만** 체크하세요.

::: practice
- [ ] 컴포넌트 / 상태 / 이벤트를 한 줄씩 설명할 수 있다
- [ ] AI가 만든 컴포넌트 파일에서 `useState`와 `onClick`을 직접 찾아 손가락으로 짚어봤다
- [ ] TODO.md 화면 조각 2개를 완성하고 커밋 + push했다
- [ ] 배포된 주소를 열어 변화를 눈으로 확인했다
:::

## 다음 강의

12강, 새로고침해도 사라지지 않게. 데이터 저장하기.
