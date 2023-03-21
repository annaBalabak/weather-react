import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./Search.css";
import DateForm from "./DateForm";

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
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      min: response.data.main.temp_min,
      max: response.data.main.temp_max,
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
        <div className="row">
          <div className="col-6">
            <input
              className="input form-control shadow-sm"
              type="search"
              placeholder="Enter a city.."
              onChange={updateCity}
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
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div className="container">
          <div className="main">
            <h1>{city}</h1>
            <h2><DateForm date={weather.date} /></h2>
            <h3></h3>
            <div className="temp-container">
              <img src={weather.icon} alt={weather.description} width="100px" />
              <span className="temperature">
                {Math.round(weather.temperature)}
              </span>{" "}
              <span className="units">
                {" "}
                <a className="active" href="#">
                  ° C
                </a>{" "}
                | <a href="#">° F</a>{" "}
              </span>
            </div>
            <div className="discription mt-3">
              <p className="conditions">{weather.description}</p>
              <p className="windspeed">
                Wind speed: {Math.round(weather.wind)} km/h
              </p>
              <p className="humidity">Humidity: {weather.humidity}%</p>
              <p className="temperature-range">
                Min <span className="min">{Math.round(weather.min)}</span>° C /
                Max <span className="max"> {Math.round(weather.max)}</span>° C
              </p>
            </div>
            <div></div>
          </div>
        </div>
        ;
      </div>
    );
  } else {
    return form;
  }
}
