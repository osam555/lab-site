---
number: 4
title: 첫 홈페이지 파일 만들기
subtitle: 가장 쉬운 한 페이지부터, 오늘 미리보기에서 내 홈페이지를 봅니다
goal: 가장 쉬운 한 페이지 소개 사이트로 10~15분 안에 첫 결과를 보고, 내 유형(난이도 순)으로 확장해 Claude Code에게 index.html을 만들게 한 뒤 Git으로 첫 세이브를 합니다.
minutes: 50
part: 2부 · 만들기
---

## 오늘의 순서

0. **먼저 이것부터** — 한 페이지 소개 사이트 (15분)
1. 내 유형 고르기 — 쉬운 것부터 어려운 순으로, 2단계 프롬프트 (10~35분)
2. 규칙 파일 만들기 (5분)
3. 첫 요청 정리 (3분)
4. 미리보기에서 확인하고 고치기 (15분)
5. Git으로 세이브 (5분)

> 💡 이 강의의 모든 예시에는 **난이도(★ 쉬움 / ★★ 보통 / ★★★ 어려움)** 와 **예상 시간**이 붙어 있습니다. 처음이라면 위에서부터 차례로 하나씩만 하세요. 한 번에 다 만들려고 하지 않아도 됩니다.

---

## 0. 먼저 이것부터 — 한 페이지 소개 사이트 (★ 쉬움 · 약 15분)

섹션 **딱 3개**, 사진 **1장**, 입력 칸·지도·여러 페이지 없음. 준비물은 이름과 한 줄 소개뿐입니다. 사진이 없으면 회색 상자로 둡니다.

```text
┌──────────────────────────────┐
│ 큰 제목 + 한 줄 소개          │  ← 1. 맨 위
├──────────────────────────────┤
│ 사진 1장 + 소개글 3줄         │  ← 2. 가운데
├──────────────────────────────┤
│ 연락처 한 줄                  │  ← 3. 맨 아래
└──────────────────────────────┘
```

Code 탭에서 `my-site` 폴더가 선택된 상태로 이 프롬프트를 보내세요. (규칙 파일은 아직 없어도 됩니다.)

<div class="prompt-box not-prose" data-prompt="4-0" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-0</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

index.html과 style.css를 만들어줘. 한 페이지 소개 사이트야. 섹션은 딱 3개:
1. 맨 위: 큰 제목 "[이름 또는 가게 이름]"과 한 줄 소개 "[한 줄 소개]"
2. 가운데: 사진 한 장(사진이 없으면 회색 상자)과 소개글 3줄(예시로 채워줘)
3. 맨 아래: 연락처 "[이메일 또는 전화번호]"
폰에서도 보기 좋게.

</div>
</div>

권한 요청이 뜨면 변경 내용을 읽고 **수락(Yes)** 하세요. 오른쪽 미리보기에 제목·사진 자리·연락처가 보이면 성공입니다.

::: practice
- [ ] 미리보기에 큰 제목과 한 줄 소개가 보인다
- [ ] 가운데에 사진(또는 회색 상자)과 소개글 3줄이 보인다
- [ ] 맨 아래에 내 연락처가 보인다
- [ ] "제목을 더 크게" 같은 요청을 한 번 보내 화면이 바뀌는 것을 눈으로 확인했다
:::

**여기까지가 오늘의 최소 목표입니다.** 시간이 남으면 아래에서 내 유형을 골라 확장하세요.

---

## 1. 내 유형 고르기 — 쉬운 것부터

아래 5개 유형은 **쉬운 순서**로 놓았습니다. 앞쪽일수록 섹션이 적고 따로 준비할 것이 적습니다. 준비물은 미리 정리해 두면 Claude Code에게 한 번에 정확히 전달할 수 있습니다.

