// https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=7674da634845e7c2d8c53ab0a48b8e29

// fetch(
//   "https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=7674da634845e7c2d8c53ab0a48b8e29"
// )
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     data1 = data
//   });

let getData = async (c) => {
  let drawData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=7674da634845e7c2d8c53ab0a48b8e29`
  );
  let data = await drawData.json();

  // console.log(data);

  renderData(data)
};

let renderData = (data) => {
  let dom = document.querySelector(".showInfo");
  let local = document.querySelector("#l")

  let icon = data.weather[0].icon;
  let temp = Math.round(data.main.temp - 273);
  let location = data.name;
  let description = data.weather[0].description;

  let html = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="">
  <hr>
  <h2>${temp}*C</h2>
  <p>${location}</p>
  <p>${description}</p>`;

  dom.innerHTML = html;
  local.innerHTML = location
};

let form = document.getElementById("a");

form.onsubmit = (e) => {
  e.preventDefault();

  let city = form.city.value;

  getData(city);
};
