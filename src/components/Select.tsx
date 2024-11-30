const selectClasses = {
  medium:
    'bg-[#161616] text-base font-extralight h-[40px] py-2 px-4 rounded-md focus:outline-none focus:ring-1 focus:ring-white',
  small:
    'bg-[#161616] text-sm font-extralight text-white py-1 px-3 rounded-md focus:outline-none focus:ring-1 focus:ring-white appearance-none',
};

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  variant: 'medium' | 'small';
  placeholder?: string;
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  variant = 'medium',
  className = '',
  placeholder,
  children,
  ...rest
}) => {
  return (
    <select className={`${selectClasses[variant]} ${className}`} {...rest}>
      <option>opt1</option>
      <option>opt2</option>
      <option>opt3</option>
    </select>
  );
};

export default Select;
