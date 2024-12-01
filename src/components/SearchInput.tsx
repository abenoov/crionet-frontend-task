import searchIcon from '../assets/search.svg';

const SearchInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className, ...rest }) => (
  <div className="relative w-full">
    <input className={`bg-[#161616] text-base font-extralight text-white py-2 px-4 rounded-md focus:outline-none focus:ring-1 focus:ring-white placeholder-[#a3a3a3] ${className}`} {...rest} />
    <img src={searchIcon} alt="Search icon" className="pointer-events-none absolute end-3 top-3" />
  </div>
)

export default SearchInput;
