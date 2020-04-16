export default class Country {
  [key: string]: any;
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
  todayCases: number = 0;
  deaths: number = 0;
  todayDeaths: number = 0;
  recovered: number = 0;
  critical: number = 0;
  deathsPerOneMillion: number = 0;
  updated: number = 0;
  tests: number = 0;
  testsPerOneMillion: number = 0;
  active: number = 0;
  cases: number = 0;
  casesPerOneMillion: number = 0;
  isNewData: boolean = false;
  public get lethality() {
    return this.deaths && this.cases && (this.deaths / this.cases) * 100;
  }
  toJSON() {
    return { ...this, lethality: this.lethality };
  }
}
