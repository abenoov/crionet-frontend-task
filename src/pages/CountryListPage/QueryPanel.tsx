import React from 'react';
import Search from '../../components/Search';
import Select from '../../components/Select';
import { CONTINENTS, SORT_OPTIONS } from '../../constants/constants';

interface QueryPanelProps {
  searchedText: string;
  selectedContinent: string;
  selectedSortOrder: string;
  setSearchedText: (text: string) => void;
  setSelectedContinent: (continent: string) => void;
  setSelectedSortOrder: (order: string) => void;
}

const QueryPanel: React.FC<QueryPanelProps> = ({
  searchedText,
  selectedContinent,
  selectedSortOrder,
  setSearchedText,
  setSelectedContinent,
  setSelectedSortOrder,
}) => {
  return (
    <div className="mb-6 flex items-center space-x-4">
      <Search
        variant="medium"
        placeholder="Search by country name, language, capital"
        className="w-1/2"
        value={searchedText}
        onChange={(e) => setSearchedText(e.target.value)}
      />
      <Select
        variant="medium"
        options={CONTINENTS}
        value={selectedContinent}
        onChange={(e) => setSelectedContinent(e.target.value)}
        className="w-32"
      />
      <Select
        variant="medium"
        options={SORT_OPTIONS}
        value={selectedSortOrder}
        onChange={(e) => setSelectedSortOrder(e.target.value)}
        className="w-32"
      />
    </div>
  );
};

export default QueryPanel;
