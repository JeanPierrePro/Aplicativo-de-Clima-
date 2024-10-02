const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherData = async (lat, lon) => {
  try {
    const response = await fetch(`${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API error: ${errorData.message}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Erro detalhado na API:', error);
    throw error;
  }
};