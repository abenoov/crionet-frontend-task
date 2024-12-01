import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { GET_COUNTRY_DETAILS } from '../../graphql/queries';

import { getWeatherByCapital } from '../../api/weather';

interface WeatherData {
  temperature: number;
  weather: string;
  icon: string;
}

const CountryDetailsPage: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const { code } = useParams<{ code: string }>();

  const { loading, error, data } = useQuery(GET_COUNTRY_DETAILS, {
    variables: { code },
    skip: !code,
  });

  useEffect(() => {
    const fetchWeather = async () => {
      if (data?.country?.capital) {
        try {
          const response = await getWeatherByCapital(data.country.capital);
          setWeatherData(response);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchWeather();
  }, [data]);

  if (loading) return <div>Loading country details...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const languages: string = data.country.languages
    .map((lang: { name: string }) => lang.name)
    .join(', ');

  return (
    <div className="p-6 bg-[#161616] text-white rounded-lg">
      <h1 className="text-2xl font-bold mb-4">{data.country.name}</h1>
      <p>Capital: {data.country.capital}</p>
      <p>Continent: {data.country.continent.name}</p>
      <p>Languages:{languages}</p>
      <p>Currencies: {data.country.currencies.join(', ')}</p>

      {weatherData ? (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Current Weather in {data.country.capital}</h2>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Condition: {weatherData.weather}</p>
          <img src={weatherData.icon} alt="Weather icon" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CountryDetailsPage;
