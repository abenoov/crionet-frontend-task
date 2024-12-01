import { Link } from 'react-router-dom';

import { ICountry } from '../types';

const CountryCard: React.FC<{ country: ICountry }> = ({ country }) => (
  <Link to={`/country/${country.code}`} className="bg-[#161616] rounded-md shadow-md p-4 flex justify-between">
    <div className="w-2/3">
      <h3 className="text-xl font-semibold">{country.name}</h3>
      <p className="text-[#a3a3a3] font-extralight mb-2">{country.continent?.name}</p>
      <p className="text-[#a3a3a3] font-extralight">Capital: {country.capital}</p>
      <p className="text-[#a3a3a3] font-extralight">
        Languages: {country.languages.map((lang) => lang.name).join(', ')}
      </p>
    </div>
    <div className="w-1/3 text-8xl max-lg:text-7xl max-md:text-4xl text-center">{country.emoji}</div>
  </Link>
);

export default CountryCard;
