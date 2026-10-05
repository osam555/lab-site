---
title: 영상 자동화를 코드 탭에서
summary: 영상 자동화 강좌의 터미널 명령을 클로드 데스크탑 앱 Code 탭에서 자연어로 시키는 방법. 사람이 직접 할 일과 막혔을 때 대처.
order: 12
updated: '2026-10-06'
sources:
  - /lectures/video-automation
  - https://code.claude.com/docs/en/desktop
---

> **화면 표시가 다를 수 있어요.** 이 페이지는 [영상 자동화 강좌](/lectures/video-automation)를 **클로드 데스크탑 앱의 Code 탭**에서 따라 하는 방법이에요. 이 강좌의 기본 에이전트는 클로드 데스크탑이에요. 단계와 내용은 강좌에 있는 것만 옮겼어요(확인일 2026-10-06).

## 왜 Code 탭인가

강좌는 터미널 명령 중심이에요. Code 탭에서는 **폴더를 골라 두고**, 클로드가 명령을 실행하기 전에 **권한 요청을 읽고 허락**하고, 결과(파일·점수 표)를 대화에서 바로 봐요. 명령을 외우는 대신 **무엇을 원하는지** 말하면 돼요. ([승인 모드와 안전장치](/skills/permissions-and-safety))

## 한눈에 보기

강의 본문(1~8강)은 이제 **Code 탭에서 클로드에게 시키는 방식이 기본**이고, 터미널 명령은 각 강의의 '터미널로도 할 수 있어요'에 접혀 있어요. 폴더 선택 → 프롬프트 붙여 넣기 → 권한 요청 읽고 허용 → 결과 확인, 이 순서예요.

**준비**: 데스크탑 앱 Code 탭에서 키트 폴더(`clay-episode-kit`)를 프로젝트 폴더로 골라요. 설치도 "설치해 줘"로 시키고, 권한 요청을 읽어요. ([2강](/lectures/video-automation/lesson-02))

| 단계 | 강의 |
|---|---|
| 큰 그림, 6단계, 비용 | [1강](/lectures/video-automation/lesson-01) |
| 설치와 계정 | [2강](/lectures/video-automation/lesson-02) |
| 내 프로젝트 설정(kit.config.json) | [3강](/lectures/video-automation/lesson-03) |
| 대본→더빙→컷 계획 | [4강](/lectures/video-automation/lesson-04) |
| Flow 생성→받기→정리 | [5강](/lectures/video-automation/lesson-05) |
| 썸네일·조립·검사·업로드 | [6강](/lectures/video-automation/lesson-06) |
| 내 주제로 대본·컷 계획 | [7강](/lectures/video-automation/lesson-07) |
| 시리즈 운영 | [8강](/lectures/video-automation/lesson-08) |

## 사람이 직접 해야 하는 것

- **계정 가입과 로그인** — Aside·Typecast·Cloudflare·유튜브·Google Flow(구독) 같은 서비스 가입과 로그인은 내가 해요. 클로드에게 비밀번호를 알려 주지 않아요. ([2강](/lectures/video-automation/lesson-02))
- **결제·구독** — 유료 플랜은 내가 판단해서 직접 결제해요.
- **키 관리** — API 키는 `.env.local` 같은 파일에만 두고, 채팅·깃허브에 올리지 않아요.
- **사실 확인과 눈으로 보기** — 대본 내용, 완성 시트 한 장, 업로드 제목·설명은 내가 읽어요. ([6강](/lectures/video-automation/lesson-06))
- **업로드 최종 확인** — 공개로 올라가는 되돌리기 어려운 단계예요. 내용을 본 뒤에만 큐에 넣게 해요.

## 막히면

에러가 나면 **화면에 나온 에러 로그를 통째로** 클로드에게 보여 주고 "원인을 설명하고, 고치기 전에 계획부터 알려 줘"라고 해요. 점수가 안 나오는 등 검사에서 걸리면 해당 강의의 문제 해결 표를 읽어 보게 해요. ([에러 디버깅하는 법](/skills/error-debugging))

---

<small>출처(확인일 2026-10-06): 이 사이트의 [영상 자동화 강좌](/lectures/video-automation) 1~8강, [Claude 데스크탑 문서](https://code.claude.com/docs/en/desktop).</small>
