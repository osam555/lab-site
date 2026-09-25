---
number: 7
title: 내 주제로 대본과 컷 계획 쓰기
subtitle: new_episode.py, 대본 구조, 카드, PLANS 블록
goal: new_episode.py로 새 편 뼈대를 만들고, 잘 먹힌 대본 구조를 따라 script_v2를 채우고, top10_plan.py에 PLANS 블록을 직접 씁니다.
minutes: 60
part: 3부 · 내 주제로 운영
---

## 따라하기 1: 새 편 뼈대 만들기

::: windows
```powershell
python scripts/new_episode.py volcano --word "화산"
```
:::

::: mac
```bash
python3 scripts/new_episode.py volcano --word "화산"
```
:::

`data/longform/volcano.json` 이 생깁니다. `--word` 는 이 편의 주제어입니다. 이제 `script_v2.lines` 를 채웁니다.

## 대본 구조 — 23~28줄, 2분~2분 30초

| 순서 | 줄 수 | 내용 |
|---|---|---|
| 1 훅 | 1 | 아이의 엉뚱하거나 절실한 질문 |
| 2 반응 | 2 | 어른 한 줄, 친구 한 줄 — 살짝 틀린 추측이면 더 좋음 |
| 3 전환 | 1 | 「같이 볼까요?」(나레이터) |
| 4 핵심 | 1~2 | 원리 한 문장 |
| 5 키워드 | 3~6 | 키워드 하나에 한 줄 「키워드. 한 줄 뜻.」 + 사이사이 아이·친구 리액션 |
| 6 반전 | 1~2 | 흔한 오해 바로잡기 / 조심할 점 |
| 7 복습 | 2 | 키워드 나열 「A, B, C. 다 ○○.」 |
| 8 콜백 | 1 | 1번 질문에 대한 아이의 한 줄 답 |

### 규칙

- 줄 앞에 화자 태그 `[[child]]` `[[adult]]` `[[friend]]` (목소리 선택용, 자막에는 안 나감). 태그 없는 줄은 나레이터입니다.
- 한 줄 = 한 문장~두 문장, 7초 이내. 어려운 말은 바로 다음 줄에서 아이 말로 풀어줍니다.
- 밝고 안전하게: 무섭거나 어두운 묘사, 의료·성적·등급 약속은 쓰지 않습니다.
- JSON 한 줄 형식: `{"ch": 0, "i": 7, "text": "굴절. 빛이 물방울에서 휘어져요.", "g": 7}` (`i` 와 `g` 는 같은 줄 번호).

### 카드

5번 키워드 줄에는 화면에 뜨는 카드를 답니다. `script_v2.cards` 배열에 추가합니다.

```json
{ "line": 7, "title": "마그마", "subtitle": "땅속 녹은 돌이에요" }
```

## 따라하기 2: 컷 계획 — PLANS 블록

`scripts/top10_plan.py` 를 열어 `def build` 바로 위에 `PLANS['volcano'] = dict(new={...}, map={...}, thumb=TH(...))` 블록을 추가합니다. `PLANS['rainbow']`(4강에서 쓴 예시 블록)를 복사해서 고치는 게 가장 빠릅니다.

### `new` — 컷 10~12개

- 사람이 나오는 컷은 `scene()`, 사물만 보이는 컷은 `diagram()` 함수를 씁니다.
- 사람은 **반드시 `{C2}` `{MP}` `{DP}` `{F2}` `{GRM}` `{TEACH}` 로만** 씁니다. "a boy", "children" 같이 직접 쓰면 검사에서 떨어지고, 통과해도 컷마다 다른 사람이 나옵니다. **상수만 쓰고 직접 묘사하지 않습니다.**
- 한 컷 = 한 동작 + 한 장소. 카메라는 "gentle slow push in" 정도. 6초에 다 보여야 합니다.
- 금지: 어두운 말(dark, night, scary…), 사물 위 글자·로고·간판(Flow 가 가짜 글자를 그립니다), 사람 수 애매한 표현(many children).

```python
'Nvo_ask': scene(f"{C2} pointing at a small clay volcano model asking {MP} with wide curious eyes, in a bright clay classroom."),
'Nvo_magma': diagram("glowing warm orange clay magma bubbling gently inside a cutaway of a clay mountain, bright pastel colors."),
```

### `map` — 대본 줄 1..N 전부에 컷 키

이웃한 줄이 같은 컷을 써도 됩니다. 「같이 볼까요?」·핵심 원리 줄은 `diagram` 컷이 어울립니다. 줄마다 `1:'Nvo_ask', 2:'Nvo_mom', …` 처럼 적거나, 연속된 줄은 `dict.fromkeys` 로 몰아 쓸 수 있습니다.

```python
map={**dict.fromkeys(range(1,3), 'Nvo_ask'), **dict.fromkeys(range(5,7), 'Nvo_magma'), ...}
```

### `thumb=TH(...)` — 썸네일 3종

`TH(a_flow, a_head, panel, b_flow, b_head, doc, c_flow, c_bg, c_head)` 순서로 9개 인자를 줍니다.

- **a**: 아이 미디엄샷(오른쪽에 배치) — 헤드라인 두 줄, 합쳐 **14자 이하**, 둘째 줄(빨간 박스) 폰트 **120px 이상**: `[['화산은', 88, 'WHT'], ['왜 터져?', 150, 'BOX']]`
- **b**: 어른이 문서·물건을 든 모습(`{LT}` 로 왼쪽 배치), `panel` 은 키워드 두 줄 `['화산', '땅속의 비밀', 'right']`, `doc` 은 `{'title': '과학 관찰 일기', 'rows': [3줄], 'hl': 강조줄}`
- **c**: 얼굴 클로즈업, `c_bg` 는 단색 문구(`"bright sunny yellow"`)

