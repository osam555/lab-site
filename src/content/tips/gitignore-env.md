---
title: ".env 파일을 실수로 커밋했어요"
category: Git
order: 8
---
**1순위: 키를 재발급하세요.** 커밋 기록에서 지워도 이미 push했다면 누군가 봤을 수 있습니다.

그다음 Git에서 제거:

```bash
git rm --cached .env.local
echo ".env.local" >> .gitignore
git commit -m "env 파일 제거"
```

`--cached`는 "Git 추적에서만 빼고 파일은 남긴다"는 뜻입니다.
