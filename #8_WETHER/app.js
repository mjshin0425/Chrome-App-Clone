const API_KEY = "7f886dd97f1552d891a154feb8ce9829";

// 1. navigator.geolocation 객체를 이용해 현재 위치 찾기
function onGeoOk(position) {
  // console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  //console.log("You live in", lat, lon);
  // console.log(`I live in ${lat}, ${lng}`);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  //console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.name, data.weather[0].main);
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");

      city.innerText = `오늘 ${data.name}`;
      weather.innerText = `의 날씨는 ${data.weather[0].main}이고 기온은 ${data.main.temp} 입니다.`;
    });
}

function onGeoError() {
  alert("Can't find you.No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
