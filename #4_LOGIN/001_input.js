///// JS 로 input 조건 설정하기

//const loginForm = document.getElementById("login-form");
//const loginInput = loginForm.querySelector("input");
//const loginbutton = loginForm.querySelector("button");

// 1. html 찾아서 js 연결
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

//2. 버튼 클릭시 콘솔창에 입력 - 함수, 이벤트 리스너
// 2-1. 버튼을 이벤트에 연결
// 2-2. 이벤트에 함수를 연결
// 2-3. 함수에 콘솔 연결

function onLoginBtnClick() {
  const username = loginInput.value;
  if (username === "") {
    alert("Please Wirte your name");
  } else if (username.length > 15) {
    alert("Your name is too long.");
  }
}

loginButton.addEventListener("click", onLoginBtnClick);
