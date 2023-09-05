//  복습

//const title = document.querySelector("div.hello:first-child h1");
//console.log(title);
//title.innerText = "text";

// EventListener

const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  // console.log("title was clicked!");
  title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick); // title이 click 시 함수 handleTitleClick 실행, ()X
