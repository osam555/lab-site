---
number: 5
title: Google Flow로 클립 생성
subtitle: 손으로 한 번, 다음부터는 자동으로
goal: Google Flow에서 클립을 생성·다운로드하는 흐름을 익히고, 브라우저 자동화로 Claude Code가 나머지 컷을 대신 만들게 합니다.
minutes: 60
part: 2부 · 파이프라인 만들기
---

## 먼저 손으로 세 컷

자동화하기 전에 **직접 세 컷을 만들어 보세요.** 어디를 누르고, 얼마나 걸리고, 어떤 파일이 어디에 떨어지는지 알아야 Claude Code에게 정확히 시킬 수 있습니다.

1. labs.google/flow 접속 → 새 프로젝트
2. 텍스트-투-비디오 입력창에 `prompts/cut-01.txt` 내용 붙여넣기 → 화면비 **9:16** 확인 → 생성
3. 생성 결과 중 마음에 드는 것을 **다운로드**
4. 받은 파일을 `projects/2025-01-pyramid/clips/cut-01.mp4`로 이름 바꿔 이동
5. cut-02, cut-03 반복

세 컷을 만들며 메모할 것: 클립 한 개에 걸리는 시간, 소모 크레딧, 다운로드 파일 이름 규칙, 한 번에 몇 개 생성되는지. Google Flow의 UI와 크레딧 정책은 자주 바뀌니 **오늘 본 화면이 기준**입니다.

