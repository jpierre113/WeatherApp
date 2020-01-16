console.log("main.js is connected!");
document.getElementById("getWeather").addEventListener("click", getWeather);

function getWeather(x) {
  x.preventDefault;
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?zip=" +
      document.getElementById("zipcode").value +
      "&units=imperial&appid=b90b1f863d30472ac7f514b69530df9e"
  )
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log(res);
      getData(res);
    })
    .catch(err => {
      console.log(err);
    });
}

const getData = function(data) {
  console.log(data);
  const cityName = data.name;
  const currentTemp = data.main.temp;
  const descrip = data.weather[0].description;
  const minTemp = data.main.temp_min;
  const maxTemp = data.main.temp_max;
  // const longitude = data.coord.lon;
  // const latitude = data.coord.lat;
  // const humidity = data.main.humidity;
  // const windSpeed = data.wind.speed;

  manipulateDom(
    cityName,
    currentTemp,
    descrip,
    minTemp,
    maxTemp,
    // longitude,
    // latitude,
    // humidity,
    // windSpeed
  );
};
//data from API will be inserted into variable
const manipulateDom = function(
  cityName,
  currentTemp,
  descrip,
  minTemp,
  maxTemp,
  // longitude,
  // latitude,
  // humidity,
  // windSpeed
) {
  document.getElementById("cityName").innerText = cityName;
  let tempHTML = document.getElementById("currentTemp");
  tempHTML.innerText = currentTemp + "°"; //varible used for color change
  document.getElementById("descrip").innerText = descrip;
  document.getElementById("minTemp").innerText = "Min\n" + minTemp + "°";
  document.getElementById("maxTemp").innerText = "Max\n" + maxTemp + "°";
  // document.getElementById("longitude").innerText = "Longitude: " + longitude;
  // document.getElementById("latitude").innerText = "Latitude: " + latitude;
  // document.getElementById("humidity").innerText = "Humidity: " + humidity;
  // document.getElementById("windSpeed").innerText = "Wind Speed: " + windSpeed;
  let searchBar = document.getElementById("searchBar");
  searchBar.style.position = "absolute";
  searchBar.style.top = "20px";
  searchBar.style.right = "20px";
  searchBar.style.left = "auto";

  let container = document.querySelector(".container");
  container.style.width = "50%";
  container.style.paddingTop = "100px";
  container.style.margin = "0 auto";


  let row = document.querySelector(".row");
  row.style.border = "2px solid";
  row.style.borderRadius = "10px";
  row.style.backgroundColor = "white";

  // temperature color will change
  if (parseFloat(currentTemp) < 40) {
    tempHTML.style.color = "blue";
  } else if (parseFloat(currentTemp) > 90) {
    tempHTML.style.color = "red";
  } else tempHTML.style.color = "black";
};
