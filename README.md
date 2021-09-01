# Wanted Front-end onBoarding # 9

## Demo Link

🔗 Demo Page : [https://paywork-simoniful.netlify.app/](https://paywork-simoniful.netlify.app/)

## Demo 영상

![222](https://user-images.githubusercontent.com/75239459/131693395-8242a68e-af86-45ec-b713-f7ee9abc3357.gif)
![111](https://user-images.githubusercontent.com/75239459/131693423-c7df1c27-cb10-42c9-9303-9a1abf7f2a04.gif)

## 💬 프로젝트 개요

PayWork : TypeScript를 이용한 To-Do 리스트 구현

## 🪄 실행 방법

#### Project setup

`npm install`

#### Compiles and hot-reloads for development

`npm run serve`

#### Compiles and minifies for production

`npm run build`

## 🔧 Skills

- React, TypeScript, Styled Components, ES6+, Redux, Redux-saga

## 👍🏻 구현 기능 상세

To-Do 리스트 완성
생성, 삭제, 수정, 완료 상태 전환 기능 구현
필터링 기능 구현

### 1. 기본 요구 사항

> - ts+react 웹 사이트 혹은 react-native 앱 개발 (react-native도 ts 가능)
> - function 단위로 주석 설명
> - 디자인 등 따로 설명이 없는 부분은 본인의 재량에 맡김
> - redux + redux-saga 사용
> - 서버 URL이 있다는 가정으로 진행

> ### 과제 구현 목록
>
> - [x] 서버 주소를 이용하여 TODO list 구현
> - [x] ReactJS 기반으로 작성, TypeScript 사용 환경 구성
> - [x] 추가적인 라이브러리 사용 지양
> - [x] 완성 후 기능 추가, 버그 수정
> - [x] 전역상태 관리
> - [x] 미들웨어 활용 비동기 진행 및 데이터 패칭

### 2. 프로젝트 구조와 컴포넌트

#### 프로젝트 구조

```html
📦src
 ┣ 📂components
 ┃ ┣ 📜EmptyMessage.tsx
 ┃ ┣ 📜FilterLink.tsx
 ┃ ┣ 📜TodoFilters.tsx
 ┃ ┣ 📜TodoForm.tsx
 ┃ ┣ 📜TodoHeader.tsx
 ┃ ┣ 📜TodoItem.tsx
 ┃ ┣ 📜TodoList.tsx
 ┃ ┗ 📜TodoMessage.tsx
 ┣ 📂store
 ┃ ┣ 📂actions
 ┃ ┃ ┣ 📜filter.tsx
 ┃ ┃ ┗ 📜items.tsx
 ┃ ┣ 📂reducers
 ┃ ┃ ┣ 📜filter.tsx
 ┃ ┃ ┣ 📜items.tsx
 ┃ ┃ ┗ 📜rootReducer.tsx
 ┃ ┣ 📂sagas
 ┃ ┃ ┣ 📜rootSaga.ts
 ┃ ┃ ┗ 📜sagas.ts
 ┃ ┗ 📜store.tsx
 ┣ 📂styles
 ┃ ┗ 📜GlobalStyles.ts
 ┣ 📂utils
 ┃ ┣ 📜api.ts
 ┃ ┗ 📜types.ts
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┗ 📜react-app-env.d.ts
```

#### 컴포넌트
> - TodoList 기반 레이아웃
> - TodoList, FilterLink를 참고점으로 전역상태 활용

### 3. 상세 기능

#### 데이터 순번이 꼬이지 않도록 Math.random을 활용하여 난수 id값 생성

> - 만약 서버가 작동한다면, 백엔드와 맞추어 id값 선정로직 수정 필요

#### data 필터링으로 보여지는 리스트 변화

> - action 및 리듀서 구성
> - case문을 통한 데이터 필터링으로 보여지는 부분 변경

#### 리스트 수정 및 삭제, 완료 상태 변경

> - action 및 리듀서 구성
> - 조건부 렌더를 통한 수정창 구현
> - 상태변경 시 미들웨어를 통한 서버에 해당 요청 전송

## Reference

- 이 프로젝트는 [페이워크](https://paywork.io/)의 과제전형을 참조하여 학습목적으로 만들었습니다.
- 이 프로젝트에서 사용하고 있는 data는 페이워크 측에서 제공받았습니다.

---
