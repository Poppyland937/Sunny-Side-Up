function submitSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityPlace = document.querySelector("#weather-city");
  let city = (cityPlace.innerHTML = searchInput.value);
  fetchWeather(city);
}
function fetchWeather(city) {
  let apiKey = "c48264o7b5ff7a9343004et42e6b4c41";
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(url).then(displayTemperature);
  console.log(url);
}
function displayTemperature(response) {
  let temperatureNumber = document.querySelector("#weather-temperature");
  let temperature = Math.round(response.data.temperature.current);

  temperatureNumber.innerHTML = temperature;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", submitSearch);
