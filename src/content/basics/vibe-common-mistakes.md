---
title: 초보자가 자주 하는 실수와 대처
summary: 권한 요청 안 읽기, 큰 요청 한 번에, 커밋 없이 수정 반복, 비밀값 붙이기 같은 실수와 이 사이트 강좌·팁에서 찾는 법.
order: 16
updated: '2026-10-06'
sources:
  - https://code.claude.com/docs/en/desktop
  - https://code.claude.com/docs/en/memory
  - https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things
  - https://vercel.com/docs/deployments/troubleshoot-a-build
---

> **화면 표시가 다를 수 있어요.** 실수는 누구나 해요. 아래 순서대로 하나만 고치면 돼요.

## 권한 요청을 읽지 않고 수락해요

비교 화면(diff)을 안 보고 계속 누르면, 엉뚱한 파일이 바뀌어도 몰라요. 어느 파일이 어떻게 바뀌는지 **한 번은 읽고** 눌러요. 이상하면 거절하고 이유를 물어요. `git push`나 `npm install`처럼 밖으로 영향이 가는 명령은 특히 천천히요. → [승인 모드와 안전장치](/skills/permissions-and-safety), [홈페이지 3강](/lectures/homepage/lesson-03)

## 큰 요청을 한 번에 해요

"쇼핑몰 통째로 만들어줘"는 어디서 틀렸는지 찾을 수 없어요. 한 조각씩 시키고, 큰 일은 계획부터 받아요. → [계획 먼저, 코드는 나중에](/skills/plan-mode-and-context), [조각 하나의 작업 루프](/skills/one-slice-loop)

## 한 대화를 계속 끌어요

길어지면 앞 내용을 놓치고 같은 실수를 반복해요. 공식 안내상 세션마다 기록이 따로이니, 일이 바뀌면 새 대화를 열어요. 같은 말을 반복하면 규칙 파일에 적어요. → [AI가 같은 실수를 반복해요](/tips#ai-loops)

## 커밋 없이 계속 고쳐요

공식 문서대로 **커밋 전 변경은 버리면 되살릴 수 없어요.** 잘 되는 순간마다 커밋해요. → [깃 기초](/basics/git-basics), [방금 커밋을 취소하고 싶어요](/tips#git-undo)

## 비밀값을 채팅·깃허브에 붙여요

API 키와 `.env`는 채팅에도, 깃허브에도 올리지 않아요. 이미 올렸다면 → [.env를 실수로 커밋했어요](/tips#gitignore-env), [안전·비용·계정](/basics/vibe-safety-money)

## 배포 전에 로컬 확인을 건너뛰어요

내 컴퓨터에서 `npm run build`가 통과하고 폰으로도 열리는지 보고 올려요. 공식 문서도 먼저 빌드해 보라고 안내해요. → [배포 후 확인과 흔한 실패](/basics/deploy-troubleshooting), [로컬은 되는데 버셀 배포가 실패해요](/tips#vercel-build-fail)

## 환경변수를 바꾸고 다시 배포하지 않아요

버셀은 환경변수를 바꿔도 이미 만든 배포에는 적용하지 않고 **새 배포부터** 적용해요. → [깃-버셀 연동과 배포](/basics/git-vercel-deploy), [.env.local 반영이 안 돼요](/tips#env-not-loaded)

## 다른 폴더를 골라요

프로젝트 폴더가 다르면 파일이 안 보이거나 엉뚱한 곳에 만들어져요. 시작할 때 폴더 이름부터 확인해요. 폴더 이름은 영어 소문자와 하이픈이 안전해요. → [클로드 기초](/basics/claude-basics), [홈페이지 0강](/lectures/homepage/lesson-00)

## "다 됐대요"를 그대로 믿어요

직접 열어서 눌러 봐요. → [AI는 다 됐다는데 화면에선 안 돼요](/tips#ai-says-done)

## 자동화에서 발행까지 맡겨요

블로그·SNS 자동화는 **내 계정에 내 이름으로** 올라가요. 확인 지점(체크포인트)을 건너뛰지 않아요. → [블로그 7강](/lectures/naver-blog/lesson-07), [SNS 7강](/lectures/sns/lesson-07)

## 실수했는데 어디서부터 보죠?

먼저 숨을 고르고, 지금 상태가 커밋돼 있는지부터 확인해요. 커밋돼 있으면 거의 다 되돌릴 수 있어요. 에러 메시지가 있다면 통째로 복사해 두고 [막혔을 때 순서](/basics/vibe-troubleshooting-flow)대로 하나씩 해요. 같은 실수를 두 번 하면 규칙 파일에 한 줄 적어 두는 것도 좋아요.

---

<small>출처(확인일 2026-10-06): [Claude 데스크탑 앱 문서](https://code.claude.com/docs/en/desktop) · [Claude 메모리·CLAUDE.md](https://code.claude.com/docs/en/memory) · [git-scm 되돌리기](https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things) · [버셀 빌드 오류 해결](https://vercel.com/docs/deployments/troubleshoot-a-build).</small>
