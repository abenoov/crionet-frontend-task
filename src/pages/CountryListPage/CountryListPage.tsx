import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { GET_ALL_COUNTRIES } from '../../graphql/queries';

import QueryPanel from './QueryPanel';

interface Country {
  name: string;
  capital: string;
  emoji: string;
  code: string;
  continent?: {
    name: string;
  };
  languages: { name: string }[];
}

interface CountriesData {
  countries: Country[];
}

const CountryListPage: React.FC = () => {
  const [searchedText, setSearchedText] = useState<string>('');
  const [selectedContinent, setSelectedContinent] = useState<string>('');
  const [selectedSortOrder, setSelectedSortOrder] = useState<string>('asc');

  const { loading, error, data } = useQuery<CountriesData>(GET_ALL_COUNTRIES);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const filteredCountries = data?.countries.filter((country) => {
    const lowerCaseKeyword = searchedText.toLowerCase();

    const searchedItem =
      country.name.toLowerCase().includes(lowerCaseKeyword) ||
      country.capital?.toLowerCase().includes(lowerCaseKeyword) ||
      country.languages.some((lang) => lang.name.toLowerCase().includes(lowerCaseKeyword));

    const filteredContinent =
      selectedContinent === '' || country.continent?.name === selectedContinent;

    return searchedItem && filteredContinent;
  });

  const sortedCountries = filteredCountries?.sort((a, b) => {
    if (selectedSortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    }
    return b.name.localeCompare(a.name);
  });

  return (
    <>
      <QueryPanel
        searchedText={searchedText}
        setSearchedText={setSearchedText}
        selectedContinent={selectedContinent}
        setSelectedContinent={setSelectedContinent}
        selectedSortOrder={selectedSortOrder}
        setSelectedSortOrder={setSelectedSortOrder}
      />
      <div className="grid grid-cols-3 gap-4">
        {sortedCountries?.map((country) => (
          <div
            key={country.name}
            className="w-full rounded-lg border-[#262626b3] border-solid border flex flex-col bg-[#161616] p-4"
          >
            <Link to={`/country/${country.code}`} className="text-[#fff] hover:underline">
              {country.name} ({country.code}) {country.emoji}
            </Link>
            <span className="text-[#a3a3a3] font-extralight mb-2">{country.continent?.name}</span>
            <span className="text-[#a3a3a3] font-extralight">Capital: {country.capital}</span>
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
