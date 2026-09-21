---
number: 8
title: CTA 최적화·배포·전환 분석
subtitle: 전환율을 높이고, 배포하고, 성과를 측정하는 마무리
goal: CTA 최적화 기법을 적용하고, Vercel에 배포하고, 전환 추적을 설정합니다.
minutes: 45
part: 3부 · 최적화와 공개
---

## CTA 버튼 최적화

### 색상

> CTA 버튼 색을 페이지 배경과 가장 대비되는 색으로 바꿔줘. 나머지 색은 그대로.

규칙: **CTA 버튼은 페이지에서 유일하게 그 색을 쓰는 요소**여야 합니다.

| 배경 | 좋은 CTA 색 | 피할 색 |
|---|---|---|
| 흰색/밝은 | 파란, 초록, 주황 | 연한 회색, 흰색 |
| 다크 모드 | 형광 초록, 노란, 보라 | 진한 회색, 검정 |

### 문구

| 약한 CTA | 강한 CTA |
|---|---|
| "제출" | "무료로 시작하기" |
| "신청" | "지금 수강 신청 (선착순 20명)" |
| "문의" | "무료 30분 상담 받기" |
| "다운로드" | "앱 다운로드 — 30초면 끝" |

> CTA 버튼 문구를 "[강한 CTA 문구]"로 바꿔줘.

### 위치와 크기

> CTA 버튼을 히어로, 가격 섹션, 페이지 맨 아래 — 최소 3곳에 넣어줘. 크기는 패딩 16px 24px, 글자 18px 이상으로.

### 주변 요소

CTA 바로 위에 한 줄을 추가합니다:

> CTA 버튼 바로 위에 "✓ 3일 무료 체험 · 언제든 해지 · 카드 등록 불필요" 같은 안심 문구를 작은 글씨로 넣어줘.

---

## Git 세이브 + GitHub 연결

```bash
git init
git add .
git commit -m "랜딩페이지 완성"
```

GitHub 연결:

> GitHub에 my-landing 저장소를 만들고 push하는 명령을 알려줘.

```bash
git remote add origin https://github.com/[내아이디]/my-landing.git
git push -u origin main
```

---

## Vercel 배포 (5분)

1. [vercel.com](https://vercel.com) 가입 → GitHub 연결
2. **New Project** → `my-landing` 저장소 선택
3. **Framework Preset: Other** → **Deploy**
4. 30초 후 `https://my-landing-xxxxx.vercel.app`으로 공개

### 도메인 연결

> 내 도메인 my-product.com을 Vercel에 연결하는 순서를 알려줘.

Vercel 대시보드 → Settings → Domains → 도메인 입력 → DNS 설정 안내를 따르면 HTTPS까지 자동.

---

## 전환 추적 설정

### 방법 1: Vercel Analytics (가장 쉬움)

Vercel 대시보드 → Analytics → Enable. 방문자 수, 페이지뷰, 국가를 볼 수 있습니다.

### 방법 2: Google Analytics 이벤트

> index.html의 head에 Google Analytics(GA4) 코드를 넣어줘. 측정 ID는 G-XXXXXXXXXX 야. CTA 버튼을 클릭하면 'cta_click' 이벤트가 발생하게 해줘.

이렇게 하면 GA4 대시보드에서 "CTA를 클릭한 사람 수"를 확인할 수 있습니다.

### 방법 3: 간이 전환 추적

외부 도구 없이 하는 방법. CTA 링크에 UTM 파라미터를 붙입니다.

> CTA 버튼 링크를 "https://내사이트.com/signup?utm_source=landing&utm_medium=cta&utm_campaign=launch"로 바꿔줘.

가입 쪽에서 어디서 왔는지 추적 가능.

---

## A/B 테스트 — 간단한 방법

두 버전을 만들어 비교합니다.

> index.html을 복사해서 index-b.html을 만들어줘. B 버전에서는:
> 1. 헤드라인을 "[다른 헤드라인]"으로
> 2. CTA 버튼 색을 [다른 색]으로

A 버전: `my-product.com/`
B 버전: `my-product.com/index-b.html`

SNS에 둘 다 올려서 어느 쪽이 더 클릭이 많은지 비교. 이긴 쪽을 기본으로.

---

## 랜딩페이지 최종 체크리스트

### 구조
- [ ] 히어로에서 3초 안에 "뭔지" 알 수 있다
- [ ] CTA 버튼이 3곳 이상 반복된다
- [ ] 불필요한 메뉴/내비게이션이 없다

### 콘텐츠
- [ ] 헤드라인이 구체적이다 (숫자, 기간, 결과)
- [ ] 사회적 증거가 있다 (후기, 사용자 수, 언론)
- [ ] FAQ로 망설임을 해소했다

### 디자인
- [ ] CTA 버튼이 가장 눈에 띈다
- [ ] 폰에서도 읽기 편하다
- [ ] 로딩이 빠르다 (이미지 최적화)

### 배포
- [ ] GitHub에 올렸다
- [ ] Vercel에 배포됐다
- [ ] 전환 추적(Analytics)이 켜져 있다

## 과정 완료!

8강 동안 5가지 유형, 15개 사례의 랜딩페이지를 다뤘습니다. 내 유형에 맞는 사례를 골라 준비물만 바꾸면 어떤 랜딩페이지든 만들 수 있습니다.

다음 과정으로 넘어가세요:
- 홈페이지를 만들고 싶다면 → **홈페이지 만들기**
- 서비스를 만들고 싶다면 → **웹 서비스 만들기 20강**
