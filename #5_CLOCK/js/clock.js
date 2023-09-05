//
// 한 자리 숫자를 두 자리 채워서 표기
// 1 -> 01

const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0"); // date.getHours()를 문자열로 바꿈
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

// padStart(자릿수, "추가할 문자");
"hello".padStart(10, "x"); // xxxxxhello
"2".padEnd(2, "0"); // 20
