const quotes = [
  {
    quote: "삶이 있는 한 희망은 있다.",
    author: "키케로",
  },
  {
    quote: "언제나 현재에 집중할수 있다면 행복할것이다.",
    author: "-파울로 코엘료-",
  },
  {
    quote: "한번의 실패와 영원한 실패를 혼동하지 마라.",
    author: "-F.스콧 핏제랄드-",
  },
  {
    quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
    author: "-사무엘존슨-",
  },
  {
    quote: "한번의 실패와 영원한 실패를 혼동하지 마라.",
    author: "-F.스콧 핏제랄드-",
  },
  {
    quote:
      "행복의 문이 하나 닫히면 다른 문이 열린다. 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다. ",
    author: "-헬렌 켈러-",
  },
  {
    quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.",
    author: "-앙드레 말로-",
  },
  {
    quote: "당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다.",
    author: "-헨리 포드-",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

//console.log(quotes[0 9]);
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

//  Math.random();
//  Math.round();
//  Math.ceiling();
//  Math.floor();
