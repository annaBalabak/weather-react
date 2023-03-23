import React from "react";
import DateForm from "./DateForm";
import WeatherTemperature from "./WeatherTemperature";
import "./App.css";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="container">
        <h1>{props.data.city}</h1>
        <h2>
          <DateForm date={props.data.date} />
        </h2>
        <h3>
        <WeatherTemperature
          celsius={props.data.temperature}
          icon={props.data.icon}
          description={props.data.description}
        /> </h3>
        <div className="discription mt-3">
          <p className="conditions">{props.data.description}</p>
          <p className="windspeed">
            Wind speed: {Math.round(props.data.wind)} km/h
          </p>
          <p className="humidity">Humidity: {props.data.humidity}%</p>
          <p className="temperature-range">
            Min <span className="min">{Math.round(props.data.min)}</span>° C /
            Max <span className="max"> {Math.round(props.data.max)}</span>° C
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