| 순서 | 유형 | 난이도 | 예상 시간 | 난이도를 정한 기준 |
|---|---|---|---|---|
| 먼저 | 한 페이지 소개 사이트 (위) | ★ 쉬움 | 15분 | 섹션 3개, 사진 1장, 입력 칸 없음 |
| 1 | 개인·블로그형 | ★ 쉬움 | 20분 | 섹션 4개, 글 카드 3개(예시 글) |
| 2 | 가게·매장 | ★★ 보통 | 25분 | 섹션 4개, 사진 4장 안팎 |
| 3 | 포트폴리오·이력서 | ★★ 보통 | 25분 | 작업물 이미지 3장, 카드 배치 |
| 4 | 소규모 사업체·회사 | ★★ 보통 | 30분 | 서비스·후기 카드, 로고·슬로건 |
| 5 | 행사·웨딩·모임 | ★★★ 어려움 | 35분 | 사진 갤러리, 타임테이블, 참석 폼 |

모든 유형의 프롬프트는 **짧게 쪼개서 2단계**로 보냅니다. 1단계를 보내 결과를 눈으로 확인하고, 괜찮으면 2단계를 보내세요. 한 번에 길게 시키면 어디서 틀어졌는지 찾기 어렵습니다.

### 👤 개인·블로그형 (★ 쉬움 · 약 20분)

취미, 일기, 지식 공유 등. 준비물이 적고 사진 없이도 됩니다.

**준비할 것:**

```
사이트 이름:
한 줄 소개:
이메일 또는 SNS:
(선택) 프로필 사진 1장 → images/profile.jpg
```

**1단계:**

<div class="prompt-box not-prose" data-prompt="4-5" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-5</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

index.html을 만들어줘. "[사이트이름]"이라는 개인 블로그 첫 화면이야. 위에서 아래로:
1. 맨 위: 사이트 이름
2. 소개: 한 줄 소개 "[한 줄 소개]"와 내 사진(images/profile.jpg, 없으면 회색 동그라미)
3. 최근 글 카드 3개: 제목, 날짜, 요약 한 줄 (예시 글로 채워줘)
스타일은 style.css에 따로, 폰에서도 보기 좋게.

</div>
</div>

**2단계:**

<div class="prompt-box not-prose" data-prompt="4-5b" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-5b</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

맨 아래에 연락처 "[이메일]" 한 줄과 "© 올해 [사이트이름]"을 넣어줘.

</div>
</div>

::: practice
- [ ] 사이트 이름, 소개, 글 카드 3개가 미리보기에 보인다
- [ ] 맨 아래 연락처가 내 것으로 바뀌어 있다
- [ ] 창 폭을 줄이거나 폰 모드로 봐도 글 카드가 세로로 정리된다
:::

---

### 🏪 가게·매장 (★★ 보통 · 약 25분)

카페, 식당, 미용실, 꽃집 등.

<div class="not-prose my-4">
  <div class="tip-box">
    <div class="flex items-center justify-between flex-wrap gap-2">
      <div>
        <span class="font-bold text-accent">☕ 카페/매장 샘플:</span> 감성 카페 홈페이지 라이브 미리보기
      </div>
      <a href="/examples/homepage-cafe.html" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-accent rounded-lg hover:opacity-90 transition-opacity" style="color:#fff">
        완성 샘플 미리보기 ↗
      </a>
    </div>
  </div>
</div>

**준비할 파일** — `my-site/` 폴더에 넣어두세요:

| 준비물 | 설명 | 파일명 예시 |
|---|---|---|
| 가게 사진 | 외관 1장이면 충분 (없으면 회색 상자) | `images/exterior.jpg` |
| 대표 메뉴 사진 | 3장 (없으면 나중에) | `images/menu-1.jpg` ~ `menu-3.jpg` |

**미리 적어둘 것:**

```
가게 이름:
한 줄 소개: (예: "종로 골목의 자가배전 카페")
대표 메뉴 3개: 이름 / 가격 / 한 줄 설명
주소 · 영업시간 · 전화번호
```

**1단계:**

