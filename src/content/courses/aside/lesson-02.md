---
number: 2
title: Computer Use — Claude가 직접 조작하는 법
subtitle: 클릭·입력·스크롤을 Claude에게 맡기기
goal: Computer Use 모드를 활성화하고, Claude가 Aside 브라우저에서 직접 버튼을 클릭하고 폼을 채우는 방법을 익힙니다. 실제 Vercel 또는 DNS 설정을 Claude에게 위임합니다.
minutes: 40
part: 1부 · Aside 도구 기초
---

## Computer Use란

**Computer Use**는 Claude가 Aside 브라우저에서 직접 마우스를 클릭하고 키보드를 입력하는 기능입니다.

```
[사람]  Aside 브라우저를 열고 URL 이동     → 로그인
[Claude] 나머지를 직접 클릭·입력·저장
```

"이 페이지에서 Analytics를 켜줘"라고 하면 Claude가 버튼을 찾아서 클릭합니다.

---

## 활성화 방법

대화창에 다음 중 하나를 입력합니다:

<div class="prompt-box not-prose" data-prompt="2-1" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 2-1</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

"Aside 브라우저에서 직접 조작해줘"

</div>
</div>

<div class="prompt-box not-prose" data-prompt="2-2" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 2-2</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

"Computer Use 모드로 [작업]을 해줘"

</div>
</div>

<div class="prompt-box not-prose" data-prompt="2-3" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 2-3</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

"Aside 브라우저를 컨트롤해서 [작업]을 완료해줘"

</div>
</div>

Claude가 Computer Use를 시작하면 Aside 브라우저에서 마우스 커서가 움직이는 것이 보입니다.

> [!NOTE]
> Computer Use 기능은 Claude Code 앱 버전에 따라 이름이 다를 수 있습니다. "Browser control", "Web automation" 등으로 표시될 수 있습니다.

---

## 먼저 쉬운 연습 — 로그인 없이 검색 한 번

로그인이 필요 없는 일부터 시켜 봅니다. Claude가 마우스를 움직이는 것을 눈으로 보는 게 목표입니다.

1. Aside 브라우저에서 `https://www.naver.com` 접속
2. 대화창에 아래 프롬프트 입력

<div class="prompt-box not-prose" data-prompt="2-0" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 2-0</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Aside 브라우저에서 직접 조작해줘. 네이버 검색창에 "오늘 날씨"를 입력하고 검색해줘. 검색 결과 맨 위에 보이는 기온을 알려줘.

</div>
</div>

**결과 확인**: 패널에서 검색창에 글자가 입력되고 결과 화면으로 바뀌는 것이 보이는지, Claude가 알려준 기온이 화면의 숫자와 같은지 확인합니다.

---

## 실전 예시 1 — Vercel Analytics 켜기

> Vercel 계정이 없다면 이 예시는 건너뛰고 위의 쉬운 연습으로 충분합니다. 설정을 바꾸는 작업은 **켜기·저장 같은 마지막 클릭 전에 사람이 화면을 확인**하는 습관을 들이세요.

1. Aside 브라우저에서 `https://vercel.com/dashboard` 접속
2. Vercel 계정으로 로그인 (직접)
3. 대화창에:

<div class="prompt-box not-prose" data-prompt="2-4" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 2-4</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Computer Use로 Vercel 대시보드에서 [프로젝트 이름] 프로젝트의 Analytics를 활성화해줘.
지금 Aside 브라우저에 Vercel이 열려 있고 로그인돼 있어.

</div>
</div>

Claude가:
- 프로젝트 카드 클릭
- Analytics 탭 찾기
- Enable 버튼 클릭
- 완료 확인

---

## Computer Use가 막히는 경우

일부 사이트는 자동화를 감지해 차단합니다.

| 증상 | 대응 |
|---|---|
| 캡챠(CAPTCHA) 등장 | 사람이 직접 캡챠 통과 후 Claude에게 다시 맡기기 |
| 버튼을 못 찾음 | 화면 스크롤 후 재시도 요청 |
| 로그인 세션 만료 | 사람이 다시 로그인 |
| 전체 차단 | 1강 방식으로 전환 (화면 보며 안내받기) |

---

::: practice
**실습 미션 — Claude가 클릭하는 것을 눈으로 확인하기**

- [ ] "Aside 브라우저에서 직접 조작해줘"로 시작하는 프롬프트를 보냈다
- [ ] 패널에서 마우스 커서가 움직이고 검색창에 글자가 입력되는 것을 **직접 봤다**
- [ ] Claude가 알려준 결과(기온 등)가 화면에 보이는 숫자와 같은지 확인했다
- [ ] 중간에 멈추게 하고 싶을 때 "잠깐 멈춰"라고 말하면 멈추는 것을 확인했다
- [ ] (선택) Vercel 같은 설정 화면에서 1가지를 켜 봤고, 마지막 클릭 전에 내가 화면을 확인했다
:::

---

## 더 해보기(선택) — DNS 레코드 자동 추가

> **용어 풀이** DNS = 도메인(mycafe.kr 같은 이름)을 실제 서버 주소와 이어 주는 주소록, 레코드 = 그 주소록의 한 줄입니다. 값을 잘못 저장하면 사이트가 안 열릴 수 있으니 **저장 버튼은 입력 내용을 확인한 뒤 사람이** 누르세요. `mycafe.kr`은 예시이니 내 도메인으로 바꿉니다.

가비아나 Namecheap에서 DNS를 설정해야 할 때.

1. Aside 브라우저에서 도메인 구입처 로그인
2. DNS 관리 화면으로 이동

<div class="prompt-box not-prose" data-prompt="2-5" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 2-5</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Computer Use로 지금 Aside 브라우저의 DNS 관리 화면에서 아래 두 레코드를 추가해줘:
- Type: A, Name: @, Value: 76.76.21.21, TTL: 3600
- Type: CNAME, Name: www, Value: cname.vercel-dns.com, TTL: 3600
각 필드를 찾아서 입력하고 저장해줘.

</div>
</div>

---

## 더 해보기(선택) — 구글 서치 콘솔 sitemap 제출

> **용어 풀이** sitemap = 내 사이트의 페이지 목록 파일입니다. 구글에 제출하면 페이지를 찾아가기 쉬워집니다.

1. Aside 브라우저에서 `https://search.google.com/search-console` 접속·로그인
2. 대화창에:

<div class="prompt-box not-prose" data-prompt="2-6" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 2-6</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Computer Use로 구글 서치 콘솔에서 내 사이트(mycafe.kr)에 sitemap.xml을 제출해줘.
왼쪽 메뉴 Sitemaps로 가서 https://mycafe.kr/sitemap.xml 을 입력하고 제출해줘.

</div>
</div>

---

## 오늘의 체크리스트

- [ ] Computer Use 모드를 활성화해봤다
- [ ] Claude가 Aside 브라우저에서 실제로 클릭하는 것을 확인했다
- [ ] 복잡한 웹 설정 1가지를 Computer Use로 완료했다
