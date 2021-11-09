import axios from "axios"
import { useRef, useState } from "react";
const WeatherApi =()=>{
    const [loading,setLoading] = useState(false)
    const [weatherData,setWeatherData] = useState(null);
    const city = useRef('')
    const apiCall =async ()=>{
      
    
        if((city.current.value).length>0){
            setLoading(true)
            const response = await axios.get("https://www.metaweather.com/api/location/search/?query="+city.current.value);
            const response123 = await axios.get("https://www.metaweather.com/api/location/"+response.data[0].woeid);
            setLoading(false)
            setWeatherData(response123.data.consolidated_weather)
            console.log(response123);
           
        }else{
            alert("Enter city name")
        }
    }
    return <div>
         <label >Search the site:</label>
            <input ref={city}  type="search" id="site-search" name="q"
                aria-label="Search through site content"/>
    <button onClick={()=>apiCall()}>Search</button>
    {weatherData?
    weatherData.map((item)=>{
        return <div key ={item.id} style={{margin:20,backgroundColor:"grey",padding:10}}>
                <div> Air Pressure: {item.air_pressure}</div>
                <div> Weather State Name: {item.weather_state_name}</div>
                <div> Wind Direction Compass: {item.wind_direction_compass}</div>
                <div> Humidity: {item.humidity}</div>
                <br/>
            </div>
    })
    
    :null}
    </div>
}

export default WeatherApi;