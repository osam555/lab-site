---
number: 4
title: 첫 홈페이지 파일 만들기
subtitle: 오늘 미리보기에서 내 홈페이지를 봅니다
goal: 유형별 준비 파일을 정리하고, 종이 설계도를 Claude Code에게 전달해 index.html을 만들고, Git으로 첫 세이브를 합니다.
minutes: 50
part: 2부 · 만들기
---

## 오늘의 순서

1. 내 홈페이지 유형 고르고 준비물 정리 (10분)
2. 규칙 파일 만들기 (5분)
3. 설계도를 말로 옮겨 첫 요청 (10분)
4. 미리보기에서 확인하고 고치기 (15분)
5. Git으로 세이브 (5분)

---

## 1. 내 홈페이지 유형과 준비물

아래에서 가장 가까운 유형을 고르세요. 준비물을 미리 정리해두면 Claude Code에게 한 번에 정확히 전달할 수 있습니다.

### 🏪 가게·매장 (카페, 식당, 미용실, 꽃집 등)

<div class="not-prose my-4">
  <div class="tip-box">
    <div class="flex items-center justify-between flex-wrap gap-2">
      <div>
        <span class="font-bold text-accent">☕ 카페/매장 샘플:</span> 감성 카페 홈페이지 라이브 미리보기
      </div>
      <a href="/examples/homepage-cafe.html" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-accent text-white rounded-lg hover:opacity-90 transition-opacity">
        완성 샘플 미리보기 ↗
      </a>
    </div>
  </div>
</div>

**준비할 파일** — `my-site/` 폴더에 넣어두세요:

| 준비물 | 설명 | 파일명 예시 |
|---|---|---|
| 가게 사진 | 외관·내부 1~3장 | `images/exterior.jpg`, `interior.jpg` |
| 대표 메뉴/서비스 사진 | 3~5장 | `images/menu-1.jpg` ~ `menu-5.jpg` |
| 로고 | 없으면 생략 (Claude가 텍스트 로고 만듦) | `images/logo.png` |
| 메뉴/가격표 | 텍스트로 정리 | - |

**미리 적어둘 것:**

```
가게 이름:
한 줄 소개: (예: "종로 골목의 자가배전 카페")
주소:
전화번호:
영업시간: (예: "매일 10:00 – 22:00, 월요일 휴무")
SNS: (인스타그램, 카카오채널 등)

대표 메뉴 3~5개:
  1. 이름 / 가격 / 한 줄 설명
  2.
  3.

특별히 넣고 싶은 것: (예: "예약 버튼", "주차 안내", "와이파이 비번")
```

**프롬프트 예시:**

<div class="prompt-box not-prose" data-prompt="4-1" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-1</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

index.html을 만들어줘. [가게이름] 홈페이지야. 한 페이지에 위에서 아래로:
1. 상단: 왼쪽에 가게 이름, 오른쪽에 "메뉴 / 오시는 길 / 문의" 링크
2. 첫 화면: images/exterior.jpg 배경, 그 위에 "[한 줄 소개]", "[예약하기]" 버튼
3. 대표 메뉴 [3]개: 각각 images/menu-N.jpg, 이름, 가격
4. 오시는 길: 지도 자리 + 주소 "[주소]", 영업시간 "[시간]"
5. 하단: 전화 "[번호]", 인스타 "[아이디]"
스타일은 style.css에 따로. 폰에서도 보기 좋게.

</div>
</div>

---

### 👤 포트폴리오·이력서 (디자이너, 프리랜서, 작가 등)

<div class="not-prose my-4">
  <div class="tip-box">
    <div class="flex items-center justify-between flex-wrap gap-2">
      <div>
        <span class="font-bold text-accent">💼 포트폴리오 샘플:</span> 모던 개발자/디자이너 포트폴리오 미리보기
      </div>
      <a href="/examples/homepage-portfolio.html" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-accent text-white rounded-lg hover:opacity-90 transition-opacity">
        완성 샘플 미리보기 ↗
      </a>
    </div>
  </div>
</div>

**준비할 파일:**

| 준비물 | 설명 | 파일명 예시 |
|---|---|---|
| 프로필 사진 | 1장 | `images/profile.jpg` |
| 작업물 이미지 | 3~6장 | `images/work-1.jpg` ~ `work-6.jpg` |
| 이력서 PDF | 선택 | `files/resume.pdf` |

**미리 적어둘 것:**

