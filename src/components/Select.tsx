interface Option {
  value: string;
  label: string;
}

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
}

const Select: React.FC<Props> = ({
  className,
  options,
  ...rest
}) => (
  <select className={`bg-[#161616] text-base font-extralight h-[40px] py-2 px-4 rounded-md focus:outline-none focus:ring-1 focus:ring-white ${className}`} {...rest}>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default Select;
