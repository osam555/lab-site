---
title: 영상 자동화를 코드 탭에서
summary: 영상 자동화 강좌의 터미널 명령을 클로드 데스크탑 앱 Code 탭에서 자연어로 시키는 방법. 사람이 직접 할 일과 막혔을 때 대처.
order: 12
updated: '2026-10-06'
sources:
  - /lectures/video-automation
  - https://code.claude.com/docs/en/desktop
---

> **화면 표시가 다를 수 있어요.** 이 페이지는 [영상 자동화 강좌](/lectures/video-automation)를 **클로드 데스크탑 앱의 Code 탭**에서 따라 하는 방법이에요. 이 강좌의 기본 에이전트는 클로드 데스크탑이에요. 단계와 명령은 강좌에 있는 것만 옮겼고, 강좌에 없는 단계는 넣지 않았어요(확인일 2026-10-06).

## 왜 Code 탭인가

강좌는 터미널 명령 중심이에요. Code 탭에서는 **폴더를 골라 두고**, 클로드가 명령을 실행하기 전에 **권한 요청을 읽고 허락**하고, 결과(파일·점수 표)를 대화에서 바로 봐요. 명령을 외우는 대신 **무엇을 원하는지** 말하면 돼요. ([승인 모드와 안전장치](/skills/permissions-and-safety))

## 준비

1. 데스크탑 앱에서 Code 탭을 열고, 키트 폴더(`clay-episode-kit`)를 **프로젝트 폴더**로 골라요. 아직 없다면 비어 있는 폴더를 고르고 아래 프롬프트로 내려받게 해요.
2. 설치도 시켜요. 클로드가 보여 주는 권한 요청(어떤 명령인지)을 **읽고** 허락해요. 모르는 명령이면 "이게 뭐 하는 거야?"라고 물어요.

**이렇게 시키세요** ([2강 설치와 계정](/lectures/video-automation/lesson-02))

> https://github.com/osam555/clay-episode-kit 을 클론하고 그 폴더에서 설치를 끝내줘. 파이썬 3.12 이상, 노드 20 이상, ffmpeg 가 없으면 설치하고 버전을 보여줘. 그다음 requirements.txt 설치, npm install, playwright 크로뮴 설치까지 해줘. API 키는 내가 줄 테니 .env.local 에만 저장하고 화면과 깃에는 남기지 마. 설치까지만 하고 멈춰.

<details>
<summary>터미널로도 할 수 있어요</summary>

```
git clone https://github.com/osam555/clay-episode-kit.git
cd clay-episode-kit
pip3 install -r requirements.txt
npm install
npx playwright install chromium
```

운영체제별 전체 명령은 [2강](/lectures/video-automation/lesson-02)에 있어요.
</details>

## 단계별로 이렇게 시키세요

매 단계 끝에 "여기까지만 하고 멈춰"를 붙이면, 내가 결과를 확인한 뒤 다음으로 넘어갈 수 있어요. 점수와 개수는 "지어내지 말고 스크립트 출력 그대로"라고 못 박아요. 프롬프트 전문은 각 강의에 있어요.

| 단계 | 이렇게 시켜요 | 강의 |
|---|---|---|
| 점검 | "clay-episode 스킬을 읽고 준비물이 다 있는지 표로 점검해 줘. API 키 값은 출력하지 마." | [2강](/lectures/video-automation/lesson-02) |
| 설정 | "스킬을 읽고 kit.config.json 을 채워 줘. 채널 이름은 ○○. 탭 id와 키는 가려서 요약해 줘." | [3강](/lectures/video-automation/lesson-03) |
| 대본→더빙→컷 계획 | "편 키 rainbow 의 컷 계획 검사만 통과시켜 줘. 걸린 항목은 원인을 고쳐서 다시 돌려." | [4강](/lectures/video-automation/lesson-04) |
| Flow 생성 | "rainbow 의 영상 컷과 썸네일을 Flow 에 제출만 해 줘. 프로젝트 URL을 보여 줘." | [5강](/lectures/video-automation/lesson-05) |
| 받기·정리 | "두 Flow 프로젝트를 받아서 컷 키 이름으로 정리하고, 빠진 컷만 표로 알려 줘." | [5강](/lectures/video-automation/lesson-05) |
| 조립·검사 | "썸네일 만들고 롱폼·쇼츠를 조립해 검사까지 돌려 줘. 재생성은 하지 말고 점수와 시트 경로만." | [6강](/lectures/video-automation/lesson-06) |
| 업로드 | "업로드 메타 내용을 먼저 표로 보여 주고, 큐에 넣기 전에 멈춰서 내 확인을 기다려 줘." | [6강](/lectures/video-automation/lesson-06) |
| 내 주제로 | "스킬을 읽고 대본(script_v2)을 채워 줘. 다 쓰면 멈춰. 사실 확인은 내가 할게." | [7강](/lectures/video-automation/lesson-07) |
| 여러 편 | "세 편을 한꺼번에 제출만 해 줘." | [8강](/lectures/video-automation/lesson-08) |

<details>
<summary>터미널로도 할 수 있어요</summary>

각 단계에서 클로드가 대신 돌리는 스크립트 이름은 이래요(전체 옵션과 운영체제별 명령은 각 강의에서 확인해요).

- 4강: `prepare_lines.py` → `bake_lines.mjs` → `top10_plan.py` → `cutplan_check.py`
- 5강: `aside_flow_submit.py`, `aside_flow_dl.py`
- 6강: `make_thumb.py`, `flow_assemble.py`, `qa_gate.py`, `sheet.py`, `prep_more.py`, `drain_uploads.py`
</details>

## 사람이 직접 해야 하는 것

- **계정 가입과 로그인** — Aside·Typecast·Cloudflare·유튜브·Google Flow(구독) 같은 서비스 가입과 로그인은 내가 해요. 클로드에게 비밀번호를 알려 주지 않아요. ([2강](/lectures/video-automation/lesson-02))
- **결제·구독** — 유료 플랜은 내가 판단해서 직접 결제해요.
- **키 관리** — API 키는 `.env.local` 같은 파일에만 두고, 채팅·깃허브에 올리지 않아요.
- **사실 확인과 눈으로 보기** — 대본 내용, 완성 시트 한 장, 업로드 제목·설명은 내가 읽어요. ([6강](/lectures/video-automation/lesson-06))
- **업로드 최종 확인** — 공개로 올라가는 되돌리기 어려운 단계예요. 내용을 본 뒤에만 큐에 넣게 해요.

## 막히면

에러가 나면 **화면에 나온 에러 로그를 통째로** 클로드에게 보여 주고 "원인을 설명하고, 고치기 전에 계획부터 알려 줘"라고 해요. 점수가 안 나오는 등 검사에서 걸리면 해당 강의의 문제 해결 표를 읽어 보게 해요. ([에러 디버깅하는 법](/skills/error-debugging))

---

<small>출처(확인일 2026-10-06): 이 사이트의 [영상 자동화 강좌](/lectures/video-automation) 1~8강, [Claude 데스크탑 문서](https://code.claude.com/docs/en/desktop). 강좌 본문은 수정하지 않았어요.</small>
