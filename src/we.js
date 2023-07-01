import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./app.css"

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=f0839d95a02d42f396c183758231605&q=India`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
<div>
<div className="weather-box">
      {weatherData ? (
        <div >
          <h3>Weather in {weatherData.location.name}</h3>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
</div>
  );
      }

export default Weather;
