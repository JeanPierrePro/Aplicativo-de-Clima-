import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return <p>Carregando...</p>;

  const isRaining = weatherData.weather[0].main === 'Rain';
  const isClear = weatherData.weather[0].main === 'Clear';
  const isCloudy = weatherData.weather[0].main === 'Clouds';

  return (
    <div className="weather-display">
      {/* Nome da cidade */}
      <header className="header">
        <h1>Aplicativo de Clima</h1>
        <h2>{weatherData.name}</h2>
      </header>

      {/* Grade 2x2 para as informações climáticas */}
      <div className="grid-container">
        <div className="grid-item">
          <h3>Temperatura</h3>
          <p>{weatherData.main.temp}°C</p>
        </div>
        <div className="grid-item">
          <h3>Condição</h3>
          <p>{weatherData.weather[0].description}</p>
        </div>
        <div className="grid-item">
          <h3>Umidade</h3>
          <p>{weatherData.main.humidity}%</p>
        </div>
        <div className="grid-item">
          <h3>Velocidade do vento</h3>
          <p>{weatherData.wind.speed} m/s</p>
        </div>
      </div>

      {/* Elementos visuais baseados no clima */}
      {isRaining && (
        <div className="rain">
          <div className="drop"></div>
          <div className="drop"></div>
          <div className="drop"></div>
          <div className="drop"></div>
        </div>
      )}

      {isClear && <div className="sun"></div>}

      {isCloudy && (
        <>
          <div className="cloud small"></div>
          <div className="cloud large"></div>
        </>
      )}

      {/* Botão para atualizar ou outras ações */}
      <div className="actions">
        <button className="refresh-btn">Atualizar</button>
      </div>
    </div>
  );
};

export default WeatherDisplay;
