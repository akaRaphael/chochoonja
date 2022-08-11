# 화가 조춘자 웹사이트 구축 프로젝트

## 0. 알려드립니다.
### ❗️ 깃헙에 업로드된 모든 이미지 파일에 대한 저작권은 한국화가 조춘자에게 있습니다. 
### ❗️ 본 프로젝트의 이미지 파일을 영리적 목적으로 사용 시 법적 책임을 물을 수 있음을 알려드립니다.
### ❗️ 클라이언트에게 포트폴리오로써 사용 목적을 동의받은 프로젝트임을 알려드립니다.

</br>
</br>

## 1. 프로젝트 결과물
[조춘자 웹사이트 바로가기](http://www.choeunsum.com)</br>
</br>
</br>

## 2. 프로젝트 소개
우연한 계기로 한국화가 조춘자 님의 웹사이트 구축 프로젝트를 진행하였습니다.</br> 
웹사이트 기획부터 배포까지 모두 담당하였습니다.</br>  
</br>
</br>

## 3. 기술 스택
* HTML, CSS, JavaScript
* AWS - S3, Route 53
</br>
</br>

## 4. 기술 부채에 대한 고민

### 기술 부채 1) HTTPS와 다양한 접근 주소 미설정 </br>
- AWS EC2를 배포 및 파일 저장소 용도만으로 사용하였다는 것.</br>
즉, EC2를 제대로 사용할 줄 모른다는 것이 가장 큰 원인으로, 차후에 깊이 공부해보고 싶습니다.</br>
</br>

### 기술 부채 2) 체계 없는 규격 설정으로 인한 반응형 설계의 어려움 
- 크롬에서 지원하는 개발자 도구를 이용할 때와 실제 기기를 이용해 반응형을 테스트 했을 때</br>
그 차이가 커서 이를 조정하는 데 많은 시행착오가 있었습니다.
- 반응형 페이지에 대한 결과물을 다양한 기기로 검증하지 못하는 환경적 제약에 아쉬움이 남지만, </br>
프레임 워크를 적용하여 이를 쉽게 해결해보고 싶습니다.</br>
- 더불어 프런트 개발 시 규격을 설정하는 이유를 깨달을 수 있었습니다.
</br>

### 기술 부채 3) 이미지 로딩 속도의 문제
- 웹사이트 로딩 과정에서 썸네일 이미지의 로딩 속도가 느린 것을 확인하였습니다.
- 본 이미지와 분리하여 작은 해상도의 썸네일 이미지를 만들어 사용하였지만, 기대했던 만큼의 로딩 속도는 나오지 않았습니다.
- 현재 프로젝트는 SSR 방식의 구조를 갖습니다.
- 이미지 파일이 주요 콘텐츠인 웹사이트이므로 CSR 방식으로 재구성해보고 싶습니다.
- 캐시 메모리를 사용하거나 출력 기기의 해상도에 따라 이미지의 크기를 고정하는 등의 방식을 사용하여 이미지 로딩 속도를 개선하고 싶습니다.

</br> 

### 기술 부채 4) 이미지 확대 기능
- 이미지 확대 기능을 외부 라이브러리로 사용하려 했으나 커스터마이징 과정에서 어려움을 느꼈습니다.
- 해당 기능의 코드 및 작동 원리를 찾아보고 직접 구현하여 웹사이트에 적용하였습니다.
- 기능의 완성도가 높지 않아서 사용 방식이 직관적이지 않습니다. 이 부분을 개선해보고 싶습니다.
</br>
</br> 

## 5. 프로젝트를 완성하며
클라이언트의 요구사항 파악, 기획, 디자인, 개발, 배포까지 전체적인 개발 과정을 익힐 수 있었습니다. </br>
부트스트랩이나 프레임워크를 사용하지 않고 만든 프로젝트로 애착이 많이 가며, 덕분에 프런트의 기본을 익히고 활용할 수 있었습니다.</br>
프레임워크가 없어서 발생한 불편함에 의해 그 필요성을 배울 수 있었으며, 추후에 React 또는 Vue를 사용하여 리팩토링 해보고 싶습니다.</br>
</br>
