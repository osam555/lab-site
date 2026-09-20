---
number: 9
title: 내 도메인과 검색 노출
subtitle: mycafe.kr로 들어오고, 구글에서 찾아지게
goal: 도메인을 사서 Vercel에 연결하고, 검색 엔진과 SNS 공유에 필요한 정보를 홈페이지에 넣습니다.
minutes: 50
part: 3부 · 공개
---

## 도메인 고르기

| 종류 | 예 | 연 비용 | 특징 |
|---|---|---|---|
| `.kr` / `.co.kr` | mycafe.kr | 1~2만 원 | 한국 가게에 신뢰감. 국내 등록업체에서 |
| `.com` | mycafe.com | 1.5~2만 원 | 가장 익숙. 좋은 이름은 대부분 선점됨 |
| `.shop` `.cafe` `.studio` 등 | mycafe.shop | 첫해 저렴, 이후 2~5만 원 | 이름이 남아 있을 확률 높음. 갱신 가격 확인 |

고르는 기준: **짧고, 말로 전했을 때 헷갈리지 않고, 가게 이름과 같은 것.** 하이픈과 숫자는 피하세요.

구입처는 가비아·후이즈(국내), Namecheap·Cloudflare(해외) 어디든 됩니다. 이후 단계는 같습니다.

## Vercel에 연결

1. Vercel 프로젝트 → **Settings → Domains** → 산 도메인 입력 → **Add**
2. Vercel이 **DNS 레코드** 두 줄을 알려줍니다. 대략 이런 모양:

| Type | Name | Value |
|---|---|---|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

3. **도메인을 산 사이트**로 가서 "DNS 관리" 또는 "네임서버/레코드 설정" 메뉴를 찾아 위 두 줄을 그대로 추가합니다.
4. 몇 분~몇 시간 뒤 Vercel 화면의 도메인 옆에 체크가 뜨면 연결 완료. HTTPS(자물쇠)는 Vercel이 자동으로 붙입니다.

DNS 설정 화면은 업체마다 생김새가 다릅니다. 헷갈리면 **그 화면을 캡처해서** Claude Code에 붙여넣으세요.

> Vercel이 이 두 줄을 넣으라는데 [캡처] 이 화면에서 어디에 뭘 넣어야 해?

## 주소를 깔끔하게

지금 메뉴 페이지 주소는 `mycafe.kr/menu.html`입니다. `.html`을 떼려면 Vercel에 설정 파일 하나면 됩니다.

> vercel.json 파일을 만들어서 `.html` 없이 접속되게 해줘 (cleanUrls). 그리고 모든 html 파일의 내부 링크에서도 `.html`을 빼줘. www로 들어와도 www 없는 주소로 가게 해줘.

커밋 → push → `mycafe.kr/menu`로 열리는지 확인.

## 검색에 찾아지게

홈페이지가 있어도 구글이 모르면 안 찾아집니다. 세 가지를 합니다.

### 1. 페이지마다 제목과 설명
검색 결과에 나오는 파란 제목과 회색 설명입니다.

> 모든 페이지의 `<title>`과 meta description을 넣어줘.
> - index: "[가게 이름] | [동네] [업종]" / "[한 줄 소개 + 위치 + 특징]" (설명은 80자 내외)
> - menu: "메뉴 | [가게 이름]" / "[대표 메뉴 나열]"
> - location: "오시는 길 | [가게 이름]" / "[주소, 영업시간, 주차]"
> - contact: "문의 | [가게 이름]" / "[전화, 인스타]"

### 2. 카톡·인스타에 공유했을 때 미리보기
링크를 보내면 뜨는 사진과 제목입니다. **Open Graph**라고 합니다.

> 모든 페이지에 Open Graph 태그를 넣어줘. og:title은 각 페이지 제목, og:description은 설명, og:image는 images/og.jpg (1200×630으로 hero 사진에서 만들어줘), og:url은 https://[내 도메인]/각페이지.

### 3. 구글에 알리기
1. search.google.com/search-console → 도메인 등록 → 소유 확인 (DNS에 TXT 한 줄 추가. 9강 앞부분과 같은 방법)
2. Claude Code에게: "sitemap.xml과 robots.txt를 만들어줘. 페이지 4개, 도메인은 https://[내 도메인]"
3. Search Console에서 sitemap 제출: `https://[내 도메인]/sitemap.xml`

며칠~2주 뒤 "[가게 이름]"으로 검색하면 나옵니다. 네이버는 searchadvisor.naver.com에서 같은 절차입니다.

### 가게라면 하나 더
**구글 비즈니스 프로필**(business.google.com)과 **네이버 스마트플레이스**에 가게를 등록하고 홈페이지 주소를 넣으세요. 지도 검색에서 홈페이지 링크가 뜹니다. 홈페이지 자체보다 손님이 더 많이 오는 경로입니다.

## 확인하기

- 카톡 나에게 보내기로 링크를 보내 미리보기 사진·제목이 뜨는지
- `mycafe.kr`, `www.mycafe.kr`, `mycafe.kr/menu` 전부 열리는지
- 브라우저 주소창에 자물쇠가 있는지

```bash
git add .
git commit -m "도메인 연결, 검색·공유 정보 추가"
git push
```

## 오늘의 체크리스트

- [ ] 내 도메인으로 홈페이지가 열리고 자물쇠가 있다
- [ ] `/menu`처럼 `.html` 없이 열린다
- [ ] 카톡으로 보냈을 때 사진과 제목이 뜬다
- [ ] Search Console에 sitemap을 제출했다

## 다음 강의

마지막 10강. 문의 폼을 붙이고, 앞으로 혼자서 유지·수정하는 루틴을 정리합니다.
