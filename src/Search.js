import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import WeatherData from "./WeatherData";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      min: response.data.main.temp_min,
      max: response.data.main.temp_max,
    });
  }
  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=094780c710fa4efd669f0df8c3991927&units=metric`;
    axios.get(url).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (loaded) {
    return (
      <div className="Search">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
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
                value="Search"
                class="submit form-control btn btn-primary shadow-sm"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Current City"
                className="submit-two form-control btn btn-success shadow-sm"
              />
            </div>
          </div>
        </form>
        <WeatherData data={weather} />
      </div>
    );
  } else {
    search();
    return;
  }
}
