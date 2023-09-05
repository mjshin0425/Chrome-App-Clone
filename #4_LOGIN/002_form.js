//// Form input value 유효성 검사
// JS 쓰지 않고  CSS로 input 값 조건 설정하기

// 2-4. 유저 값(username) 유효성 검사
// -> HTML form 안에 input 있어야 가능  required maxlength

function onLoginBtnClick() {
  // const username = loginInput.value;
  // if (username === "") {
  //   alert("Please Wirte your name");
  // } else if (username.length > 15) {
  //   alert("Your name is too long.");
  // }

  const username = loginInput.value;
  console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);
