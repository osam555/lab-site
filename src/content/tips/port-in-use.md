---
title: "Port 3000 is already in use"
category: 환경
order: 2
---
이전에 실행한 `npm run dev`가 아직 살아 있습니다. 그 터미널에서 `Ctrl+C`로 끄거나, 못 찾겠으면:

```bash
# macOS / Linux
lsof -ti:3000 | xargs kill
```

Windows PowerShell은 AI에게 "3000번 포트 쓰는 프로세스 종료하는 명령"을 물어보세요. 또는 그냥 `npm run dev -- -p 3001`로 다른 포트를 씁니다.
