---
number: 3
title: 내 프로젝트 만들기
subtitle: kit.config.json — 캐릭터·브랜드·채널·그림체
goal: new_project.py 마법사로 kit.config.json을 만들고, characters·brand·channels·storage·style.tail·topic.kind 여섯 칸을 직접 채웁니다.
minutes: 40
part: 1부 · 준비
---

## kit.config.json 이 하는 일

이 파일 하나가 모든 편의 **캐릭터 생김새·브랜드 이름·유튜브 채널·그림체**를 정합니다. 코드를 고칠 필요 없이 이 파일만 바꾸면 완전히 다른 주제·다른 채널로 전환됩니다.

## 오늘 꼭 할 것 / 더 해보기(선택)

여섯 칸을 모두 고치려 하면 지칩니다. **오늘은 세 칸만** 채우면 4강으로 갈 수 있습니다.

| 구분 | 칸 | 어떻게 |
|---|---|---|
| **오늘 꼭** | `characters` | 프롬프트 3-2 로 아이·엄마·친구 생김새 |
| **오늘 꼭** | `channels` | 프롬프트 3-1 (Aside 를 아직 못 깔았다면 채널 ID 만 먼저, 탭 id 는 5강 전에) |
| **오늘 꼭** | `storage` | 프롬프트 3-1 (R2 를 아직 못 했다면 6강 전에) |
| 더 해보기 | `brand`·`style.tail`·`topic.kind` | 기본값 그대로 두어도 첫 편이 나옵니다 |

용어: **JSON** 은 `{"이름": "값"}` 모양으로 설정을 적는 글자 파일입니다. 메모장으로도 열리지만, 직접 고치기보다 클로드에게 시키는 쪽이 안전합니다.

## Code 탭에서 이렇게 시키세요

> **기본 방법: 클로드 데스크탑 앱의 Code 탭.** 키트 폴더(`clay-episode-kit`)를 프로젝트 폴더로 열고, 아래 프롬프트를 붙여 넣어 클로드에게 시킵니다. 클로드가 명령을 실행하거나 파일을 바꾸려고 **권한을 물으면, 무엇을 하려는지 읽고** 허용합니다(모르겠으면 "이게 뭐 하는 거야?"라고 되물어 보세요). 끝나면 '③ 결과 확인'을 눈으로 확인합니다. 명령어를 직접 치는 방법은 맨 아래 **'터미널로도 할 수 있어요'** 에 접어 두었습니다.

이 절은 clay-episode 스킬의 "내 프로젝트 만들기" 절에 있는 "꼭 손볼 다섯 칸" 안내를 그대로 따릅니다. `channels`·`storage` 같은 계정 연결 칸을 먼저 채우고, 그다음 캐릭터 문구를 다듬습니다.

### 프롬프트 3-1 · 계정 연결·설정을 Claude 에게 맡기기

`channels`(탭 id·채널 ID)·`storage`(R2 버킷·공개 주소)는 손으로 옮겨 적다 틀리기 쉽습니다. Aside 와 wrangler 에 로그인만 돼 있으면 Claude 가 읽어서 채웁니다.

**① 준비 (사람이 먼저)**
- [ ] 어디서: 키트 폴더에서 데스크탑 앱 Code 탭을 열고 이 폴더를 프로젝트 폴더로 고릅니다
- [ ] Aside 앱에 Flow·Studio 탭이 로그인된 채 열려 있어야 합니다(2강)
- [ ] R2 버킷 이름, 만들고 싶은 채널 이름을 미리 정해 둡니다(프롬프트의 `<버킷 이름>`·`<내 채널 이름>` 자리)
- [ ] `npx wrangler login` 이 끝나 있어야 합니다(2강)

**② 스킬 (붙여 넣기)**

아래 프롬프트에서 `<버킷 이름>`·`<내 채널 이름>` 두 곳을 내 것으로 바꿔 붙여 넣습니다.

<div class="prompt-box not-prose" data-prompt="3-1" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-1</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

