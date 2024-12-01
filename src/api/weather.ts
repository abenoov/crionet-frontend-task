import request from './api';

interface WeatherData {
  temperature: number;
  weather: string;
  icon: string;
}

export const getWeatherByCapital = async (capital: string): Promise<WeatherData> => {
  try {
    const response = await request.get('weather', {
      params: { q: capital },
    });

    const data = response.data;

    return {
      temperature: data.main.temp,
      weather: data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    };
  } catch (error) {
    console.error('Error', error);
    throw new Error('Failed to fetch data');
  }
};
