const url = "https://restcountries.com/v3.1/all";
const result = fetch(url);
result
  .then((data) => data.json())
  .then((ele) => {
    for (i = 0; i < ele.length; i++) {
      const division = document.createElement("div");
      //division.innerHTML=`<div class="row row-cols-1 row-cols-md-3 g-4">
      division.innerHTML = `<div class="row row-cols-1 row-cols-md-3">
<div class="container">
    <div class="card">
<div class="card-header">${ele[i].name.common}</div>
<img src="${ele[i].flags.png}" class="card-img-top" alt="country flag"></img>
  <div class="card-body">
    <h5 class="card-title">Capital:${ele[i].capital}</h5>
    <h5 class="card-title">Region:${ele[i].region}</h5>
    <h5 class="card-title">Latlng:${ele[i].latlng}</h5>
    <h5 class="card-title">Population:${ele[i].population}</h5>
    <h5 class="card-title">Country Code:${ele[i].cca3}</h5>
    <button class="btn btn-primary" onclick="getWeatherData('${ele[i].name.common}')">Click for Weather</button>
    </div></div></div>
    </div>`;
      document.body.append(division);
    }
  });
  function getWeatherData(restCountryName) {
    var apiKey = "ddf2e027fece19f56ba4e75236c5c316";
  var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${restCountryName}&appid=${apiKey}`;

  fetch(weatherUrl)
    .then((response) => response.json())
    .then((weatherData) => {
      var weatherCountryName = weatherData.name;

      if (weatherCountryName === restCountryName) {
        alert(
          `Weather in ${weatherData.name}: ${weatherData.main.temp_min} min:deg&c && ${weatherData.main.temp_max} max:deg&c`
        );
      } else {
        alert("Country names do not match.");
      }
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      alert`Error fetching weather data.`;
    });
}

