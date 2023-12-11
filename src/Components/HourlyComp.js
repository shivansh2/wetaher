import React from "react";
import './HourlyComp.css'
const HourlyComp = (props) => {
  const { time, temp, iconurl } = props;
  return (
    <div className="Hourly-Comp-container">
      <p className="Hourly-time-comp1">{time}</p>
      <img className="HourlyComp-img" src={iconurl} alt="" />
      <p>{temp}°C</p>
    </div>
  );
};

export default HourlyComp;
