const inputClasses = {
  medium:
    'bg-[#161616] text-base font-extralight text-white py-2 px-4 rounded-md focus:outline-none focus:ring-1 focus:ring-white',
  small:
    'bg-[#161616] text-sm font-extralight text-white py-1 px-3 rounded-md focus:outline-none focus:ring-1 focus:ring-white',
};

interface SearchProps extends React.HTMLProps<HTMLInputElement> {
  variant?: 'medium' | 'small';
  placeholder?: string;
  className?: string;
}

const Search = ({ variant = 'medium', className = '', ...rest }: SearchProps) => {
  return <input className={`${inputClasses[variant]} ${className}`} {...rest} />;
};

export default Search;
