import { useState } from "react"
import SearchBox from "./assets/SearchBox"
import InfoBox from "./infoBox"


export default function WeatherApp(){
  let [weatherInfo,setWeatherInfo] = useState({
    city: "Lahore",
    feelsLike: 33.57,
    humidity: 24,
    temp: 34.99,
    temp_max: 36.06,
    temp_min: 34.99,
    weather: "clear sky",
  });

  let updateInfo = (Newinfo) =>{
    setWeatherInfo(Newinfo);
  };
    return(
        <div style={{textAlign : "center"}}>
            <h1>Weather App by Hammad</h1>
            <SearchBox updateInfo ={updateInfo}/>
            <InfoBox info = {weatherInfo}/>
            </div>
    )
}