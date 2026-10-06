---
number: 8
title: 스킬로 저장하고 운영하기
subtitle: 주제 하나 입력, 나머지는 파이프라인
goal: 전체 파이프라인을 Claude Code 스킬로 저장해 주제만으로 실행되게 만들고, 사람이 개입할 체크포인트와 주간 운영 루틴을 정합니다.
minutes: 45
part: 3부 · 자동화와 운영
---

## 지금까지 한 것을 한 번에

3~7강에서 여러분은 이런 순서로 Claude Code에게 시켰습니다.

1. 레퍼런스 분석 → script.json (3강)
2. 스타일 앵커 → prompts/ (4강)
3. 클립 생성·수집·검수 (5강)
4. `dub.py` → voice/ (6강)
5. `assemble.py --all` → output/ (7강)

이 순서를 **스킬**로 저장하면 다음부터는 한 줄입니다.

> **용어 한 줄**: *스킬*은 Claude Code가 기억하는 "작업 순서 문서 한 장"(`.claude/skills/` 폴더의 마크다운 파일)입니다. *⏸ 체크포인트*는 "여기서는 멈추고 사람 확인을 기다려라"는 표시입니다.

## 따라하기 1: 스킬 저장

가이드의 원래 명령 그대로:

<div class="prompt-box not-prose" data-prompt="8-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 8-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

오늘 작업한 전체 과정을 '플로우 건축 쇼츠 제작 스킬'로 저장해줘.

</div>
</div>

Claude Code가 `.claude/skills/` 아래에 스킬 파일을 만듭니다. 만들어진 파일을 **열어서 읽고** 아래 항목이 있는지 확인하세요. 없으면 추가를 요청합니다.

```markdown
# 플로우 건축 쇼츠 제작

사용자가 "OOO 쇼츠 만들어줘" 또는 건축물 이름만 말하면:

## 0. 준비
- projects/YYYY-MM-슬러그/ 폴더 생성
- topics.md에서 해당 주제 줄을 "진행 중"으로 표시

## 1. 대본 (3강)
- 레퍼런스: [채널 URL 고정]
- 4초 × 20~25컷, 컷당 12~18자, 훅 규칙, 사실 확인 목록 출력
- script.json + script.md 생성
- ⏸ 사용자 확인: "대본 OK" 전에는 진행하지 않는다

## 2. 프롬프트 (4강)
- style_anchor는 [확정한 앵커 고정]
- 앵커+장면+카메라+금지 구조, prompts/ 내보내기

## 3. 클립 (5강)
- [길 A: 클립보드 도우미 실행 안내 / 길 B: 브라우저 자동화]
- 첫 컷 생성 후 ⏸ 사용자 확인
- 완료 후 contact sheet 생성 → ⏸ 사용자 검수

## 4. 더빙 (6강)
- 예상 글자 수 출력 → ⏸ 허락
- dub.py 실행, durations 표, 3.0~4.2초 벗어난 컷 표시
- preview.mp3 생성 → ⏸ 사용자 청취

## 5. 합성 (7강)
- assemble.py --all
- final.mp4, thumb.jpg, meta.md 경로 출력

## 6. 업로드 (8강)
- 기본: 사람이 유튜브 스튜디오에서 final.mp4를 비공개(private)로 올릴 수 있게 meta.md의 제목·설명·태그를 안내
- (선택, 더 해보기) scripts/upload.py로 비공개 업로드 후 URL 출력
- ⏸ 사용자 승인: 비공개 상태에서 직접 보고 확인한 뒤에만 공개로 전환

## 규칙
- ⏸ 표시된 곳에서는 반드시 멈추고 확인을 기다린다
- 크레딧·API 호출 전에는 예상 소모량을 알린다
- 실패한 단계는 그 단계만 재시도, 이전 결과물은 지우지 않는다
```

**⏸ 체크포인트가 핵심입니다.** 전부 자동으로 돌리면 크레딧을 날리거나 사실 오류가 그대로 올라갑니다. 사람이 볼 곳은 여섯 군데: 대본, 첫 클립, 클립 검수, 더빙 청취, 최종 시청, 최종 업로드 승인.

::: practice
- [ ] `.claude/skills/` 아래에 방금 만든 스킬 파일이 있는 것을 폴더에서 열어 확인했다
- [ ] 스킬 파일에 ⏸ 표시가 여섯 군데(대본·첫 클립·클립 검수·더빙 청취·최종 시청·업로드 승인) 있는지 세어봤다
- [ ] 없는 ⏸ 하나를 클로드에게 "이 단계에 ⏸ 추가해줘"로 넣고 다시 열어 반영을 확인했다
:::

