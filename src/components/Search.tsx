const inputClasses = {
  medium:
    'bg-[#161616] text-base font-extralight text-white py-2 px-4 rounded-md focus:outline-none focus:ring-1 focus:ring-white',
  small:
    'bg-[#161616] text-sm font-extralight text-white py-1 px-3 rounded-md focus:outline-none focus:ring-1 focus:ring-white',
};

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'medium' | 'small';
  placeholder?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ variant = 'medium', className = '', ...rest }) => {
  return <input className={`${inputClasses[variant]} ${className}`} {...rest} />;
};

export default Search;
