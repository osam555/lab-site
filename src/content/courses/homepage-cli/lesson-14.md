---
number: 14
title: 도메인 구입과 고급 설정
subtitle: Vercel에서 바로 사거나 외부 도메인을 연결하고, 서브도메인·리다이렉트·CDN까지
goal: Vercel 직접 구매 또는 외부 도메인 연결을 완료하고, 서브도메인·리다이렉트·Cloudflare CDN으로 홈페이지를 프로답게 운영합니다.
minutes: 60
part: 고급 · 도구 활용
---

## 도메인 구입 — 두 가지 경로

| | Vercel에서 직접 | 외부 구입처 |
|---|---|---|
| **대표 서비스** | vercel.com/domains | 가비아·후이즈·Namecheap·Cloudflare |
| **장점** | 설정 자동 완료, 별도 DNS 설정 불필요 | 더 저렴한 경우 있음, `.kr` 등 국내 도메인 유리 |
| **단점** | 가격이 다소 높을 수 있음 | DNS 설정 직접 해야 함 |
| **추천** | 처음이거나 편의 우선 | `.kr` 도메인이나 갱신 비용 절감 원할 때 |

---

## 방법 A — Vercel에서 직접 구입

Vercel이 도메인 등록 서비스를 제공합니다. 구입부터 연결까지 **클릭 몇 번**으로 끝납니다.

### 구입 절차

1. [vercel.com/domains](https://vercel.com/domains) 접속
2. 원하는 도메인 이름 검색 → 가용 여부·가격 확인
3. **Buy** → 결제 (카드 또는 Vercel 크레딧)
4. 구입 완료 후 내 Vercel 대시보드 → **Domains** 탭에 자동 등록

### 프로젝트에 연결

1. Vercel 대시보드 → 내 프로젝트 → **Settings → Domains**
2. 방금 산 도메인 입력 → **Add**
3. Vercel이 자동으로 DNS를 구성합니다. **별도 DNS 설정 불필요**
4. 1~5분 뒤 HTTPS 자물쇠와 함께 내 도메인으로 접속 가능

> 이게 전부입니다. A·CNAME 레코드를 직접 건드릴 필요가 없습니다.

---

## 방법 B — 외부 도메인 연결

가비아·후이즈·Namecheap 등 외부에서 산 도메인을 Vercel에 연결합니다.

### 1단계: Vercel에서 레코드 확인

1. Vercel 대시보드 → 프로젝트 → **Settings → Domains**
2. 연결할 도메인 입력 → **Add**
3. Vercel이 추가할 DNS 레코드를 알려줍니다:

| Type | Name | Value |
|---|---|---|
| A | @ (루트) | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

이 두 줄을 도메인 구입처 DNS에 넣어야 합니다.

### 2단계: 도메인 구입처 DNS 관리

각 업체마다 화면이 다릅니다. 공통 절차:

::: windows
**가비아** 기준:
1. gabia.com 로그인 → My가비아 → 도메인 → 해당 도메인 → **DNS 정보/관리**
2. **DNS 관리** → **레코드 추가**
3. A 레코드: 호스트 `@`, 값 `76.76.21.21`, TTL 3600
4. CNAME 레코드: 호스트 `www`, 값 `cname.vercel-dns.com`, TTL 3600
5. 저장
:::

::: mac
**Namecheap** 기준:
1. namecheap.com 로그인 → Domain List → 해당 도메인 → **Manage**
2. **Advanced DNS** 탭 → **Add New Record**
3. A Record: Host `@`, Value `76.76.21.21`, TTL Automatic
4. CNAME Record: Host `www`, Value `cname.vercel-dns.com`, TTL Automatic
5. 체크 아이콘으로 저장
:::

### 화면이 낯설면 — Claude Chrome Extension 활용

DNS 관리 화면을 열고 Chrome Extension 사이드 패널에서:

> 이 화면에서 A 레코드에 76.76.21.21을 추가하고 싶어. 어디를 눌러야 해? [화면 공유]

또는 Aside Browser Computer Use에게 직접 맡기기 (13강 참고).

### 3단계: 전파 확인

DNS 변경은 몇 분~최대 48시간이 걸립니다.

확인 방법 두 가지:
- Vercel 대시보드 → Domains → 도메인 옆에 **체크(✓)** 가 뜨면 연결 완료
- [whatsmydns.net](https://whatsmydns.net) → 도메인 입력 → A 레코드가 `76.76.21.21`로 보이는지

```bash
# 터미널에서도 확인 가능
nslookup mycafe.kr
```

> [!TIP]
> 전파 전에는 Vercel에서 "Invalid Configuration" 경고가 뜰 수 있습니다. 기다리면 자동으로 체크로 바뀝니다.

---

## 도메인 고급 설정

연결이 됐으면 더 세밀하게 다듬습니다.

### 서브도메인으로 기능 분리

| 서브도메인 | 연결 대상 | 활용 예 |
|---|---|---|
| `order.mycafe.kr` | 배달의민족·쿠팡이츠 주문 페이지 | "주문하기" 버튼 |
| `blog.mycafe.kr` | Notion Public Page | 블로그·소식 |
| `booking.mycafe.kr` | 네이버 예약 링크 | 예약 전용 URL |

**Vercel 프로젝트 서브도메인**: Settings → Domains → `order.mycafe.kr` 추가  
**외부 서비스 서브도메인**: 도메인 구입처 DNS에서 CNAME 레코드 추가

### 짧은 URL (vercel.json 리다이렉트)

Claude Code에게:

> vercel.json에 리다이렉트를 추가해줘:
> - /instagram → https://instagram.com/내아이디 (302)
> - /order → https://주문링크 (302)
> - /naver → https://naver.me/내링크 (302)
> - cleanUrls: true (.html 숨기기)
> - www → www 없는 주소로 301

`mycafe.kr/instagram` 을 명함에 인쇄하면 인스타 주소가 바뀌어도 여기만 수정하면 됩니다.

### Cloudflare 무료 CDN (선택)

속도·보안을 높이고 싶다면:

1. [cloudflare.com](https://cloudflare.com) 무료 가입 → **Add a Site** → 도메인 입력
2. Cloudflare가 기존 DNS 레코드를 자동으로 읽어옵니다
3. 도메인 구입처에서 **네임서버**를 Cloudflare 것으로 변경
4. 24시간 뒤 Cloudflare 경유로 Vercel 서빙

> Vercel 도메인(방법 A)은 Cloudflare 연결 불필요 — Vercel Edge Network가 이미 CDN 역할을 합니다.

---

## 오늘의 체크리스트

- [ ] 도메인이 연결됐고 HTTPS 자물쇠가 있다
- [ ] `www.mycafe.kr` 과 `mycafe.kr` 모두 열린다
- [ ] (선택) 서브도메인 1개 이상을 만들어 사용한다
- [ ] (선택) `/instagram` 같은 짧은 URL이 동작한다
- [ ] (선택) Cloudflare를 연결했다