```
이름 / 직함:
한 줄 소개: (예: "브랜드 디자이너 | 5년 경력")
이메일:
SNS/링크: (GitHub, Behance, LinkedIn 등)

대표 작업물 3~6개:
  1. 프로젝트명 / 한 줄 설명 / 카테고리
  2.
  3.

경력 요약: (2~3줄)
기술 스택 / 사용 도구:
```

**프롬프트 예시:**

<div class="prompt-box not-prose" data-prompt="4-2" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-2</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

index.html을 만들어줘. [이름]의 포트폴리오 홈페이지야.
1. 상단: 이름 + 직함, "작업물 / 소개 / 연락" 링크
2. 히어로: images/profile.jpg 원형, 한 줄 소개, "이력서 보기" 버튼 (files/resume.pdf 링크)
3. 대표 작업물 [N]개: 카드형 그리드, 각각 이미지 + 제목 + 설명
4. 소개: 경력 요약 2~3줄 + 기술 스택 태그
5. 하단: 이메일, GitHub, LinkedIn 아이콘 링크
깔끔한 모던 스타일. 다크모드 기본.

</div>
</div>

---

### 🏢 소규모 사업체·회사 (학원, 사무소, 공방 등)

<div class="not-prose my-4">
  <div class="tip-box">
    <div class="flex items-center justify-between flex-wrap gap-2">
      <div>
        <span class="font-bold text-accent">🏢 기업/소호 샘플:</span> IT 테크 소규모 회사 홈페이지 미리보기
      </div>
      <a href="/examples/homepage-company.html" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-accent text-white rounded-lg hover:opacity-90 transition-opacity">
        완성 샘플 미리보기 ↗
      </a>
    </div>
  </div>
</div>

**준비할 파일:**

| 준비물 | 설명 | 파일명 예시 |
|---|---|---|
| 회사/서비스 사진 | 2~4장 | `images/main.jpg`, `service-1.jpg` |
| 로고 | | `images/logo.png` |
| 팀 사진 | 선택 | `images/team.jpg` |

**미리 적어둘 것:**

```
회사/서비스 이름:
슬로건: (예: "아이의 창의력을 키우는 코딩 교실")
주소:
전화번호:
이메일:

서비스/프로그램 3~4개:
  1. 이름 / 대상 / 가격 또는 기간
  2.
  3.

회사 소개: (3~5줄)
고객 후기: (있으면 2~3개)
```

**프롬프트 예시:**

<div class="prompt-box not-prose" data-prompt="4-3" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-3</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

index.html을 만들어줘. [회사이름] 홈페이지야.
1. 상단: 로고(images/logo.png) + "서비스 / 소개 / 수강신청" 링크
2. 히어로: images/main.jpg 배경, 슬로건 "[슬로건]", "상담 신청" 버튼
3. 서비스 [N]개: 아이콘 또는 이미지 + 이름 + 대상 + 가격
4. 회사 소개: 텍스트 + images/team.jpg
5. 고객 후기: 카드 2~3개
6. 하단: 주소, 전화, 이메일
신뢰감 있는 깔끔한 디자인. 반응형.

</div>
</div>

---

### 🎉 행사·웨딩·모임 (돌잔치, 결혼식, 동문회, 전시회 등)

**준비할 파일:**

| 준비물 | 설명 | 파일명 예시 |
|---|---|---|
| 대표 사진 | 1~2장 | `images/main.jpg` |
| 사진 갤러리 | 선택, 5~10장 | `images/gallery-1.jpg` ~ |

**미리 적어둘 것:**

```
행사 이름:
날짜와 시간:
장소: (주소 + 건물/층)
주최자 이름:

프로그램/타임테이블:
  14:00 - 리셉션
  15:00 - 본 행사
  17:00 - 저녁

안내 사항: (주차, 드레스코드, 축의금 계좌 등)
RSVP 연락처:
```

**프롬프트 예시:**

<div class="prompt-box not-prose" data-prompt="4-4" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-4</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

index.html을 만들어줘. [행사이름] 초대 페이지야.
1. 히어로: images/main.jpg 배경, "[행사이름]", 날짜·시간 크게
2. 장소: 지도 자리 + 주소 + 주차 안내
3. 프로그램: 타임테이블 (시간 → 내용)
4. 갤러리: 사진 5장 슬라이드
5. 참석 여부: 이름·인원 입력 폼 (10강에서 연결)
6. 하단: 연락처, 계좌 정보
따뜻하고 우아한 느낌. 모바일 중심.

