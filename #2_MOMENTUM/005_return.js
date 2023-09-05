///////////   return

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const plusResult = calculator.plus(2, 3);
const minusResult = calculater.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);

console.log(plusResult);

/////////////////////

const age = 96;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge); //98

// 콘솔이나 alert가 아닌 코드에서 결과를 실행시키고 싶을 때,(데이터를 어딘가로 넣어서 써야할 때) return을 쓴다

// return을 써서 calculateKrAge(age)의 결과값을 ageOfForeigner + 2 으로 대체함(불러와서 씀)

// age= 96 -> calculateKrAge(age)(변수 따라감) -> calculateKrAge(ageOfForeigner)(위치 따라감) -> calculateKrAge(96) -> ageOfForeigner + 2 (변수 따라감) -> 96 + 2 -> return 98
