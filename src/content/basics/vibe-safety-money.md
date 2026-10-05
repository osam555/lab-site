---
title: 안전·비용·계정 기본
summary: 비밀값(API 키·.env) 다루기, 공개 저장소에 올리면 안 되는 것, 계정은 본인이 가입·결제, 유료 서비스 전 확인, 백업과 되돌리기.
order: 17
updated: '2026-10-06'
sources:
  - https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning
  - https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories
  - https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github
  - https://vercel.com/docs/environment-variables
  - https://vercel.com/docs/plans/hobby
  - https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things
  - https://code.claude.com/docs/en/desktop
---

> **화면 표시가 다를 수 있어요.** 요금과 한도 숫자는 일부러 적지 않았어요. **요금제는 각 사이트에서 확인**해요.

## 비밀값이 뭐고 어디에 두나요?

API 키, 접근 토큰, 비밀번호처럼 **남이 알면 내 계정으로 쓸 수 있는 문자열**이에요. 코드 파일에 직접 적지 말고 `.env` 같은 환경변수 파일에 두고, 그 파일은 `.gitignore`에 넣어 깃에 올라가지 않게 해요. ([쇼츠 2강](/lectures/shorts/lesson-02), [깃으로 되돌리기](/skills/git-workflow)) 버셀에서는 프로젝트 설정의 **Environment Variables**에 따로 넣어요. ([깃-버셀 연동](/basics/git-vercel-deploy))

## 채팅에 붙여도 되나요?

안 돼요. 키는 코드나 대화에 붙이지 않고 환경변수 파일에만 둬요. 클로드가 `.env`를 읽거나 출력하지 않도록 [규칙 파일](/skills/permissions-and-safety)에 적어 둘 수도 있어요. 깃허브 로그인이 막혀도 토큰은 **안내된 입력 창에만 직접** 넣어요. ([깃허브 기초](/basics/github-basics))

## 공개 저장소에 올리면 안 되는 건?

공개(Public) 저장소는 인터넷의 누구나 볼 수 있어요. 비공개(Private)라도 올리지 않는 게 원칙이에요.

- `.env`, API 키, 토큰, 비밀번호
- 고객 연락처 같은 개인정보
- 내 컴퓨터에서만 쓰는 큰 작업 파일(`node_modules` 등)

모르겠으면 Private으로 시작하고, 올리기 전에 "깃에 올라갈 파일 목록을 보여줘"라고 시켜요.

## 이미 올렸다면요?

공식 문서가 알려주는 순서는 **그 키를 바로 폐기하고 새로 발급받는 것**이에요. 기록에서 지우는 건 시간이 많이 들고, 키를 이미 폐기했다면 대개 필요 없다고 해요. 되돌려도 기록에는 남으니 키부터 바꿔요. → [.env를 실수로 커밋했어요](/tips#gitignore-env)

## 계정과 결제는 누가 하나요?

**본인이 직접** 가입하고 결제해요. 비밀번호와 카드번호는 클로드에게 넘기지 말고 내가 직접 입력해요. 계정 4개(클로드·깃허브·버셀·도메인 구입처)는 [준비물 체크리스트](/basics/vibe-checklist)에 있어요. 깃허브는 이메일 인증과 2단계 인증을 켜요. 클로드 Code 탭은 유료 구독이 필요하다고 안내돼 있어요. ([클로드 기초](/basics/claude-basics))

## 돈이 드는 곳은 어디고, 쓰기 전 뭘 확인하나요?

- **클로드**: 요금제와 사용 한도는 [claude.ai 도움말](https://support.claude.com/en/articles/11647753-understanding-usage-and-length-limits)에서 확인해요.
- **버셀**: 무료 Hobby 플랜은 개인·비상업 용도로 제한된다고 안내돼 있어요. 사업용이면 약관을 먼저 읽어요. ([버셀 기초](/basics/vercel-basics))
- **도메인**: 구입처마다 가격과 갱신 조건이 달라요. ([도메인 기초](/basics/domain-basics))
- **음성·영상 생성 서비스**: 쇼츠·영상 자동화에서 쓰는 서비스는 요금 방식이 서비스마다 달라요. 쓰기 전에 요금 페이지를 읽고, 시험은 한 편만 돌려 봐요. ([쇼츠 6강](/lectures/shorts/lesson-06), [영상 자동화 1강](/lectures/video-automation/lesson-01))

클로드에게 "이 작업이 어떤 유료 서비스를 호출하는지 먼저 알려줘"라고 시키는 것도 좋아요.

## 백업과 되돌리기는요?

깃에 커밋하고 깃허브에 푸시하면 그게 백업이에요. 컴퓨터가 고장 나도 저장소를 내려받으면 돼요. 단 **커밋 전 변경은 되살릴 수 없어요.** 큰 작업 전에 먼저 커밋해요. 이미 푸시한 것은 되돌리는 새 커밋(revert)이 안전해요. → [깃 기초](/basics/git-basics), [홈페이지 11강](/lectures/homepage/lesson-11)

---

<small>출처(확인일 2026-10-06): [GitHub 시크릿 스캐닝](https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning) · [저장소 공개 범위](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories) · [GitHub 계정](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github) · [버셀 환경변수](https://vercel.com/docs/environment-variables) · [Hobby 플랜](https://vercel.com/docs/plans/hobby) · [git-scm 되돌리기](https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things) · [Claude 데스크탑 앱](https://code.claude.com/docs/en/desktop).</small>
