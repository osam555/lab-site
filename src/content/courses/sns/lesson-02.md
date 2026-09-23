---
number: 2
title: 세팅
subtitle: 폴더, 스케줄러 연결, 규칙 파일
goal: 프로젝트 폴더와 규칙 파일을 만들고, 스케줄러에 채널을 연결한 뒤 API 키로 Claude Code가 예약 글을 만들 수 있는지 확인합니다.
minutes: 45
part: 1부 · 준비
---

## 1. 프로젝트 폴더

```bash
cd ~/Desktop
mkdir sns-factory
cd sns-factory
code .
```

::: windows
`~`가 안 되면 `cd $HOME\Desktop`.
:::

`claude` 실행 후:

<div class="prompt-box not-prose" data-prompt="2-1" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 2-1</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

SNS 배포 자동화 프로젝트 폴더 구조를 만들어줘:
- `sns-plan.md` (내가 가져올 파일), `VOICE.md` (비워둬), `channels.json` (비워둬)
- `sources/` (원본: 블로그 글 md, 영상 대본 등)
- `posts/` (배포 한 건당 폴더: posts/2025-01-camping-chair/ 안에 `source.md`, `variants.json`, `cards/`, `schedule.json`, `report.md`)
- `templates/` (이미지 카드 HTML)
- `scripts/`
- `.env`, `.gitignore`(.env, posts/*/cards 제외)
폴더와 빈 파일만.

</div>
</div>

`sns-plan.md`를 옮겨 넣으세요.

## 2. 스케줄러 연결

1강에서 고른 스케줄러에 가입하고 채널을 연결합니다. 채널 연결은 각 SNS 계정으로 로그인해 권한을 주는 방식이고, **스케줄러 화면에서** 합니다 (자동화하지 않습니다).

- 인스타그램은 **비즈니스/크리에이터 계정**이어야 하고 페이스북 페이지와 연결이 필요합니다. 스케줄러 안내대로.
- X는 API 티어에 따라 예약이 막힐 수 있습니다. 막히면 "복사 도우미"(5강)로.

연결 후 스케줄러 설정에서 **API 키**를 발급받아 `.env`에:

```
SCHEDULER_API_KEY=여기에
SCHEDULER_API_URL=https://...   # 셀프호스팅이면 내 주소
```

::: windows
셀프호스팅(Postiz 등)을 내 PC에 띄우려면 Docker Desktop이 필요합니다. 처음이면 클라우드 요금제로 시작하고 나중에 옮기는 게 쉽습니다.
:::

::: mac
셀프호스팅은 Docker Desktop 또는 OrbStack. 마찬가지로 처음엔 클라우드로 시작을 권합니다.
:::

## 3. 연결 테스트

<div class="prompt-box not-prose" data-prompt="2-2" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 2-2</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

.env의 스케줄러 API로 연결된 채널 목록을 가져와서 보여줘. 키 값은 출력하지 말고. API 문서는 [스케줄러 문서 URL]을 참고해.

</div>
</div>

채널 3~5개가 목록에 보이면 됩니다. 이어서 **초안 상태**(발행 안 되는) 글 하나를 만들어봅니다.

<div class="prompt-box not-prose" data-prompt="2-3" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 2-3</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

스레드 채널에 "연결 테스트입니다" 라는 글을 **초안(draft) 상태**로 만들어줘. 예약이나 발행은 하지 마. 만든 뒤 스케줄러 화면에서 확인하는 방법을 알려줘.

</div>
</div>

스케줄러 화면에서 초안이 보이면 성공. 삭제하세요.

## 4. VOICE.md

채널이 달라도 **나**는 같아야 합니다. 내가 쓴 글이나 답글을 `samples/`에 넣고:

<div class="prompt-box not-prose" data-prompt="2-4" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 2-4</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

samples/를 읽고 VOICE.md를 만들어줘: 존댓말/반말, 문장 길이, 자주 쓰는 표현, 안 쓰는 표현, 이모지 규칙, 해시태그를 대하는 태도, 자기 자랑 정도(0~10), 그리고 "AI가 쓴 SNS 글에서 제거할 표현" 10개 (예: "여러분!", "지금 바로", "놓치지 마세요").

</div>
</div>

## 5. CLAUDE.md

<div class="prompt-box not-prose" data-prompt="2-5" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 2-5</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

CLAUDE.md를 만들어줘:

## 프로젝트
원본 콘텐츠 하나를 여러 SNS 채널 형식으로 변환하고 스케줄러 API로 예약 발행하는 파이프라인.

## 규칙
- 채널별 형식은 channels.json, 문체는 VOICE.md를 따른다
- 스케줄러 API 호출은 **초안 또는 예약**까지만. 즉시 발행(publish now)은 호출하지 않는다
- 예약 등록 전에 전체 variants를 표로 보여주고 허락을 받는다
- 링크에는 항상 UTM(utm_source=채널, utm_medium=social, utm_campaign=포스트슬러그)을 붙인다
- 답글·DM·팔로우·좋아요는 자동화하지 않는다
- .env를 읽거나 출력하지 않는다. 한국어로 짧게

</div>
</div>

## 6. 커밋

```bash
git init
git add .
git commit -m "SNS 파이프라인 시작"
```

## 오늘의 체크리스트

- [ ] 스케줄러에 채널 3~5개가 연결됐다
- [ ] API로 채널 목록을 가져오고 초안을 만들어봤다
- [ ] VOICE.md, CLAUDE.md가 있다
- [ ] 커밋했다

## 다음 강의

3강, 채널별 변환 규칙(channels.json)을 만들고 원본 하나를 다섯 형식으로 변환합니다.
