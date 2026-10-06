---
title: 앤티그래비티와 클로드 데스크탑 비교
summary: 구글 앤티그래비티가 뭔지, 클로드 데스크탑과 무엇이 같고 다른지, 일에 따라 무엇을 쓸지 한 페이지로.
order: 20
updated: '2026-10-06'
sources:
  - https://antigravity.google/
  - https://antigravity.google/docs/home
  - https://antigravity.google/docs/overview
  - https://antigravity.google/docs/getting-started
  - https://antigravity.google/docs/models
  - https://antigravity.google/docs/plans
  - https://antigravity.google/docs/faq
  - https://antigravity.google/docs/features
  - https://antigravity.google/pricing
---

> **화면 표시가 다를 수 있어요.** 이 페이지는 **공식 문서에서 확인한 범위**만 적었어요(확인일 2026-10-06). 메뉴 이름과 모델 목록, 한도는 자주 바뀌어요. 아래에 없는 세부 기능은 확인하지 못해서 쓰지 않았어요.

## 앤티그래비티가 뭐예요

구글(Google)의 **에이전트형 개발 플랫폼**이에요. 용어로 **에이전트**는 시킨 일을 파일 읽기·만들기·명령 실행으로 여러 단계 해 나가는 AI예요. 공식 문서에는 네 가지 모습이 나와요.

- **Antigravity 2.0**: 에이전트를 관리하는 독립 데스크탑 앱. 이 강좌에서 쓰는 것
- **Antigravity CLI**: 터미널에서 쓰는 가벼운 버전
- **Antigravity IDE**: 코드 편집기에 에이전트가 들어간 환경
- **Antigravity SDK**: 파이썬으로 에이전트를 만드는 개발자용

## 클로드 데스크탑과 비교

| | 클로드 데스크탑(Code 탭) | 앤티그래비티 2.0 |
|---|---|---|
| 만든 곳 | Anthropic | Google |
| 시작 | 폴더를 열고 프롬프트를 보내요 | 프로젝트에 폴더를 연결하고 프롬프트를 보내요 |
| 진행 확인 | 권한 요청을 읽고 허용 | 계획서·산출물을 검토하고 진행(Proceed) |
| 결과 확인 | 미리보기·파일 | 워크스루, 스크린샷, 브라우저 확인(`/browser`) |
| 여러 일 동시에 | 대화를 나눠서 | 여러 에이전트와 새 워크트리 모드 |
| 깃 | 에이전트에게 시키거나 터미널 | 사이드바의 VCS 패널(커밋·푸시) |
| 기본 모델 | 클로드 | 제미나이 계열(요금제에 따라 다른 모델도) |
| 비용 | [클로드 요금제](/basics/claude-basics) | 개인용 월 $0 플랜 있음, 한도는 공식 안내 확인 |

## 언제 무엇을 쓰나

- **이 강좌를 처음 따라 할 때**: 클로드 데스크탑. 모든 과정의 기본이에요.
- **계획서를 읽고 댓글로 방향을 잡고 싶을 때**: 앤티그래비티.
- **에이전트가 크롬에서 화면까지 확인해 주길 바랄 때**: 앤티그래비티.
- **한쪽 사용 한도에 걸렸을 때**: 다른 쪽으로. 두 도구는 한도가 따로예요.
- **내 규칙 파일·스킬을 그대로 쓰고 싶을 때**: 클로드 데스크탑. 앤티그래비티 쪽 호환은 확인하지 못했어요.

같은 폴더를 두 도구로 열어도 되지만 **동시에 시키지는 마세요.** 시키기 전에 깃으로 저장해 두면 안전해요([깃 기초](/basics/git-basics)).

## 알아 둘 조건

- **계정**: 개인 구글 계정, 만 18세 이상, 지원 지역(대한민국 포함)이 필요해요. 회사·학교 계정이 안 되면 `@gmail.com`을 써 보라고 안내돼 있어요.
- **로그인 공유 금지**: 클로드 코드 같은 다른 도구에서 앤티그래비티 로그인으로 접근하면 약관 위반이에요. 각각 따로 로그인해서 쓰세요.
- **권한**: 기본(Default) 프리셋을 유지하고 Turbo는 피해요.

배우러 가기: [앤티그래비티로 만들기 과정](/lectures/antigravity)

---

<small>출처(확인일 2026-10-06): [antigravity.google](https://antigravity.google/) · [Docs](https://antigravity.google/docs/home) · [Models](https://antigravity.google/docs/models) · [Plans](https://antigravity.google/docs/plans) · [FAQ](https://antigravity.google/docs/faq) · [Features](https://antigravity.google/docs/features) · [Pricing](https://antigravity.google/pricing). 공식 문서가 영어라서 번역해 적었어요.</small>
