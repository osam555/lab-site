---
title: 이미지·파일 다루기
summary: AI에게 사진을 보여주고, 파일을 주고받고, 이미지를 최적화하는 실전 방법
category: 워크플로
order: 10
minutes: 8
---

## 이미지를 AI에게 보여주는 방법

### 화면 캡처 직접 붙여넣기

- **Mac**: `Cmd + Shift + 4` → 드래그 → 대화창에 `Cmd + V`
- **Windows**: `Win + Shift + S` → 드래그 → 대화창에 `Ctrl + V`

> [이미지 붙여넣기 후] "이 디자인과 같은 레이아웃으로 홈페이지를 만들어줘."

> [에러 화면 캡처 후] "이 에러가 왜 나는지 보고 고쳐줘."

### 파일 경로로 지목하기

> "@images/hero.jpg 이미지를 보고, 어울리는 배경색을 HEX 코드로 추천해줘."

### Aside Browser에서 화면 공유

Chrome Extension 또는 Aside Browser의 화면 공유 버튼으로 현재 화면을 Claude에게 바로 보여줍니다.

---

## 이미지 최적화 자동화

사이트에 올릴 이미지는 크기를 줄여야 빠릅니다.

> images/ 폴더의 모든 이미지를:
> 1. 가로 1600px 이하로 리사이즈
> 2. WebP 포맷으로 변환
> 3. 각각 300KB 이하
> cwebp 또는 ImageMagick을 써줘. 원본은 images/originals/로 옮겨줘.

결과 확인:

> images/ 폴더의 파일 크기를 표로 보여줘. 300KB 넘는 것을 표시해줘.

---

## 파일 시스템 MCP로 외부 파일 접근

기본적으로 Claude Code는 **프로젝트 폴더** 안의 파일만 읽습니다. 바탕화면이나 Downloads 폴더의 파일을 다루려면 파일 시스템 MCP를 설치합니다.

> 파일 시스템 MCP를 추가해줘. 접근 허용 경로: ~/Desktop, ~/Downloads, ~/Documents/blog-drafts

이후:

> ~/Downloads/에서 가장 최근 사진 파일을 my-site/images/로 복사하고 WebP로 최적화해줘.

---

## 문서 파일 활용

### PDF·Word → 텍스트

> @documents/menu.pdf 파일을 읽어서 메뉴 항목과 가격을 표로 정리해줘.

### 마크다운 → 블로그 글

> @blog-drafts/2024-12-cafe.md 를 읽어서 네이버 블로그 형식으로 변환해줘. 이미지 자리는 [이미지1] 형식으로 표시해줘.

### CSV → 데이터 활용

> @data/reservations.csv 를 읽어서 이번 달 예약 건수와 피크 시간대를 분석해줘.

---

## 흔한 파일 작업 프롬프트

**폴더 정리**
> src/images/ 안의 파일들을 확장자별로 하위 폴더(jpg/, png/, svg/)로 분류해줘.

**중복 파일 찾기**
> images/ 폴더에서 이름이 비슷하거나 크기가 같은 중복 파일 후보를 찾아줘.

**백업**
> 프로젝트 전체를 오늘 날짜로 ~/Documents/backups/에 zip으로 압축해줘.
