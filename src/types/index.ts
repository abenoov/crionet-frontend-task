export interface ICountry {
  name: string;
  capital: string;
  emoji: string;
  code: string;
  continent?: {
    name: string;
  };
  currencies: string[];
  languages: { name: string }[];
}

export interface IWeatherData {
  temperature: number;
  weather: string;
  icon: string;
}
