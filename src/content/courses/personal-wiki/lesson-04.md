---
number: 4
title: 페이지 규칙
subtitle: frontmatter·updated·위키링크·index 연결
goal: 페이지 맨 위 정보(frontmatter), 위키링크, 업데이트 날짜, 목차 연결이라는 네 가지 약속을 규칙 파일에 넣고 지키게 합니다.
minutes: 30
part: 2부 · 구축
---

## 페이지가 많아지면 약속이 필요해요

페이지 서너 개일 때는 아무렇게나 써도 괜찮아요. 서른 개가 되면 "이건 언제 쓴 거지?", "어디서 이어지지?"가 시작돼요. 그래서 모든 페이지가 지킬 **네 가지 약속**을 정해요.

## 약속 1. 맨 위 정보 (frontmatter)

용어: **frontmatter(프론트매터)** 는 페이지 맨 위에 `---` 두 줄 사이로 적는 정보칸이에요. 제목, 날짜 같은 "페이지의 이름표"예요.

```markdown
---
title: 3강 정리 — 프롬프트 쓰기
type: lecture
updated: 2026-10-06
---
```

`updated`는 **마지막으로 고친 날짜**예요. 오래된 페이지를 찾을 때 이 칸이 기준이 돼요.

## 약속 2. 위키링크

한 페이지에서 다른 페이지를 가리킬 때 `[[lecture-03-notes]]`처럼 **이중 대괄호**로 감싸요. 확장자(`.md`)는 빼요. 아직 없는 페이지도 링크로 먼저 적어 둘 수 있어요. "나중에 쓸 페이지" 표시가 돼요.

## 약속 3. 날짜는 절대 표기

"지난주 강의"는 한 달 뒤에는 무슨 말인지 몰라요. `2026-10-06`처럼 연-월-일로 적습니다.

## 약속 4. index에서 도달 가능

새 페이지는 반드시 `wiki/index.md`에서 링크로 이어져야 해요. 목차에서 갈 수 없는 페이지는 사실상 잃어버린 페이지예요.

## 규칙 파일에 넣기

> **기본 방법: 클로드 데스크탑 앱의 Code 탭.** 위키 폴더(`my-wiki`)를 프로젝트 폴더로 열고, 아래 프롬프트를 붙여 넣어 클로드에게 시킵니다. 클로드가 파일을 만들거나 바꾸려고 **권한을 물으면, 무엇을 하려는지 읽고** 허용합니다. 터미널로 하는 방법은 맨 아래 '터미널로도 할 수 있어요'에 있어요.

<div class="prompt-box not-prose" data-prompt="4-1" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-1</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

CLAUDE.md 에 "페이지 규칙" 섹션을 추가해줘.
1. 모든 wiki 페이지 맨 위에 frontmatter(title, type, updated)를 넣는다
2. 페이지를 고칠 때마다 updated 를 그날 날짜로 바꾼다
3. 다른 페이지는 [[이름]] 으로 연결한다 (.md 는 붙이지 않는다)
4. 날짜는 YYYY-MM-DD 로만 쓴다
5. 새 페이지는 만든 즉시 wiki/index.md 에 한 줄 설명과 함께 링크한다
그리고 지금 wiki/ 에 있는 페이지들이 이 규칙을 지키는지 점검해서, 안 지킨 것은 고쳐줘. 무엇을 고쳤는지 목록으로 보여줘.

</div>
</div>


## 링크가 서로 이어지게

페이지가 둘 이상이면 서로의 연결을 만들어요.

<div class="prompt-box not-prose" data-prompt="4-2" data-level="beginner">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 4-2</span><span class="prompt-level prompt-level-beginner">🟢 초급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

wiki/ 의 페이지들을 읽고, 서로 관련된 페이지끼리 [[위키링크]] 로 이어줘.
각 페이지 맨 아래에 "## 관련" 섹션을 만들고 관련 페이지를 한 줄 설명과 함께 적어줘.
관련 페이지가 없으면 억지로 만들지 말고 그냥 둬.
고친 페이지의 updated 날짜도 오늘 날짜로 바꿔줘.

</div>
</div>


## 위키링크는 어디서 보나

[[이름]] 링크는 Obsidian 같은 앱에서는 클릭되지만, 일반 편집기에서는 글자 그대로 보여요. 그래도 괜찮아요. **클로드는 이 표시를 보고 연결된 페이지를 찾아 읽어요.** 사람이 보기 편한 화면이 필요해지면 그때 Obsidian을 설치해도 되지만, 이 과정에서는 필요 없어요.

## 터미널로도 할 수 있어요

<details>
<summary><strong>페이지 맨 위 정보 직접 확인</strong></summary>

```bash
head -6 wiki/lecture-03-notes.md
grep -rn "updated:" wiki
```

모든 페이지에서 `updated:` 줄이 나오는지 한눈에 볼 수 있어요. Windows PowerShell에서는 `Select-String -Path wiki\*.md -Pattern "updated:"` 를 쓰세요.

</details>

::: practice
**실습 — 약속 4가지 적용**

- [ ] `CLAUDE.md`에 페이지 규칙 5줄이 들어갔다
- [ ] 모든 wiki 페이지(index 제외) 맨 위에 `title`·`type`·`updated`가 있다
- [ ] 페이지 두 개 이상이 `[[위키링크]]`로 서로 이어졌다
- [ ] `wiki/index.md`에서 모든 페이지로 갈 수 있다 (index에서 하나씩 눌러 확인)
- [ ] 페이지 안의 날짜가 모두 `2026-10-06` 같은 절대 표기다
:::
