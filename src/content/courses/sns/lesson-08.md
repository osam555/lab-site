---
number: 8
title: Facebook·Threads 직접 API 연동
subtitle: 스케줄러 없이 Graph API·Threads API로 직접 발행
goal: Facebook 페이지에 Graph API로 자동 포스팅하고, Meta Threads API로 스레드에 직접 발행합니다. 개인 프로필은 API 제약이 있어 Aside 브라우저 방식을 함께 다룹니다.
minutes: 50
part: 3부 · 자동화와 운영
---

## 스케줄러를 쓰지 않는 이유

5강까지는 스케줄러 하나에 모든 채널을 연결했습니다. 그런데 두 가지 경우에는 직접 API를 쓰는 게 낫습니다.

1. **스케줄러 비용을 줄이고 싶을 때** — Facebook 페이지와 Threads는 공식 API가 무료입니다
2. **파이프라인 안에서 발행까지 한 번에 돌리고 싶을 때** — 스크립트 한 줄로 끝

이 강에서는 Facebook Graph API(페이지)와 Meta Threads API를 직접 연동합니다.

---

## Facebook

Facebook은 **페이지**와 **개인 프로필**의 자동화 범위가 다릅니다.

### 페이지 — Graph API로 자동 포스팅

Facebook 페이지(예: "영어 듣기 대충영어" 같은 브랜드 페이지)는 Graph API로 텍스트·이미지·링크 포스팅이 가능합니다.

#### 따라하기 1: 앱 만들기 & Page Access Token 발급

