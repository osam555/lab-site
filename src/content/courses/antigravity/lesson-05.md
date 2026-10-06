---
number: 5
title: 결과 확인·검토·되돌리기
subtitle: 에이전트가 보여 주는 산출물로 확인하고, 마음에 안 들면 거부해요
goal: 계획서·워크스루·화면 캡처·브라우저 녹화 같은 산출물을 읽고, 댓글로 고쳐 달라고 하거나 변경을 버리는 방법을 알고 있습니다.
minutes: 35
part: 2부 · 만들기
---

> **화면 표시가 다를 수 있어요.** 공식 문서 중 일부는 Antigravity IDE 기준으로 적혀 있어서, 2.0 앱에서 같은 화면이 다르게 보일 수 있어요. 문서마다 "Available on(지원 제품)" 표시가 있고, 아래에 제품을 같이 적었어요(확인일 2026-10-06).

## 왜 산출물을 보나요

에이전트가 일하는 걸 한 줄 한 줄 지켜볼 필요가 없게, 앤티그래비티는 중간중간 **산출물(artifact)** 을 만들어 보여 줘요. 공식 정의는 "에이전트가 작업을 해내고 진행 상황과 생각을 전달하려고 만드는 구조화된 결과물"이에요. 우리는 핵심 지점에서만 읽고 승인하면 돼요.

| 산출물 | 무엇인가 | 언제 | 지원 제품(공식) |
|---|---|---|---|
| **구현 계획(Implementation plan)** | 무엇을 어떻게 바꿀지 적은 계획서 | 일을 시작하기 전 | 2.0, IDE |
| **워크스루(Walkthrough)** | 끝난 뒤 바뀐 내용 요약. 브라우저 일이면 화면 캡처·녹화도 들어가요 | 일이 끝났을 때 | 2.0, IDE |
| **스크린샷(Screenshot)** | 브라우저에서 찍은 화면 캡처 | 화면을 확인할 때 | 2.0, IDE |
| **브라우저 녹화(Browser recording)** | 에이전트가 브라우저에서 한 동작을 영상으로 | 브라우저를 쓸 때 | IDE 문서에 설명 / 2.0은 WebM 녹화 기능 |
| **코드 변경 비교(code diff)** | 파일의 바뀐 줄 비교 | 코드를 고칠 때 | 2.0, CLI |

## 계획을 읽고 고치기

1. 계획서에서 **만들 파일**, **바꿀 파일**, **건드리지 말아야 할 것**을 찾아 읽어요.
2. 마음에 안 드는 부분에 **댓글(comment)** 을 달아요. 예: "범위를 줄여줘", "다른 방법으로 해줘". 공식 문서는 범위 축소, 다른 기술 사용, 어긋난 부분 수정 같은 이유로 댓글을 쓰라고 안내해요.
3. 괜찮으면 **Proceed**, 댓글을 모아 보낼 땐 **Review**를 눌러요. 댓글을 달아 놓고 Proceed를 눌러도 진행은 돼요.
4. 에이전트가 계획을 고쳐 다시 검토를 요청하거나 바로 구현을 시작해요.

공식 문서는 이 방식을 "사람이 운전석에 앉아 있게 하는 승인 고리"라고 설명해요. 설정이 **Always proceed**면 승인 없이 곧장 진행하니, 초보는 **Request review**를 유지하세요.

## 브라우저로 직접 확인시키기

공식 문서에 따르면 앤티그래비티는 **브라우저 서브에이전트(Browser Subagent)** 로 내 컴퓨터의 **크롬(Chrome)** 을 열고 읽고 조작해서, 만든 웹사이트를 테스트할 수 있어요. 스크린샷과 동작 영상은 산출물로 저장돼요. 2.0에서는 `/browser` 명령으로 이 기능을 부를 수 있다고 안내돼 있어요.

```text
/browser index.html 을 크롬에서 열어서 맨 위 제목과 맨 아래 연락처가 보이는지 확인하고 화면을 캡처해줘.
```

안전 장치도 알아 두세요(공식 문서).

- 에이전트의 브라우저는 내 평소 크롬과 **분리된 별도 프로필(Chrome profile)** 에서 돌아가요. 내 쿠키와 로그인 정보를 공유하지 않아요.
- 접속해도 되는 주소를 **허용 목록(allowlist)** 과 **차단 목록(denylist)** 으로 관리해요.
- 브라우저 기능을 아예 끄려면 설정의 Browser 섹션에서 **Browser Tools**를 꺼요.
- 에이전트 브라우저에 한 로그인은 이후에도 유지돼요. **개인 계정이나 결제 사이트에는 로그인하지 마세요.**

## 되돌리기

**공식 문서에 '전부 되돌리기' 버튼에 대한 설명은 확인하지 못했어요.** 대신 확인된 방법은 이래요.

- **변경 검토 화면**: 2.0에는 사이드바의 **버전 관리(VCS) 패널**이 있어요. 거기서 아직 저장하지 않은 변경(uncommitted), 브랜치 변경, **에이전트가 직접 고친 부분(agent edits)** 의 비교를 볼 수 있고, 파일별로 **스테이지(stage)·언스테이지·버리기(discard)** 를 할 수 있어요.
- **미리 저장해 두기**: 깃으로 저장(커밋)해 두면 언제든 그 시점으로 돌아갈 수 있어요. 6강과 [깃 기초](/basics/git-basics)를 보세요. 큰 수정을 시키기 전에 저장하는 습관이 가장 확실한 안전망이에요.
- **다른 폴더에서 시키기**: **New worktree mode**로 시작하면 내 폴더는 그대로고 복사본에서 작업해요. 마음에 안 들면 그 결과를 쓰지 않으면 돼요.

용어: **버리기(discard)** 는 저장하지 않은 변경을 지워서 마지막 저장 상태로 돌리는 거예요. 되돌릴 수 없으니 눌러도 되는지 확인하고 눌러요.

::: practice
- [ ] 4강에서 만든 일의 구현 계획과 워크스루를 다시 열어 읽어 봤다
- [ ] 계획에 댓글을 한 번 달아서 에이전트가 따르는지 봤다 (예: "연락처는 이메일만")
- [ ] `/browser`로 index.html을 열어 화면 캡처를 받았다
- [ ] VCS 패널을 열어 에이전트가 고친 파일의 비교를 봤다
- [ ] 설정에서 검토 정책이 Request review임을 다시 확인했다
:::

---

<small>출처(확인일 2026-10-06): [Artifacts 개요](https://antigravity.google/docs/artifacts) · [Implementation plan](https://antigravity.google/docs/implementation-plan) · [Walkthrough](https://antigravity.google/docs/walkthrough) · [Screenshots](https://antigravity.google/docs/screenshots) · [Browser(IDE)](https://antigravity.google/docs/ide/browser) · [Browser recordings](https://antigravity.google/docs/ide/browser-recordings) · [Separate Chrome profile](https://antigravity.google/docs/ide/separate-chrome-profile) · [Features(2.0)](https://antigravity.google/docs/features) · [Artifact review](https://antigravity.google/docs/artifact-review).</small>
