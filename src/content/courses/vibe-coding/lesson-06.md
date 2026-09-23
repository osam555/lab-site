---
number: 6
title: 아이디어에서 기획까지
subtitle: 1시간의 기획이 3개월의 삽질을 막아줍니다
goal: 내 서비스의 핵심 사용자, 핵심 문제, 핵심 기능 3개를 정하고 한 장짜리 기획서(PLAN.md)를 만듭니다.
minutes: 45
part: 2부 · 기획과 프롬프트
---

## AI는 기획을 대신해주지 않습니다

AI에게 "요리 추천 앱 만들어줘"라고 하면 뭔가 나오긴 합니다. 그런데 그건 *AI가 상상한* 요리 추천 앱이지 *여러분이 원하는* 앱이 아닙니다. 며칠 뒤 "이게 아닌데…"를 반복하다가 처음부터 다시 시작하게 됩니다.

기획은 **AI에게 넘기기 전에 내가 결정해야 할 것들을 미리 결정하는 일**입니다. 1시간이면 충분하고, 그 1시간이 이후 모든 대화의 품질을 결정합니다.

## 기획서는 딱 다섯 칸입니다

거창한 문서가 아닙니다. 아래 다섯 질문에 답하면 끝입니다.

### 1. 누가 쓰나요? (한 사람만)
"모두를 위한"은 "아무도 위하지 않는"과 같습니다. 구체적인 한 사람을 정하세요.

<div class="prompt-box not-prose" data-prompt="6-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

나쁜 예: 요리에 관심 있는 사람
좋은 예: 퇴근 후 배달 대신 집밥을 먹고 싶지만 뭘 해야 할지 모르는 1인 가구 직장인

</div>
</div>

### 2. 어떤 문제를 겪나요?
그 사람이 지금 겪는 불편을 한 문장으로.

<div class="prompt-box not-prose" data-prompt="6-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

냉장고에 재료는 있는데 뭘 만들지 매번 고민하다 결국 배달을 시킨다.

</div>
</div>

### 3. 핵심 기능 3개 (더도 말고)
문제를 해결하는 데 **없으면 안 되는** 것만. 나머지는 전부 "나중에" 목록으로.

<div class="prompt-box not-prose" data-prompt="6-3" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-3</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

1. 가진 재료를 입력한다
2. 재료로 만들 수 있는 메뉴 3개를 추천받는다
3. 마음에 든 메뉴를 저장한다

</div>
</div>

"소셜 공유", "다크 모드", "알림"은 나중에. 20일 안에 완성하려면 잔인하게 잘라야 합니다.

### 4. 성공하면 어떤 모습인가요?
완성 여부를 판단할 기준.

<div class="prompt-box not-prose" data-prompt="6-4" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-4</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

내가 실제로 일주일 동안 이 앱으로 저녁 메뉴를 정한다.

</div>
</div>

### 5. 안 만들 것
명시적으로 적어두면 AI가 멋대로 추가하는 걸 막을 수 있습니다.

<div class="prompt-box not-prose" data-prompt="6-5" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-5</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

회원가입 없이 시작 (14강에서 추가), 사진 업로드 없음, 영양 정보 없음

</div>
</div>

## 따라하기: PLAN.md 만들기

프로젝트 폴더에 `PLAN.md`라는 파일을 만들고 다섯 칸을 채우세요. AI에게 인터뷰를 시켜도 좋습니다.

<div class="prompt-box not-prose" data-prompt="6-6" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-6</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

"나는 [1강의 한 줄]을 만들려고 해. 기획서를 완성할 수 있게 나에게 질문을 하나씩 해줘. 사용자, 문제, 핵심 기능 3개, 성공 기준, 안 만들 것 순서로. 답이 모호하면 더 구체적으로 되물어줘."

</div>
</div>

인터뷰가 끝나면:

<div class="prompt-box not-prose" data-prompt="6-7" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 6-7</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

"지금까지 대화를 정리해서 PLAN.md 파일로 만들어줘. 다섯 항목을 제목으로."

</div>
</div>

## 화면 흐름 그리기

기획서가 됐으면 화면을 **종이에** 그립니다. 예쁘게 그릴 필요 없습니다. 네모와 화살표면 충분합니다.

```
[재료 입력 화면] --추천받기--> [메뉴 3개 화면] --저장--> [내 메뉴 목록]
```

핵심 기능 3개면 화면도 대개 3~4개입니다. 화면이 8개 넘어가면 기능을 더 잘라야 한다는 신호입니다.

사진을 찍어 AI에게 보여주거나 위처럼 글자로 적어 `PLAN.md` 맨 아래에 붙이세요.

## 오늘의 체크리스트

- [ ] `PLAN.md`에 다섯 칸이 채워져 있다
- [ ] 핵심 기능이 3개를 넘지 않는다
- [ ] "안 만들 것"에 최소 3개가 적혀 있다
- [ ] 화면 흐름이 3~4개 상자로 그려져 있다
- [ ] 커밋했다 (`PLAN.md 추가`)

## 다음 강의

7강에서는 이 기획서를 AI가 정확히 이해하도록 **요청하는 기술**을 배웁니다. 구체적으로, 하나만, 하지 말 것을 말하는 법.