1. **Meta for Developers 접속**: [developers.facebook.com](https://developers.facebook.com) 로그인
2. **앱 만들기**: `내 앱` → `앱 만들기` → `비즈니스` 유형 선택 → 앱 이름 입력
3. **제품 추가**: 앱 대시보드에서 `Facebook 로그인` 제품 추가
4. **Graph API 탐색기에서 토큰 발급**: [developers.facebook.com/tools/explorer](https://developers.facebook.com/tools/explorer)
   - 앱 선택 → `Get User Access Token` → 권한에 `pages_manage_posts`, `pages_read_engagement` 체크
   - 토큰 받은 뒤 → `페이지 액세스 토큰으로 교환`: 드롭다운에서 페이지 선택
5. **장기 토큰으로 교환**: 단기 토큰은 1~2시간 만료. Claude Code에게 시킵니다:

<div class="prompt-box not-prose" data-prompt="8-1" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 8-1</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Graph API 탐색기에서 받은 단기 Page Access Token을 장기 토큰(60일)으로 교환하는 curl 명령을 만들어줘. 앱 ID와 앱 시크릿은 .env에서 읽어.

</div>
</div>

`.env`에 추가:

```
FB_APP_ID=...
FB_APP_SECRET=...
FB_PAGE_ID=...
FB_PAGE_ACCESS_TOKEN=장기토큰
```

#### 따라하기 2: 포스팅 스크립트

<div class="prompt-box not-prose" data-prompt="8-2" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 8-2</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

scripts/fb-post.py를 만들어줘.
- .env에서 FB_PAGE_ID, FB_PAGE_ACCESS_TOKEN 읽기
- variants.json의 facebook 항목에서 텍스트, 링크(UTM 포함) 가져오기
- Graph API의 `/{page-id}/feed` 엔드포인트로 POST
- 이미지가 있으면 `/{page-id}/photos`로 먼저 업로드 후 게시
- 성공하면 게시물 ID와 URL 출력, 실패하면 에러 메시지
- `--draft` 옵션: published=false로 비공개 게시 (검수용)

</div>
</div>

```bash
python3 scripts/fb-post.py --draft     # 비공개로 먼저 확인
python3 scripts/fb-post.py              # 실제 발행
```

#### 따라하기 3: 예약 발행

Graph API는 예약 발행도 지원합니다:

<div class="prompt-box not-prose" data-prompt="8-3" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 8-3</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

fb-post.py에 `--schedule "2025-02-01 09:00"` 옵션을 추가해줘. scheduled_publish_time 파라미터로 Unix 타임스탬프 변환해서 보내고, published=false 설정.

</div>
</div>

### 개인 프로필 — Aside 브라우저 방식

개인 프로필(예: "오승종")은 Graph API로 자동 포스팅이 **제한**됩니다. `publish_to_groups`, `user_posts` 등의 권한은 앱 리뷰(Meta 심사)를 통과해야 하고, 개인 계정용 발행 API는 사실상 닫혀 있습니다.

현실적인 방법은 **Aside 브라우저(Computer Use)**입니다:

<div class="prompt-box not-prose" data-prompt="8-4" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 8-4</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Computer Use로 facebook.com에서 내 개인 프로필에 글을 올려줘.
- variants.json의 facebook-personal 항목에서 텍스트와 이미지를 가져와
- 게시물 작성 → 텍스트 입력 → 이미지 첨부 → ⏸ "게시할까요?" 확인 후 게시 버튼

</div>
</div>

개인 프로필 포스팅이 필요한 분만 하세요. 페이지 하나로 충분한 경우가 많습니다.

---

## Threads — Meta Threads API로 직접 발행

Meta는 Threads API를 공식 공개했습니다. 텍스트, 이미지, 링크 포스팅이 가능합니다.

### 따라하기 4: Threads API 설정

1. **같은 Meta 앱 사용**: 따라하기 1에서 만든 앱을 그대로 씁니다
2. **제품 추가**: 앱 대시보드 → `Threads API 사용 사례` 제품 추가
3. **권한 설정**: `threads_basic`, `threads_content_publish` 스코프 추가
4. **Access Token**: Facebook 로그인 플로우로 Threads 토큰을 발급받습니다

<div class="prompt-box not-prose" data-prompt="8-5" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 8-5</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Threads API용 Access Token을 발급받는 절차를 알려줘. 앱 ID는 .env에서 읽고, OAuth 인증 URL을 브라우저에서 열어 코드를 받은 뒤 장기 토큰으로 교환하는 과정까지.

</div>
</div>

`.env`에 추가:

```
THREADS_USER_ID=...
THREADS_ACCESS_TOKEN=장기토큰
```

### 따라하기 5: Threads 포스팅 스크립트

<div class="prompt-box not-prose" data-prompt="8-6" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 8-6</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

scripts/threads-post.py를 만들어줘.
- .env에서 THREADS_USER_ID, THREADS_ACCESS_TOKEN 읽기
- variants.json의 threads 항목에서 텍스트, 링크 가져오기
- Threads API 2단계 발행:
  1. `POST /{user-id}/threads` → media container ID 생성 (media_type=TEXT, text=내용, link_attachment=URL)
  2. `POST /{user-id}/threads_publish` → container ID로 실제 발행
- 이미지 포함 시 media_type=IMAGE, image_url 사용
- 성공하면 스레드 ID와 URL 출력
- `--draft` 옵션: 1단계(컨테이너 생성)만 하고 발행은 안 함 (확인용)

</div>
</div>

```bash
python3 scripts/threads-post.py --draft   # 컨테이너만 생성
python3 scripts/threads-post.py            # 실제 발행
```

### Threads API 제약 사항

| 항목 | 내용 |
|---|---|
| 발행 한도 | 24시간 내 250개 (충분) |
| 지원 미디어 | 텍스트, 이미지(JPEG/PNG), 동영상, 캐러셀 |
| 답글 | API로 가능하지만 이 과정에서는 손으로 |
| 인사이트 | `threads_basic` 스코프로 조회수·좋아요 등 수집 가능 |

---

## 스킬 파이프라인에 추가

7강에서 만든 SNS 배포 스킬에 직접 API 발행 단계를 추가합니다:

```markdown
## 3-B. 직접 API 발행 (8강, 선택)
- 스케줄러 대신 직접 API를 쓰는 채널:
  - Facebook 페이지: `python3 scripts/fb-post.py --draft` → ⏸ 확인 → 발행
  - Threads: `python3 scripts/threads-post.py --draft` → ⏸ 확인 → 발행
- 개인 프로필은 Computer Use로 반자동
- 나머지 채널은 기존 스케줄러 경로 유지
```

## channels.json 업데이트

channels.json에 Facebook과 Threads 직접 API 경로를 추가합니다:

<div class="prompt-box not-prose" data-prompt="8-7" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 8-7</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

channels.json에 facebook-page와 threads 채널을 추가해줘.
- facebook-page: max_chars 63206, image_ratio "1.91:1" 또는 "1:1", publish_method "graph_api"
- threads: max_chars 500, image_ratio "1:1", publish_method "threads_api"
- facebook-personal: publish_method "aside_browser" (수동)

</div>
</div>

## 토큰 만료 관리

| 토큰 | 유효기간 | 갱신 |
|---|---|---|
| Facebook Page (장기) | 60일 | 60일마다 재발급. 스크립트에 만료 7일 전 경고 추가 |
| Threads (장기) | 60일 | 같은 방식. `token_expires` 필드를 .env에 |
| Facebook 개인 프로필 | — | Aside 방식이라 토큰 불필요 |

<div class="prompt-box not-prose" data-prompt="8-8" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 8-8</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

fb-post.py와 threads-post.py에 토큰 만료일 체크를 넣어줘. 7일 이내면 "⚠️ 토큰이 N일 뒤 만료됩니다. 갱신하세요." 경고.

</div>
</div>

## 오늘의 체크리스트

- [ ] Meta for Developers에 앱을 만들고 Page Access Token을 발급했다
- [ ] `fb-post.py --draft`로 비공개 게시 후 확인, 발행까지 성공했다
- [ ] Threads API 토큰을 발급하고 `threads-post.py`로 텍스트+링크 발행에 성공했다
- [ ] channels.json에 facebook-page, threads 채널이 추가됐다
- [ ] 스킬 파일에 직접 API 발행 단계(3-B)가 있다
- [ ] 커밋했다

## 다음 단계

이 과정의 7개 채널(X·스레드·인스타·링크드인·카카오채널·Facebook 페이지·Facebook 개인)이 모두 갖춰졌습니다. "배포해줘" 한 줄이면 스케줄러 경로와 직접 API 경로가 함께 돌아갑니다.
