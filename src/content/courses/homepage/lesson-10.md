---
number: 10
title: 구글·네이버 검색 등록
subtitle: 검색에 안 나오면 없는 홈페이지입니다
goal: 구글 서치 콘솔과 네이버 서치 어드바이저에 내 홈페이지를 등록하고, 검색 결과에 나오도록 합니다.
minutes: 40
part: 3부 · 공개
---

## 왜 등록해야 하나요?

홈페이지를 배포하고 도메인을 연결했지만, **구글과 네이버는 아직 내 홈페이지를 모릅니다.** 검색 엔진이 알아서 찾아오긴 하지만, 몇 주가 걸릴 수 있습니다. 직접 등록하면 며칠 안에 검색 결과에 나옵니다.

등록할 곳은 두 군데입니다:

| 검색 엔진 | 등록 도구 | 주소 |
|---|---|---|
| 구글 | 서치 콘솔 (Search Console) | [search.google.com/search-console](https://search.google.com/search-console) |
| 네이버 | 서치 어드바이저 | [searchadvisor.naver.com](https://searchadvisor.naver.com) |

## 사전 준비: sitemap과 robots.txt

검색 엔진에 등록하기 전에, 내 홈페이지의 페이지 목록(sitemap)과 검색 허용 규칙(robots.txt)이 필요합니다. 9강에서 아직 안 만들었다면:

<div class="prompt-box not-prose" data-prompt="10-1" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 10-1</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

sitemap.xml 과 robots.txt를 만들어줘. 페이지 4개, 도메인은 https://[내 도메인]

</div>
</div>

커밋 → push → `https://내도메인/sitemap.xml`이 열리는지 확인.

## 1. 구글 서치 콘솔 등록

### 소유 확인

1. [search.google.com/search-console](https://search.google.com/search-console) 접속 (구글 계정 로그인)
2. 왼쪽 위 **속성 추가** → **도메인** 탭 → `mycafe.kr` 입력 → **계속**
3. 구글이 **DNS TXT 레코드** 값을 보여줍니다. 복사하세요.
4. **가비아** DNS 관리에서 (9강에서 했던 그 화면):
   - 레코드 추가 → 타입: **TXT**, 호스트: **@**, 값: 복사한 것
5. Search Console로 돌아와 **확인** → "소유권이 확인되었습니다" 성공

> [!TIP]
> DNS 반영에 최대 몇 시간 걸릴 수 있습니다. 실패하면 10분 뒤 다시 시도하세요.

### sitemap 제출

1. 왼쪽 메뉴 **Sitemaps** → URL에 `sitemap.xml` 입력 → **제출**
2. 상태가 "성공"으로 바뀌면 완료

### 수동 색인 요청 (빠르게 검색에 나오게)

검색 엔진이 자동으로 수집하지만, 수동으로 요청하면 **하루 안에** 검색 결과에 나올 수 있습니다.

1. 왼쪽 **URL 검사** → 내 도메인 주소 입력 (예: `https://mycafe.kr`) → Enter
2. "URL이 Google에 등록되어 있지 않음"이 뜨면 **색인 생성 요청** 클릭
3. 메인 페이지, 메뉴 페이지, 오시는 길 페이지 각각 반복

### 검색 성능 리포트 읽는 법

며칠 뒤부터 데이터가 쌓입니다. 왼쪽 **실적** 메뉴에서 확인:

| 지표 | 의미 | 좋은 기준 |
|---|---|---|
| **클릭수** | 검색 결과에서 실제로 방문한 횟수 | 늘어나면 좋음 |
| **노출수** | 검색 결과에 뜬 횟수 | 클릭수보다 항상 많음 |
| **CTR** | 뜬 것 중 클릭한 비율 | 3% 이상이면 양호 |
| **평균 게재 순위** | 낮을수록 위에 표시 | 10위 이하 → 첫 페이지 |

> [!TIP]
> "어떤 검색어로 내 홈페이지가 뜨는지"를 보고, 그 단어를 첫 화면 소개에 넣으면 순위가 올라갑니다.

## 2. 네이버 서치 어드바이저 등록

한국에서는 네이버 검색이 구글만큼 중요합니다. 절차가 구글과 비슷합니다.

### 사이트 등록

1. [searchadvisor.naver.com](https://searchadvisor.naver.com) 접속 → 네이버 로그인
2. **웹 마스터 도구** → **사이트 추가** → 내 도메인 입력 (예: `https://mycafe.kr`)

### 소유 확인

소유 확인 방법을 선택합니다. 가장 쉬운 방법 두 가지:

**방법 A — HTML 태그 (추천)**
1. 네이버가 보여주는 `<meta name="naver-site-verification" content="값">` 를 복사
2. Claude Code에게:

<div class="prompt-box not-prose" data-prompt="10-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 10-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

네이버 서치 어드바이저 소유 확인 meta 태그를 index.html의 head에 넣어줘:
<meta name="naver-site-verification" content="[복사한 값]">

</div>
</div>

3. 커밋 → push → 배포 완료 후 네이버로 돌아와 **확인** 클릭

**방법 B — HTML 파일**
1. 네이버가 제공하는 확인용 HTML 파일을 다운로드
2. my-site 폴더 최상위에 넣고 커밋 → push
3. 네이버로 돌아와 **확인** 클릭

### sitemap 제출

1. 사이트 선택 → 왼쪽 메뉴 **요청 → 사이트맵 제출**
2. `https://mycafe.kr/sitemap.xml` 입력 → **확인**

### 검색 현황 확인

등록 후 며칠이 지나면 데이터가 쌓입니다:

- **검색 현황**: 내 사이트가 네이버에 얼마나 노출되는지
- **콘텐츠 현황**: 색인된 페이지 수 (4개면 정상)
- **403/404 오류**: 깨진 링크가 있으면 여기서 확인

> [!TIP]
> 네이버 블로그나 카페에 가게 이름 + 도메인을 한 번 언급하면 색인 속도가 빨라집니다.

## 3. 비즈니스 프로필 등록 (지도 노출)

검색보다 **지도에서 먼저 발견**되는 경우가 더 많습니다. 둘 다 무료입니다.

| 서비스 | 주소 | 효과 |
|---|---|---|
| **네이버 스마트플레이스** | [smartplace.naver.com](https://smartplace.naver.com) | 네이버 지도·로컬 검색 노출 |
| **구글 비즈니스 프로필** | [business.google.com](https://business.google.com) | 구글 지도·검색 노출 |

두 곳 모두 **홈페이지 주소 입력란**에 내 도메인을 넣으세요. "[동네] [업종]" 검색 시 지도에서 홈페이지 링크가 뜹니다.

## 오늘의 체크리스트

- [ ] 구글 서치 콘솔에 사이트 소유 확인을 완료했다
- [ ] 구글 서치 콘솔에 sitemap.xml을 제출했다
- [ ] 구글 서치 콘솔에서 URL 색인 생성 요청을 했다
- [ ] 네이버 서치 어드바이저에 사이트를 등록하고 소유 확인을 완료했다
- [ ] 네이버 서치 어드바이저에 sitemap.xml을 제출했다
- [ ] 네이버 스마트플레이스 또는 구글 비즈니스 프로필에 홈페이지 주소를 넣었다

## 다음 강의

11강. 문의 폼을 붙이고, 앞으로 혼자서 유지·수정하는 루틴을 정리합니다.
