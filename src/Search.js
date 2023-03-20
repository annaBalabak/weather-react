import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./Search.css";

export default function Weather() {
  const [city, setCity] = useState(" ");
  const [weather, setWeather] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=094780c710fa4efd669f0df8c3991927&units=metric`;
    axios.get(url).then(showWeather);
  }

  let form = (
    <div className="main">
      <form className="search-form" onSubmit={handleSubmit}>
        <div class="row">
          <div class="col-6">
            <input
              className="input form-control shadow-sm"
              type="search"
              placeholder="Enter a city.."
              onChange={updateCity}
            />
          </div>
          <div class="col-3">
            <input
              type="submit"
              value="Current City"
              class="submit-two form-control btn btn-success shadow-sm"
            />
          </div>
        </div>
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {Math.round(weather.wind)}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
