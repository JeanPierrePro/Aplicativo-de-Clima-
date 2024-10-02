import React, { useState, useEffect } from 'react';
import './styles/App.css';
import WeatherDisplay from './components/WeatherDisplay';
import { getWeatherData } from './services/weatherApi';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeatherData(latitude, longitude);
          },
          (error) => {
            console.error("Erro de geolocalização:", error);
            setError(`Erro de geolocalização: ${error.message}`);
          }
        );
      } else {
        setError("Geolocalização não é suportada pelo seu navegador.");
      }
    };

    getUserLocation();
  }, []);

  const fetchWeatherData = async (lat, lon) => {
    try {
      const data = await getWeatherData(lat, lon);
      setWeatherData(data);
    } catch (error) {
      console.error('Erro detalhado:', error);
      setError(`Erro ao buscar dados do clima: ${error.message}`);
    }
  };

  return (
    <div className="App">
      <h1>Aplicativo de Clima</h1>
      {error && <p className="error">{error}</p>}
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
}

export default App;