---
title: 바이브 코딩 용어 사전
summary: 이 사이트 강좌와 기초지식에 실제로 나오는 용어를 한 줄로 풀고, 어디서 만나는지 링크로 알려줘요.
order: 13
updated: '2026-10-06'
sources:
  - https://code.claude.com/docs/en/memory
  - https://code.claude.com/docs/en/mcp
  - https://code.claude.com/docs/en/desktop
  - https://docs.npmjs.com/about-npm
  - https://nextjs.org/docs/app/getting-started/layouts-and-pages
  - https://nextjs.org/docs/app/api-reference/file-conventions/not-found
  - https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F
  - https://vercel.com/docs/environment-variables
---

> **화면 표시가 다를 수 있어요.** 이 사이트에 실제로 나오는 말만 모았어요. 외우지 말고, 막힐 때 찾아봐요.

## 클로드와 대화할 때 만나는 말은?

| 용어 | 한 줄 풀이 | 어디서 만나요 |
|---|---|---|
| 프롬프트 | 클로드에게 쓰는 요청 글 | [프롬프트 잘 쓰는 법](/skills/prompt-writing) |
| 에이전트 | 파일을 읽고 고치고 명령까지 실행하는 AI 도우미 | [클로드 기초](/basics/claude-basics) |
| 모델 | 클로드의 종류. 입력창 근처에서 골라요 | [클로드 기초](/basics/claude-basics) |
| 세션 | 대화 하나. 세션마다 기록과 폴더가 따로예요 | [클로드 기초](/basics/claude-basics) |
| 프로젝트 폴더 | 클로드가 일하는 내 컴퓨터의 폴더 | [홈페이지 3강](/lectures/homepage/lesson-03) |
| 권한 요청 | 고치기 전에 "해도 될까요?" 묻는 창 | [홈페이지 3강](/lectures/homepage/lesson-03) |
| diff | 무엇이 바뀌는지 보여주는 비교 화면 | [홈페이지 3강](/lectures/homepage/lesson-03) |
| 플랜 모드 | 고치지 않고 계획만 세우는 모드 | [계획 먼저](/skills/plan-mode-and-context) |
| 맥락(컨텍스트) | 클로드가 지금 대화에서 기억하는 내용 | [계획 먼저](/skills/plan-mode-and-context) |
| 규칙 파일 | `CLAUDE.md`. 매 대화 시작 때 읽히는 안내서 | [바이브코딩 9강](/lectures/vibe-coding/lesson-09) |
| 스킬 | 반복 작업을 저장해 한 줄로 부르는 것 | [SNS 7강](/lectures/sns/lesson-07) |
| MCP | 클로드를 외부 도구에 연결하는 표준 | [Aside 3강](/lectures/aside/lesson-03) |
| 서브에이전트 | 단순 반복 단계를 맡기는 보조 에이전트 | [영상 자동화 8강](/lectures/video-automation/lesson-08) |
| 아티팩트 | 대화 옆에 열리는 결과물 창 | [클로드 활용법](/basics/claude-uses) |
| Computer Use | 클로드가 화면을 보고 직접 클릭·입력 | [Aside 2강](/lectures/aside/lesson-02) |

## 깃과 깃허브에서는?

