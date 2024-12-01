import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams, useNavigate } from 'react-router-dom';

import Page from '../layout/Page';
import Spinner from '../components/Spinner';

import { GET_COUNTRY_DETAILS } from '../graphql/queries';
import { getWeatherByCapital } from '../api/weather';
import { ICountry, IWeatherData } from '../types';

interface ICountryData {
  country: ICountry;
}

const CountryDetailsPage: React.FC = () => {
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);
  const [isWeatherLoading, setIsWeatherLoading] = useState<boolean>(false);

  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();

  const { loading, error, data } = useQuery<ICountryData>(GET_COUNTRY_DETAILS, {
    variables: { code },
    skip: !code,
  });

  useEffect(() => {
    const fetchWeather = async () => {
      if (data?.country?.capital) {
        try {
          setIsWeatherLoading(true);
          const response = await getWeatherByCapital(data.country.capital);
          setWeatherData(response);
          setIsWeatherLoading(false);
        } catch (error) {
          setIsWeatherLoading(false);
          console.error(error);
        }
      }
    };
    fetchWeather();
  }, [data]);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <Page isLoading={loading}>
      <button className="mb-2 px-6 py-2 bg-[#161616] text-white rounded-lg w-full text-left" onClick={() => navigate('/')}>
        {`< `}Back to countries
      </button>
      {data && (
        <div className="flex p-6 bg-[#161616] text-white rounded-lg justify-between">
          <div className="w-2/3">
            <h1 className="text-2xl font-bold mb-4">{data.country.name}</h1>
            <p>Capital: {data.country.capital}</p>
            <p>Continent: {data.country.continent?.name}</p>
            <p>
              Languages: {data.country.languages.map((lang: { name: string }) => lang.name).join(', ')}
            </p>
            <p>Currencies: {data.country.currencies.join(', ')}</p>
          </div>

          <div className="w-1/3">
            {weatherData && !isWeatherLoading ? (
              <>
                <h2 className="text-xl font-bold">Current Weather in {data.country.capital}</h2>
                <p>Temperature: {weatherData.temperature}°C</p>
                <p>Condition: {weatherData.weather}</p>
                <img src={weatherData.icon} alt="Weather icon" />
              </>
              ) : (
              <>{isWeatherLoading && <Spinner className="h-10 mt-6" />}</>
            )}

          </div>
        </div>
      )}
    </Page>
  );
};

export default CountryDetailsPage;
