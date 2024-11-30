const selectClasses = {
  medium:
    'bg-[#161616] text-base font-extralight h-[40px] py-2 px-4 rounded-md focus:outline-none focus:ring-1 focus:ring-white',
  small:
    'bg-[#161616] text-sm font-extralight text-white py-1 px-3 rounded-md focus:outline-none focus:ring-1 focus:ring-white appearance-none',
};

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  variant: 'medium' | 'small';
  options: Option[];
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  variant = 'medium',
  className = '',
  options,
  ...rest
}) => {
  return (
    <select className={`${selectClasses[variant]} ${className}`} {...rest}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
