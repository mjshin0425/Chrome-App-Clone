// 1. h1 정의하기 하고 불러오기
// const h1 = document.querySelector("div.hello:first-child h1");

// 2. 함수 만들기 - h1 클릭시 색깔 바뀜
//  function handleTitleClick() {
//     h1.className = "clicked";
//  }

//  3.h1에 이벤트리스너 - h1 클릭시 제목바꿈함수 실행
//  h1.addEventListener("click", handleTitleClick)

const h1 = document.querySelector("div.hello:first-child h1");

// h1  class 이름 바꾸기
function handleTitleClick() {
  const clickedClass = "clicked"; // css "active" 문자열을 변수에 담아줘서 raw value 에러 예방
  if (h1.className === "clickedClass") {
    // class 이름 active랑 같으면 공백으로
    h1.className = "";
  } else {
    h1.className = "clickedClass";
    // 없으면 class 이름 active 추가
    // sexy-font 가 사라지고 clicked 가 붙음
  }
}

h1.addEventListener("click", handleTitleClick);
