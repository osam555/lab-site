---
number: 9
title: 내 도메인 연결하기
subtitle: mycafe.kr로 들어오고, 카톡 공유에 미리보기가 뜨게
goal: 도메인을 사서 Vercel에 연결하고, SNS 공유에 필요한 정보를 홈페이지에 넣습니다.
minutes: 45
part: 3부 · 공개
---

## 도메인 고르기

| 종류 | 예 | 연 비용 | 특징 |
|---|---|---|---|
| `.kr` / `.co.kr` | mycafe.kr | 1~2만 원 | 한국 가게에 신뢰감. 국내 등록업체에서 |
| `.com` | mycafe.com | 1.5~2만 원 | 가장 익숙. 좋은 이름은 대부분 선점됨 |
| `.shop` `.cafe` `.studio` 등 | mycafe.shop | 첫해 저렴, 이후 2~5만 원 | 이름이 남아 있을 확률 높음. 갱신 가격 확인 |

고르는 기준: **짧고, 말로 전했을 때 헷갈리지 않고, 가게 이름과 같은 것.** 하이픈과 숫자는 피하세요.

## 도메인 구매 (가비아 예시)

국내에서 가장 많이 쓰는 **가비아(gabia.com)** 를 예로 설명합니다. 후이즈, Namecheap, Cloudflare 등 다른 곳에서 사도 이후 과정은 같습니다.

1. [gabia.com](https://www.gabia.com) 접속 → 회원가입 / 로그인
2. 상단 검색창에 원하는 도메인 입력 (예: `mycafe`) → **검색**
3. 사용 가능한 도메인 중 원하는 것을 선택 → **신청하기**
4. 등록 기간(1년 추천), 결제 정보 입력 → **결제**
5. **My 가비아 → 도메인 관리** 에서 방금 산 도메인이 보이면 성공

> [!TIP]
> `.kr` 도메인은 개인도 등록 가능합니다. 사업자 등록이 필요 없습니다.

## Vercel에 도메인 연결

1. Vercel 프로젝트 → **Settings → Domains** → 산 도메인 입력 (예: `mycafe.kr`) → **Add**
2. Vercel이 **DNS 레코드** 두 줄을 알려줍니다:

| Type | Name | Value |
|---|---|---|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

## 가비아에서 DNS 설정

이제 가비아에서 위 두 줄을 입력합니다.

1. **My 가비아 → 도메인 관리** → 도메인 선택 → **DNS 관리** 클릭
2. **DNS 설정** 탭 → **레코드 추가**

**첫 번째 레코드 (A 레코드):**
- 타입: **A**
- 호스트: **@**
- 값: **76.76.21.21**
- TTL: 기본값 (3600)

**두 번째 레코드 (CNAME 레코드):**
- 타입: **CNAME**
- 호스트: **www**
- 값: **cname.vercel-dns.com**
- TTL: 기본값

3. **저장** 클릭
4. 몇 분~몇 시간 뒤 Vercel 화면의 도메인 옆에 **체크(✓)** 가 뜨면 연결 완료. HTTPS(자물쇠)는 Vercel이 자동으로 붙입니다.

> [!TIP]
> DNS 설정 화면은 업체마다 다릅니다. 헷갈리면 **그 화면을 캡처해서** Claude Code에 붙여넣으세요.

<div class="prompt-box not-prose" data-prompt="9-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 9-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Vercel이 이 두 줄을 넣으라는데 [캡처] 이 화면에서 어디에 뭘 넣어야 해?

</div>
</div>

## 주소를 깔끔하게

지금 메뉴 페이지 주소는 `mycafe.kr/menu.html`입니다. `.html`을 떼려면 Vercel에 설정 파일 하나면 됩니다.

<div class="prompt-box not-prose" data-prompt="9-2" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 9-2</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

vercel.json 파일을 만들어서 `.html` 없이 접속되게 해줘 (cleanUrls). 그리고 모든 html 파일의 내부 링크에서도 `.html`을 빼줘. www로 들어와도 www 없는 주소로 가게 해줘.

</div>
</div>

커밋 → push → `mycafe.kr/menu`로 열리는지 확인.

## 검색과 공유를 위한 준비

### 페이지마다 제목과 설명

검색 결과에 나오는 파란 제목과 회색 설명입니다.

<div class="prompt-box not-prose" data-prompt="9-3" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 9-3</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

모든 페이지의 `<title>`과 meta description을 넣어줘.
- index: "[가게 이름] | [동네] [업종]" / "[한 줄 소개 + 위치 + 특징]" (설명은 80자 내외)
- menu: "메뉴 | [가게 이름]" / "[대표 메뉴 나열]"
- location: "오시는 길 | [가게 이름]" / "[주소, 영업시간, 주차]"
- contact: "문의 | [가게 이름]" / "[전화, 인스타]"

</div>
</div>

<div class="prompt-box not-prose" data-prompt="9-4" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 9-4</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

sitemap.xml 과 robots.txt도 만들어줘. 페이지 4개, 도메인은 https://[내 도메인]

</div>
</div>

커밋 → push.

### 카톡·인스타에 공유했을 때 미리보기

링크를 보내면 뜨는 사진과 제목입니다. **Open Graph**라고 합니다.

<div class="prompt-box not-prose" data-prompt="9-5" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 9-5</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

모든 페이지에 Open Graph 태그를 넣어줘. og:title은 각 페이지 제목, og:description은 설명, og:image는 images/og.jpg (1200×630으로 hero 사진에서 만들어줘), og:url은 https://[내 도메인]/각페이지.

</div>
</div>

## 확인하기

- 카톡 나에게 보내기로 링크를 보내 미리보기 사진·제목이 뜨는지
- `mycafe.kr`, `www.mycafe.kr`, `mycafe.kr/menu` 전부 열리는지
- 브라우저 주소창에 자물쇠가 있는지

```bash
git add .
git commit -m "도메인 연결, 검색·공유 정보 추가"
git push
```

## 오늘의 체크리스트

- [ ] 도메인을 구매했다 (가비아 또는 다른 곳)
- [ ] 내 도메인으로 홈페이지가 열리고 자물쇠가 있다
- [ ] `/menu`처럼 `.html` 없이 열린다
- [ ] 카톡으로 보냈을 때 사진과 제목이 뜬다
- [ ] sitemap.xml 과 robots.txt 가 도메인에서 열린다

## 다음 강의

10강에서는 구글 서치 콘솔과 네이버 서치 어드바이저에 홈페이지를 등록해서 검색에 나오게 합니다.
