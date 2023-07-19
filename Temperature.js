import React, { useEffect, useState } from 'react'

import "./style.css"
import WeatherCard from './WeatherCard';
const Temperature = () => {
 const[tempInfo,setTempInfo]=useState({});
 const[searchValue,setSearchValue]=useState("Tirupati");

 const getWeatherInfo = async () => {
    try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=6f3c6c983fdacbc0d5c9c5e1184ae14d`;
  
        let res = await fetch(url);
        let data = await res.json();
       
        const { temp, humidity, pressure } = data.main;
        const { main: weathermood } = data.weather[0];
        const { name } = data;
        const { speed } = data.wind;
        const { country, sunset } = data.sys;
  
        const myNewWeatherInfo = {
          temp,
          humidity,
          pressure,
          weathermood,
          name,
          speed,
          country,
          sunset,
        };
  
        setTempInfo(myNewWeatherInfo);
      } catch (error) {
        console.log(error);
      }
  };

useEffect(()=>{},[])


  return (
    <>
    
    <div className='wrap'>
        <div className='search'>
            <input 
            type='search'
               placeholder='search...'
                  
               id="search"
               className='searchTerm'
               value={searchValue}
               onChange={(e)=>setSearchValue(e.target.value)}
            />
            <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
        </div>
    </div>
       {/* out temp */}

      <WeatherCard tempInfo={tempInfo}  />
    </>
  )
}

export default Temperature