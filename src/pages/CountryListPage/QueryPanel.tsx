import React from 'react';
import Search from '../../components/Search';
import Select from '../../components/Select';

interface QueryPanelProps {
  searchedText: string;
  setSearchedText: (text: string) => void;
}

const QueryPanel: React.FC<QueryPanelProps> = ({ searchedText, setSearchedText }) => {
  return (
    <div className="mb-6">
      <Search
        variant="medium"
        placeholder="Search by country name, language, capital"
        className="w-1/2 mr-2"
        value={searchedText}
        onChange={(e) => setSearchedText(e.target.value)}
      />
      <Select variant="medium" placeholder="Select" className="w-32" />
    </div>
  );
};

export default QueryPanel;