값들은 **상수만 조합**하고 `{C2}` 같은 상수를 직접 새로운 인물 묘사로 바꾸지 않습니다.

## 한자 편은 옵션

한자 어원 편을 만들 때만 `kit.config.json` 의 `topic.kind` 를 `"hanja"` 로 바꿉니다. 카드는 `["漢字", "훈음"]` 형태, 대본 4번 자리에 「글자 풀이 — …라고 풀어요」 1~2줄이 들어가고, 썸네일 `panel` 은 `['漢字', '한글음', 'right']` 가 됩니다. `examples/sample_episode.json` 이 그 예시이고, 나머지 절차는 지금까지와 같습니다.

## 스킬로 하기 — 준비 → 프롬프트 → 결과 확인

이 단계는 clay-episode 스킬의 "대본 쓰기"와 "컷 계획 쓰기" 절을 내 주제에 그대로 적용하는 것입니다. 전체를 손으로 쓰기보다, 소재를 주고 Claude Code 가 구조에 맞춰 초안을 뽑게 한 뒤 사실만 검토하는 게 빠릅니다. 4강에서는 이미 쓰인 예시 계획을 검사만 했지만, 이번에는 대본과 계획 자체를 만듭니다.

### 프롬프트 7-1 · 대본 채우기

**① 준비 (사람이 먼저)**
- [ ] 어디서: 키트 폴더에서 Claude Code 를 엽니다
- [ ] `new_episode.py` 로 뼈대를 미리 만들어둡니다(따라하기 1)
- [ ] 주제·키워드를 미리 정해 둡니다(예: 화산 / 마그마·분화구·용암·화산재)

**② 스킬 (붙여 넣기)**

<div class="prompt-box not-prose" data-prompt="7-1" data-level="intermediate">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 7-1</span><span class="prompt-level prompt-level-intermediate">🟡 중급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

clay-episode 스킬을 읽고, data/longform/volcano.json 의 script_v2 를 채워줘. 주제는 "화산은 왜 터질까", 키워드는 마그마·분화구·용암·화산재 네 개. 대본은 훅→반응→전환→핵심→키워드 4개→반전→복습→콜백 순서(23~28줄)로 쓰고, 화자 태그 [[child]]/[[adult]]/[[friend]] 를 붙여줘. script_v2.cards 에 키워드 4개의 카드도 같이 채워줘. 단정적인 의학·안전 약속 문구는 넣지 마. 다 쓰면 대본 전체를 보여주고 멈춰 — 사실 관계(화산 폭발 원리)는 내가 직접 검토한 뒤 컷 계획은 따로 시킬게.

</div>
</div>

**③ 결과 확인**
- [ ] 대본이 훅→반응→전환→핵심→키워드 4개→반전→복습→콜백 8단계 구조를 따르는지
- [ ] **사람이 확인해야 할 체크포인트**: 원리 설명(예: 화산 폭발 원리)이 사실과 맞는지 내가 직접 읽고 검토합니다 — 컷 계획은 대본이 확정된 뒤 7-2 로 따로 시킵니다.

### 프롬프트 7-2 · 컷 계획(PLANS 블록) 쓰기

**① 준비 (사람이 먼저)**
- [ ] 7-1 의 대본이 확정돼 있어야 합니다(사실 검토 완료)
- [ ] 어디서: 키트 폴더에서 Claude Code 를 엽니다

**② 스킬 (붙여 넣기)**

<div class="prompt-box not-prose" data-prompt="7-2" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 7-2</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

clay-episode 스킬을 읽고, 편 키 volcano 의 컷 계획(PLANS 블록)을 scripts/top10_plan.py 에 추가해줘. 기존 PLANS['rainbow'] 를 참고 패턴으로 쓰되 volcano 대본에 맞게 컷 10~12개를 새로 짜고, 사람이 나오는 컷은 반드시 {C2}/{MP}/{F2} 같은 kit.config.json 의 캐릭터 상수로만 묘사해(직접 "a boy" 식으로 쓰지 마). 다 쓴 다음 top10_plan.py→cutplan_check.py 를 돌려서 10.0점 나올 때까지 반복해줘. 점수를 지어내지 말고 스크립트 출력 그대로 알려줘. "10.0점 통과"가 나오면 멈춰 — 다음 단계(Flow 제출)는 내가 시킬게.

</div>
</div>

**③ 결과 확인**
- [ ] `cutplan_check` 가 실제로 "10.0점 통과"를 출력했는지 화면을 직접 봅니다
- [ ] **사람이 확인해야 할 체크포인트**: PLANS 블록의 `new` 딕셔너리에 사람 묘사가 `{C2}` 같은 상수가 아니라 직접 텍스트("a boy", "a girl")로 새어 들어가지 않았는지 코드를 눈으로 한 번 읽습니다 — `cutplan_check` 가 대부분 잡아내지만 애매한 표현은 통과할 수 있습니다.

## 오늘의 체크리스트

- [ ] `data/longform/volcano.json` 의 `script_v2` 가 구조 8단계를 따른다
- [ ] `PLANS['volcano']` 를 `top10_plan.py` 에 추가했다
- [ ] `cutplan_check` 가 "10.0점 통과"를 출력한다
- [ ] 썸네일 헤드라인이 14자 이하다

## 다음 강의

8강에서 여러 편을 묶어 제출·다운로드·업로드하는 시리즈 운영 방법을 다룹니다.
