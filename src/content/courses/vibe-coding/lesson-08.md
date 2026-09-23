---
number: 8
title: 첫 프로젝트
subtitle: 오늘 안에 내 URL을 갖게 됩니다
goal: Next.js 프로젝트를 만들고, 첫 화면을 바꾸고, Vercel에 배포해서 인터넷 주소를 얻습니다.
minutes: 45
part: 2부 · 기획과 프롬프트
---

## 왜 오늘 바로 배포하나요?

보통은 다 만들고 마지막에 배포합니다. 우리는 반대로 합니다. **빈 화면이라도 먼저 인터넷에 올려두고** 매일 조금씩 채웁니다. 이유는 셋입니다.

1. 배포에서 생기는 문제를 1일차에 미리 겪는다 (마지막 날에 겪으면 지옥)
2. 매일 "진짜 주소"에서 변화를 확인하면 동기가 유지된다
3. 친구에게 링크를 보내 피드백을 받을 수 있다 (17강)

## 도구 선택: Next.js + Vercel

- **Next.js**: 화면(프론트)과 서버(백엔드)를 한 프로젝트에서 만들 수 있는 프레임워크. AI가 가장 잘 아는 도구 중 하나라 결과 품질이 좋습니다.
- **Vercel**: Next.js를 만든 회사의 배포 서비스. GitHub에 push하면 자동으로 인터넷에 올라갑니다. 개인 프로젝트는 무료.

다른 선택지도 있지만, 입문자에겐 "AI가 제일 잘 아는 조합"이 가장 안전합니다.

## 따라하기 1: 프로젝트 생성

3강에서 만든 `my-first-app`은 연습용이었습니다. 진짜 프로젝트를 새로 만듭니다. 터미널에서 (프로젝트 폴더 **바깥**에서):

```bash
npx create-next-app@latest my-service
```

질문이 몇 개 나옵니다. 전부 **Enter(기본값)** 로 넘기세요. TypeScript, Tailwind, App Router가 기본 선택되는데 모두 AI가 잘 다루는 것들입니다.

```bash
cd my-service
code .
npm run dev
```

터미널에 `http://localhost:3000`이 나옵니다. 브라우저에서 열면 Next.js 기본 화면이 보입니다. **이게 내 서비스의 시작 화면입니다.**

> `localhost`는 "내 컴퓨터"라는 뜻입니다. 지금은 나만 볼 수 있습니다.

## 따라하기 2: 첫 화면 바꾸기

`PLAN.md`와 `PROMPT_TEMPLATE.md`를 이 폴더로 옮기세요. 그리고 AI 도구를 켜고:

<div class="prompt-box not-prose" data-prompt="8-1" data-level="advanced">
<div class="prompt-box-header"><span class="prompt-box-badge">프롬프트 8-1</span><span class="prompt-level prompt-level-advanced">🔴 고급</span><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.prompt-box').querySelector('.prompt-box-body').innerText).then(()=>{this.textContent='✅';setTimeout(()=>this.textContent='📋',1500)})" title="복사">📋</button></div>
<div class="prompt-box-body">

"PLAN.md를 읽어줘. 그리고 src/app/page.tsx의 기본 내용을 전부 지우고, 서비스 이름과 한 줄 설명만 가운데에 크게 보여주는 화면으로 바꿔줘. 다른 파일은 건드리지 마."

</div>
</div>

브라우저가 자동으로 새로고침되며 바뀐 화면이 보입니다. 이 즉시 반영을 **핫 리로드**라고 합니다.

마음에 들면 커밋:

```bash
git add .
git commit -m "첫 화면: 서비스 이름과 설명"
```

## 따라하기 3: GitHub에 올리기

5강에서 한 것과 같습니다. GitHub에 `my-service` 저장소를 만들고 push하세요. 명령을 잊었으면 AI에게 "이 프로젝트를 GitHub 새 저장소에 올리는 명령어"를 물어보세요.

## 따라하기 4: Vercel 배포

1. vercel.com → GitHub 계정으로 가입
2. **Add New → Project** → `my-service` 저장소 선택 → **Deploy**
3. 1~2분 기다리면 `my-service-xxxx.vercel.app` 같은 주소가 생깁니다

**이 주소를 폰으로 열어보세요.** 여러분이 만든 화면이 인터넷 어디서든 보입니다.

이제부터 `git push`만 하면 Vercel이 자동으로 새 버전을 올립니다. 배포를 따로 신경 쓸 일이 없습니다.

## 따라하기 5: 7강의 요청문 보내기

7강에서 써둔 핵심 기능 1번 요청문을 이제 AI에게 보내세요. 결과를 브라우저에서 확인하고, 되면 커밋 + push. 안 되면 되돌리고(`git checkout .`) 요청을 더 구체적으로 고쳐서 다시.

오늘 여기까지 안 돼도 괜찮습니다. 배포까지 된 것만으로 오늘은 성공입니다.

## 오늘의 체크리스트

- [ ] `npm run dev`로 localhost:3000이 열린다
- [ ] 첫 화면이 내 서비스 이름으로 바뀌었다
- [ ] `.vercel.app` 주소가 있고 폰에서 열린다
- [ ] 주소를 1강 노트의 "내 서비스 한 줄" 옆에 적었다

## 다음 강의

9강에서는 AI에게 매번 같은 말을 반복하지 않도록 **규칙 설명서(CLAUDE.md)** 를 만듭니다.
