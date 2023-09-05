//////////////  function 함수

function sayHello() {
  console.log("Hello my name is C");
}
//console.log(sayHello); // f
//sayHello();  // Hello my name is C
//alert();  //팝업창
//console.log(); // nothing

// function에 값이나 데이터를 바꾸는 방법
//function 으로 선언한 함수의 괄호 안에 바꾸고 싶은 것(값, 아규먼트)을 변수(파라미터)로 넣어둔다.

//function sayHello(nameOfPerson, age) {
//  console.log("hello mu name is " + nameOfPerson + "and I'm " + age);
//}

//sayHello("nico", 10);
//sayHello("dal", 23);
//sayHello("lynn", 21);

///////////// 계산기 함수
// 이름은 상관 없으나, 순서는 매우 중요
function plus(firstNumber, secondNember) {
  console.log(firstNumber + secondNember);
}

function divide(a, b) {
  console.log(a / b);
}

plus(8, 60);
divide(80, 20);

function multiple(num1, num2) {
  console.log(num1 * num2);
}

multiple(2, 5);

////////////////////////// 객체와 함수 Object & function

function sayHello() {}

const player = {
  name: "nico",
  sayHello: function (otherPersonsName) {
    console.log("hello " + otherPersonsName + " nice to meet you!");
  },
};

console.log(player.name);
player.sayHello("lynn");
