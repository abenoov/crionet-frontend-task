import { gql } from '@apollo/client';

export const GET_ALL_COUNTRIES = gql`
  query GetAllCountries {
    countries {
      name
      capital
      emoji
      code
      continent {
        name
      }
      languages {
        name
      }
    }
  }
`;

export const GET_COUNTRY_DETAILS = gql`
  query GetCountryDetails($code: ID!) {
    country(code: $code) {
      name
      capital
      continent {
        name
      }
      languages {
        name
      }
      currencies
    }
  }
`;
