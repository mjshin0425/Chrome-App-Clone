///  CSS IN JS

// 1. element 찾기
const h1 = document.querySelector("div.hello:first-child h1");

// 3. element에 반응하기
function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}

// 2. element listen 하기
h1.addEventListener("click", handleTitleClick);
