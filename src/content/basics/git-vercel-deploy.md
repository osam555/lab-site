---
title: 깃-버셀 연동과 배포
summary: 깃허브 저장소를 버셀에 가져오면 푸시할 때마다 자동 배포돼요. 프리뷰와 프로덕션의 차이, 환경변수 한 줄.
order: 5
updated: '2026-10-06'
sources:
  - https://vercel.com/docs/git
  - https://vercel.com/docs/deployments/environments
  - https://vercel.com/docs/environment-variables
---

> **화면 표시가 다를 수 있어요.** 비슷한 이름을 찾아보세요.

## 큰 흐름

1. 코드를 깃허브 저장소에 올려요. ([깃허브 기초](/basics/github-basics))
2. 버셀에서 **Add New → Project**(공식 문서 표기는 "New Project" 버튼)를 누르고, 연결된 깃 서비스의 저장소 목록에서 내 저장소를 **Import**해요.
3. 설정 화면에서 프로젝트 이름, **Framework Preset**(Next.js 등), 루트 디렉터리, 빌드 설정, **환경변수**를 확인해요. 대부분 자동으로 잡혀요.
4. **Deploy**를 눌러요. 끝나면 주소가 생겨요.
5. 그 뒤로는 **깃에 푸시할 때마다 버셀이 자동으로 다시 배포**해요. 공식 문서 표현으로 "모든 브랜치 푸시"에 자동 배포가 일어나요.

클로드에게는 이렇게 시켜요.

> 변경 사항을 커밋하고 푸시해줘. 푸시하면 버셀이 자동 배포할 거야.

## 프리뷰와 프로덕션

| | 언제 생기나요 | 누가 보나요 |
|---|---|---|
| **프로덕션** | 프로덕션 브랜치(보통 `main`)에 푸시·병합할 때 | 방문자 (실제 주소) |
| **프리뷰** | 그 밖의 브랜치에 푸시하거나 PR을 만들 때 | 나·확인하는 사람 (배포마다 임시 주소) |

새 프로젝트의 **첫 배포는 항상 프로덕션**이에요. 프로덕션 브랜치는 새 프로젝트를 만들 때 `main`이 있으면 `main`, 없으면 `master` 순으로 정해져요. 바꾸려면 프로젝트 설정의 Environments에서 Production의 Branch Tracking을 고쳐요.

그래서 **큰 수정은 브랜치에서 하고, 프리뷰 주소로 확인한 뒤 `main`에 합치는** 흐름이 안전해요.

## 환경변수 한 줄

API 키처럼 코드에 쓰면 안 되는 값은 버셀 프로젝트 설정의 **Environment Variables**에 넣어요. 값마다 적용할 환경(Production·Preview·Development)을 고를 수 있어요. 중요: **환경변수를 바꿔도 이미 만들어진 배포에는 적용되지 않고 새 배포부터 적용돼요.** 바꾼 뒤 다시 배포해요. 내 컴퓨터의 `.env.local`과는 별개예요.

## 터미널로도 할 수 있어요

`vercel`(프리뷰 배포), `vercel --prod`(프로덕션 배포)가 있어요. 실습: [홈페이지 만들기 8강](/lectures/homepage/lesson-08) · 배포가 막혔을 때: [배포 후 확인과 흔한 실패](/basics/deploy-troubleshooting)

---

<small>출처(공식 문서, 확인일 2026-10-06): vercel.com/docs — [깃 연동](https://vercel.com/docs/git) · [환경](https://vercel.com/docs/deployments/environments) · [환경변수](https://vercel.com/docs/environment-variables). 대시보드 버튼 이름은 바뀔 수 있어요.</small>
