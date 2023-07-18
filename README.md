# stock_server

## stock_server
stock_app 애플리케이션의 백엔드 포트폴리오이면서 stock_app과 통신하기 위한 백엔드 포트폴리오입니다.

<br>
● 제작기간 : 2022.12.18~2023.02.14(1인 프로젝트)

### 개발 환경
> 1. JavaScript<br/>
> 2. Node.js<br/>
> 3. Express.js<br/>
> 4. AWS

### IDE
> 1. Visual Studio Code<br/>

## API 소개
### 1. User API
|Url|Http Method|기능|Parameter
|:---|:---:|:---:|:---|
|/api/user/register|POST|회원가입|○ email(String)<br/> ○ password(String)<br/> ○ name(String)<br/> ○ tel(String)<br/>
|/api/user/login|POST|로그인| ○ email(String)<br/> ○ password(String)<br/>
|/api/user/auth|GET|로그인 여부| ○ id(UUID)<br/> ○ email(String)<br/> ○ name(String)<br/> ○ tel(String)<br/> ○ profile_image(String)<br/> ○ role(Integer)<br/>
|/api/user/logout|POST|로그아웃| ○ userId(UUID)
|/api/user/profile/show|GET|프로필 상세보기| ○ id(UUID)
|/api/user/profile/edit|PATCH|프로필 수정| ○ id(UUID)<br/> ○ profile_image(String)<br/> ○ name(String)<br/> ○ tel(String)<br/>
<br/>

### 2. Admin API
|Url|Http Method|기능|Parameter
|:---|:---:|:---:|:---|
|/api/admin/users/list|GET|회원 목록(페이징 처리 및 검색)| ○ page(String)<br/> ex) page:"1"
|/api/admin/user/detail|GET|회원 상세보기| ○ id(UUID)
|/api/admin/user/edit|PATCH|회원 수정| ○ id(UUID)<br/> ○ profile_image(String)<br/> ○ name(String)<br/> ○ tel(String)<br/> ○ role(Integer)<br/>
|/api/admin/user/leave|DELETE|회원 탈퇴 또는 회원 삭제|○ ids(String)<br/> ex) ids:"['UUID']"
<br/>

### 3. Assets Portfolio API
|Url|Http Method|기능|Parameter
|:---|:---:|:---:|:---|
|/api/stock/portfolio/create|POST|자산 포트폴리오 생성| ○ initialPrice(String)<br/> ex)initialPrice:"100"<br/> ○ userId(UUID)<br/> ○ stock(String)<br/> ex) stock:"['SPLG','O','','','','','','','','']"<br/> ○ ratio(String)<br/> ex) ratio:"['50','50','0','0','0','0','0','0','0','0']"<br/> ○ title(String)<br/> ○ writer(String)
|/api/stock/portfolio/list|GET|자산 포트폴리오 목록(페이지 처리)|○ id(UUID)<br/> ○ per(String)<br/> ex) per:10"<br/> ○ page(String)<br/> page:"1"
|/api/stock/portfolio/detail|GET|자산 포트폴리오 상세보기|○ portIndex(String)<br/> ex) portIndex:"10"<br/>
|/api/stock/portfolio/edit|PATCH|자산 포트폴리오 수정|○ initialPrice(String)<br/> ex)initialPrice:"100"<br/> ○ portIndex(String)<br/> ex) portIndex:"10"<br/> ○ stock(String)<br/> ex) stock:"['SPLG','O','','','','','','','','']"<br/> ○ ratio(String)<br/> ex) ratio:"['50','50','0','0','0','0','0','0','0','0']"<br/> ○ title(String)
|/api/stock/portfolio/delete|DELETE|자산 포트폴리오 삭제| ○ portIndex(String)<br/> ex) portIndex:"10"
<br/>

※ 속성이 email이고 데이터 타입이 String이면 email(String)으로 작성했습니다.

## 테이블 구조
<img width="817" alt="스크린샷 2023-02-18 오후 6 23 06" src="https://user-images.githubusercontent.com/74657556/219852708-b1253c60-0cac-4133-bd9a-fa7e96c81c20.png">

## 자산 포트폴리오 앱
자산 포트폴리오 앱 설명을 보려면 아래 링크를 클릭하면 됩니다.
<br/><br/>
<a href="https://github.com/seongchangkim/stock_app">자산 포트폴리오 앱</a>
