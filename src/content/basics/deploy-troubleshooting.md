---
title: 배포 후 확인과 흔한 실패
summary: 배포가 끝나면 무엇을 확인하는지, 빌드가 실패했을 때 로그를 어디서 어떻게 읽는지, 환경변수·브랜치 실수.
order: 6
updated: '2026-10-06'
sources:
  - https://vercel.com/docs/deployments/troubleshoot-a-build
  - https://vercel.com/docs/environment-variables
  - https://vercel.com/docs/git
---

> **화면 표시가 다를 수 있어요.** 비슷한 이름을 찾아보세요.

## 배포 후 확인 3가지

1. 버셀 프로젝트의 **Deployments**에서 최신 배포가 성공(Ready) 상태인지 봐요.
2. 배포 주소를 열어서 **내 눈으로** 확인해요. 폰으로도 열어봐요.
3. 프리뷰로 확인했다면, 프로덕션 브랜치에 합쳐졌는지 봐요. 합쳐야 실제 주소에 반영돼요.

## 빌드가 실패했을 때: 로그 읽기

실패하면 Deployments 목록에 오류 표시가 떠요. 공식 안내대로 로그를 봐요.

1. 프로젝트 → **Deployments** → 실패한 배포를 열어요.
2. **Building** 항목을 펼쳐서 빌드 로그를 봐요.
3. 아래로 내려가며 빨간 **Error**를 찾아요. **마지막 줄(예: `exited with 1`)보다 몇 줄 위**에 진짜 원인이 있는 경우가 많다고 공식 문서가 알려줘요.

그 오류를 통째로 클로드에게 주세요.

> 버셀 빌드가 실패했어. 아래 로그가 오류 부분이야. 원인을 찾아서 고치고, 내 컴퓨터에서 `npm run build`가 통과하는지 확인해줘. (로그 붙여넣기)

공식 문서도 **배포 전에 내 컴퓨터에서 먼저 빌드해 보라**고 권해요. 같은 오류가 로컬에서도 나는 경우가 많아요. (터미널로도: `npm run build`)

로그 자체가 없는 실패도 있어요. 설정 파일(`vercel.json`)이 잘못됐거나, 팀원이 아닌 사람이 커밋했을 때 같은 경우는 화면에 오류 설명이 대신 나와요.

## 흔한 실패

| 증상 | 확인할 것 |
|---|---|
| 내 컴퓨터에서는 되는데 버셀에서만 안 돼요 | **환경변수 누락**이 가장 흔해요. 로컬 `.env.local`의 값을 버셀 Environment Variables에도 넣었는지 봐요. 바꾼 뒤엔 **새로 배포**해야 적용돼요. ([.env.local을 고쳤는데 반영이 안 돼요](/tips)) |
| `module not found` | 파일 경로·대소문자·빠진 패키지를 확인해요. 클로드에게 로그를 보여줘요. |
| 푸시했는데 배포가 안 돼요 | 푸시한 **브랜치**를 봐요. `main`이 아니면 프리뷰로 만들어져요. 프로덕션 브랜치 설정도 확인해요. 비공개 저장소는 커밋한 사람이 버셀 쪽 권한이 있는지도 봐요. |
| 이전 상태로 돌리고 싶어요 | 깃에서 되돌리는 커밋을 푸시해요. ([깃 기초](/basics/git-basics)) 급하면 Deployments에서 이전 배포로 되돌리는 방법도 있어요([홈페이지 만들기 11강](/lectures/homepage/lesson-11)). |

---

<small>출처(공식 문서, 확인일 2026-10-06): vercel.com/docs — [빌드 오류 해결](https://vercel.com/docs/deployments/troubleshoot-a-build) · [환경변수](https://vercel.com/docs/environment-variables) · [깃 연동](https://vercel.com/docs/git).</small>
