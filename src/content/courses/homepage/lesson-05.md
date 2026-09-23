---
number: 5
title: 사진·지도·글 채우기
subtitle: 회색 상자를 진짜 내용으로
goal: 사진을 넣고 크기를 최적화하고, 지도를 삽입하고, 소개 글을 다듬어 "진짜 홈페이지처럼" 보이게 만듭니다.
minutes: 45
part: 2부 · 만들기
---

## 사진 준비

### 사진이 있다면
프로젝트 폴더 안에 `images` 폴더를 만들고 거기에 넣습니다. 파일 이름은 **영어 소문자**로 (`hero.jpg`, `menu-1.jpg`). 한글 이름은 인터넷에 올렸을 때 깨질 수 있습니다.

::: windows
탐색기에서 `Desktop\my-site` 열기 → 새 폴더 `images` → 사진을 드래그.
:::

::: mac
Finder에서 `데스크탑/my-site` 열기 → 새 폴더 `images` → 사진을 드래그. 아이폰 사진(HEIC)은 브라우저가 못 읽으니 **미리보기 앱 → 파일 → 내보내기 → JPEG**로 바꾸세요.
:::

### 사진이 없다면
무료 사진 사이트(Unsplash, Pexels)에서 받아 쓰면 됩니다. 상업 이용도 가능합니다. Claude Code에게 "카페 분위기 무료 사진을 Unsplash에서 찾는 검색어 알려줘"라고 물어봐도 됩니다.

### 크기 줄이기 — 중요
폰으로 찍은 사진은 5MB가 넘습니다. 그대로 넣으면 홈페이지가 느려집니다. Claude Code에게 시키세요.

<div class="prompt-box not-prose" data-prompt="5-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

images 폴더의 사진들을 가로 최대 1600px, 용량 300KB 이하로 줄여줘. 원본은 images/original 폴더에 옮겨두고. 필요한 도구가 있으면 설명하고 설치해줘.

</div>
</div>

도구 설치 허락을 물어보면 Yes. 끝나면 파일 크기가 확 줄어 있습니다.

## 사진 넣기

<div class="prompt-box not-prose" data-prompt="5-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

첫 화면의 회색 상자를 images/hero.jpg로 바꿔줘. 사진 위의 글자가 잘 보이게 사진을 살짝 어둡게. 메뉴 3개의 사진 자리도 images/menu-1.jpg, menu-2.jpg, menu-3.jpg로.

</div>
</div>

새로고침. 사진이 늘어나 보이거나 잘리면:

<div class="prompt-box not-prose" data-prompt="5-3" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-3</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

메뉴 사진이 찌그러져. 비율은 유지하고 정사각형으로 잘라서 보여줘.

</div>
</div>

## 지도 넣기

지도는 직접 그리지 않고 **지도 서비스의 삽입 코드**를 가져옵니다. 한국 가게라면 네이버 지도 또는 카카오맵을 씁니다.

### 네이버 지도 (기본 권장)

1. map.naver.com 에서 가게 주소 검색
2. 가게 이름 클릭 → **공유** → **지도 퍼가기** → `<iframe>` 코드 복사
3. Claude Code에게:

<div class="prompt-box not-prose" data-prompt="5-4" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-4</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

오시는 길의 회색 상자를 이 지도로 바꿔줘: [복사한 코드 붙여넣기]
폰에서는 가로 꽉 차게, PC에서는 최대 800px.

</div>
</div>

### 카카오맵 (선택)

1. map.kakao.com 에서 가게 주소 검색
2. 가게 이름 클릭 → **지도 퍼가기** → `<iframe>` 코드 복사
3. 위와 같이 Claude Code에게 전달

> 두 서비스 모두 `<iframe>` 코드를 복사해 붙여넣는 방식이 같습니다. 네이버 지도는 네이버 앱과 연동, 카카오맵은 카카오내비·카카오맵 앱과 연동됩니다.

## 글 다듬기

홈페이지에서 가장 많이 읽히는 건 **첫 화면 한 줄**과 **메뉴/서비스 설명**입니다. 직접 써도 좋고 Claude Code에게 초안을 받아도 됩니다.

<div class="prompt-box not-prose" data-prompt="5-5" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-5</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

첫 화면 한 줄 소개를 3가지 버전으로 제안해줘. 우리 가게는 [특징 2~3개]. 손님은 주로 [누구]. 20자 이내로. 아직 파일은 고치지 마.

</div>
</div>

마음에 드는 걸 고르고:

<div class="prompt-box not-prose" data-prompt="5-6" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-6</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

2번으로 바꿔줘.

</div>
</div>

메뉴 설명도 마찬가지입니다. "각 메뉴에 한 줄 설명을 추가해줘. [메뉴1은 …, 메뉴2는 …]".

## 링크 살리기

전화번호와 인스타그램을 **누르면 동작하게** 만듭니다.

<div class="prompt-box not-prose" data-prompt="5-7" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-7</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

하단의 전화번호는 누르면 전화가 걸리게, 인스타그램은 누르면 새 탭으로 열리게 해줘. 예약하기 버튼은 일단 전화 걸기로.

</div>
</div>

폰에서 확인하려면 8강까지 기다려야 하지만, PC 브라우저에서 링크에 마우스를 올려보면 왼쪽 아래에 `tel:010…`이 보이면 됩니다.

## 세이브

```bash
git add .
git commit -m "사진, 지도, 소개 글 추가"
```

앞으로 **뭔가 하나 잘 되면 바로 커밋**. 이게 리듬입니다.

## 오늘의 체크리스트

- [ ] `images` 폴더에 사진이 있고 용량이 줄어 있다
- [ ] 첫 화면과 메뉴에 진짜 사진이 보인다
- [ ] 지도가 보이고 실제 위치가 맞다
- [ ] 첫 화면 한 줄과 메뉴 설명이 채워져 있다
- [ ] 커밋했다

## 다음 강의

6강, 디자인. 색 3개와 글꼴 1개만 정해도 "AI가 만든 티"가 사라집니다.
