/////////// AND , OR
//*** 잘 헷갈리는 연산자  ***

//  OR TRUE가 둘 중의 하나의 조건만 충족하면 된다
//  true || true === true
//  false || true === true
//  true || false === true
//  false || false === false

//  AND TRUE는 두 조건 모두 충족해야 한다
//  true && true === true
//  false && true === false
//  true && false === false
//  false && false === false

const age = parseInt(prompt("How are you?"));

if (isNaN(age)) {
  //  age가 숫자가 아니면
  console.log("Please write a number");
} else if (age < 18) {
  console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink");
} else if (age > 50 && age < 80) {
  console.log("You should exercise.");
} else if (age > 80) {
  console.log("Youca do anything");
}

// && AND  : 둘 중 하나가 false  false,  " 둘 다 true 여야 true "
//  || OR  : " 둘 중 하나만 true 여도 true "",  둘 다 false 여야 false
