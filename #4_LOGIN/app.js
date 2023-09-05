//////  Loading Username

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

const USERNAME_KEY = "username"; // string username 오타 에러 방지
// string 을 그대로 쓰면 오타가 나도 의도한 것으로 인식해 에러를 내뿜지 않음

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("USERNAME_KEY", username); // username 저장
  //   greeting.innerText = `Hello ${username}`;
  //   greeting.classList.remove(HIDDEN_CLASSNAME);
  // => paintGreetings();
  paintGreetings(username);
}

/////////// 반복되는 구문 함수로 만들기

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

///////////////////////////

const savedUsername = localStorage.getItem("USERNAME_KEY");

// 1. localStrorage 에  username이 저장되어 있는지 검사
// 2. 없으면 로그인 form 을 보여줌
// 3. 있으면 인사말 h1을 보여줌
if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  //   greeting.innerText = `Hello ${savedUsername}`;
  //   greeting.classList.remove(HIDDEN_CLASSNAME);
  // => paintGreetings()
  paintGreetings(savedUsername);
}
