import { useState } from 'react'

import './App.css'

import clear_icon from "./Assets/clear.png"
import cloud_icon from "./Assets/cloud.png"
import drizzle_icon from "./Assets/drizzle.png"
import humidity_icon from "./Assets/humidity.png"
import rain_icon from "./Assets/rain.png"
import search_icon from "./Assets/search.png"
import snow_icon from "./Assets/snow.png"
import wind_icon from "./Assets/wind.png"

function App() {
  const weatherApp = () => {
    let api_key = "2aa56d5e0c504743212e2bd06366922b";
  
    const [wicon, setwicon] = useState(cloud_icon);
  
    const search = async () => {
      const element = document.getElementsByClassName("cityinput")
      if (element[0].value === "") {
        return 0;
      }
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=${element[0].value}&units=Metric&appid=${api_key}`;
  
      let response = await fetch(url);
      let data = await response.json();
      const humidity = document.getElementsByClassName("humidity_percent");
      const wind = document.getElementsByClassName("wind_rate");
      const tempreture = document.getElementsByClassName("weather_temp");
      const location = document.getElementsByClassName("weather_locatin");
  
      humidity[0].innerHTML = data.main.humidity + "%";
      wind[0].innerHTML = Math.floor(data.wind.speed) + "km/h";
      tempreture[0].innerHTML = Math.floor(data.main.temp) + "°C";
      location[0].innerHTML = data.name;
  
      if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
        setwicon(clear_icon);
      }
      else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
        setwicon(cloud_icon);
      }
      else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
        setwicon(drizzle_icon);
      }
      else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
        setwicon(drizzle_icon);
      }
      else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
        setwicon(rain_icon);
      }
      else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
        setwicon(rain_icon);
      }
      else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
        setwicon(snow_icon);
      }
      else {
        setwicon(clear_icon);
      }
  
    }
  
  
  
  
    return (
      <div className="App">
        <div className="main">
          <input className="cityinput" type="text" placeholder='Search' />
          <div className="icon" onClick={() => { search() }}>
            <img src={search_icon} alt="Search" />
  
          </div>
        </div>
        <div className="weather_image">
          <img src={wicon} alt="" />
        </div>
        <div className="temp">24ºC</div>
        <div className="weather_location">London</div>
        <div className="datacontainer">
          <div className="element">
            <img src={humidity_icon} alt="" className='icon1' />
            <div className="data">
              <div className="humidity_perchentage">64%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={wind_icon} alt="" className='icon1' />
            <div className="data">
              <div className="wind_rate">20 km/h</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
  



  export default App;
