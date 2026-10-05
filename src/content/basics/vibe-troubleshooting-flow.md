---
title: 막혔을 때 순서
summary: 에러 복사 → 클로드에게 그대로 → 로그 보기 → 되돌리기 → 새 대화 → 강좌 팁 찾기 → 방에 물을 때 적을 것.
order: 18
updated: '2026-10-06'
sources:
  - https://vercel.com/docs/deployments/troubleshoot-a-build
  - https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things
  - https://code.claude.com/docs/en/desktop
---

> **화면 표시가 다를 수 있어요.** 순서대로 하나씩 해요. 앞 단계에서 풀리면 거기서 멈추면 돼요.

## 1. 에러 메시지를 통째로 복사해요

맨 마지막 줄만이 아니라 **전체**를 복사해요. 어떤 행동을 했을 때 나왔는지, 시도해 본 것도 같이 적어요. 화면이 하얗다면 브라우저 콘솔의 빨간 글씨를 복사해요. → [에러 디버깅하는 법](/skills/error-debugging)

## 2. 클로드에게 그대로 보여줘요

> 이 에러가 나고 있어: [붙여넣기] / [무엇을 했을 때] 나와. 원인을 먼저 설명하고, 이 에러만 최소한으로 고쳐줘.

[증상·기대·최근 변경] 형식은 [바이브코딩 15강](/lectures/vibe-coding/lesson-15)에, 더 많은 문장은 [프롬프트 패턴](/basics/vibe-prompt-patterns)에 있어요. 고친 뒤에는 "`npm run build`로 확인해줘"까지 시켜요.

## 3. 로그를 봐요

에러가 안 보이면 기록을 찾아요.

- **내 컴퓨터**: 개발 서버가 돌아가는 화면의 출력
- **버셀 배포**: Deployments → 실패한 배포 → Building 로그. 공식 문서대로 **마지막 줄보다 몇 줄 위**에 진짜 원인이 있는 경우가 많아요.

→ [배포 후 확인과 흔한 실패](/basics/deploy-troubleshooting), [로컬은 되는데 버셀 배포가 실패해요](/tips#vercel-build-fail)

## 4. 되돌려요

세 번 고쳐도 안 풀리면 접근을 바꿔요. 커밋 전이면 변경을 취소하고, 커밋 후면 되돌리는 커밋을 만들어요. 되돌리기는 실패가 아니에요. 단 커밋 전 변경은 취소하면 되살릴 수 없으니, 사라질 내용을 먼저 보여 달라고 해요. → [깃 기초](/basics/git-basics), [Git으로 안전하게 되돌리기](/skills/git-workflow)

## 5. 새 대화로 다시 시작해요

대화가 길어졌거나 같은 실수가 반복되면 새 대화를 열고, 지금 상태를 두세 줄로 요약해 줘요. 공식 안내상 세션마다 기록이 따로예요. → [AI가 같은 실수를 반복해요](/tips#ai-loops)

## 6. 강좌와 팁에서 찾아요

- 자주 나는 에러는 [짧은 팁](/tips)에 있어요. 예: [command not found](/tips#command-not-found), [Port 3000 사용 중](/tips#port-in-use), [.env 반영 안 됨](/tips#env-not-loaded)
- 단계별 막힘은 해당 강좌의 "자주 막히는 것"을 봐요.
- 용어가 낯설면 [용어 사전](/basics/vibe-glossary)으로 가요.

잠깐 쉬었다 오는 것도 방법이에요. 같은 화면을 오래 보면 놓친 줄이 있어요. 돌아와서 1번부터 다시 읽어 보면 의외로 풀려요.

## 7. 그래도 안 되면 방에 물어요

아래를 복사해서 채워 보내요. 이 세 가지가 있으면 답이 빨리 와요.

> **무엇을 하려 했나**: [예: 홈페이지 8강, 버셀에 배포]
> **무엇이 떴나**: [에러 전문 또는 화면 캡처]
> **어디까지 됐나**: [예: 깃허브 푸시까지는 됨, 버셀 빌드에서 실패] / [Windows 또는 macOS]

비밀번호·API 키가 보이는 화면은 가리고 보내요. ([안전·비용·계정](/basics/vibe-safety-money))

---

<small>출처(확인일 2026-10-06): [버셀 빌드 오류 해결](https://vercel.com/docs/deployments/troubleshoot-a-build) · [git-scm 되돌리기](https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things) · [Claude 데스크탑 앱 문서](https://code.claude.com/docs/en/desktop). 순서는 이 사이트 강좌·팁에서 정리했어요.</small>
