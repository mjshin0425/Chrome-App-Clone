const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
  //console.log("i will paint", newTodo);
  const li = document.createElement("li");
  const span = document.querySelector("span");
  li.appendChild(span); // span을 li 안에 넣어주기
  span.innerText = newTodo; //span 의 텍스트 내용
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  // 새로고침을 막음
  event.preventDefault();
  // 인풋값 저장하기
  const newTodo = toDoInput.value;
  // 엔터 누르면 인풋값 초기화
  toDoInput.value = "";
  // paintToDo 호출
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
