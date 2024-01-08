import React from "react";
import "./WeatherApp.css";

import search_icon from "../Assets/search_icon.png";
import clear_icon from "../Assets/clear_icon.png";
import cloud_icon from "../Assets/cloud_icon.png";
import drizzle_icon from "../Assets/drizzle_icon.png";
import humidity_icon from "../Assets/humidity_icon.png";
import rain_icon from "../Assets/rain_icon.png";
import snow_icon from "../Assets/snow_icon.png";
import wind_icon from "../Assets/wind_icon.png";

const WeatherApp = () => {
    return (
        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="Search" />
                <div className="search-icon">
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className="weather-image">
                <img src={cloud_icon} alt="" />
            </div>
            <div className="weather-temp">24ºc</div>
            <div className="weather-location">London</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">18hm/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
  );
}   

export default WeatherApp;