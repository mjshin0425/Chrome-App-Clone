//
// JS에서 만들고 HTML에 추가

const images = ["0.jpg", "1.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); // appendChild body에 html 추가
