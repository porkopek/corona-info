import { ICountry } from '../interfaces';

export default class Country {
  country?: string;
  countryInfo:
    | {
        _id: number | null;
        latitude: number;
        longitude: number;
        flag: string;
        iso3: string | null;
        iso2: string | null;
      }
    | undefined;
  todayCases: number | undefined;
  deaths: number | undefined;
  todayDeaths: number | undefined;
  recovered: number | undefined;
  critical: number | undefined;
  deathsPerOneMillion: number | undefined;
  updated: number | undefined;
  tests: number | undefined;
  testsPerOneMillion: number | undefined;
  active: number = 0;
  cases: number = 0;
  casesPerOneMillion: number = 0;

  lethality = () => this.deaths && this.deaths / this.cases;
}