## 따라하기 2: 두 번째 영상

새 대화(`/clear`)에서:

<div class="prompt-box not-prose" data-prompt="8-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 8-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

파르테논 신전 쇼츠 만들어줘.

</div>
</div>

체크포인트마다 확인만 하면 됩니다. 첫 영상이 며칠 걸렸다면 두 번째는 **한두 시간**입니다. 막히는 곳이 있으면 스킬 파일의 해당 단계에 한 줄 추가 — 규칙 파일과 같은 원리입니다.

## 업로드: 사람이 직접 (기본)

유튜브 스튜디오(studio.youtube.com) → 만들기 → 동영상 업로드 → `final.mp4`. `meta.md`의 제목·설명·태그를 붙여넣는 방식입니다. 세로 영상 + 3분 이내면 자동으로 쇼츠로 분류됩니다.

**공개 범위는 처음에 반드시 "비공개"로 올립니다.** 스튜디오에서 직접 재생해 자막·소리·썸네일을 확인하고, 이상 없을 때 사람이 "공개"로 바꿉니다. 자동화를 하더라도 이 최종 확인은 사람 몫입니다.

편당 3분이면 되는 일이라 손 업로드로 충분합니다. 완전 자동화가 궁금하면 이 강 끝의 **더 해보기(선택)**를 보세요.

::: practice
- [ ] `topics.md`의 새 주제 한 줄(예: 파르테논 신전)로 스킬을 실행해 두 번째 영상을 시작했다
- [ ] ⏸마다 멈췄고, 내가 확인한 뒤에만 다음 단계로 갔다
- [ ] `final.mp4`를 유튜브 스튜디오에 **비공개**로 올려 스튜디오 재생 화면에서 끝까지 봤다
- [ ] 확인 후 공개 여부는 내가 직접 정했다
:::

---

## 주간 루틴

한 달 4편이면 주 1편입니다.

| 요일 | 할 일 | 시간 |
|---|---|---|
| 월 | 주제 고르기 + 대본 체크포인트 (사실 확인 포함) | 30분 |
| 화 | 클립 생성 + 검수 | 40분 |
| 수 | 더빙 청취 + 합성 + 폰 시청 | 30분 |
| 목 | 원클릭 업로드 (또는 예약), 이전 편 댓글 답글 | 15분 |
| 주말 | 유튜브 스튜디오 분석: 시청 지속 시간 그래프에서 **이탈 지점** 확인 → 다음 대본 훅에 반영 | 15분 |

## 품질을 올리는 세 가지

1. **이탈 지점 = 대본 문제**: 분석 그래프에서 시청자가 떨어지는 초를 보고 그 컷의 대본을 봅니다. 대개 "설명이 길어진 곳"입니다.
2. **잘 된 편의 앵커를 고정**: 조회수가 좋은 편의 스타일 앵커를 스킬에 기본값으로.
3. **시리즈화**: "무너지지 않는 건축물" 시리즈처럼 제목 형식을 고정하면 스킬도 대본도 안정됩니다.

## 흔한 운영 문제

| 문제 | 처방 |
|---|---|
| Google Flow 화면이 바뀌어 자동화가 실패 | 길 A(반자동)로 그 주만 진행, 스킬의 3단계 설명을 새 화면 기준으로 갱신 |
| ElevenLabs 한도 초과 | durations 표에서 긴 컷의 대본을 줄이기, 또는 플랜 조정 |
| 사실 오류 댓글 | 정정 댓글 고정 + 스킬 1단계에 "이 분야 검증 소스: [사이트]" 추가 |
| 컷마다 화풍이 튐 | 4강 앵커에 색·조명 문구 강화, 5강 검수 강화 |
| (선택 과정) 구글 콘솔 API quota 초과 | videos.insert는 1회당 약 1,600 쿼터를 소모합니다 (기본 일일 한도 10,000 쿼터 = 하루 6편 가능). 쿼터 초과 시 다음 날 업로드하거나 비공개 저장 후 스튜디오 활용 |

## 더 해보기(선택): 구글 콘솔(YouTube Data API) 업로드 자동화

손 업로드가 불편해졌을 때만 하세요. 설정이 길고(OAuth 인증, 테스트 사용자 등록), 어려우면 몇 편 더 만든 뒤에 해도 됩니다. 업로드는 **비공개로만** 하고 공개 전환은 사람이 합니다.

구글 클라우드 콘솔에서 API를 활성화하고 OAuth 2.0 인증(내 계정으로 앱이 동작하도록 허락하는 절차)을 거치면, 파이썬 스크립트 한 줄로 동영상과 메타데이터가 유튜브에 비공개로 업로드됩니다.

