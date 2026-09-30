---
number: 0
title: "핵심 요약본: 한눈에 보는 바이브코딩 (실전 가이드)"
subtitle: "가장 중요한 3가지(인덱스 파일, Git, Vercel)를 지금 바로 따라 해보세요!"
goal: "홈페이지의 뼈대를 만들고, Git으로 저장한 뒤, Vercel을 통해 실제 인터넷에 배포하는 전 과정을 직접 체험합니다."
minutes: 10
part: "1부 · 준비"
---

이 강좌는 마음이 급한 분들을 위한 **실전 압축 요약본**입니다. 이것만 따라 해도 나만의 홈페이지가 인터넷에 올라갑니다! 지금 당장 시작해 볼까요?

## 1. 홈페이지 '빈 방' 만들고 인공지능 초대하기

가장 먼저 내 홈페이지 파일들이 들어갈 빈 폴더를 만듭니다.

1. 바탕화면에 `my-site`라는 이름으로 **새 폴더**를 만듭니다. (반드시 영어 소문자와 하이픈만 사용!)
2. 설치해둔 **Claude Code 앱**을 엽니다.
3. 방금 만든 `my-site` 폴더를 마우스로 끌어서 앱 화면 가운데로 툭 놓아줍니다.

이제 빈 방에 똑똑한 인공지능 비서가 들어왔습니다!

## 2. 첫 파일(index.html) 만들기

홈페이지의 첫 화면은 무조건 `index.html`이라는 이름을 가져야 합니다. 우리가 직접 코딩할 필요 없이, 아래 프롬프트를 복사해서 비서에게 명령하세요.

<div class="prompt-box not-prose" data-prompt="0-1" data-level="required">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 0-1</span><span class="prompt-level prompt-level-required">⭐ 필수</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

내 폴더에 index.html 파일을 하나 만들어 줘. 내용은 화면 정중앙에 크고 굵은 글씨로 '나의 첫 바이브코딩 홈페이지!'라고 나오게 HTML 코드를 작성해 줘.

</div>
</div>

비서가 "이렇게 만들까요?"라고 물어보면 **Yes(허용)**를 누르세요. 오른쪽 미리보기 화면에 글씨가 나타났다면 성공입니다!

## 3. 작업 내역 저장하기, Git(깃)

작업을 인터넷에 올리려면, 내 폴더를 사진 찍듯 기록해 주는 **Git(깃)**이 필요합니다.

1. **설치 확인:** 이미 내 컴퓨터에 Git이나 GitHub Desktop이 깔려 있다면 설치는 **생략(건너뛰기)** 하세요!
2. **Windows 사용자:** 없는 경우에만 [git-scm.com](https://git-scm.com)에서 다운로드 받아 무조건 'Next'만 눌러 설치합니다. (Mac 사용자는 이미 설치되어 있으니 건너뛰세요!)
3. 준비가 끝났다면 비서에게 다음 명령을 내리세요.

<div class="prompt-box not-prose" data-prompt="0-2" data-level="required">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 0-2</span><span class="prompt-level prompt-level-required">⭐ 필수</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

터미널에서 이 폴더를 Git으로 초기화하고(git init), 지금까지 만든 index.html 파일을 첫 번째 커밋으로 저장해 줘. 커밋 메시지는 '첫 홈페이지 생성'으로 해 줘.

</div>
</div>

비서가 백그라운드에서 알아서 기록을 남겨줄 것입니다.

## 4. GitHub(깃허브) 가입 및 Vercel(버셀) 연결하기

내 컴퓨터에만 있는 홈페이지를 전 세계 누구나 볼 수 있는 **진짜 인터넷 주소**로 만들어줄 차례입니다. 이를 위해 전 세계 개발자들의 필수품인 GitHub에 가입하고 무료 서버인 Vercel을 연결합니다.

1. **GitHub 가입:** [github.com](https://github.com)에 접속해 가입(Sign up)합니다. (❗**중요**: 앞서 Claude에 가입했던 **동일한 Gmail 계정**으로 가입해야 관리가 편합니다.)
2. **Vercel 가입:** [vercel.com](https://vercel.com)에 접속해 **Sign Up**을 누르고, **'Continue with GitHub'** 버튼을 클릭해 방금 만든 깃허브 계정으로 연동 가입합니다.
3. 가입을 마쳤다면 아래 프롬프트를 비서에게 전달하세요.

<div class="prompt-box not-prose" data-prompt="0-3" data-level="required">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 0-3</span><span class="prompt-level prompt-level-required">⭐ 필수</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Vercel(버셀)을 통해 지금 이 폴더를 인터넷에 배포하고 싶어. 먼저 Vercel CLI를 설치하고 로그인하는 명령어를 실행해 줘. 진행하다가 막히면 나한테 어떻게 해야 하는지 자세히 알려줘.

</div>
</div>

## 5. 최종 인터넷 배포 완료!

비서가 로그인을 도와주고 나면, 이제 배포 버튼 하나만 누르면 끝납니다.

<div class="prompt-box not-prose" data-prompt="0-4" data-level="required">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 0-4</span><span class="prompt-level prompt-level-required">⭐ 필수</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

로그인이 완료됐어. 이제 'vercel --prod' 명령어를 실행해서 내 홈페이지를 실제 인터넷에 배포해 줘. 과정 중에 나오는 질문들은 전부 기본값(엔터 또는 y)으로 처리해 주고, 마지막에 나온 Production URL을 나한테 알려줘!

</div>
</div>

축하합니다! 🎉 비서가 알려준 **Production URL(예: my-site-xxx.vercel.app)**을 클릭하면 스마트폰으로도 볼 수 있는 진짜 내 홈페이지가 열립니다! 카카오톡으로 친구들에게 자랑해 보세요.

---

너무 빠르게 지나가서 중간에 막히셨나요? 괜찮습니다. 
**1강부터는 이 모든 과정을 하나하나 정말 쉽고 자세하게 풀어서 설명합니다.** 마음 편하게 다음 강좌로 넘어가 보세요!