<div class="prompt-box not-prose" data-prompt="4-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

index.html을 만들어줘. [가게이름] 홈페이지야. 위에서 아래로:
1. 맨 위: 가게 이름
2. 첫 화면: images/exterior.jpg 배경(없으면 회색) 위에 "[한 줄 소개]"
3. 대표 메뉴 3개: 이름, 가격, 한 줄 설명 (예시로 채워줘)
스타일은 style.css에 따로, 폰에서도 보기 좋게.

</div>
</div>

**2단계:**

<div class="prompt-box not-prose" data-prompt="4-1b" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-1b</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

맨 아래에 주소 "[주소]", 영업시간 "[시간]", 전화 "[번호]"를 넣어줘.

</div>
</div>

::: practice
- [ ] 첫 화면에 가게 이름과 한 줄 소개가 크게 보인다
- [ ] 대표 메뉴 3개의 이름·가격이 보인다
- [ ] 맨 아래에 주소·영업시간·전화가 있다
- [ ] 메뉴 사진 자리가 비어 있어도 어색하지 않다 (사진은 5강에서 넣습니다)
:::

---

### 💼 포트폴리오·이력서 (★★ 보통 · 약 25분)

디자이너, 프리랜서, 작가 등.

<div class="not-prose my-4">
  <div class="tip-box">
    <div class="flex items-center justify-between flex-wrap gap-2">
      <div>
        <span class="font-bold text-accent">💼 포트폴리오 샘플:</span> 모던 개발자/디자이너 포트폴리오 미리보기
      </div>
      <a href="/examples/homepage-portfolio.html" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-accent rounded-lg hover:opacity-90 transition-opacity" style="color:#fff">
        완성 샘플 미리보기 ↗
      </a>
    </div>
  </div>
</div>

**준비할 파일:**

| 준비물 | 설명 | 파일명 예시 |
|---|---|---|
| 프로필 사진 | 1장 | `images/profile.jpg` |
| 작업물 이미지 | 3장 (없으면 회색 상자) | `images/work-1.jpg` ~ `work-3.jpg` |

**미리 적어둘 것:**

```
이름 / 직함:
한 줄 소개: (예: "브랜드 디자이너 | 5년 경력")
이메일 · SNS 주소:
대표 작업물 3개: 제목 / 한 줄 설명
```

**1단계:**

<div class="prompt-box not-prose" data-prompt="4-2" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-2</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

index.html을 만들어줘. [이름]의 포트폴리오야. 위에서 아래로:
1. 맨 위: 이름과 직함 "[직함]"
2. 소개: images/profile.jpg 사진과 한 줄 소개 (사진이 없으면 회색 동그라미)
3. 대표 작업물 카드 3개: 이미지(images/work-1~3.jpg), 제목, 설명 한 줄 (예시로 채워줘)
스타일은 style.css에 따로, 폰에서도 보기 좋게.

</div>
</div>

**2단계:**

<div class="prompt-box not-prose" data-prompt="4-2b" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-2b</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

맨 아래에 이메일 "[이메일]"과 인스타그램 링크 "[아이디]"를 넣어줘.

</div>
</div>

::: practice
- [ ] 이름·직함·프로필 사진 자리가 보인다
- [ ] 작업물 카드 3개가 한 줄 또는 격자로 나란히 보인다
- [ ] 맨 아래 이메일을 누르면 메일 작성 창이 열리거나 링크로 인식된다
:::

---

### 🏢 소규모 사업체·회사 (★★ 보통 · 약 30분)

학원, 사무소, 공방 등.

<div class="not-prose my-4">
  <div class="tip-box">
    <div class="flex items-center justify-between flex-wrap gap-2">
      <div>
        <span class="font-bold text-accent">🏢 기업/소호 샘플:</span> IT 테크 소규모 회사 홈페이지 미리보기
      </div>
      <a href="/examples/homepage-company.html" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-accent rounded-lg hover:opacity-90 transition-opacity" style="color:#fff">
        완성 샘플 미리보기 ↗
      </a>
    </div>
  </div>
