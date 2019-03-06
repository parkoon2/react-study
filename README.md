## 원격 저장소 URL 변경하기
$ git remote -v
 	
origin  https://github.com/user/repo.git (fetch)
origin  https://github.com/user/repo.git (push)

$ git remote set-url origin https://github.com/user/repo2.git

## 리액트 공부하기
### ref
 - 부모 컴포넌트에서 스크롤바 내리기
  1. Create ScrollBox Component 
  2. attach ref to component
  3. call inner component method using ref