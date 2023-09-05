////////  preventDefault

// event에는 preventDefault 함수가 있어서 기본 동작이 실행 되는 것을 막음.
// => submit 클릭해도 새로고침 안됨.

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
  alert("clicked");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

// event 브라우저가 주는 정보를 여기 담아서 줌