</div>

**준비할 파일:**

| 준비물 | 설명 | 파일명 예시 |
|---|---|---|
| 로고 | 없으면 글자 로고로 | `images/logo.png` |

**미리 적어둘 것:**

```
회사/서비스 이름:
슬로건: (예: "아이의 창의력을 키우는 코딩 교실")
서비스 3개: 이름 / 대상 / 가격 또는 기간
주소 · 전화번호 · 이메일
```

**1단계:**

<div class="prompt-box not-prose" data-prompt="4-3" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-3</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

index.html을 만들어줘. [회사이름] 홈페이지야. 위에서 아래로:
1. 맨 위: 로고(images/logo.png, 없으면 글자로)
2. 첫 화면: 슬로건 "[슬로건]"과 "상담 신청" 버튼
3. 서비스 3개: 이름, 대상, 가격 (예시로 채워줘)
스타일은 style.css에 따로, 폰에서도 보기 좋게.

</div>
</div>

**2단계:**

<div class="prompt-box not-prose" data-prompt="4-3b" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-3b</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

서비스 아래에 고객 후기 카드 2개(예시 글)를 넣고, 맨 아래에 연락처 "[주소·전화·이메일]"를 넣어줘.

</div>
</div>

::: practice
- [ ] 슬로건과 "상담 신청" 버튼이 첫 화면에 보인다
- [ ] 서비스 3개가 카드로 보인다
- [ ] 후기 카드 2개와 맨 아래 연락처가 있다
- [ ] 버튼에 마우스를 올리면 모양이 바뀐다 (안 바뀌면 "버튼에 마우스를 올리면 살짝 진해지게"라고 요청)
:::

---

### 🎉 행사·웨딩·모임 (★★★ 어려움 · 약 35분)

돌잔치, 결혼식, 동문회, 전시회 등. 갤러리·타임테이블·참석 폼이 있어 가장 손이 갑니다. 앞의 유형을 한 번 해본 뒤에 도전하세요.

**준비할 파일:**

| 준비물 | 설명 | 파일명 예시 |
|---|---|---|
| 대표 사진 | 1장 | `images/main.jpg` |
| 사진 갤러리 | 3~5장 (없으면 회색 상자) | `images/gallery-1.jpg` ~ |

**미리 적어둘 것:**

```
행사 이름:
날짜와 시간:
장소: (주소 + 건물/층)
프로그램: 14:00 리셉션 / 15:00 본 행사 / 17:00 저녁
안내 사항: (주차, 드레스코드 등)
```

**1단계:**

<div class="prompt-box not-prose" data-prompt="4-4" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-4</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

index.html을 만들어줘. [행사이름] 초대 페이지야. 위에서 아래로:
1. 맨 위: 행사 이름과 날짜·시간 "[날짜와 시간]"을 크게 (images/main.jpg 배경, 없으면 색 배경)
2. 장소: 주소 "[주소]"와 지도 자리(회색 상자)
3. 프로그램: 시간 → 내용 타임테이블 (예시로 채워줘)
스타일은 style.css에 따로, 모바일 중심, 따뜻하고 우아한 느낌.

</div>
</div>

**2단계:**

<div class="prompt-box not-prose" data-prompt="4-4b" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-4b</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

맨 아래에 안내 사항(주차, 드레스코드)과 연락처를 넣고, 그 위에 사진 3장을 가로로 나란히 보여주는 갤러리를 넣어줘.

</div>
</div>

::: practice
- [ ] 행사 이름과 날짜가 맨 위에 크게 보인다
- [ ] 타임테이블이 시간 순서대로 읽힌다
- [ ] 갤러리 사진(또는 회색 상자) 3개가 보이고, 폰 크기에서도 화면 밖으로 넘치지 않는다
:::

---

