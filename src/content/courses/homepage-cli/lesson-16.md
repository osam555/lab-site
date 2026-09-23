---
number: 16
title: 어드민 대시보드 (간단) — Pocketbase
subtitle: 설치 하나로 어드민 UI + DB + 인증이 한 번에
goal: Pocketbase를 Vercel 또는 Fly.io에 배포하고, 내장 어드민 패널에서 메뉴·공지·예약 데이터를 관리합니다. 홈페이지에서 데이터를 불러오는 연결까지 완성합니다.
minutes: 60
part: 고급 · 어드민 & 인증
---

## Pocketbase가 뭔가요?

**Pocketbase**는 어드민 대시보드, 데이터베이스, 인증, 파일 저장소가 **하나의 파일**에 들어있는 백엔드 도구입니다.

```
pocketbase (실행 파일 하나)
  ├─ 어드민 UI    → /admin 에서 브라우저로 접속
  ├─ DB           → SQLite (파일 하나로 저장)
  ├─ 인증         → 이메일/비밀번호, OAuth
  ├─ 파일 저장    → 사진, 첨부파일
  └─ REST API     → 홈페이지 JS에서 데이터 가져오기
```

**적합한 경우**
- 메뉴·공지·이벤트를 직접 코드 수정 없이 관리하고 싶을 때
- 문의 폼 데이터를 저장하고 어드민에서 보고 싶을 때
- 예약 리스트를 관리하고 싶을 때

---

## 1. 로컬에서 먼저 실행해보기

Claude Code 대화창에:

<div class="prompt-box not-prose" data-prompt="16-1" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 16-1</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Pocketbase를 내 컴퓨터에 다운로드해서 실행해줘. my-site 폴더 옆에 pb 폴더를 만들어서 거기에.

</div>
</div>

Claude Code가:
1. Pocketbase 최신 바이너리를 받아 `pb/` 폴더에 저장
2. `./pocketbase serve` 로 실행

실행되면 브라우저에서 `http://127.0.0.1:8090/_/` 접속 → **어드민 계정 생성**.

### 어드민 대시보드 첫 화면

```
Collections  ← 데이터 종류 (메뉴, 공지, 예약...)
Users        ← 회원 관리
Logs         ← API 요청 기록
Settings     ← 이메일·OAuth 설정
```

---

## 2. 데이터 구조 만들기

### 메뉴 컬렉션

Claude Code에게:

<div class="prompt-box not-prose" data-prompt="16-2" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 16-2</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Pocketbase 어드민(localhost:8090/_/)에서 menu 컬렉션을 만드는 방법을 알려줘.
필드: name(텍스트), price(숫자), description(텍스트), image(파일), is_sold_out(체크박스), sort_order(숫자)

</div>
</div>

또는 Pocketbase API로 자동 생성:

<div class="prompt-box not-prose" data-prompt="16-3" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 16-3</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Pocketbase REST API를 써서 menu 컬렉션을 생성하고, 현재 index.html의 메뉴 3개를 초기 데이터로 넣어줘.

</div>
</div>

### 문의 폼 컬렉션

<div class="prompt-box not-prose" data-prompt="16-4" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 16-4</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

contact_form 컬렉션을 만들어줘.
필드: name, phone, message, created(날짜). 누구나 쓸 수 있게 권한은 public create.

</div>
</div>

---

## 3. 홈페이지에서 데이터 불러오기

메뉴 데이터를 Pocketbase에서 가져와 HTML에 표시:

<div class="prompt-box not-prose" data-prompt="16-5" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 16-5</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

index.html의 메뉴 섹션을 Pocketbase API에서 menu 컬렉션을 가져와 동적으로 렌더링하게 바꿔줘.
API 주소는 http://localhost:8090 (나중에 배포 주소로 바꿀 거야).
is_sold_out이 true인 메뉴는 "품절" 배지를 보여줘.
sort_order 오름차순으로 정렬.

</div>
</div>

이제 어드민에서 메뉴를 바꾸면 홈페이지에 자동으로 반영됩니다.

---

## 4. Fly.io에 배포 (무료)

Pocketbase는 서버가 필요합니다. **Fly.io**의 무료 플랜이 적합합니다.

<div class="prompt-box not-prose" data-prompt="16-6" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 16-6</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

Pocketbase를 Fly.io에 배포하는 Dockerfile과 fly.toml을 만들어줘.
앱 이름은 mycafe-pb로.

</div>
</div>

Claude Code가 배포 파일을 만들면:

```bash
# Fly CLI 설치 (Claude Code가 안내)
fly launch
fly deploy
```

배포 완료 후 주소: `https://mycafe-pb.fly.dev`

홈페이지 JS의 API 주소를 `localhost` → `mycafe-pb.fly.dev`로 교체:

<div class="prompt-box not-prose" data-prompt="16-7" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 16-7</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

API 주소를 환경변수로 분리해줘. 로컬은 http://localhost:8090, 배포는 https://mycafe-pb.fly.dev.

</div>
</div>

---

## 5. 일상 관리 루틴

배포 후 매일 사용하는 방법:

1. `https://mycafe-pb.fly.dev/_/` 접속
2. 어드민 이메일·비밀번호 로그인
3. **Collections → menu** → 메뉴 추가·수정·삭제
4. **Collections → contact_form** → 문의 내역 확인
5. 홈페이지 새로고침 → 자동 반영

---

## 오늘의 체크리스트

- [ ] 로컬에서 Pocketbase가 실행된다
- [ ] 어드민에서 메뉴 컬렉션을 만들고 데이터를 넣었다
- [ ] 홈페이지에서 Pocketbase 데이터를 불러와 표시한다
- [ ] (선택) Fly.io에 배포해 외부에서 어드민에 접속된다
- [ ] (선택) 문의 폼이 Pocketbase에 저장되고 어드민에서 보인다
