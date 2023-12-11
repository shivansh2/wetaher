import React from "react";
import { FaCloudSunRain } from "react-icons/fa6";
import { FaList } from "react-icons/fa6";
import "../Components/Navbar.css";
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <div className="main-container">
        <div className="nav-component">
        <div style={{textAlign:"center"}}>
            <img src={"Logo.png"} alt=" " className="navbar-icon" style={{width: "50px"}}/>
            <p style={{fontSize : '12px'}}>WeatherBot360</p>
          </div>
          <div style={{textAlign:"center"}}>
            <FaCloudSunRain className="navbar-icon" style={{size: "50" , color : "#4e6f9c"}}/>
            <p>Weather</p>
          </div>
          <div style={{textAlign:"center"}}>
            <FaList className="navbar-icon"/>
            <p>Cities</p>
          </div>
          <div style={{textAlign:"center"}}>
            <IoChatbubblesSharp className="navbar-icon" />
            <p>ChatBot</p>
          </div>
          <div style={{textAlign:"center"}}>
            <FaMicrophone className="navbar-icon" />
            <p>Voice Bot</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
