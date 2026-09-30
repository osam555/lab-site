---
number: 0
title: "핵심 요약본: 한눈에 보는 바이브코딩 (실전 가이드)"
subtitle: "가장 중요한 3가지(인덱스 파일, Git, Vercel)를 지금 바로 따라 해보세요!"
goal: "홈페이지의 뼈대를 만들고, Git으로 저장한 뒤, Vercel을 통해 실제 인터넷에 배포하는 전 과정을 직접 체험합니다."
minutes: 10
part: "1부 · 준비"
---

이 강좌는 마음이 급한 분들을 위한 **실전 압축 요약본**입니다. 가장 핵심적인 3단계만 따라 해도 나만의 홈페이지가 인터넷에 올라갑니다! 지금 당장 시작해 볼까요?

## 💡 사전 준비사항
실습을 시작하기 전에 아래 4가지만 미리 준비해 주세요. (자세한 설치 방법은 2강에서 설명합니다)

1. **폴더 준비:** 바탕화면에 `my-site`라는 빈 폴더를 만듭니다. (반드시 영어 소문자와 하이픈만 사용!)
2. **비서 준비 (Claude Code):** Claude Code 앱을 설치하고 실행한 뒤, `my-site` 폴더를 마우스로 끌어다 놓아 연결해 둡니다.
3. **기록 도구 준비 (Git):** Windows 사용자는 [git-scm.com](https://git-scm.com)에서 다운로드해 'Next'만 눌러 설치해 둡니다. (Mac은 기본 설치되어 있으니 건너뜁니다.)
4. **배포 계정 준비:** [github.com](https://github.com)에 가입한 뒤(Claude와 동일한 Gmail 권장), [vercel.com](https://vercel.com)에 접속해 'Continue with GitHub'으로 연동 가입해 둡니다.

모두 준비되셨나요? 이제 딱 3번만 명령을 내리면 홈페이지가 완성됩니다!

---

## 1. 첫 파일(index.html) 만들기

홈페이지의 첫 화면은 무조건 `index.html`이라는 이름을 가져야 합니다. 우리가 직접 코딩할 필요 없이, 아래 프롬프트를 복사해서 비서에게 명령하세요.

<div class="prompt-box not-prose" data-prompt="0-1" data-level="required">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 0-1</span><span class="prompt-level prompt-level-required">⭐ 필수</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

내 폴더에 index.html 파일을 하나 만들어 줘. 내용은 화면 정중앙에 크고 굵은 글씨로 '나의 첫 바이브코딩 홈페이지!'라고 나오게 HTML 코드를 작성해 줘.

</div>
</div>

비서가 "이렇게 만들까요?"라고 물어보면 **Yes(허용)**를 누르세요. 오른쪽 미리보기 화면에 글씨가 나타났다면 1단계 성공입니다!

## 2. 작업 내역 저장하기 (Git)

작업을 인터넷에 올리려면, 내 폴더를 사진 찍듯 기록해 두어야 합니다.
비서에게 다음 명령을 내려서 기록을 남겨보세요.

<div class="prompt-box not-prose" data-prompt="0-2" data-level="required">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 0-2</span><span class="prompt-level prompt-level-required">⭐ 필수</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

터미널에서 이 폴더를 Git으로 초기화하고(git init), 지금까지 만든 index.html 파일을 첫 번째 커밋으로 저장해 줘. 커밋 메시지는 '첫 홈페이지 생성'으로 해 줘.

</div>
</div>

비서가 백그라운드에서 알아서 기록을 남겨줍니다.

## 3. 인터넷에 배포하기 (Vercel)

내 컴퓨터에만 있는 홈페이지를 전 세계 누구나 볼 수 있는 **진짜 인터넷 주소**로 만들어줄 차례입니다. 

먼저 비서에게 Vercel 로그인을 도와달라고 명령합니다.
<div class="prompt-box not-prose" data-prompt="0-3" data-level="required">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 0-3</span><span class="prompt-level prompt-level-required">⭐ 필수</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Vercel(버셀)을 통해 배포하려고 해. 먼저 Vercel CLI를 설치하고 로그인하는 명령어를 실행해 줘. 진행하다가 막히면 나한테 어떻게 해야 하는지 자세히 알려줘.

</div>
</div>

로그인이 무사히 끝났다면, 드디어 인터넷에 배포하는 마지막 명령을 내립니다!
<div class="prompt-box not-prose" data-prompt="0-4" data-level="required">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 0-4</span><span class="prompt-level prompt-level-required">⭐ 필수</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

로그인이 완료됐어. 이제 'vercel --prod' 명령어를 실행해서 내 홈페이지를 실제 인터넷에 배포해 줘. 과정 중에 나오는 질문들은 전부 기본값(엔터 또는 y)으로 처리해 주고, 마지막에 나온 Production URL을 나한테 알려줘!

</div>
</div>

🎉 **축하합니다!** 비서가 알려준 **Production URL(예: my-site-xxx.vercel.app)**을 클릭하면 스마트폰으로도 볼 수 있는 진짜 내 홈페이지가 열립니다! 

---

너무 빠르게 지나가서 중간에 막히셨나요? 괜찮습니다. 
**1강부터는 준비사항 설치부터 하나하나 정말 쉽고 자세하게 풀어서 설명합니다.** 마음 편하게 다음 강좌로 넘어가 보세요!
