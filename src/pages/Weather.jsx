import { useState, useEffect } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const locationUrl = `http://dataservice.accuweather.com/locations/v1/search?q=manhattan&apikey=${import.meta.env.VITE_ACCUWEATHER_API_KEY}`;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Get Location Key
        const locationResponse = await fetch(locationUrl);
        const locationData = await locationResponse.json();
        const locationKey = locationData[0]?.Key;

        if (!locationKey) throw new Error("Location key not found");

        // Get Weather Data
        const weatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${import.meta.env.VITE_ACCUWEATHER_API_KEY}`;
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();
        setWeather(weatherData[0]); // Store weather data

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []); // Run once when component mounts

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">NYC Local Weather</h1>
      
      {loading && <p className="text-center text-gray-600">Loading weather...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      {weather && (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">{weather.WeatherText}</h2>
          <p className="text-gray-500">Temperature: {weather.Temperature.Imperial.Value}°F</p>
          
        </div>
      )}
    </div>
  );
};

export default Weather;
