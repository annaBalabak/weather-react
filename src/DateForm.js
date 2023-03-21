import React from "react";

export default function DateForm(props){
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let day = days[props.date.getDay()];
let currentMonth = months[props.date.getMonth()];
let date = props.date.getDate();
let year = props.date.getFullYear();
let hours = props.date.getHours();
if (hours < 0){
hours = `0${hours}`;
}
let minutes = props.date.getMinutes();
if (minutes < 0) {
  minutes = `0${hours}`;
}
return(
    <div>
    <h2>{day}, {currentMonth} {date}, {year} </h2>
    <h3>Last updated at {hours}:{minutes}</h3>
    </div>
)
}