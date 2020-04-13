export interface All {
  cases: number;
  deaths: number;
  recovered: number;
  updated: number;
  active: number;
}
export interface Country {
  country: string;
  countryInfo: {
    _id: number | null;
    latitude: number;
    longitude: number;
    flag: string;
    iso3: string | null;
    iso2: string | null;
  };
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  updated: number;
  tests: number;
  testsPerOneMillion: number;
}
export interface State {
  state: string;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  active: number;
}
export interface Historical {
  country: string;
  province: string | null;
  timeline: {
    cases: object;
    deaths: object;
  };
}
export interface HistoricalCountry {
  country: string;
  timeline: {
    cases: object;
    deaths: object;
  };
}
export interface Jhucsse {
  country: string;
  province: Array<string> | string | null;
  updatedAt: Date;
  stats: {
    confirmed: number;
    deaths: number;
    recovered: number;
  };
  coordinates: {
    latitude: string;
    longitude: string;
  };
}
export interface JhucsseCounties {
  country: string;
  province: string | null;
  updatedAt: Date;
  county: string;
  stats: {
    confirmed: number;
    deaths: number;
    recovered: number;
  };
  coordinates: {
    latitude: string;
    longitude: string;
  };
}
export interface CountrySort {
  cases: number;
  todayCases: number;
  deaths: number;
  recovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
}
