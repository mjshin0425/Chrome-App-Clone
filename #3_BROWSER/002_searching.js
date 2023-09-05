////////////// id 호출, 변경

const title = document.getElementById("something");

title.innerText = "Got you!";

//console.log(title.className);

//////////////// class 호출

const hellos = document.getElementsByClassName("hello");
console.log(hellos);

//////////////////// Tag로 호출
// tag: anchor, div, section, button 등

// 모든 h1 가져오기
const title = document.getElementsByTagName("h1"); // HTMLCollection[h1]

////////////////// querySelector : element를 css로 호출  ************************
// css slector, css처럼 사용 가능
// class hello 안의 h1

// *** 1번째 것만
const title = document.querySelector(".hello h1"); // <h1>Grab me!</h1>

// 모든
const title = document.querySelectorAll(".hello h1"); // NodeList(3) [h1, h1, h1]

// n번째 자식
const title = document.querySelector(".hello h1:nth-child(2)"); // <h1>a</h1>
const title = document.querySelectorAll(".hello h1:nth-child(2)");
// NodeList(2)[h1, h2] -> h1[0]: a, h1[1]: b

// id
//const title = document.querySelector("#hello);
console.log(title);
