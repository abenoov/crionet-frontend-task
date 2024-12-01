import React, { useState, useMemo } from 'react';
import { useQuery } from '@apollo/client';

import { GET_ALL_COUNTRIES } from '../graphql/queries';
import Page from '../layout/Page';
import CountryCard from '../components/CountryCard';
import QueryPanel from '../components/QueryPanel';
import { ICountry } from '../types';
import { SORT_OPTIONS_ENUM } from '../constants';
import { getFilteredAndSortedCountryList } from '../helpers';

interface CountriesData {
  countries: ICountry[];
}

const CountryListPage: React.FC = () => {
  const [searchedText, setSearchedText] = useState<string>('');
  const [selectedContinent, setSelectedContinent] = useState<string>('');
  const [selectedSortOrder, setSelectedSortOrder] = useState<SORT_OPTIONS_ENUM>(
    SORT_OPTIONS_ENUM.ASC
  );

  const { loading, error, data } = useQuery<CountriesData>(GET_ALL_COUNTRIES);

  const listData = useMemo(
    () =>
      getFilteredAndSortedCountryList({
        countryList: data?.countries || [],
        filter: { searchedText, selectedContinent },
        sort: selectedSortOrder,
      }),
    [data?.countries, searchedText, selectedContinent, selectedSortOrder]
  );

  if (error) return <div>Error: {error.message}</div>;

  return (
    <Page isLoading={loading}>
      <QueryPanel
        searchedText={searchedText}
        setSearchedText={setSearchedText}
        selectedContinent={selectedContinent}
        setSelectedContinent={setSelectedContinent}
        selectedSortOrder={selectedSortOrder}
        setSelectedSortOrder={setSelectedSortOrder}
      />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
        {listData?.map((country) => <CountryCard key={country.code} country={country} />)}
      </div>
    </Page>
  );
};

export default CountryListPage;
