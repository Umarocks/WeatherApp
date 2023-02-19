import './App.css';
import React, { useState } from 'react'
import axios from 'axios';

function App() {

  const [data, setdata] =  useState({})
  const [location, setlocation] = useState('')
  
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=ec3e6548b87cf91ea33b11929285ea8c`
    const searchLocation = (event) =>{
    if(event.key ==='Enter'){
      axios.get(url).then((response) => {
        setdata(response.data)
        console.log(response.data)
      })
    }
    
  }

  return (
    <>
      <div className="app">

        <div className="search">
          <input type="text" 
          value={location}
          onChange={event=> setlocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'/>
        </div>

        <div className="container">

          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
            {data.main ? <h1>{data.main.temp} °C</h1> : null }
            </div>
            <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null }
            </div>
          </div>
          
          <div className="middle">
            <div className="maxtemp">

              <h2>Min Temp</h2>             
              <p className="bold">{data.main ? <p>{data.main.temp_min}</p> : null }</p>
             
            </div>
            
            <div className="mintemp">
              <h2>Max Temp</h2>
              <p className="bold">{data.main ? <p>{data.main.temp_max}</p> : null }</p>
            </div>
          </div>

          <div className="bottom">
            <div className="feels">
              <p className='bold'>{data.main ? <p>{data.main.feels_like} °C</p> : null }</p>
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              <p className='bold'>{data.main ? <p>{data.main.humidity}% </p> : null}</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p className='bold'>{data.wind ? <p>{data.wind.speed} MPH</p> : null}</p>
              <p>Wind Speed</p>
            </div>
          </div>

        </div>
      
      </div>    
    </>
    
  );
}

export default App;


