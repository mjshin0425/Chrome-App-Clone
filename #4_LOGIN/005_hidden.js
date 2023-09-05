////////// Getting Username
// 로그인하면 로그인 form 은 사라지고 인사말 greeting 나타내기
// input 값(username) 들고오기 .value

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // 문자열만 포함된 변수는 대문자 표기

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME); // 로그인 폼 숨기기
  const username = loginInput.value;
  //greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username}`; // `문자열 ${변수명} `
  greeting.classList.remove(HIDDEN_CLASSNAME); // 숨김 처리한 h1 나타내기(hidden 제거)
}

loginForm.addEventListener("submit", onLoginSubmit);
