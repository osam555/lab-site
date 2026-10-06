---
number: 6
title: 깃허브 페이지로 공개하고 정리하기
subtitle: 영상 10:35~11:52 · Pages 설정, 주소 확인, 그리고 정식 홈페이지로 키울 때
goal: 깃허브 페이지(Pages)를 켜서 내 홈페이지 주소를 얻고, 이 방식의 한계와 다음 단계(정식 홈페이지)를 정리합니다.
minutes: 30
part: 2부 · 영상으로 공개하기
---

> **출처: 누나IT 채널.** 이 강은 누나IT 님의 영상을 보며 따라 하는 강의예요. 영상 속 화면 조작을 글로 다시 정리했고, 영상의 말을 그대로 옮기지 않아요. 아래 구간을 꼭 직접 보세요.

## 이 강에서 보는 영상 구간

영상 **10:35~11:52**를 봐요. 몇 가지 설정만 하면 내 주소가 생겨요.

<div style="position:relative;padding-bottom:56.25%;height:0;margin:1.25rem 0;overflow:hidden;border-radius:12px">
<iframe src="https://www.youtube-nocookie.com/embed/B2dL7IKib7Q?start=635&end=712" title="누나IT 영상 10:35~11:52" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0" loading="lazy" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen></iframe>
</div>

<small>출처: 누나IT 채널 「클로드로 홈페이지 만들기 코딩 없이 깃허브 배포까지」 · 구간 10:35~11:52 · [유튜브에서 보기](https://youtu.be/B2dL7IKib7Q?t=635). 영상이 안 나오면 이 링크로 열어요.</small>


## 영상 순서

1. 저장소 위쪽의 **Settings(설정)** 메뉴로 가요.
2. 왼쪽에서 **Pages**를 골라요.
3. 공개할 **브랜치(branch)** 칸이 처음엔 **None**이에요. 이것을 **main**으로 바꾸고 **Save**를 눌러요.
4. 위쪽 **Actions** 탭으로 가요. 목록에서 **pages build and deployment**(페이지 빌드) 항목을 눌러요.
5. 작업이 끝나면 화면에 **링크 주소**가 나와요. 이것이 **내 홈페이지 주소**예요. 눌러서 열어 봐요.
6. 영상은 홈페이지가 열리고, 유튜브 링크와 영상 재생이 잘 되는 것까지 클릭해서 확인해요. 이 주소는 고유하니 카톡으로 공유하면 **클로드 틀 없이 깔끔한 홈페이지**가 보인다고 해요.

만들어진 직후에는 몇 분 걸릴 수 있어요. 안 열리면 Actions의 작업이 끝났는지 먼저 봐요. 안 풀리면 화면과 에러 문구를 클로드에게 보여 주세요.

## 정식 홈페이지로 키울 때

영상 방식은 **HTML 한 장을 올리는 가장 쉬운 방법**이에요. 아래가 필요해지면 클로드 데스크탑 앱의 **Code 탭**으로 옮겨요(영상은 이 단계를 다루지 않아요).

- 내 도메인(예: 가게이름.com)을 쓰고 싶다
- 여러 페이지, 사진 갤러리, 문의 폼이 필요하다
- 고칠 때마다 파일을 내려받고 다시 올리는 게 번거롭다, 이전 상태로 되돌리고 싶다

옮기는 길은 이래요. 영상에서 만든 `index.html`을 Code 탭에서 폴더에 두고 "이 페이지를 계속 고치게 도와줘"라고 시킨 뒤 → [깃 기초](/basics/git-basics)로 저장 → [깃허브 기초](/basics/github-basics)로 올리기 → [버셀 기초](/basics/vercel-basics)와 [깃·버셀 배포](/basics/git-vercel-deploy)로 자동 배포 → [도메인 기초](/basics/domain-basics)로 내 주소 연결. 전체 실습은 [홈페이지 만들기](/lectures/homepage) 과정에서 하고, 그 뒤에는 [홈페이지 고급](/lectures/homepage-cli)이 이어져요.

## 정리

| 강 | 한 일 |
|---|---|
| 1 | 아티팩트 켜고 웹사이트 만들기 화면 열기 |
| 2 | 소개 재료를 입력해 첫 홈페이지 |
| 3 | 스타일 바꾸기, 이미지 넣기 |
| 4 | 게시 링크의 한계, HTML 내려받기 |
| 5 | 깃허브 저장소에 index.html 올리기 |
| 6 | 깃허브 페이지로 공개, 다음 단계 |

이 과정은 누나IT 님의 영상을 보며 따라 하는 과정이에요. 영상이 더 자세하니, 막히면 해당 구간을 다시 봐요.

::: practice
- [ ] Settings → Pages에서 브랜치를 main으로 바꾸고 Save를 눌렀다
- [ ] Actions에서 페이지 빌드가 끝난 것을 확인하고 내 홈페이지 주소를 얻었다
- [ ] 그 주소를 폰으로 열어 보고, 클로드 틀이 없는지 확인했다
- [ ] 가족·친구 한 명에게 주소를 보냈다(공개해도 되는 내용인지 확인한 뒤)
- [ ] 정식 홈페이지로 키울지 결정하고, 키운다면 다음에 들을 강을 정했다
:::
