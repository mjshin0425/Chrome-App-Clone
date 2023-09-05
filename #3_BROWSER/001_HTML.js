// HTML IN JAVASCRIPT

// 1. 자바스크립트로부터 html element 가져오기
// 2. 자바스크립트에서 html element 변경하기

// className, id, innerText, autofocus

///////////////////// className, id

// html -> id ="title"
const title = document.getElementById("title");

// html -> class ="title"
const title = document.getElementsByClassName("title");

console.dir("title"); //  콘솔 창에 title만 찍힘. 검색 불가
console.dir(title);  // h1#title 검색 가능

///////////////////////  autofocus

 h1 autofocus // 자바스크립트에서 html을 가져오는 것

////////////////////  innerText

title.innerHTML = "Got you!";
//  id = "title"이 HTML에 추가되고 js에서
// .getElementById 함수로 불러옴. document (=HTML)의 함수
// title.innerHTML = "Got you!"로 변경시킴

//////////////////////  불러오기

console.log(title.id); // title
console.log(title.className); // hellohello
