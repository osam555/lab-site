---
number: 4
title: 비주얼 프롬프트 다듬기
subtitle: 22컷이 한 영상처럼 보이게
goal: 영상 생성용 영문 프롬프트의 구조를 이해하고, 스타일 앵커로 컷 간 일관성을 확보하며, 클립 생성 전에 프롬프트를 확정합니다.
minutes: 40
part: 2부 · 파이프라인 만들기
---

## 프롬프트가 흔들리면 영상이 흔들립니다

3강의 script.json에는 컷마다 `prompt_en`이 있습니다. 이걸 그대로 Google Flow에 넣으면 클립 22개가 나오긴 하는데, **컷마다 화풍·조명·카메라가 제각각**이라 이어 붙이면 22개의 다른 영상처럼 보입니다. 오늘은 그걸 막습니다.

## 영상 프롬프트의 네 부분

좋은 영상 프롬프트는 순서가 있습니다.

```
[스타일 앵커] + [장면: 무엇이 보이는가] + [카메라 움직임] + [금지]
```

| 부분 | 역할 | 예 (건축 쇼츠) |
|---|---|---|
| **스타일 앵커** | 22컷 전부에 똑같이 붙는 문장. 화풍·조명·색을 고정 | `Cinematic architectural documentary, cutaway cross-section style, warm sandstone tones, soft directional light, ultra-detailed, 9:16 vertical` |
| **장면** | 이 컷에서만 보이는 것. 구조·도면·하중 흐름 중심 | `cross-section of the King's Chamber showing five stacked granite relieving chambers above the ceiling` |
| **카메라** | 4초 안의 한 가지 움직임만 | `slow push-in`, `slow orbit`, `tilt up`, `static` |
| **금지** | 생성 모델이 자주 넣는 잡것 제거 | `no people, no text, no modern machinery, no watermark` |

**컷당 하나의 카메라 움직임.** 4초에 두 가지 움직임을 넣으면 어지럽습니다.

## 따라하기 1: 스타일 앵커 정하기

레퍼런스 분석(style_notes)을 바탕으로 앵커를 3개 받아 고릅니다.

> @script.json 의 style_notes를 참고해서 모든 컷에 공통으로 붙일 스타일 앵커 문장을 영문으로 3가지 제안해줘. 각각 화풍·조명·색감·화면비(9:16 vertical)를 포함. 아직 파일은 고치지 마.

고른 앵커를 파일에 고정합니다.

> 2번 앵커를 script.json 최상위에 "style_anchor"로 저장하고, 모든 컷의 prompt_en을 [앵커] + [장면] + [카메라] + [금지] 구조로 다시 써줘. 장면 묘사는 건축 내부 구조·단면·하중 흐름이 보이게. 금지 문구는 "no people, no text, no modern machinery, no watermark"로 통일.

## 따라하기 2: 컷별 점검

`script.md`(Claude가 함께 갱신)에서 컷마다 확인:

- **장면이 대본과 맞는가**: 대본이 "600만 톤이 얹혀 있는데"면 화면은 위에서 누르는 하중 표현이어야 합니다
- **연속성**: 5번 컷이 외부 → 6번이 내부라면, 5번 끝에 `camera moving toward the entrance` 같은 다리 놓기
- **반복 회피**: 같은 앵글이 3컷 연속이면 하나는 다른 카메라로
- **금지 항목**: 역사물에 현대 장비, 인물 얼굴, 글자가 들어가면 재생성 확률이 높으니 처음부터 금지

부족한 컷은 번호로 지목합니다.

> 8~10번 컷이 전부 static 정면이야. 9번은 slow orbit, 10번은 tilt up으로.

## 따라하기 3: 프롬프트 파일로 내보내기

5강에서 클립을 만들 때 하나씩 복사하기 좋게 파일로 뽑습니다.

> script.json의 각 컷 prompt_en을 prompts/cut-01.txt … cut-22.txt로 내보내줘. 그리고 전체를 한 파일에 번호와 함께 모은 prompts/all.md도.

## 첫 컷만 테스트 생성 (선택)

앵커가 실제로 어떻게 나오는지 한 컷만 미리 보면 22컷 낭비를 막습니다. Google Flow에서 `cut-01.txt`를 넣어 한 클립만 만들어 보세요 (5강에서 자세히). 화풍이 마음에 안 들면 앵커를 바꾸고 다시 내보냅니다. **이 한 클립의 크레딧이 가장 값진 크레딧입니다.**

## 흔한 문제

| 증상 | 원인 | 처방 |
|---|---|---|
| 컷마다 색감이 다름 | 앵커에 색·조명이 없음 | 앵커에 `warm sandstone tones, soft directional light` 같은 구체적 색·광 |
| 사람이 자꾸 나옴 | 금지 누락 또는 장면에 "worker" 같은 단어 | 금지 문구 확인, 장면에서 인물 언급 제거 |
| 글자·워터마크 | 도면(blueprint) 묘사에 label을 기대함 | `no text, no labels` 추가 |
| 카메라가 어지러움 | 두 가지 움직임 | 하나만 남기기 |
| 실물과 다름 | 모델이 모르는 구조 | 형태를 말로 풀어 쓰기: `five horizontal granite slabs stacked with gaps` |

## 오늘의 체크리스트

- [ ] style_anchor가 script.json에 있다
- [ ] 모든 prompt_en이 앵커+장면+카메라+금지 구조다
- [ ] 컷당 카메라 움직임이 하나다
- [ ] prompts/ 폴더에 컷별 txt가 있다
- [ ] 커밋했다 (`pyramid: 프롬프트 확정`)

## 다음 강의

5강, Google Flow에서 클립 22개를 만듭니다. 손으로 하는 법과 브라우저 자동화로 시키는 법.
