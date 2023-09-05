const h1 = document.querySelector("div.hello:first-child h1");

// h1  class 이름 바꾸기
// sexy-font를 지우지 않고 clicked 만 추가하거나 삭제

// function handleTitleClick() {
//   const clickedClass = "clicked";
//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }

h1.addEventListener("click", handleTitleClick);

// = 토글
// h1 class list 검사해서 clicked 라는 class 이름  없으면 주가, 있으면 삭제

function handleTitleClick() {
  h1.classList.toggle("clicked");
}
