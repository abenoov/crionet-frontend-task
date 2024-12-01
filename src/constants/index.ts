export enum SORT_OPTIONS_ENUM {
  ASC = 'asc',
  DESC = 'desc',
}

export const CONTINENTS = [
  { value: '', label: 'All Continents' },
  { value: 'Africa', label: 'Africa' },
  { value: 'Antarctica', label: 'Antarctica' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'North America', label: 'North America' },
  { value: 'Oceania', label: 'Oceania' },
  { value: 'South America', label: 'South America' },
];

export const SORT_OPTIONS = [
  { value: SORT_OPTIONS_ENUM.ASC, label: 'A → Z' },
  { value: SORT_OPTIONS_ENUM.DESC, label: 'Z → A' },
];
