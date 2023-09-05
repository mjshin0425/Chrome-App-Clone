// Timeouts & Dates

const clock = document.querySelector("h2#clock");

//clock.innerText = "lalala";

function getClock() {
  const date = new Date();
  //console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

/////////////// setInterval, setTimeout

// 매 5초마다 실행 function, ms(millisecond)
setInterval(getClock, 1000); // 5초

// 5초 후 실행
//setTimeout(sayHello, 5000);

//////////////  Dates

//오늘 날짜
// new Date();

//  const date = new Date();
//  date.getDate(); // 날짜
//  date.getDay(); // 일요일 0
//  date.getFullYear();
//  date.getHours();
//  date.getMinutes();
//  date.getSeconds();
