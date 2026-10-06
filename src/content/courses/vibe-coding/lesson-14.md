---
number: 14
title: 인증
subtitle: 로그인 만들기
goal: 이메일 로그인을 추가하고, 저장된 데이터가 로그인한 사용자에게만 보이도록 보안 규칙(RLS)을 켭니다.
minutes: 50
part: 3부 · 만들기
---

## 로그인은 "직접 만들지 않는" 기능입니다

비밀번호 저장, 이메일 인증, 세션 관리, 비밀번호 재설정… 로그인은 잘못 만들면 가장 위험한 기능입니다. 그래서 **직접 만들지 않고 검증된 서비스를 씁니다.** 12강에서 고른 Supabase에 이미 들어 있습니다.

로그인을 붙이면 세 가지가 생깁니다.

1. **사용자 테이블** — 누가 가입했는지 (Supabase가 자동 관리)
2. **세션** — "지금 이 브라우저는 A씨가 로그인한 상태"라는 기억
3. **user_id** — 저장하는 모든 데이터에 "누구 것인지" 표시

## 가장 간단한 방식: 매직 링크

비밀번호 없이, 이메일로 온 링크를 클릭하면 로그인되는 방식입니다. 만들 화면이 "이메일 입력창 하나"뿐이라 입문에 가장 좋습니다. 소셜 로그인(구글, 카카오)은 나중에 조각 하나로 추가할 수 있습니다.

## 따라하기 1: 로그인 화면

로그인은 **세 단계**로 나눠 만들고, 단계마다 눈으로 확인합니다.

**단계 1: 로그인 화면**

<div class="prompt-box not-prose" data-prompt="14-1" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 14-1</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

"Supabase Auth의 매직 링크 로그인을 추가해줘. @supabase/ssr 설치를 허락할게. /login 화면에 이메일 입력창과 '로그인 링크 받기' 버튼을 만들고, 보내면 '이메일을 확인하세요'를 표시해줘. Next.js App Router에 맞는 서버/클라이언트 구분을 지켜줘. 완료 후 확인 방법을 알려줘."

</div>
</div>

**확인:** `/login`에서 내 이메일을 넣고 버튼을 누르면 "이메일을 확인하세요"가 뜨고, 실제 메일함에 링크 메일이 도착합니다.

**단계 2: 링크를 누르고 돌아오는 길**

<div class="prompt-box not-prose" data-prompt="14-1a" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 14-1a</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

"메일의 링크를 클릭한 뒤 앱으로 돌아와 로그인이 완료되도록 콜백(링크를 누른 뒤 되돌아오는 주소를 처리하는 서버 쪽 파일) 라우트를 만들어줘."

</div>
</div>

**단계 3: 헤더 표시**

<div class="prompt-box not-prose" data-prompt="14-1b" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 14-1b</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

"layout.tsx 헤더에 로그인 상태면 내 이메일과 '로그아웃' 버튼, 아니면 '로그인' 링크를 보여줘."

</div>
</div>

Supabase 대시보드 → Authentication → URL Configuration에 `http://localhost:3000`과 배포 주소를 등록해야 링크가 제대로 돌아옵니다. AI에게 "어디에 어떤 주소를 등록해야 하는지"를 물어보세요.

**확인:** 이메일 입력 → 메일 도착 → 링크 클릭 → 헤더에 내 이메일 표시 → 로그아웃 → 다시 "로그인" 링크 표시 → 커밋.

::: practice
- [ ] 메일로 온 링크를 눌렀더니 앱으로 돌아왔다
- [ ] 헤더에 내 이메일과 로그아웃 버튼이 보인다
- [ ] 로그아웃하면 헤더가 "로그인" 링크로 바뀐다
:::

## 따라하기 2: 데이터에 주인 표시하기

`saved_menus` 테이블에 `user_id` 컬럼을 추가합니다. Supabase Table Editor에서:

| 컬럼 | 타입 | 설정 |
|---|---|---|
| user_id | uuid | Foreign key(다른 테이블의 행과 연결하는 표시) → auth.users.id, Default: `auth.uid()` |

그리고 코드:

<div class="prompt-box not-prose" data-prompt="14-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 14-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

"메뉴를 저장할 때 user_id에 현재 로그인한 사용자 id를 넣고, /menus는 로그인한 사용자의 메뉴만 보여줘. 로그인 안 했으면 /login으로 보내줘."

</div>
</div>

## 따라하기 3: RLS 켜기 — 진짜 보안

지금까지는 코드가 "내 것만 보여줘"라고 **부탁**하는 수준입니다. 누군가 브라우저 콘솔에서 직접 Supabase를 호출하면 남의 데이터도 보입니다. **RLS(Row Level Security)** 는 데이터베이스가 직접 "네 것만 준다"고 **강제**하는 장치입니다.

Supabase → Table Editor → `saved_menus` → **Enable RLS**. 그리고 정책(Policy)을 추가합니다. AI에게 SQL(데이터베이스에 내리는 명령 문장)을 받아 Supabase의 **SQL Editor**에 붙여넣고 **Run**을 누르면 됩니다.

<div class="prompt-box not-prose" data-prompt="14-3" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 14-3</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

"saved_menus 테이블에 RLS 정책 SQL을 만들어줘. 로그인한 사용자가 자신의 user_id 행만 select, insert, update, delete 할 수 있게."

</div>
</div>

결과는 대략 이런 모양입니다.

```sql
create policy "own rows" on saved_menus
  for all using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
```

**확인이 중요합니다.** 다른 이메일로 로그인해서 `/menus`를 열면 **비어 있어야** 합니다. 그리고 원래 계정으로 돌아오면 내 메뉴가 보여야 합니다.

## 오늘의 체크리스트

직접 해보고 **눈으로 확인한 것만** 체크하세요.

::: practice
- [ ] 매직 링크로 로그인/로그아웃이 된다
- [ ] Table Editor에서 새로 저장한 행의 `user_id` 칸에 값이 들어 있다
- [ ] RLS를 켠 뒤, **다른 이메일**로 로그인해 `/menus`를 열면 목록이 비어 있고, 원래 계정으로 돌아오면 내 메뉴가 보인다
- [ ] 배포 주소에서도 로그인이 된다 (URL Configuration 확인)
:::

## 더 해보기(선택)

본 과정에 꼭 필요하지 않은 심화입니다. 시간이 남거나 더 궁금할 때 해보세요.

### 로그인 이후 생각할 것

- **온보딩**: 첫 로그인 사용자에게 뭘 보여줄지. 빈 목록에 "첫 메뉴를 저장해보세요" 한 줄이면 충분합니다.
- **로그인 없이도 쓸 수 있는 부분**: 추천받기는 로그인 없이, 저장만 로그인 요구 — 이렇게 하면 처음 온 사람이 바로 써볼 수 있습니다.


## 다음 강의

15강, 디버깅. 지금까지 "일단 넘어간" 이상한 동작들을 잡습니다. 에러는 실패가 아니라 과정입니다.
