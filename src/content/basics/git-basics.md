---
title: 깃 기초 — 저장소·커밋·브랜치
summary: 깃이 뭔지, 커밋·브랜치·푸시가 무슨 뜻인지, 잘못됐을 때 되돌리는 기본.
order: 2
updated: '2026-10-06'
sources:
  - https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F
  - https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell
  - https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes
  - https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things
  - https://git-scm.com/docs/git-revert
---

> **화면 표시가 다를 수 있어요.** 이 페이지는 클로드(데스크탑 Code 탭)에게 시키는 방식으로 설명하고, 명령어는 "터미널로도 할 수 있어요"로 덧붙여요.

## 깃은 "저장 지점을 남기는 도구"예요

깃(Git)은 프로젝트의 **어느 시점 전체 모습(스냅샷)**을 저장해 둬요. 게임의 저장 슬롯과 비슷해요. 클로드가 파일을 한꺼번에 많이 바꾸니, 저장 지점이 있어야 마음 놓고 시킬 수 있어요.

- **저장소(repository)**: 기록을 보관하는 프로젝트 폴더
- **커밋(commit)**: 저장 지점 하나. 메시지를 붙여 남겨요
- **브랜치(branch)**: 커밋이 이어진 갈래. 본줄기를 건드리지 않고 실험할 때 써요. 기본 이름은 `master`였는데 요즘은 `main`을 많이 써요
- **푸시(push)**: 내 커밋을 원격 저장소(깃허브)에 올리기 / **풀(pull)**: 원격의 새 내용을 받아 합치기

## 클로드에게 이렇게 시켜요

> 이 폴더를 깃 저장소로 만들어줘. 비밀번호·키 파일과 node_modules는 .gitignore에 넣어줘.

> 바뀐 내용을 확인하고 이해하기 쉬운 한국어 메시지로 커밋해줘.

> `new-menu` 브랜치를 만들어서 거기서 메뉴 페이지를 고쳐줘. 마음에 안 들면 버릴 수 있게.

> 지금 커밋을 깃허브에 푸시해줘.

푸시는 밖으로 나가는 일이라 클로드가 허락을 물어요. 무엇이 올라가는지 읽고 수락해요. ([승인 모드와 안전장치](/skills/permissions-and-safety))

## 되돌리기 기본

| 상황 | 클로드에게 |
|---|---|
| 커밋 전 변경을 버리고 싶어요 | "이 파일의 저장 전 변경을 버려줘. 먼저 뭐가 날아가는지 보여줘." |
| 방금 커밋을 취소하고 싶어요 | "마지막 커밋을 취소하되 파일 내용은 남겨줘." |
| 이미 푸시한 커밋을 없던 일로 | "그 커밋을 되돌리는 새 커밋을 만들어줘(revert)." |

공식 설명대로 **커밋 전 변경은 버리면 되살릴 수 없고**, 커밋한 것은 거의 되살릴 수 있어요. 그래서 **큰 작업 전에는 먼저 커밋**하는 습관이 중요해요. `revert`는 기록을 지우지 않고 되돌리는 커밋을 새로 더해서 푸시 뒤에도 안전해요. 이미 푸시한 커밋을 고쳐 쓰는 것은 피하라고 안내돼 있어요. 더 보기: [Git으로 안전하게 되돌리기](/skills/git-workflow), [짧은 팁](/tips).

## 터미널로도 할 수 있어요

```bash
git init                              # 저장소 만들기
git status                            # 지금 상태
git add . && git commit -m "메시지"    # 저장 지점 남기기
git switch -c new-menu                # 새 브랜치로 이동
git push / git pull                   # 올리기 / 받기
git restore 파일명                     # 저장 전 변경 버리기(되돌릴 수 없음!)
git revert HEAD                       # 마지막 커밋을 되돌리는 새 커밋
```

---

<small>출처(공식 문서, 확인일 2026-10-06): git-scm.com — [깃이란](https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F) · [브랜치](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) · [원격 저장소](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes) · [되돌리기](https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things) · [git-revert](https://git-scm.com/docs/git-revert).</small>
