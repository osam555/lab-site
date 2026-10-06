---
number: 3
title: 화면 익히기와 첫 지시
subtitle: 프로젝트를 만들고, 모드와 모델을 고르고, 첫 한마디를 보내요
goal: 프로젝트(폴더 연결)를 만들고 모드(계획/빠름)와 작업 방식(로컬/새 워크트리)을 고른 뒤 에이전트에게 첫 지시를 보냅니다.
minutes: 35
part: 1부 · 알아보기
---

> **화면 표시가 다를 수 있어요.** 버튼 모양과 위치는 버전마다 달라질 수 있어요. 공식 문서에서 확인한 이름을 괄호에 영어로 같이 적었으니 비슷한 이름을 찾아보세요(확인일 2026-10-06).

## 핵심 개념 세 개

- **프로젝트(Project)**: 에이전트가 접근해도 되는 **폴더들의 묶음**이에요. 공식 문서는 "에이전트가 접근할 수 있는 폴더와 저장소의 경계를 정한다"고 설명해요. 프로젝트마다 설정과 권한이 따로예요.
- **에이전트(Agent)**: 프로젝트 안에서 일을 해 나가는 AI예요. 대화(conversation) 하나가 일 하나라고 생각하면 돼요.
- **산출물(Artifact)**: 에이전트가 일하면서 **만들어 보여 주는 결과물**이에요. 계획서, 코드 변경 비교, 화면 캡처, 브라우저 녹화 등이 있어요. 5강에서 자세히 봐요.

## 프로젝트 만들기

바탕화면에 `my-site` 같은 **빈 폴더**를 먼저 하나 만들어 두세요. (영어 소문자와 `-` 권장)

공식 문서의 순서예요.

1. 왼쪽 사이드바(sidebar)의 **"+"가 붙은 폴더 아이콘**을 눌러요.
2. **New Project(새 프로젝트)** 를 눌러요.
3. **Add Folder(폴더 추가)** 를 눌러 `my-site` 폴더를 연결해요. (폴더 여러 개도 가능해요)
4. **Create(만들기)** 를 눌러요.

> 프로젝트 없이 가볍게 묻고 싶을 때는 "프로젝트 밖 대화"도 있어요. 공식 문서에 따르면 임시 폴더(scratch folder)에서 돌아가요. 파일을 만들 거라면 프로젝트 안에서 하세요.

## 첫 지시 보내기

1. 아래쪽 대화 입력창에 하고 싶은 일을 쓰고 **Enter**를 눌러요.
2. 설정 창(setup modal)이 뜨면 **Mode(방식)** 를 골라요.

| 선택 | 공식 설명 | 처음엔 |
|---|---|---|
| **Local mode** | 에이전트가 내 폴더에서 **직접** 작업해요 | **이걸 고르세요** |
| **New worktree mode** | 깃의 **워크트리(worktree)** 라는 격리된 복사 폴더에서 작업해요. 내 폴더는 그대로 두고 복잡한 일을 따로 시킬 때 좋아요 | 깃을 배운 뒤에 |

용어: **워크트리**는 같은 저장소를 다른 폴더에 한 벌 더 펼쳐 놓은 거예요. 지금은 몰라도 돼요.

## 계획 모드와 빠른 모드

새 대화를 시작할 때 방식을 고를 수 있다고 공식 문서(Artifact review)에 나와 있어요.

- **Planning mode(계획 모드)**: 먼저 코드를 살펴보고 **구현 계획(implementation plan)** 을 만든 뒤 진행해요. 처음 쓸 땐 이게 안전해요.
- **Fast mode(빠른 모드)**: 계획 단계 없이 바로 해요. 변수 이름 바꾸기 같은 작은 일에 쓰라고 안내돼 있어요.

계획 모드에서는 **검토 정책(artifact review policy)** 설정에 따라 에이전트가 계획을 보여 주고 멈춰서 허락을 구해요. 설정은 Settings의 Agent 탭에 있고, **Request review(검토 요청, 권장)** 와 **Always proceed(항상 진행)** 중 골라요. 처음엔 **Request review** 로 두세요.

## 모델 고르기

대화 입력창 아래의 **모델 선택 메뉴**에서 골라요. 공식 표 기준으로 모든 플랜에서 제미나이 3.8 Flash(Gemini 3.8 Flash) 같은 제미나이 모델을 쓸 수 있고, 일부 클로드·GPT-OSS 모델은 플랜에 따라 달라요. 목록과 한도는 자주 바뀌니 [모델 문서](https://antigravity.google/docs/models)와 [플랜 문서](https://antigravity.google/docs/plans)에서 확인하세요. 처음엔 기본 선택 그대로 써요. 같은 대화 안에서는 고른 모델이 유지돼요.

## 알아 두면 편한 단축키

공식 문서의 기본 단축키예요. (맥은 ⌘, Windows·Linux는 Ctrl)

| 하는 일 | 맥 | Windows / Linux |
|---|---|---|
| 새 대화 | ⌘ N | Ctrl + N |
| 입력창으로 이동 | ⌘ L | Ctrl + L |
| 파일 검색 | ⌘ P | Ctrl + P |
| 대화 목록 열기 | ⌘ K | Ctrl + K |

입력창에 `/`를 치면 **슬래시 명령(slash command)** 목록이 떠요. 용어: 슬래시 명령은 `/plan`처럼 `/`로 시작하는 **단축 지시**예요. 처음엔 이 셋만 알면 돼요.

- `/plan`: 계획서(구현 계획)부터 만들어 달라고 해요
- `/grill-me`: 시작 전에 에이전트가 질문으로 세부를 맞춰요
- `/goal`: 끝날 때까지 중간 확인 없이 계속 진행해요 — **초보는 쓰지 마세요**(중간에 못 막아요)

## 첫 지시 연습

프로젝트를 만든 뒤 입력창에 이렇게 보내 보세요. 파일은 만들지 않고 읽기만 하는 안전한 질문이에요.

```text
이 폴더에 지금 어떤 파일이 있는지 알려줘. 비어 있으면 비어 있다고만 말해줘. 파일은 만들지 마.
```

::: practice
- [ ] `my-site` 폴더를 연결한 프로젝트를 만들었다
- [ ] 위 질문을 보내고 Mode를 Local mode로 골랐다
- [ ] 입력창 아래에서 모델 선택 메뉴를 찾았다
- [ ] 입력창에 `/`를 쳐서 슬래시 명령 목록을 열어 봤다
- [ ] 설정에서 검토 정책이 "Request review"인지 확인했다
:::

---

<small>출처(확인일 2026-10-06): [Getting started](https://antigravity.google/docs/getting-started) · [Projects](https://antigravity.google/docs/projects) · [Artifact review](https://antigravity.google/docs/artifact-review) · [Models](https://antigravity.google/docs/models) · [Slash commands](https://antigravity.google/docs/slash-commands) · [Features](https://antigravity.google/docs/features).</small>
