---
number: 16
title: 배포
subtitle: 세상에 공개하기
goal: 배포 환경을 점검하고, 내 도메인을 연결하고, 공개 전 체크리스트를 통과시킵니다.
minutes: 40
part: 4부 · 세상에 내놓기
---

## 이미 배포는 되어 있습니다

8강에서 Vercel에 올렸고, 그 뒤로 push할 때마다 자동 배포됐습니다. 오늘은 "돌아가긴 하는" 상태를 **"남에게 보여줘도 되는"** 상태로 만듭니다.

## 1. 환경변수 정리

`.env.local`에 있는 값이 전부 Vercel에도 있는지 확인합니다.

```bash
cat .env.local
```

Vercel → Settings → Environment Variables와 하나씩 대조. 빠진 게 있으면 추가 → Redeploy.

**흔한 실수**: 로컬에서만 되고 배포에서 안 되는 문제의 90%가 여기입니다. 15강의 형식으로 "로컬은 되는데 배포만 안 됨"이라고 하면 AI도 바로 환경변수를 의심합니다.

## 2. 빌드 통과 확인

Vercel은 배포 전에 `npm run build`를 실행합니다. 로컬에서 미리 돌려보세요.

```bash
npm run build
```

빨간 에러가 나면 배포도 실패합니다. 흔한 것은 TypeScript 타입 에러와 사용하지 않는 변수 경고. 에러를 복사해 AI에게 주면 됩니다.

> "npm run build 에러야. 고쳐줘. 기능은 바꾸지 말고."

## 3. 미리보기 배포 활용하기

Vercel은 `main` 외의 브랜치를 push하면 **별도 주소로 미리보기**를 만들어줍니다. 큰 변경을 할 때 진짜 주소를 안 건드리고 확인할 수 있습니다.

```bash
git checkout -b design-update    # 새 브랜치
# ... 작업, 커밋 ...
git push -u origin design-update # 미리보기 주소 생성
```

확인 후 마음에 들면 GitHub에서 Pull Request → Merge하면 `main`에 반영됩니다. 5강에서 미뤄둔 "브랜치"가 이겁니다. AI에게 "브랜치 만들고 push하는 법"을 물어보면 됩니다.

## 4. 도메인 연결하기 (선택)

`xxx.vercel.app`도 충분하지만, 내 도메인이 있으면 훨씬 진짜 같습니다.

1. 도메인 구입 (연 1~2만 원. Namecheap, Cloudflare, 가비아 등)
2. Vercel → Settings → Domains → 도메인 입력
3. Vercel이 알려주는 DNS 레코드(A 또는 CNAME)를 도메인 구입처의 DNS 설정에 추가
4. 몇 분~몇 시간 뒤 연결됨. HTTPS는 Vercel이 자동으로.

DNS 설정이 헷갈리면 화면을 캡처해서 AI에게 "Vercel이 이 값을 넣으라는데 [구입처] DNS 설정에서 어디에 넣어야 해?"라고 물어보세요.

도메인을 연결하면 Supabase Authentication → URL Configuration에도 새 주소를 추가해야 로그인 링크가 돌아옵니다.

## 5. 공개 전 체크리스트

친구에게 링크를 보내기 전에:

- [ ] 폰에서 열어서 모든 화면을 한 번씩 눌러봤다
- [ ] 로그인 → 저장 → 로그아웃 → 다른 계정 로그인 흐름이 된다
- [ ] 빈 상태(메뉴 0개)일 때 화면이 이상하지 않다
- [ ] 브라우저 탭 제목과 아이콘이 "Create Next App"이 아니다
- [ ] 콘솔에 빨간 에러가 없다
- [ ] 개인정보를 받는다면 간단한 안내 문구가 있다

탭 제목/아이콘은 AI에게:

> "브라우저 탭 제목을 '[서비스 이름]'으로, 설명(description)을 PLAN.md의 한 줄 설명으로, 파비콘은 초록 원 하나로 간단히 만들어줘. layout.tsx의 metadata를 수정."

## 6. 무슨 일이 생기는지 보이게

배포 후 사용자가 겪는 에러를 보려면 Vercel → Logs를 켜두면 됩니다. 사용자 수를 보고 싶으면 Vercel Analytics(무료 플랜 포함)를 켜세요. AI에게 "Vercel Analytics 추가해줘"면 끝입니다.

## 오늘의 체크리스트

- [ ] `npm run build`가 로컬에서 통과한다
- [ ] Vercel 환경변수가 `.env.local`과 일치한다
- [ ] 브랜치 push로 미리보기 주소를 만들어봤다
- [ ] 공개 전 체크리스트 6개를 전부 통과했다
- [ ] (선택) 내 도메인이 연결됐다

## 다음 강의

17강, 진짜 사용자 3명에게 보여줍니다. 배포 후가 진짜 시작입니다.
