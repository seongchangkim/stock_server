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
|Url|Http Method|Parameter
|:---|:---:|:---|
|/api/user/register|POST|○ email(String)<br/> ○ password(String)<br/> ○ name(String)<br/> ○ tel(String)<br/>
|/api/user/login|POST| ○ email(String)<br/> ○ password(String)<br/>
|/api/user/auth|GET| ○ id(UUID)<br/> ○ email(String)<br/> ○ name(String)<br/> ○ tel(String)<br/> ○ profile_image(String)<br/> ○ role(Integer)<br/>
|/api/user/logout|POST| ○ userId(UUID)
|/api/user/profile/show|GET| ○ id(UUID)
|/api/user/profile/edit|PATCH| ○ id(UUID)<br/> ○ profile_image(String)<br/> ○ name(String)<br/> ○ tel(String)<br/>
<br/>

### 2. Admin API
|Url|Http Method|Parameter
|:---|:---:|:---|
|/api/admin/users/list|GET| ○ page(String)<br/> ex) page:"1"
|/api/admin/user/detail|GET| ○ id(UUID)
|/api/admin/user/edit|PATCH| ○ id(UUID)<br/> ○ profile_image(String)<br/> ○ name(String)<br/> ○ tel(String)<br/> ○ role(Integer)<br/>
|/api/admin/user/leave|DELETE|○ ids(String)<br/> ex) ids:"['UUID']"
<br/>

### 3. Stock Portfolio API
|Url|Http Method|Parameter
|:---|:---:|:---|
|/api/stock/portfolio/create|POST| ○ initialPrice(String)<br/> ex)initialPrice:"100"<br/> ○ userId(UUID)<br/> ○ stock(String)<br/> ex) stock:"['SPLG','O','','','','','','','','']"<br/> ○ ratio(String)<br/> ex) ratio:"['50','50','0','0','0','0','0','0','0','0']"<br/> ○ title(String)<br/> ○ writer(String)
|/api/stock/portfolio/list|GET|○ id(UUID)<br/> ○ per(String)<br/> ex) per:10"<br/> ○ page(String)<br/> page:"1"
|/api/stock/portfolio/detail|GET|○ portIndex(String)<br/> ex) portIndex:"10"<br/>
|/api/stock/portfolio/edit|PATCH|○ initialPrice(String)<br/> ex)initialPrice:"100"<br/> ○ portIndex(String)<br/> ex) portIndex:"10"<br/> ○ stock(String)<br/> ex) stock:"['SPLG','O','','','','','','','','']"<br/> ○ ratio(String)<br/> ex) ratio:"['50','50','0','0','0','0','0','0','0','0']"<br/> ○ title(String)
|/api/stock/portfolio/delete|DELETE| ○ portIndex(String)<br/> ex) portIndex:"10"
<br/>

※ 속성이 email이고 데이터 타입이 String이면 email(String)으로 작성했습니다.

## 테이블 구조
<img width="817" alt="스크린샷 2023-02-18 오후 6 23 06" src="https://user-images.githubusercontent.com/74657556/219852708-b1253c60-0cac-4133-bd9a-fa7e96c81c20.png">
