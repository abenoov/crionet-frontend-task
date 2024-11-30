import React, { useState } from 'react';
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
  const [searchedText, setSearchedText] = useState<string>('');
  const { loading, error, data } = useQuery<CountriesData>(GET_ALL_COUNTRIES);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const filteredCountries = data?.countries
    ? data.countries.filter((country) => {
        const lowerCaseKeyword = searchedText.toLowerCase();

        return (
          country.name.toLowerCase().includes(lowerCaseKeyword) ||
          country.capital?.toLowerCase().includes(lowerCaseKeyword) ||
          country.languages.some((lang) => lang.name.toLowerCase().includes(lowerCaseKeyword))
        );
      })
    : [];

  return (
    <>
      <QueryPanel searchedText={searchedText} setSearchedText={setSearchedText} />
      <div className="grid grid-cols-3 gap-4">
        {filteredCountries.map((country) => (
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
