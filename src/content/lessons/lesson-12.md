---
number: 12
title: 백엔드 기초
subtitle: 데이터 저장하기
goal: 브라우저 저장과 데이터베이스 저장의 차이를 이해하고, 내 서비스에 데이터베이스를 연결해 첫 테이블에 데이터를 저장합니다.
minutes: 50
part: 3부 · 만들기
---

## 저장에는 두 단계가 있습니다

### 1단계: 브라우저에 저장 (localStorage)
새로고침해도 남아 있지만, **이 브라우저에서만** 보입니다. 폰에서 열면 없습니다. 회원 개념도 없습니다.

- 장점: 서버 없이 5분이면 됨
- 쓸 때: 설정값, 임시 입력, 로그인 없는 개인용 도구

### 2단계: 데이터베이스에 저장
서버에 저장되어 **어디서 열어도** 같은 데이터가 보입니다. 사용자별로 구분할 수 있습니다.

- 장점: 진짜 서비스
- 쓸 때: 여러 기기, 여러 사용자, 데이터가 자산인 경우

오늘은 1단계를 10분 만에 끝내고, 2단계를 합니다.

## 따라하기 1: 브라우저 저장 (10분)

> "IngredientInput의 재료 목록이 새로고침해도 남아 있도록 localStorage에 저장하고 불러오게 해줘. 키 이름은 'ingredients'. 다른 파일은 건드리지 마."

확인: 재료 추가 → 새로고침 → 남아 있음 → 커밋.

TODO.md의 "새로고침해도 남기" 조각이 끝났습니다.

## 데이터베이스 고르기: Supabase

입문자에게 추천하는 조합은 **Supabase**입니다.

- PostgreSQL이라는 검증된 데이터베이스를 웹 화면에서 관리
- 테이블을 엑셀처럼 화면에서 만들고 볼 수 있음
- 14강의 로그인 기능도 같이 제공
- 무료 플랜으로 충분

## 따라하기 2: Supabase 프로젝트 만들기

1. supabase.com 가입 → **New project** → 이름, 비밀번호(메모!), 지역은 Northeast Asia (Seoul)
2. 왼쪽 **Table Editor** → **New table**
3. 첫 테이블을 만듭니다. 예: `saved_menus`

| 컬럼 | 타입 | 설명 |
|---|---|---|
| id | int8 | 자동 (기본 생성됨) |
| created_at | timestamptz | 자동 (기본 생성됨) |
| name | text | 메뉴 이름 |
| ingredients | text | 재료 (쉼표 구분) |

4. **Settings → API** 에서 `Project URL`과 `anon public` 키를 복사해둡니다.

> **RLS(행 수준 보안)** 를 켜라는 안내가 뜹니다. 오늘은 학습용이니 테이블 만들 때 RLS를 **끄고** 시작하세요. 14강 로그인을 붙이며 다시 켭니다.

## 환경변수: 키는 코드에 적지 않습니다

복사한 URL과 키는 코드에 직접 적으면 GitHub에 올라가서 누구나 볼 수 있습니다. 프로젝트 루트에 `.env.local` 파일을 만들어 넣습니다.

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
```

`.env.local`은 Next.js가 기본으로 Git에서 제외합니다(`.gitignore`). 확인:

```bash
git status
```

`.env.local`이 목록에 **안 보이면** 정상입니다.

## 따라하기 3: 연결하고 저장하기

이제 AI에게 시킵니다. 라이브러리 설치가 필요하니 허락을 포함해서:

> "Supabase를 연결하려고 해. @supabase/supabase-js 설치를 허락할게.
> 1. src/lib/supabase.ts에 클라이언트를 만들어줘. URL과 키는 .env.local의 NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY를 써.
> 2. 메뉴 카드의 '저장' 버튼을 누르면 saved_menus 테이블에 name과 ingredients를 insert 해줘.
> 3. /menus 화면을 만들어서 saved_menus를 최신순으로 목록으로 보여줘.
> 각 단계 후 Supabase Table Editor에서 확인하는 방법을 알려줘."

확인: 저장 클릭 → Supabase Table Editor에 행이 생김 → `/menus`에서 보임 → **폰에서 배포 주소로 열어도** 보임.

폰에서 보이려면 Vercel에도 환경변수를 넣어야 합니다: Vercel 프로젝트 → Settings → Environment Variables에 같은 두 값 추가 → Redeploy. (16강에서 정리하지만 오늘 해두면 좋습니다.)

## CRUD 나머지 채우기

읽기(R)와 만들기(C)가 됐으니, 지우기(D)와 고치기(U)는 조각 하나씩:

> "/menus의 각 항목에 삭제 버튼을 추가해줘. 누르면 확인창 뒤 Supabase에서 delete."

## 오늘의 체크리스트

- [ ] localStorage 저장이 동작한다
- [ ] Supabase에 테이블이 있고 `.env.local`에 키가 있다
- [ ] `git status`에 `.env.local`이 안 보인다
- [ ] 저장 → Table Editor에 행이 생기는 걸 확인했다
- [ ] Vercel에 환경변수를 넣고 폰에서도 데이터가 보인다

## 다음 강의

13강, 가짜 메뉴 대신 진짜 AI가 추천하게. 외부 API 붙이기.
