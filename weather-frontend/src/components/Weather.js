import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to handle the form submission and fetch data for the entered city
  const fetchWeather = async (event) => {
    event.preventDefault(); // Prevent the page from refreshing when the form is submitted
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`http://localhost:8080/weather/${city}`);
      setWeatherData(response.data);
      setLoading(false);
    } catch (err) {
      setError('City not found or API error');
      setLoading(false);
    }
  };

  return (
    <div className="weather-container">
      <h1>Weather App</h1>

      {/* Search bar for city input */}
      <form onSubmit={fetchWeather} className="search-form">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="search-bar"
          required
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {/* Display loading status */}
      {loading && <div>Loading...</div>}

      {/* Display error message */}
      {error && <div className="error-message">{error}</div>}

      {/* Display weather data if available */}
      {weatherData && (
        <div className="weather-info">
          <h2>Weather in {weatherData.location.name}, {weatherData.location.country}</h2>
          <p><strong>Local Time:</strong> {weatherData.location.localtime}</p>
          <div className="weather-details">
            <div className="temp">
              <strong>Temperature:</strong> {weatherData.current.temp_c}°C
            </div>
            <div className="condition">
              <img
                src={weatherData.current.condition.icon}
                alt={weatherData.current.condition.text}
                className="weather-icon"
              />
              <span>{weatherData.current.condition.text}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