clay-episode 스킬을 읽고 kit.config.json 을 채워줘. (1) aside repl 로 지금 열린 탭 목록을 읽어서 flow.google.com 탭 id 를 FLOW_TAB 환경변수로 영구 저장(Windows setx, mac ~/.zshrc)하고, studio.youtube.com 탭 id 를 channels.main.studio_tab_hint 에, 그 탭 주소에 있는 UC 로 시작하는 채널 ID 를 channels.main.channel_id 에 적어. (2) python scripts/setup_r2.py <버킷 이름> 을 돌려 R2 버킷·공개 주소·storage 칸을 채워(로그인이 안 돼 있다고 나오면 npx wrangler login 을 안내하고 내가 허용할 때까지 기다려). (3) 없는 칸은 python scripts/new_project.py --defaults 로 만들고 brand.name 은 "<내 채널 이름>" 으로 해. (4) 끝나면 kit.config.json 을 표로 요약하되 탭 id 와 키 값은 가려서 보여줘. characters 칸은 건드리지 마 — 그건 3-2 로 내가 따로 시킬게.

</div>
</div>

**③ 결과 확인**
- [ ] 클로드가 권한을 물으면 어떤 명령·파일인지 읽고 허용했는지(모르는 것은 허용 전에 물어봅니다)
- [ ] 요약 표의 `channel_id` 가 내 채널의 UC… 와 같은지(YouTube Studio → 설정 → 채널 → 고급 설정)
- [ ] `media_base_url` 이 `https://pub-….r2.dev/episodes` 꼴인지 — `dev-url enable` 이 거부되면 2강 따라하기 4의 4번을 대시보드에서 손으로 합니다
- [ ] **사람이 확인해야 할 체크포인트**: 위 두 값을 직접 눈으로 대조합니다.

### 프롬프트 3-2 · 캐릭터 생김새 채우기

캐릭터 문구는 영어로 직접 쓰기 까다로우니 스킬에게 초안을 시킵니다.

**① 준비 (사람이 먼저)**
- [ ] 어디서: 내 프로젝트 폴더(kit.config.json 이 있는 곳)에서 데스크탑 앱 Code 탭을 열고 이 폴더를 프로젝트 폴더로 고릅니다
- [ ] 3-1 이 끝나 있어야 합니다(channels·storage 칸)
- [ ] 아이·엄마·친구의 옷 색·특징을 미리 한두 마디로 정해 둡니다

**② 스킬 (붙여 넣기)**

<div class="prompt-box not-prose" data-prompt="3-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 3-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

clay-episode 스킬을 읽고, kit.config.json 의 characters(등장인물 생김새) 칸을 내 채널용으로 바꿔줘. 아이는 노란 우비를 입은 단발머리 여자아이, 엄마는 하늘색 앞치마, 친구는 초록 모자 쓴 남자아이로 하고, 옷 색·머리·피부색이 서로 안 겹치게 영어 한 줄씩으로 써줘. 키(C2·MP·F2)는 그대로 두고 값만 바꿔줘. 다 바꾸면 세 줄을 표로 보여줘 — 여기까지만 하고 멈춰, 다음 칸은 내가 직접 확인한 뒤 시킬게.

</div>
</div>

**③ 결과 확인**
- [ ] 클로드가 권한을 물으면 어떤 명령·파일인지 읽고 허용했는지(모르는 것은 허용 전에 물어봅니다)
- [ ] Claude 가 characters 세 칸을 고친 내용을 표로 보여줬는지
- [ ] **사람이 확인해야 할 체크포인트**: 캐릭터 세 명(또는 그 이상)의 옷 색·머리 모양이 서로 겹치지 않는지 문장을 직접 읽고 확인합니다 — 겹치면 5강에서 인물이 서로 섞여 나옵니다.

## 여섯 칸 설명 (1·3·4번이 오늘 꼭 할 것)

### 1. `characters` — 등장인물 생김새

역할 키는 정해져 있습니다: `C2`(아이) `MP`(엄마) `DP`(아빠) `F2`(친구) `GRM`(할머니) `TEACH`(선생님). 각 값은 **영어 한 줄**로, 옷 색·머리 모양·피부색을 명시합니다. 이 문구가 모든 컷 프롬프트에 그대로 들어가서 **편이 달라도 같은 인물**이 나옵니다.

```json
"C2": "a round clay child with a simple round face, rosy cheeks, wearing a yellow raincoat, a small girl with light peach skin and two short black pigtails,"
```

요령: 다른 인물과 색·머리 모양이 겹치지 않게. **한 번 정하면 시리즈 내내 바꾸지 않습니다** — 바꾸면 이전 편과 인물이 달라 보입니다.

### 2. `brand` (더 해보기 · 선택)

이름, 워드마크 PNG, 인트로/엔딩 MP4, 사이트 URL, 해시태그, 설명 꼬리줄. 워드마크·인트로가 없으면 마법사가 브랜드 이름으로 임시 파일을 만들어 둡니다(`assets/brand/`). 나중에 내 로고로 바꾸려면 같은 파일 이름으로 덮어쓰면 됩니다(워드마크: 가로로 긴 투명 배경 PNG, 인트로: 16:9 mp4 5~6초). 사이트가 없으면 `site_url` 은 채널 주소를 넣어도 됩니다.