</div>
</div>

---

### 📝 개인·블로그형 (취미, 일기, 지식 공유 등)

**준비할 파일:**

| 준비물 | 설명 | 파일명 예시 |
|---|---|---|
| 프로필 사진 | 1장 | `images/profile.jpg` |
| 글에 들어갈 사진 | 필요할 때마다 | `images/post-1.jpg` |

**미리 적어둘 것:**

```
사이트 이름:
한 줄 소개:
작성자 이름 또는 닉네임:
이메일 또는 SNS:

첫 글 주제: (제목 + 요약 2줄)
카테고리: (예: "여행, 요리, 일상")
```

**프롬프트 예시:**

<div class="prompt-box not-prose" data-prompt="4-5" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-5</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

index.html을 만들어줘. "[사이트이름]" 블로그형 홈페이지야.
1. 상단: 사이트 이름 + "글 / 소개" 링크
2. 히어로: 한 줄 소개 + 프로필 사진
3. 최근 글 목록: 카드 3개 (제목, 날짜, 요약 2줄, 썸네일)
4. 소개: 프로필 사진 + 자기 소개 3줄
5. 하단: 이메일, RSS 아이콘
깔끔한 미니멀 블로그 스타일. 본문 읽기 편한 폰트.

</div>
</div>

---

> **랜딩페이지·강좌 모집 페이지**를 만들고 싶다면? → [랜딩페이지 만들기](/lectures/landing-page) 과정을 참고하세요. 전환율 높은 구조, CTA 최적화, 유형별 템플릿(제품 출시·강좌 모집·앱 다운로드·이벤트)을 다룹니다.



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

<div class="prompt-box not-prose" data-prompt="4-7" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-7</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

CLAUDE.md 파일을 만들어줘. 내용은:
- 이 프로젝트는 [가게 이름]의 홈페이지다. 프레임워크 없이 HTML과 CSS 파일만 쓴다.
- 나는 코딩을 모른다. 설명은 한국어로 짧게, 전문 용어는 풀어서.
- 파일을 만들거나 고친 뒤에는 미리보기에서 확인하는 방법을 알려준다.
- 요청한 것만 바꾼다. 다른 걸 바꿔야 하면 먼저 물어본다.
- 새 도구 설치가 필요하면 이유를 설명하고 허락을 받는다.

</div>
</div>

승인 창이 뜨면 내용을 읽고 **Yes**. 왼쪽 파일 트리에 `CLAUDE.md`가 나타납니다.

## 3. 첫 요청: 설계도를 말로

위에서 고른 유형의 **프롬프트 예시**를 복사해서 [대괄호]를 내 내용으로 바꾸세요. 준비한 메모를 보면서 채우면 됩니다.

Claude Code가 `index.html`과 `style.css` 두 파일을 만듭니다. 승인 창을 읽고 Yes.

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

앱 안에 **터미널 탭**이 있습니다 (앱 하단 또는 메뉴 → Terminal). 세 줄을 입력합니다:

```bash
git init
git add .
git commit -m "첫 홈페이지"
```

- `git init`: 이 폴더를 Git으로 관리 시작 (프로젝트당 한 번만)
- `git add .`: 지금 파일 전부를 세이브 대상으로
- `git commit -m "메시지"`: 세이브

`3 files changed` 같은 글이 나오면 성공입니다.

### 되돌리기 미리 연습

일부러 망쳐봅니다. 대화창에:

<div class="prompt-box not-prose" data-prompt="4-10" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-10</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

index.html 내용을 전부 지우고 "망했다"만 남겨줘.

</div>
</div>

미리보기 → 정말 망했습니다. 앱 터미널에서:

```bash
git checkout .
```

미리보기 새로고침 → 돌아왔습니다. **이 안도감을 기억하세요.** 이후로 Claude Code에게 과감하게 시킬 수 있습니다.

## 오늘의 체크리스트

- [ ] 내 홈페이지 유형을 골랐다
- [ ] 준비물(사진, 메모)을 `my-site/images/`에 넣었다
- [ ] `CLAUDE.md`가 파일 트리에 있다
- [ ] `index.html`이 미리보기에서 열린다
- [ ] 고치기를 세 번 이상 했다
- [ ] `git commit`을 했고, 망친 뒤 `git checkout .`로 되돌려봤다

## 다음 강의

5강에서 회색 상자를 진짜 사진으로, 지도 자리를 진짜 지도로 바꾸고 글을 다듬습니다.
