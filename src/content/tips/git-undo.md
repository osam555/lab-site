---
title: "방금 커밋을 취소하고 싶어요"
category: Git
order: 7
---
| 상황 | 명령 |
|---|---|
| 커밋은 취소, 변경은 남기기 | `git reset --soft HEAD~1` |
| 커밋도 변경도 전부 버리기 | `git reset --hard HEAD~1` |
| 이미 push한 커밋 | `git revert HEAD` 후 다시 push |

`--hard`는 되돌릴 수 없으니 실행 전에 `git status`로 무엇이 날아가는지 확인하세요.