::: windows
다운로드 파일은 보통 `C:\Users\이름\Downloads\`에 떨어집니다. 이름 바꾸기·이동은 Claude Code에게: "Downloads에서 방금 받은 mp4를 clips/cut-01.mp4로 옮겨줘".
:::

::: mac
다운로드 파일은 `~/Downloads/`. 마찬가지로 "~/Downloads의 가장 최근 mp4를 clips/cut-01.mp4로 옮겨줘".
:::

::: practice
- [ ] Google Flow에서 `cut-01`~`cut-03`을 직접 생성했고, 세 파일을 `clips/`에서 열어 재생해봤다
- [ ] 파일 이름이 `cut-01.mp4`, `cut-02.mp4`, `cut-03.mp4`로 맞는지 폴더에서 확인했다
- [ ] 클립 한 개당 걸린 시간과 소모 크레딧을 메모했다 (예: 1분 / 10 크레딧)
:::

## 나머지 컷 만들기: 반자동(길 A)이 기본입니다

### 길 A — 반자동 (안전, 기본 경로)
생성은 내가 브라우저에서, **정리는 Claude Code가**. 프롬프트를 순서대로 클립보드에 올려주고, 다운로드된 파일을 번호에 맞춰 옮기는 것만 자동화합니다.

<div class="prompt-box not-prose" data-prompt="5-1" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-1</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

scripts/next-prompt.sh(Windows면 .ps1)를 만들어줘. 실행할 때마다 prompts/cut-NN.txt를 순서대로 클립보드에 복사하고 "cut-NN 복사됨"을 출력해줘.

</div>
</div>

**확인**: 한 번 실행해서 "cut-01 복사됨"이 나오고, 메모장에 붙여넣으면 cut-01의 프롬프트가 나오는지 보세요. 다음 실행에서 cut-02가 나오면 성공입니다.

<div class="prompt-box not-prose" data-prompt="5-1b" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-1b</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

scripts/collect-clips를 만들어줘. Downloads의 새 mp4를 오래된 순으로 clips/cut-01.mp4부터 번호를 붙여 옮겨줘. 옮기기 전에 "어떤 파일을 어떤 이름으로 옮길지" 목록을 먼저 보여줘.

</div>
</div>

이 방식은 22컷에 20~30분 걸리지만 크레딧 사고가 없습니다.

## 클립 검수

22개가 모이면 훑어봅니다. 빠르게 보는 법:

<div class="prompt-box not-prose" data-prompt="5-3" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-3</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

clips/의 모든 클립에서 첫 프레임을 뽑아 한 장의 격자 이미지(contact sheet)로 만들어줘. 번호 표시 포함.

</div>
</div>

격자 한 장에서 걸러낼 것:

- 사람·얼굴이 들어간 컷
- 현대 장비, 자동차, 글자
- 실제 구조와 명백히 다른 컷 (예: 피라미드 내부에 창문)
- 앵커와 화풍이 튀는 컷

걸러진 컷은 **그 컷만** 프롬프트를 고쳐 재생성합니다.

<div class="prompt-box not-prose" data-prompt="5-4" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-4</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

14번 컷에 사람이 나와. prompts/cut-14.txt에 "empty chamber, " 를 장면 앞에 추가하고 금지 문구를 강화해서 다시 만들어줘 (자동화 시) / 다시 만들 프롬프트를 클립보드에 올려줘 (반자동 시).

</div>
</div>

::: practice
- [ ] `clips/`에 `cut-01.mp4`~컷 수만큼 파일이 전부 있다 (개수를 셌다)
- [ ] 격자 이미지(contact sheet)를 열어 사람·글자·현대 장비가 보이는 컷을 표시했다
- [ ] 문제 컷 하나를 재생성하고, 새 클립이 격자에서 앞뒤 컷과 어울리는지 눈으로 봤다
:::

## 길이 통일

클립 길이가 4초가 아닐 수 있습니다 (모델에 따라 5초, 8초). 7강에서 맞추지만 지금 확인해두면 편합니다.

<div class="prompt-box not-prose" data-prompt="5-5" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-5</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

clips/의 각 클립 길이를 초 단위로 표로 보여줘 (ffprobe 사용).

</div>
</div>

## 더 해보기(선택): 브라우저 자동화(길 B)

길 A로 충분합니다. 이미 길 A로 22컷을 모았다면 건너뛰어도 됩니다. 브라우저 자동화가 궁금할 때만 해보세요.

Claude Code에 **브라우저 제어**(Playwright MCP, Chrome DevTools MCP, 또는 컴퓨터 사용 기능)가 연결되어 있으면 생성까지 시킬 수 있습니다. 연결 방법은 [바이브 스킬 — 외부 도구 연결하기](/skills/mcp-and-tools)를 참고하세요.

2단계 프롬프트 (1강 가이드의 것을 이 과정에 맞게 다듬은 버전):

<div class="prompt-box not-prose" data-prompt="5-2" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 5-2</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

생성된 영문 프롬프트와 대본을 바탕으로 Google Flow 자동 작성을 진행해줘.

1. 크롬 브라우저를 열고 Google Flow의 현재 프로젝트에 접속해줘 (로그인은 내가 이미 해뒀어).
2. prompts/cut-04.txt **하나만** 입력해서 9:16으로 생성하고, 결과를 다운로드해서 clips/cut-04.mp4로 저장해줘. 여기서 멈추고 나에게 확인받아.
3. 내가 OK하면 cut-05부터 cut-22까지 같은 방식으로 순서대로 진행. 컷 하나 끝날 때마다 "cut-NN 완료, 남은 크레딧 [화면에 보이는 값]"을 출력.
4. 생성 실패나 크레딧 부족 메시지가 보이면 즉시 멈추고 알려줘.

</div>
</div>

**"하나만 먼저, 확인받고 나머지"** — 2강 CLAUDE.md에 넣은 규칙이 여기서 작동합니다. 브라우저 자동화는 화면이 조금만 바뀌어도 엉뚱한 버튼을 누를 수 있으니, 첫 컷은 반드시 지켜보세요.

## 오늘의 체크리스트

- [ ] 손으로 세 컷을 만들어 봤고 소요 시간·크레딧을 안다
- [ ] 길 A 또는 B로 나머지 컷을 만들었다
- [ ] `clips/cut-01.mp4` ~ `cut-22.mp4`가 전부 있다
- [ ] 격자 이미지로 검수하고 문제 컷을 재생성했다
- [ ] 커밋했다 (클립 파일은 용량이 크니 `.gitignore`에 `clips/`를 넣고 커밋)

## 다음 강의

6강, 더빙. ElevenLabs API로 컷별 나레이션을 만들고 4초 호흡에 맞춥니다.
