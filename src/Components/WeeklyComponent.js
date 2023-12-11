import React from "react";
import "./WeeklyComponent.css";
const WeeklyComponent = (props) => {
  let { FutureDates, ImageIconUrl, WeatherVal, MinTemp, MaxTemp } = props;
  return (
    <div className="weeklyComponent">
      <p>{FutureDates}</p>
      <div className="weekly-component-des">
        <img src={ImageIconUrl} alt=" " />
        <p>{WeatherVal}</p>
      </div>
      <p>
        {MinTemp}°C/{MaxTemp}°C
      </p>
    </div>
  );
};

export default WeeklyComponent;
