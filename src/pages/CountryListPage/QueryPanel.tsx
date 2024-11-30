import React from 'react';
import Search from '../../components/Search';

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
        className="w-full"
        value={searchedText}
        onChange={(e) => setSearchedText(e.target.value)}
      />
    </div>
  );
};

export default QueryPanel;