### 3. `channels`

유튜브 채널 ID(`UC…`)·재생목록·2강에서 읽어둔 Aside 의 Studio 탭 id. 채널이 하나면 `main` 하나만 채웁니다.

채널 ID 찾는 법: YouTube Studio → 왼쪽 아래 **설정** → **채널** → **고급 설정** → 「채널 ID」(UC 로 시작하는 24자). `studio_tab_hint` 에는 2강에서 읽은 Studio 탭 id 를, `playlist` 에는 넣고 싶은 재생목록 이름(없으면 `null`)을 적습니다.

```json
"channels": {
  "main": { "studio_tab_hint": "C3D4…", "channel_id": "UCxxxxxxxx", "playlist": null, "label": "내 채널" }
}
```

### 4. `storage` — R2 저장소

2강 따라하기 4의 `setup_r2.py`(또는 프롬프트 3-1)가 자동으로 채웁니다. 손으로 적을 일은 없고, 이런 모양인지 확인만 합니다.

```json
"storage": {
  "r2_bucket": "my-videos",
  "r2_prefix": "episodes",
  "media_base_url": "https://pub-xxxxxxxx.r2.dev/episodes"
}
```

### 5. `style.tail` (더 해보기 · 선택)

그림체 문구입니다. 기본값은 파스텔 클레이 애니메이션 톤. 바꾸고 싶으면 이 한 문장만 바꾸면 전 컷에 적용됩니다. 처음엔 기본값을 그대로 두길 권합니다 — 4~6강에서 첫 편을 완성한 뒤에 실험하세요.

### 6. `topic.kind` (더 해보기 · 선택)

기본값 `"generic"` 그대로 둡니다. 한자 어원 편을 만들 때만 `"hanja"` 로 바꿉니다(7강 마지막 절).

::: practice
- [ ] 프로젝트 폴더에 `kit.config.json` 파일이 보인다(Code 탭 파일 목록 또는 탐색기/Finder 에서 직접 확인)
- [ ] 클로드가 보여 준 `characters` 표에서 아이·엄마·친구의 **옷 색과 머리 모양이 서로 다르다**
- [ ] `channels.main.channel_id` 가 YouTube Studio → 설정 → 채널 → 고급 설정의 UC… 값과 글자까지 같다
- [ ] `storage.media_base_url` 이 `https://pub-….r2.dev/episodes` 꼴이다(R2 를 아직 안 했다면 비어 있는 것이 정상, 메모해 두기)
- [ ] 이 파일에서 **한 번 정하면 바꾸지 않는 칸**(characters)이 어느 것인지 말할 수 있다
:::

## 터미널로도 할 수 있어요

위 프롬프트가 하는 일을 직접 명령으로 치고 싶을 때 보세요. 운영체제 탭(Windows·macOS)에 맞는 명령을 씁니다.

<details>
<summary><strong>따라하기 1: 마법사 실행</strong></summary>

키트 폴더(`clay-episode-kit`) 안에서 실행합니다. 설정 파일은 이 폴더에 생깁니다.

::: windows
```powershell
python scripts/new_project.py
```

질문에 답하기 귀찮으면 일단 자리표시자로:

```powershell
python scripts/new_project.py --defaults
```
:::

::: mac
```bash
python3 scripts/new_project.py
```

또는:

```bash
python3 scripts/new_project.py --defaults
```
:::

브랜드 이름·사이트 주소·해시태그·캐릭터를 묻습니다. `kit.config.json` 이 생성됩니다. 처음엔 `--defaults` 로 만들고 이 강을 읽으며 손으로 고쳐도 됩니다.

</details>

## 오늘의 체크리스트

- [ ] `kit.config.json` 이 생성됐다
- [ ] `characters` 에 최소 세 역할(아이·엄마·친구)의 생김새를 채웠다
- [ ] `channels.main` 에 채널 ID 와 Studio 탭 id 를 채웠다
- [ ] `storage` 에 R2 버킷 이름·공개 주소를 채웠다
- [ ] `topic.kind` 는 `"generic"` 으로 뒀다(한자 편이 아니면)

## 다음 강의

4강에서 예시 대본 「무지개는 왜 생길까」로 대본→더빙→컷 계획까지 첫 편의 절반을 만듭니다.
