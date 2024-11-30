import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_COUNTRIES } from '../../graphql/queries';
import QueryPanel from './QueryPanel';

interface Language {
  name: string;
}

interface Country {
  name: string;
  capital: string;
  emoji: string;
  continent?: {
    name: string;
  };
  languages: Language[];
}

interface CountriesData {
  countries: Country[];
}

const CountryListPage: React.FC = () => {
  const {
    loading: loadingCountries,
    error: errorCountries,
    data: countriesData,
  } = useQuery<CountriesData>(GET_ALL_COUNTRIES);

  if (loadingCountries) {
    return <div>Loading...</div>;
  }

  if (errorCountries) {
    return <div>Error: {errorCountries.message}</div>;
  }

  return (
    <>
      <QueryPanel />
      <div className="grid grid-cols-3 gap-4">
        {countriesData?.countries.map((country) => (
          <div
            key={country.name}
            className="w-full rounded-lg border-[#262626b3] border-solid border flex flex-col bg-[#161616] p-4"
          >
            <span className="text-[#fff]">
              {country.capital}, {country.name} {country.emoji}
            </span>
            <span className="text-[#a3a3a3] font-extralight mb-2">{country.continent?.name}</span>
            <span className="text-[#a3a3a3] font-extralight">
              Languages: {country.languages.map((lang) => lang.name).join(', ')}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default CountryListPage;
