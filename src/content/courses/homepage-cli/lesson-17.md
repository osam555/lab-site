---
number: 17
title: 어드민 대시보드 (풀) — Supabase + 카카오 로그인
subtitle: PostgreSQL DB · Studio 어드민 · 카카오 OAuth 인증까지 한 번에
goal: Supabase Studio를 어드민 대시보드로 사용하고, 이메일 및 카카오 OAuth 인증을 홈페이지에 연결합니다. 예약·주문 데이터를 실시간으로 관리합니다.
minutes: 75
part: 고급 · 어드민 & 인증
---

## Supabase가 뭔가요?

**Supabase**는 PostgreSQL 기반의 오픈소스 Firebase 대안입니다.

```
Supabase 프로젝트
  ├─ Studio (어드민 대시보드) → 테이블·데이터 시각적 편집
  ├─ PostgreSQL DB           → 강력한 관계형 데이터베이스
  ├─ Auth                    → 이메일·카카오·구글·카카오 로그인
  ├─ Storage                 → 사진·파일 업로드
  ├─ Edge Functions          → 서버 코드 (알림, 자동화)
  └─ Realtime                → 실시간 데이터 동기화
```

**무료 플랜**: DB 500MB, 월 50만 행 읽기, Auth 50,000 MAU — 소규모 사업장에 충분.

**Pocketbase vs Supabase 선택 기준**

| | Pocketbase | Supabase |
|---|---|---|
| 예약·회원 없이 메뉴만 관리 | ✅ 충분 | 과할 수 있음 |
| 카카오 로그인 회원 관리 | 설정 복잡 | ✅ 공식 지원 |
| 예약 시스템, 실시간 알림 | 기본 수준 | ✅ Edge Functions |
| 향후 앱 확장 가능성 | 제한적 | ✅ 스케일 가능 |

---

## 1. Supabase 프로젝트 생성

1. [supabase.com](https://supabase.com) → **Start your project** → GitHub 계정으로 가입
2. **New Project** → Organization 선택 → 이름: `mycafe` → DB 비밀번호 설정 (저장해두기) → Region: **Northeast Asia (Seoul)** → **Create**
3. 프로젝트 생성 완료까지 약 1분

### Supabase Studio 둘러보기

왼쪽 사이드바:

```
Table Editor   ← 스프레드시트처럼 데이터 편집
SQL Editor     ← SQL 직접 실행
Auth           ← 사용자 목록·설정
Storage        ← 파일 업로드
Edge Functions ← 서버 코드
Settings       ← API 키, 도메인
```

---

## 2. 테이블 만들기

### Table Editor 방식 (클릭으로)

Claude Code에게 안내받거나 직접:

1. **Table Editor** → **New Table**
2. 이름: `reservations`
3. 컬럼 추가:
   - `name` (text, not null)
   - `phone` (text)
   - `date` (date)
   - `time` (time)
   - `party_size` (int2)
   - `message` (text)
   - `status` (text, default: 'pending')

### SQL 방식 (Claude Code로)

> Supabase SQL Editor에서 실행할 예약 테이블 SQL을 작성해줘.
> 컬럼: id, name, phone, date, time, party_size, message, status(pending/confirmed/cancelled), created_at
> status는 enum 타입으로, RLS(Row Level Security)는 일단 비활성화.

---

## 3. 카카오 로그인 설정

카카오 로그인을 홈페이지에 달면 방문자가 카카오 계정으로 예약·회원가입을 할 수 있습니다.

### 카카오 앱 등록

1. [developers.kakao.com](https://developers.kakao.com) → 내 애플리케이션 → 애플리케이션 추가
2. 앱 이름 입력 → 생성
3. **앱 설정 → 카카오 로그인 → 활성화**
4. **Redirect URI 추가**: `https://[프로젝트ID].supabase.co/auth/v1/callback`
   - Supabase 프로젝트 URL은 Settings → API에서 확인
5. **REST API 키** 복사

### Supabase에 카카오 연결

Supabase 대시보드 → **Auth → Providers → Kakao** → 토글 ON:
- Client ID: 위에서 복사한 REST API 키
- Client Secret: 카카오 앱 → **보안 → Client Secret** 발급 후 입력
- **Save**

### 홈페이지에 카카오 로그인 버튼 추가

> Supabase JS SDK를 써서 contact.html에 카카오 로그인 버튼을 추가해줘.
> 로그인하면 예약 폼이 보이고, 이름과 이메일이 자동으로 채워지게.
> 로그아웃 버튼도.
> Supabase URL: [Settings → API에서 복사]
> Supabase Anon Key: [Settings → API에서 복사]

---

## 4. 예약 폼 → Supabase 저장

> contact.html의 예약 폼을 Supabase reservations 테이블에 저장되게 수정해줘.
> 저장 성공하면 "예약이 접수됐습니다. 확인 후 연락드리겠습니다." 표시.
> 실패하면 "잠시 후 다시 시도해주세요." 표시.

---

## 5. Studio에서 예약 관리

매일 사용하는 어드민 루틴:

1. [supabase.com/dashboard](https://supabase.com/dashboard) → 내 프로젝트
2. **Table Editor → reservations**
3. 새 예약 확인 → status를 `confirmed` 또는 `cancelled`로 변경
4. 필터: `status = pending` → 아직 확인 안 한 예약만 보기

### 예약 확인 이메일 자동 발송 (Edge Function)

> Supabase Edge Function을 만들어줘.
> reservations 테이블에 새 행이 들어오면 내 이메일([내 이메일])로
> "새 예약: [이름], [날짜], [인원]" 알림을 보내줘.
> Resend나 Supabase 내장 이메일을 써.

---

## 6. Claude Code MCP로 Supabase 연동

Supabase 공식 MCP 서버를 사용하면 Claude Code가 Supabase를 직접 다룹니다.

> Supabase MCP 서버를 Claude Code에 추가해줘.
> 프로젝트 URL: [내 Supabase URL]
> Service Role Key: [Settings → API → service_role 키]

설정 후:

> reservations 테이블에서 오늘 예약을 가져와서 정리해줘.

> status가 pending인 예약이 5건 이상이면 나에게 알려줘.

---

## 7. Row Level Security (RLS) 설정

데이터를 외부에 노출하지 않으려면 RLS를 켭니다.

> Supabase에서 reservations 테이블에 RLS를 설정해줘.
> - 예약 삽입(insert): 누구나 가능 (로그인 없이 예약 폼 제출)
> - 예약 조회(select): 관리자(service_role)만 가능
> - 예약 수정(update): 관리자만 가능

---

## 오늘의 체크리스트

- [ ] Supabase 프로젝트가 Seoul 리전으로 생성됐다
- [ ] reservations 테이블이 있고 Studio에서 데이터가 보인다
- [ ] 카카오 로그인이 홈페이지에서 동작한다
- [ ] 예약 폼 제출 → Supabase에 저장 → Studio에서 확인된다
- [ ] (선택) 새 예약 이메일 알림이 온다
- [ ] (선택) Supabase MCP를 Claude Code에 연결했다
