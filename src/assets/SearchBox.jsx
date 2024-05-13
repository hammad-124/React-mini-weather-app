import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);

    let API_URL ="https://api.openweathermap.org/data/2.5/weather";
    let API_URL_KEY ="5c3f417ba89306fd8168278cdbe40041";

   let getWeatherInfo = async()=>{
    try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_URL_KEY}&units=metric`);
    let jsonResponse = await response.json();
    let result = {
        city : city,
        temp :jsonResponse.main.temp,
        temp_min : jsonResponse.main.temp_min,
        temp_max : jsonResponse.main.temp_max,
        humidity : jsonResponse.main.humidity,
        feelsLike : jsonResponse.main.feels_like,
        weather : jsonResponse.weather[0].description,
    }
    console.log(result);
    return result;
    } catch(err){
        throw err;
    };
    
   };

    let handleChange = (evt) =>{
       setCity(evt.target.value);
    };

    let handleSubmit=async (evt) =>{
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let Newinfo = await getWeatherInfo();
            updateInfo(Newinfo);
        }catch(err){
     setError(true);
        };
  
    };

    return(
        <div className='SearchBox'>
           
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" value={city} variant="outlined" onChange={handleChange} required/>
            <br /><br />
            <Button variant="contained" type='submit'> Search</Button>
            {error && <p style={{color :"red"}}>No such place exist!</p>}
            </form>
        </div>
    )
}