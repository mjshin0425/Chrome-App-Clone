const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 값을 string으로 바꿀 때 씀
  // JSON.parse JSON string을 배열로 바꿀때
}

function deleteTodo(event) {
  //console.dir(event.target.parentElement.innerText);
  // event는 target 에 접근, target은 button, 부모 요소인 li에 접근
  //console.log(event.target.parentElement);
  const li = event.target.parentElement;
  //console.log(li.id);
  li.remove();
  //console.log(typeof li.id);
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  // console.log("i will paint", newTodo);
  const li = document.createElement("li");
  li.id = newTodo.id; // 6.6 - 7:12
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "✖";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span); // li에 span 넣기
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj); // 6.6 - 7:12
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//   console.log("this is the turn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY); // string
//console.log(savedToDos);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); // string -> array
  //console.log(parsedToDos);
  toDos = parsedToDos; // 이전 기록을 localstorage에 보관함, 새로고침해도 남음.
  parsedToDos.array.forEach(paintToDo());
  //parsedToDos.forEach(sayHello); // forEach :  각 요소를 하나씩 순회
  //  parsedToDos.forEach( (item) => console.log("this is the turn of ", item))
}

// function sexyFilter() {

// }

// [1,2,3,4].filter(sexyFilter)

// sexyFilter(4) = 1
// sexyFilter(4) = 2
// sexyFilter(4) = 3
// sexyFilter(4) = 4

// 같음
// (item) => console.log("this is th turn of", item) // item을 받아서 사용하도록 지시

// function sayHello(item) {
//   console.log("this is the turn of ", item)
// }
