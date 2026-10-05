---
title: 버셀 기초 — 계정·프로젝트·무료 플랜
summary: 버셀이 뭘 해주는지, 계정과 프로젝트 개념, 무료(Hobby) 플랜을 어떻게 이해하면 되는지.
order: 4
updated: '2026-10-06'
sources:
  - https://vercel.com/docs/accounts/create-an-account
  - https://vercel.com/docs/plans/hobby
  - https://vercel.com/docs/git
---

> **화면 표시가 다를 수 있어요.** 비슷한 이름을 찾아보세요.

## 버셀은 "내 사이트를 24시간 켜 두는 곳"이에요

내 컴퓨터에서 만든 사이트는 컴퓨터를 끄면 사라져요. **버셀(Vercel)**은 내 파일을 받아 인터넷에 올려서, 주소만 알면 누구나 열게 해줘요. 이렇게 올리는 일을 **배포(deploy)**라고 해요.

## 계정 만들기

공식 안내상 가입은 **이메일** 또는 **깃 서비스(GitHub·GitLab·Bitbucket)**로 해요.

- **GitHub로 가입**하면 깃허브와 바로 연결돼 저장소를 가져오기 편해요. 이 강좌는 이 방법을 권해요. ([깃허브 기초](/basics/github-basics))
- 이메일로 가입하면 처음엔 깃 서비스가 연결되지 않아요. 프로젝트를 만들 때는 어느 쪽이든 깃 서비스를 연결해야 한다고 안내돼 있어요.

## 프로젝트(Project)

버셀에서 **프로젝트 하나 = 사이트 하나**예요. 어느 저장소와 연결됐는지, 환경변수·도메인 같은 설정이 무엇인지가 들어 있고, 배포할 때마다 기록(Deployments)이 쌓여요. 배포 주소는 기본으로 `vercel.app`으로 끝나는 주소가 나와요. 내 도메인은 [도메인 기초](/basics/domain-basics)에서 연결해요.

## 무료 플랜(Hobby)은 이렇게 이해해요

공식 문서는 Hobby 플랜을 **무료이고, 개인 프로젝트와 소규모 앱을 위한 것**이라고 소개하고, **비상업적·개인 용도로 제한**된다고 적어 둬요.

- 연습·포트폴리오·취미 사이트는 무료로 시작하면 돼요.
- 돈을 버는 사업용 사이트는 무료 플랜이 맞는지 **공식 문서와 약관을 직접 확인**해요. 유료 플랜이 필요할 수 있어요.
- 무료 플랜에는 사용량 한도가 있어요. 숫자와 가격은 자주 바뀌니 [공식 요금제 문서](https://vercel.com/docs/plans/hobby)에서 확인해요.
- 조직(Organization) 소유의 비공개 저장소는 Hobby 팀에 배포할 수 없다고 안내돼 있어요. 내 개인 계정의 저장소는 해당하지 않아요.

## 프로덕션과 프리뷰

버셀은 배포를 **프로덕션**(방문자가 보는 공개 버전)과 **프리뷰**(공개 버전에 영향 없이 미리 확인하는 버전)로 나눠요. 자세한 것은 [깃-버셀 연동과 배포](/basics/git-vercel-deploy)에서 해요.

## 터미널로도 할 수 있어요

버셀 CLI의 `vercel`(프리뷰), `vercel --prod`(프로덕션)로도 배포할 수 있어요. 처음에는 웹 화면이 더 눈에 잘 보여요. 실습: [홈페이지 만들기 8강](/lectures/homepage/lesson-08)

---

<small>출처(공식 문서, 확인일 2026-10-06): vercel.com/docs — [계정](https://vercel.com/docs/accounts/create-an-account) · [Hobby 플랜](https://vercel.com/docs/plans/hobby) · [깃 연동](https://vercel.com/docs/git). 요금 수치는 일부러 적지 않았어요.</small>
