---
number: 3
title: 앱 시작과 첫 대화
subtitle: 홈페이지를 담을 빈 방을 만들고, AI에게 처음 말을 겁니다
goal: my-site 프로젝트 폴더를 만들고 클로드 데스크탑 앱의 Code 탭에 연결해 첫 대화를 나눕니다.
minutes: 15
part: 1부 · 준비
---

## 1. 홈페이지 '빈 방' 만들기

바탕화면에 내 홈페이지의 모든 파일이 들어갈 빈 폴더(방)를 하나 만들겠습니다.

::: windows
**윈도우(Windows) 컴퓨터라면:**
1. 바탕화면 빈 곳에서 **마우스 오른쪽 클릭**
2. **새로 만들기** → **폴더**
3. 이름은 꼭 영어로 `my-site` 라고 적고 엔터!
:::

::: mac
**맥(Mac) 컴퓨터라면:**
1. 바탕화면 빈 곳에서 **마우스 오른쪽 클릭**
2. **새 폴더**
3. 이름은 꼭 영어로 `my-site` 라고 적고 엔터!
:::

> 💡 **주의하세요!**
> 폴더 이름에 한글이나 띄어쓰기를 넣으면 나중에 인터넷에 올릴 때 에러가 날 수 있습니다. 반드시 영어 소문자와 빼기 기호(-)만 써주세요!

## 2. 인공지능 비서를 '빈 방'에 초대하기

방금 만든 빈 방(my-site 폴더)을 인공지능 비서에게 보여줄 차례입니다.

1. 방금 설치한 **Claude 데스크탑 앱**을 실행하고, 위쪽의 **Code** 탭을 누르세요.
2. 입력창 근처의 **프로젝트 폴더 선택**(또는 `Open Folder`) 버튼을 눌러 바탕화면의 `my-site` 폴더를 고르세요. 비서는 이 폴더 안에서만 일합니다.
   *(폴더를 마우스로 꾹 누른 채 앱 화면 한가운데로 드래그해서 놓아도 됩니다)*

이렇게 하면 앱 화면 왼쪽에 `my-site`라는 글자가 나타납니다. 빈 방이라 아직 파일은 아무것도 없는 게 정상이에요!

## 3. 첫인사 나누기

자, 이제 비서와 카카오톡 하듯 대화를 나눠볼까요? 앱 화면 가운데 입력창에 아래처럼 치고 엔터를 누르세요.

<div class="prompt-box not-prose" data-prompt="3-1" data-level="required">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-1</span><span class="prompt-level prompt-level-required">⭐ 필수</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

안녕! 이 폴더에 뭐가 있어?

</div>
</div>

인공지능 비서가 "비어 있다"고 대답할 거예요. 정상입니다! 이제 우리가 코딩 초보라는 걸 확실히 알려줍시다.

<div class="prompt-box not-prose" data-prompt="3-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

나는 코딩을 전혀 모르는 완전 초보야. 앞으로 한국어로, 아주 쉽고 간단하게 설명해줘. 어려운 말은 쓰지 마!

</div>
</div>

Claude가 "알겠습니다"라고 대답하면 모든 준비가 끝났습니다!

## 앱 사용 꿀팁 3가지

1. **"이렇게 할까요?" (권한 요청)**: 비서가 파일을 만들거나 고치기 전에 "내가 이렇게 해도 될까?" 하고 물어봅니다. 어떤 파일이 어떻게 바뀌는지 보여주는 비교 화면(diff)을 읽어보고, 괜찮으면 **수락(Yes)** 버튼을 누르세요. 읽지 않고 계속 누르는 습관만 조심하면 됩니다.
2. **바로바로 확인하기**: 비서가 파일을 고치면, 화면 오른쪽(미리보기 패널)에 내 홈페이지 모습이 실시간으로 나타납니다.
3. **"방금 한 거 취소!"**: 맘에 안 들게 고쳤나요? 그냥 대화창에 "방금 한 거 되돌려줘"라고 말하면 원래대로 싹 돌려줍니다. 마법 같죠?

## 오늘의 체크리스트

- [ ] 바탕화면에 `my-site` 폴더를 만들었다.
- [ ] Code 탭에서 `my-site` 폴더를 선택했다.
- [ ] 인공지능 비서에게 코딩 초보라고 선언했다!

## 다음 강의

길었던 준비가 끝났습니다. 4강에서는 인공지능 비서에게 "내 홈페이지 뼈대 좀 만들어줘!"라고 명령해서, 드디어 눈앞에 내 홈페이지가 나타나는 기적을 맛보게 됩니다!
