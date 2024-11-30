import Search from '../../components/Search';

interface QueryPanelProps {}

const QueryPanel: React.FC<QueryPanelProps> = () => {
  return (
    <div className="mb-6">
      <Search variant="medium" placeholder="Search by country name" className="w-full" />
    </div>
  );
};

export default QueryPanel;
