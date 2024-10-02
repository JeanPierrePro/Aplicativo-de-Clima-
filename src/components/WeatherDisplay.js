import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return <p>Carregando...</p>;

  return (
    <div>
      <h2>{weatherData.name}</h2>
      <p>Temperatura: {weatherData.main.temp}°C</p>
      <p>Condição: {weatherData.weather[0].description}</p>
      <p>Umidade: {weatherData.main.humidity}%</p>
      <p>Velocidade do vento: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;