### 1단계: 구글 콘솔 프로젝트 & OAuth 인증서 발급

1. **구글 클라우드 콘솔 접속**: [console.cloud.google.com](https://console.cloud.google.com) 로그인
2. **프로젝트 생성**: 상단 프로젝트 선택 → `새 프로젝트` 생성 (프로젝트명: `Shorts-Automation`)
3. **API 활성화**: `API 및 서비스` → `라이브러리` → **YouTube Data API v3** 검색 후 `사용` 클릭
4. **OAuth 동의 화면 설정**: `API 및 서비스` → `OAuth 동의 화면` → `외부(External)` 선택
   - 앱 이름, 이메일 등록
   - **테스트 사용자(Test users)**에 본인 유튜브 구글 계정 이메일을 반드시 추가합니다.
5. **클라이언트 ID 발급**: `사용자 인증 정보` → `사용자 인증 정보 만들기` → `OAuth 클라이언트 ID`
   - 애플리케이션 유형: **데스크톱 앱(Desktop App)**
   - 생성 완료 후 **JSON 다운로드** 클릭 → 파일 이름을 `client_secret.json`으로 변경 후 `shorts-factory/` 루트 폴더로 이동합니다.

### 2단계: 파이썬 업로드 스크립트 (`scripts/upload.py`)

Claude Code에게 스크립트 생성을 요청합니다:

<div class="prompt-box not-prose" data-prompt="8-3" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 8-3</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

scripts/upload.py를 만들어줘.
- google-api-python-client, google-auth-oauthlib, google-auth-httplib2 사용
- client_secret.json으로 OAuth 2.0 인증 진행, 첫 인증 후 token.json으로 자동 저장·재사용
- output/meta.md 파일에서 제목, 설명, 태그를 자동으로 읽어오기
- output/final.mp4 동영상을 YouTube Data API videos.insert 메서드로 업로드
- 안전을 위해 초기 업로드 상태(privacyStatus)는 'private'(비공개) 또는 'unlisted'(일부공개)로 설정
- 업로드 완료 후 생성된 유튜브 URL(https://youtu.be/[video_id])을 출력

</div>
</div>

필요한 파이썬 라이브러리 설치와 실행도 Code 탭에서 이렇게 시키세요.

> 필요한 파이썬 라이브러리를 설치하고 scripts/upload.py를 실행해줘.

설치·실행 명령이 권한 요청으로 뜨면 읽고 수락합니다.

### 터미널로도 할 수 있어요

```bash
pip install google-api-python-client google-auth-oauthlib google-auth-httplib2
python3 scripts/upload.py
```

*첫 실행 시 브라우저 창이 열려 구글 계정 인증을 진행합니다. 인증 완료 후 `token.json`이 생성되며, 이후부터는 브라우저 없이 한 번에 자동 업로드됩니다.*

### 3단계: 스킬 파이프라인에 업로드 자동화 추가

Claude Code 스킬 파일(`.claude/skills/` 하위 스킬 마크다운)의 6단계에 업로드 자동화를 추가하고 ⏸ 체크포인트를 설정합니다:

```markdown
## 6. 업로드 (8강)
- `python3 scripts/upload.py` 실행
- ⏸ 사용자 승인: "비공개로 업로드할까요?" 확인 후 업로드 진행
- 생성된 동영상 URL 출력 후 검수 요청
```

## 이 과정을 마치며

여러분에게 남은 것:

- `shorts-factory/` — script.json 규칙, dub.py, assemble.py, upload.py, 스킬 파일. **분야를 바꿔도 그대로 쓰는 공장**
- 여섯 군데 체크포인트 — 자동화가 사람을 대체하는 게 아니라 **사람의 판단을 여섯 번으로 압축**한다는 감각
- 첫 영상 1편과 주간 루틴

다음 분야를 시작하려면 스킬 파일의 레퍼런스 URL과 앵커만 바꾸면 됩니다. 두 번째 공장은 하루면 됩니다.

## 마지막 체크리스트

- [ ] 스킬 파일에 6단계와 ⏸ 체크포인트가 있다
- [ ] 영상을 비공개로 올려 직접 확인했다 (자동 업로드 설정은 선택)
- [ ] 주제 한 줄로 두 번째 영상을 끝까지 만들어봤다
- [ ] 주간 루틴을 캘린더에 넣었다

수고하셨습니다. 이제 여러분의 채널에는 **주제만 넣으면 업로드까지 돌아가는 파이프라인**이 있습니다.
