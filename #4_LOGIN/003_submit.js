////////   Submit

// submit: form 안이 button 클릭시, 엔터 클릭시 발생 -> 자동 새로고침
// submit event 가 발생하는 것을 막거나 개입해서 이벤트 발생 파악하기 -> preventDefault

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
  event.preventDefault();
  //const username = loginInput.value;
  console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);

// 함수 뒤에 괄호()를 붙이면 브라우저가 자동으로 함수 실행

// submit 이벤트가 발생할 때 JS는 onLoginSubmit 함수를 호출.
// onLoginSubmit 함수는 event를 argument를 줌.
// event에는 preventDefault 함수가 있어서 기본 동작이 실행 되는 것을 막음.
// => submit 클릭해도 새로고침 안됨.
