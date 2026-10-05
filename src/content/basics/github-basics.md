---
title: 깃허브 기초 — 계정·저장소·로그인
summary: 깃허브가 뭔지, 계정과 저장소 만드는 법, 공개/비공개 차이, 올릴 때 로그인하는 쉬운 길.
order: 3
updated: '2026-10-06'
sources:
  - https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github
  - https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories
  - https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories
  - https://docs.github.com/en/get-started/git-basics/set-up-git
---

> **화면 표시가 다를 수 있어요.** 비슷한 이름을 찾아보세요.

## 깃허브는 "저장소를 올려 두는 인터넷 창고"예요

깃은 내 컴퓨터 안의 기록 도구([깃 기초](/basics/git-basics)), **깃허브(GitHub)**는 그 저장소를 인터넷에 올려 두는 서비스예요. 컴퓨터가 고장 나도 백업이 있고, 버셀이 여기서 내 파일을 가져가요. ([깃-버셀 연동](/basics/git-vercel-deploy))

## 계정 만들기

1. [github.com/signup](https://github.com/signup)에서 이메일(또는 구글 계정)로 가입해요.
2. **이메일 인증**을 해요. 인증된 이메일이 있어야 저장소 만들기 같은 기본 작업이 된다고 안내돼 있어요.
3. 사용자 이름(username)은 깃허브에서의 내 이름이에요.
4. **2단계 인증(2FA)**을 켜는 것을 공식 문서가 강하게 권해요.

## 저장소 만들기

웹에서 오른쪽 위 **+** → **New repository**를 누르고, 이름과 **공개 범위**를 정하고 **Create repository**를 눌러요. 클로드에게 시켜도 돼요.

> 이 폴더를 `my-site`라는 비공개(private) 깃허브 저장소로 만들어서 올려줘. 로그인이 필요하면 단계별로 알려줘.

- **Public**: 인터넷의 누구나 볼 수 있어요.
- **Private**: 나와 내가 권한을 준 사람만 볼 수 있어요.

모르겠으면 Private으로 시작해요. 그래도 **비밀번호·API 키가 든 파일(`.env` 등)은 공개든 비공개든 올리지 않아요.** `.gitignore`에 넣어 두세요.

## 올릴 때 로그인

처음 푸시하면 깃허브가 "누구세요?"라고 물어요. 공식 안내는 **HTTPS 방식 + 자격 증명 저장 도구(credential helper)**를 권하고, SSH 키 방식은 설정 단계가 더 많다고 설명해요. 그래서 처음엔 HTTPS가 쉬운 길이에요.

- 브라우저 로그인 창이 뜨면 승인해요. 한 번 하면 보통 다시 묻지 않아요.
- 막히면 클로드에게 "깃허브로 푸시가 인증에서 막혀. 내 운영체제에서 가장 쉬운 방법으로 설정해줘"라고 시켜요. **토큰·비밀번호는 채팅에 붙여넣지 말고** 안내된 입력 창에만 직접 넣어요.
- 단계별 화면: [홈페이지 만들기 8강](/lectures/homepage/lesson-08)

## 터미널로도 할 수 있어요

깃허브 CLI로 `gh repo create`를 실행하고 안내를 따르면 돼요. `--public`·`--private` 옵션으로 공개 범위를 정해요.

---

<small>출처(공식 문서, 확인일 2026-10-06): docs.github.com — [계정 만들기](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github) · [저장소 빠른 시작](https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories) · [저장소 공개 범위](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories) · [깃 설정과 인증](https://docs.github.com/en/get-started/git-basics/set-up-git).</small>
