import React from 'react';

import Search from '../../components/Search';
import Select from '../../components/Select';

import { CONTINENTS } from '../../constants/continents';

interface QueryPanelProps {
  searchedText: string;
  selectedContinent: string;
  setSearchedText: (text: string) => void;
  setSelectedContinent: (continent: string) => void;
}

const QueryPanel: React.FC<QueryPanelProps> = ({
  searchedText,
  setSearchedText,
  selectedContinent,
  setSelectedContinent,
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
    </div>
  );
};

export default QueryPanel;
