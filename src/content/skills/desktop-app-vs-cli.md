---
title: 데스크탑 앱 vs CLI — 뭘 쓸까
summary: Claude Code 데스크탑 앱과 터미널 CLI의 차이. 초보자와 고급자 각각 뭘 골라야 하는지
category: 설치·설정
order: 9
minutes: 8
---

## 두 가지 방식

Claude Code는 두 가지로 사용합니다.

| | **데스크탑 앱** | **CLI (터미널)** |
|---|---|---|
| **실행** | 앱 아이콘 클릭 | 터미널에서 `claude` 입력 |
| **Aside Browser** | 있음 (오른쪽 패널) | 없음 |
| **Computer Use** | 있음 | 없음 |
| **MCP 연결 UI** | 있음 (설정 메뉴) | 설정 파일 직접 수정 |
| **파일 미리보기** | 있음 | 없음 |
| **추천 대상** | 초보자·운영 자동화 | 고급·서버·스크립트 |

## 데스크탑 앱 선택 기준

- 홈페이지 만들기, 블로그 자동화, SNS 배포 등 **웹 UI를 다루는 작업**
- Computer Use로 Vercel·구글 콘솔·에디터를 자동 조작할 때
- 코딩 경험이 없거나 적을 때
- 이 사이트 강의 대부분

## CLI 선택 기준

- 서버(Linux)에서 자동화 파이프라인 실행
- CI/CD, cron job에 Claude를 연결할 때
- 터미널이 익숙하고 빠른 속도를 원할 때
- 이 사이트의 **홈페이지 고급 과정**

## 같이 쓰는 방법

대부분의 사람은 **데스크탑 앱**을 기본으로, 터미널이 필요한 순간에만 CLI를 씁니다.

- 앱으로 파일 작업·Aside 자동화
- 터미널로 `git push`, `npm run build` 확인

## Claude Code 앱 주요 패널

```
┌─────────────────┬──────────────────┐
│                 │  Aside 패널       │
│  대화 입력창     │  · Browser       │
│                 │  · Preview       │
│                 │  · MCP 탭        │
└─────────────────┴──────────────────┘
```

**Aside Browser**: 외부 URL 탐색, Computer Use 자동화
**Preview**: 내 프로젝트 localhost 미리보기
**MCP 탭**: 연결된 MCP 서버 상태 확인

## 설치 방법

데스크탑 앱: [claude.ai/download](https://claude.ai/download) → Claude Code 다운로드

CLI:
```bash
npm install -g @anthropic-ai/claude-code
```