| 용어 | 한 줄 풀이 | 어디서 만나요 |
|---|---|---|
| 저장소 | 기록을 보관하는 프로젝트 폴더 | [깃 기초](/basics/git-basics) |
| 커밋 | 저장 지점 하나 | [깃 기초](/basics/git-basics) |
| 브랜치 | 본줄기를 건드리지 않는 작업 갈래 | [깃 기초](/basics/git-basics) |
| 푸시 / 풀 | 올리기 / 받기 | [깃허브 기초](/basics/github-basics) |
| 되돌리기 | 저장 지점으로 돌아가기 | [깃으로 되돌리기](/skills/git-workflow) |
| .gitignore | 깃에 올리지 않을 파일 목록 | [.env를 커밋했어요](/tips#gitignore-env) |
| 접근 토큰 | 비밀번호 대신 쓰는 열쇠 문자열 | [깃허브 기초](/basics/github-basics) |

## 배포와 주소에서는?

| 용어 | 한 줄 풀이 | 어디서 만나요 |
|---|---|---|
| 배포 | 내 사이트를 인터넷에 올리기 | [깃-버셀 연동](/basics/git-vercel-deploy) |
| 프로덕션 / 프리뷰 | 방문자가 보는 버전 / 미리 확인하는 버전 | [깃-버셀 연동](/basics/git-vercel-deploy) |
| 환경변수 | 코드 밖에 두는 설정값 | [쇼츠 2강](/lectures/shorts/lesson-02) |
| API 키 | 외부 서비스를 쓰는 비밀 열쇠 | [쇼츠 2강](/lectures/shorts/lesson-02) |
| 도메인 / DNS | 사이트 주소 / 주소를 버셀로 이어주는 설정 | [홈페이지 9강](/lectures/homepage/lesson-09) |
| HTTPS | 주소 앞 자물쇠. 버셀이 자동으로 붙여요 | [홈페이지 9강](/lectures/homepage/lesson-09) |
| 서치 콘솔 / sitemap | 검색에 내 사이트를 알리는 곳 / 페이지 목록 | [홈페이지 10강](/lectures/homepage/lesson-10) |
| 빌드 | 사이트를 올릴 수 있는 형태로 만드는 단계 | [배포 후 확인](/basics/deploy-troubleshooting) |
| 로그 | 무슨 일이 있었는지 남은 기록 | [배포 후 확인](/basics/deploy-troubleshooting) |
| 404 | 그 주소에 페이지가 없다는 오류 | [홈페이지 10강](/lectures/homepage/lesson-10) |

## 만들 때 만나는 개발 용어는?

| 용어 | 한 줄 풀이 | 어디서 만나요 |
|---|---|---|
| 터미널 | 글자로 컴퓨터에 명령하는 창 | [바이브코딩 2강](/lectures/vibe-coding/lesson-02) |
| localhost | 내 컴퓨터. 나만 보는 주소 | [바이브코딩 8강](/lectures/vibe-coding/lesson-08) |
| Node.js | 웹사이트 도구를 돌리는 바탕 프로그램 | [영상 자동화 2강](/lectures/video-automation/lesson-02) |
| npm / 패키지 | 남의 코드 묶음을 받아오는 도구 / 그 묶음 | [바이브코딩 2강](/lectures/vibe-coding/lesson-02) |
| Next.js | 사이트를 만드는 틀(프레임워크) | [바이브코딩 8강](/lectures/vibe-coding/lesson-08) |
| 컴포넌트 | 재사용하는 화면 조각 | [바이브코딩 11강](/lectures/vibe-coding/lesson-11) |
| 반응형 | 폰에서도 PC에서도 맞게 보이기 | [홈페이지 6강](/lectures/homepage/lesson-06) |
| JSON | 프로그램끼리 주고받는 데이터 문서 | [SNS 3강](/lectures/sns/lesson-03) |
| 디버깅 | 오류 원인을 찾아 고치기 | [에러 디버깅](/skills/error-debugging) |
| ffmpeg | 영상 이어 붙이는 도구 | [쇼츠 2강](/lectures/shorts/lesson-02) |

## 만드는 결과물에서 쓰는 말은?

- **CTA**: 방문자가 누르길 바라는 버튼. [랜딩페이지 8강](/lectures/landing-page/lesson-08)
- **후크**: 글·영상 첫머리의 붙잡는 한 줄. [SNS 3강](/lectures/sns/lesson-03)
- **파이프라인**: 여러 단계를 이어 자동으로 돌리는 흐름. [SNS 1강](/lectures/sns/lesson-01)
- **체크포인트**: 자동화 중 사람이 멈춰 확인하는 지점. [블로그 7강](/lectures/naver-blog/lesson-07)
- **스케줄러**: 정해진 시간에 올려주는 도구. [SNS 2강](/lectures/sns/lesson-02)

## 더 찾으려면

모르는 말이 나오면 클로드에게 "방금 나온 ○○를 초등학생에게 설명하듯 알려줘"라고 시켜요. 에러 때는 [막혔을 때 순서](/basics/vibe-troubleshooting-flow), 돈과 비밀값은 [안전·비용·계정](/basics/vibe-safety-money)으로 가요.

---

<small>출처(확인일 2026-10-06): [Claude 메모리·CLAUDE.md](https://code.claude.com/docs/en/memory) · [MCP](https://code.claude.com/docs/en/mcp) · [데스크탑 앱](https://code.claude.com/docs/en/desktop) · [npm](https://docs.npmjs.com/about-npm) · [Next.js 페이지·라우팅](https://nextjs.org/docs/app/getting-started/layouts-and-pages) · [Next.js 404](https://nextjs.org/docs/app/api-reference/file-conventions/not-found) · [git-scm](https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F) · [버셀 환경변수](https://vercel.com/docs/environment-variables). 용어 풀이 중 강좌 용어는 이 사이트 강좌 본문 기준이에요.</small>
