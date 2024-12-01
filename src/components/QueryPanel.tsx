import React from 'react';

import SearchInput from './SearchInput';
import Select from './Select';

import { CONTINENTS, SORT_OPTIONS, SORT_OPTIONS_ENUM } from '../constants';

interface Props {
  searchedText: string;
  selectedContinent: string;
  selectedSortOrder: string;
  setSearchedText: (text: string) => void;
  setSelectedContinent: (continent: string) => void;
  setSelectedSortOrder: (order: SORT_OPTIONS_ENUM) => void;
}

const QueryPanel: React.FC<Props> = ({
  searchedText,
  selectedContinent,
  selectedSortOrder,
  setSearchedText,
  setSelectedContinent,
  setSelectedSortOrder,
}) => (
  <div className="mb-6 flex items-center gap-2">
    <SearchInput
      placeholder="Search by country name, language, capital"
      className="sm:w-full"
      value={searchedText}
      onChange={(e) => setSearchedText(e.target.value)}
    />
    <Select
      options={CONTINENTS}
      value={selectedContinent}
      onChange={(e) => setSelectedContinent(e.target.value)}
      className="w-40"
    />
    <Select
      options={SORT_OPTIONS}
      value={selectedSortOrder}
      onChange={(e) => setSelectedSortOrder(e.target.value as SORT_OPTIONS_ENUM)}
    />
  </div>
);

export default QueryPanel;
