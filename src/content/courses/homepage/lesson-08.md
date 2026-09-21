---
number: 8
title: 인터넷에 올리기
subtitle: 오늘 폰으로 내 홈페이지를 엽니다
goal: GitHub에 코드를 올리고 Vercel과 연결해 누구나 접속할 수 있는 주소를 얻습니다. 이후 수정은 push 한 번으로 반영되게 만듭니다.
minutes: 45
part: 3부 · 공개
---

## 이번 강에서만 터미널을 씁니다

GitHub에 파일을 올리는 작업은 터미널 명령이 필요합니다. 딱 이 강에서만 씁니다. 명령은 네 줄이 전부입니다.

**터미널 여는 법**

::: windows
시작 메뉴에서 **"PowerShell"** 을 검색해 실행합니다.
:::

::: mac
`Cmd + Space` → **"터미널"** 검색해 실행합니다.
:::

터미널이 열리면 `my-site` 폴더로 이동합니다:

```bash
cd ~/Desktop/my-site
```

`Desktop/my-site`가 아닌 다른 곳에 폴더를 만들었다면 그 경로를 씁니다.

---

## 두 단계

1. **GitHub**: 내 파일을 보관하는 인터넷 창고. 백업이자 Vercel이 파일을 가져가는 곳.
2. **Vercel**: 파일을 받아 24시간 켜진 컴퓨터에 올려주는 서비스. 개인 홈페이지는 무료.

한 번 연결하면 이후로는 `git push`만 하면 자동으로 새 버전이 올라갑니다.

## 1. GitHub 계정과 저장소

1. github.com 가입 (무료)
2. 오른쪽 위 `+` → **New repository**
3. Repository name: `my-site` / **Public** / 나머지는 건드리지 않고 **Create repository**
4. 화면에 명령어 여러 줄이 뜹니다. **"…or push an existing repository from the command line"** 아래 세 줄이 필요합니다. 아직 닫지 마세요.

## 2. 내 컴퓨터와 GitHub 연결

앞서 연 터미널에서 GitHub 화면의 세 줄을 순서대로 붙여넣습니다. 이런 모양입니다:

```bash
git remote add origin https://github.com/내아이디/my-site.git
git branch -M main
git push -u origin main
```

> `git remote add origin ...`은 내 폴더와 GitHub 창고를 처음 연결하는 명령입니다. 한 번만 합니다.

::: windows
처음 push하면 **"Connect to GitHub"** 창이 뜹니다. **Sign in with your browser** → 브라우저에서 승인. 한 번 하면 다시 안 물어봅니다.
:::

::: mac
처음 push하면 터미널에서 Username과 Password를 묻습니다. Password는 GitHub 비밀번호가 **아니라** 토큰입니다. 편한 방법은 GitHub 웹사이트 → Settings → Developer Settings → Personal access tokens → 토큰 발급 후 입력. 또는 Claude Code에게 "Mac에서 git push 인증 어떻게 해?"라고 물어보세요.
:::

막히면 Claude Code 대화창에: "git push 했더니 이런 에러가 나: [붙여넣기]"

성공하면 GitHub 페이지를 새로고침하세요. 내 파일들이 보입니다.

## 3. Vercel 연결 (웹 대시보드)

터미널 없이 클릭만으로 배포합니다.

1. vercel.com → **Continue with GitHub** 로 가입 (GitHub 계정 연결 승인)
2. **Add New… → Project**
3. `my-site` 저장소 옆 **Import**
4. 설정은 건드리지 않고 **Deploy**
   - Framework Preset이 "Other"면 정상입니다 (프레임워크 없이 HTML만 쓰니까요)
5. 30초쯤 뒤 축하 화면과 함께 주소가 나옵니다: `my-site-xxxx.vercel.app`

**폰으로 열어보세요.** 여러분이 만든 홈페이지가 인터넷 어디서나 보입니다. 친구에게 링크를 보내보세요.

## 4. 수정 → 반영 리듬

이제부터 수정할 때는:

1. 앱 대화창에서 Claude Code에게 고쳐달라고 함
2. 미리보기에서 확인
3. 앱 터미널 탭에서 커밋 + push

```bash
git add .
git commit -m "영업시간 수정"
git push
```

push하면 Vercel이 자동으로 알아채고 1분 안에 새 버전을 올립니다.

세 줄이 귀찮으면 Claude Code에게 "지금까지 바뀐 거 커밋하고 push해줘"라고 하면 됩니다.

지금 바로 한 번 해보세요. 하단 문구를 하나 바꾸고 → 커밋 → push → 1분 뒤 폰에서 새로고침.

## 5. 폰에서 실제 점검

PC의 폰 모드와 진짜 폰은 다릅니다. 폰에서 직접:

- [ ] 전화번호를 누르면 전화 앱이 열린다
- [ ] 인스타그램 링크가 열린다
- [ ] 지도가 보이고 손가락으로 움직인다
- [ ] 사진이 1~2초 안에 뜬다 (느리면 5강 용량 줄이기 다시)
- [ ] 글자를 확대하지 않아도 읽힌다

문제가 있으면 폰 화면을 캡처해서 Claude Code에 붙여넣고 "폰에서 이렇게 보여. 고쳐줘".

## Vercel 주소가 마음에 안 든다면

Vercel 프로젝트 → **Settings → Domains**에서 `원하는이름.vercel.app`으로 바꿀 수 있습니다 (남이 안 쓴 이름이면). 진짜 내 도메인은 9강에서.

## 오늘의 체크리스트

- [ ] GitHub에 `my-site` 저장소가 있고 파일이 보인다
- [ ] `….vercel.app` 주소가 폰에서 열린다
- [ ] 수정 → 커밋 → push → 반영 리듬을 한 번 돌려봤다
- [ ] 폰 점검 5개를 통과했다

## 다음 강의

9강, 내 도메인. `mycafe.kr` 같은 진짜 주소를 달고, 구글에서 검색되게 준비합니다.
