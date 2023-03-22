import React from "react"
import DateForm from "./DateForm"

export default function WeatherData(props){
    return(
<div className="container">
  <div className="main">
    <h1>{props.data.city}</h1>
    <h2>
      <DateForm date={props.data.date} />
    </h2>
    <h3></h3>
    <div className="temp-container">
      <img src={props.data.icon} alt={props.data.description} width="100px" />
      <span className="temperature">
        {Math.round(props.data.temperature)}
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
      <p className="conditions">{props.data.description}</p>
      <p className="windspeed">Wind speed: {Math.round(props.data.wind)} km/h</p>
      <p className="humidity">Humidity: {props.data.humidity}%</p>
      <p className="temperature-range">
        Min <span className="min">{Math.round(props.data.min)}</span>° C / Max{" "}
        <span className="max"> {Math.round(props.data.max)}</span>° C
      </p>
    </div>
    <div></div>
  </div>
</div>
)}