## 더 해보기 (선택) — 어려워서 뒤로 보낸 것들

아래는 처음엔 **건너뛰어도 되는** 요소입니다. 기본 페이지가 마음에 들 때, 하나씩 따로 요청하세요. (지도·폼 등은 5강·11강에서 제대로 다룹니다.)

| 하고 싶은 것 | 난이도 | 이렇게 요청 |
|---|---|---|
| 상단 메뉴 링크 | ★★ | "상단에 메뉴 링크를 넣고 누르면 해당 섹션으로 스크롤되게" |
| 다크 모드 | ★★ | "전체를 어두운 배경 + 밝은 글자 디자인으로 바꿔줘" |
| 이력서 PDF 버튼 | ★★ | "files/resume.pdf를 여는 '이력서 보기' 버튼 추가" |
| 블로그 RSS 아이콘 | ★★★ | 지금은 건너뛰고 11강 이후 검토 |
| 참석 여부 입력 폼 | ★★★ | 11강 문의 폼에서 함께 다룸 |
| 사진 슬라이드(자동 넘김) | ★★★ | "사진이 3초마다 자동으로 넘어가게" (애니메이션이라 마지막에) |
| 여러 페이지 | ★★★ | 7강에서 |

---

> **랜딩페이지·강좌 모집 페이지**를 만들고 싶다면? → [랜딩페이지 만들기](/lectures/landing-page) 과정을 참고하세요. 전환율 높은 구조, CTA 최적화, 유형별 템플릿을 다룹니다.

## 사진 준비 팁

1. **파일 이름**: 영어 소문자 + 하이픈. `카페외관.jpg` ❌ → `exterior.jpg` ✅
2. **크기**: 가로 1600px 이하면 충분합니다. 너무 크면 느려집니다
3. **폴더**: `my-site/images/` 폴더를 만들고 그 안에 넣으세요
4. **사진이 없으면**: Claude Code에게 "사진 자리를 회색 상자로 해줘"라고 하면 됩니다. 나중에 교체합니다

<div class="prompt-box not-prose" data-prompt="4-6" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-6</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

images 폴더를 만들고 내가 넣은 사진 파일 이름을 확인해줘.

</div>
</div>

---

## 2. 규칙 파일 만들기

Claude Code는 대화가 끝나면 잊습니다. 그래서 프로젝트 폴더에 `CLAUDE.md`라는 파일을 두면 **매번 자동으로 읽고 시작**합니다. 신입 직원에게 주는 안내문이라고 생각하세요.

앱 대화창에:

<div class="prompt-box not-prose" data-prompt="4-7" data-level="required">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-7</span><span class="prompt-level prompt-level-required">⭐ 필수</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

CLAUDE.md 파일을 만들어줘. 내용은:
- 이 프로젝트는 [내 사이트 이름]의 홈페이지다. 프레임워크 없이 HTML과 CSS 파일만 쓴다.
- 나는 코딩을 모른다. 설명은 한국어로 짧게, 전문 용어는 풀어서.
- 파일을 만들거나 고친 뒤에는 미리보기에서 확인하는 방법을 알려준다.
- 요청한 것만 바꾼다. 다른 걸 바꿔야 하면 먼저 물어본다.
- 새 도구 설치가 필요하면 이유를 설명하고 허락을 받는다.

</div>
</div>

승인 창이 뜨면 내용을 읽고 **Yes**. 왼쪽 파일 트리에 `CLAUDE.md`가 나타납니다.

## 3. 첫 요청: 설계도를 말로

앞에서 고른 유형의 **1단계 프롬프트**를 복사해서 [대괄호]를 내 내용으로 바꾸세요. 준비한 메모를 보면서 채우면 됩니다. 결과가 마음에 들면 **2단계 프롬프트**를 이어서 보내세요. (이미 "먼저 이것부터"로 만들어 둔 파일에 덧붙여 가도 좋습니다.)

