import { ICountry } from "../types";
import { SORT_OPTIONS_ENUM } from "../constants";

interface IFilterAndSort {
  countryList: ICountry[];
  filter: {
    searchedText: string;
    selectedContinent: string;
  };
  sort: SORT_OPTIONS_ENUM;
}

export const getFilteredAndSortedCountryList = ({ countryList, filter, sort}: IFilterAndSort): ICountry[] => {
  const filteredCountries = countryList.filter((country) => {
    const lowerCaseKeyword = filter.searchedText.toLowerCase();

    const searchedItem =
      country.name.toLowerCase().includes(lowerCaseKeyword) ||
      country.capital?.toLowerCase().includes(lowerCaseKeyword) ||
      country.languages.some((lang) => lang.name.toLowerCase().includes(lowerCaseKeyword));

    const filteredContinent =
      filter.selectedContinent === '' || country.continent?.name === filter.selectedContinent;

    return searchedItem && filteredContinent;
  });

  const sortedCountries = filteredCountries.sort((a, b) => {
    if (sort === SORT_OPTIONS_ENUM.ASC) {
      return a.name.localeCompare(b.name);
    }
    return b.name.localeCompare(a.name);
  });

  return sortedCountries;
}