Claude Code가 `index.html`과 `style.css` 두 파일을 만듭니다. 권한 요청(변경 비교 화면)을 읽고 수락(Yes)하세요.

## 4. 미리보기에서 확인하고 고치기

파일이 만들어지면 오른쪽 **미리보기 패널**에 홈페이지가 자동으로 나타납니다.

미리보기 패널이 보이지 않으면:
- 앱 상단 메뉴 → **View → Preview** 또는 미리보기 아이콘 클릭
- 또는 왼쪽 파일 트리에서 `index.html`을 더블클릭하면 브라우저에서 열립니다

**첫 홈페이지입니다.** 못생겨도 괜찮습니다. 이제부터 고칩니다.

마음에 안 드는 것 **하나씩** 말합니다:

<div class="prompt-box not-prose" data-prompt="4-8" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-8</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

첫 화면의 한 줄 소개 글자를 더 크게, 버튼은 진한 갈색으로.

</div>
</div>

승인 → Yes → 미리보기 자동 갱신.

<div class="prompt-box not-prose" data-prompt="4-9" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-9</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

메뉴 3개를 폰에서는 세로로, PC에서는 가로로 나란히.

</div>
</div>

규칙은 **한 요청에 하나만**. "이것도 저것도" 하면 어디가 잘못됐는지 못 찾습니다.

## 5. Git으로 세이브

게임의 세이브 포인트입니다. 지금 상태를 기록해두면 다음에 망쳐도 여기로 돌아올 수 있습니다.

Code 탭 대화창에 이렇게 시키세요:

> 🗣️ "이 폴더를 Git으로 관리하기 시작하고, 지금 상태를 '첫 홈페이지'라는 메시지로 세이브해줘."

명령을 실행해도 되는지 권한 요청이 뜨면 내용을 읽고 수락하세요. 클로드가 아래 세 가지 일을 해줍니다.

- `git init`: 이 폴더를 Git으로 관리 시작 (프로젝트당 한 번만)
- `git add .`: 지금 파일 전부를 세이브 대상으로
- `git commit -m "메시지"`: 세이브

`3 files changed` 같은 글이 나오면 성공입니다.

### 터미널로도 할 수 있어요

앱 안의 **터미널 탭**(앱 하단 또는 메뉴 → Terminal)에 세 줄을 직접 입력해도 같습니다:

```bash
git init
git add .
git commit -m "첫 홈페이지"
```

### 되돌리기 미리 연습

일부러 망쳐봅니다. 대화창에:

<div class="prompt-box not-prose" data-prompt="4-10" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-10</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

index.html 내용을 전부 지우고 "망했다"만 남겨줘.

</div>
</div>

미리보기 → 정말 망했습니다. 이어서 대화창에:

> 🗣️ "방금 세이브한 상태로 되돌려줘. 세이브한 뒤에 바뀐 건 전부 취소."

권한 요청을 읽고 수락 → 미리보기 새로고침 → 돌아왔습니다. **이 안도감을 기억하세요.** 이후로 Claude Code에게 과감하게 시킬 수 있습니다.

터미널로 되돌리려면 앱 터미널 탭에서 아래 한 줄을 입력해도 됩니다:

```bash
git checkout .
```

## 오늘의 실습 체크

::: practice
- [ ] "먼저 이것부터" 한 페이지가 미리보기에서 열린다
- [ ] 내 유형을 하나 골라 1단계·2단계 프롬프트를 보냈고 결과를 눈으로 확인했다
- [ ] `CLAUDE.md`가 왼쪽 파일 트리에 보인다
- [ ] 고치기를 세 번 이상 했다 (한 요청에 하나씩)
- [ ] `git commit`을 했고, 일부러 망친 뒤 되돌려서 원래 화면으로 돌아오는 것을 확인했다
:::

## 다음 강의

5강에서 회색 상자를 진짜 사진으로, 지도 자리를 진짜 지도로 바꾸고 글을 다듬습니다.
