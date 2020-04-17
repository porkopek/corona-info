import Country from './country';
import { CountryProps } from '../interfaces';

const countriesUrl = 'https://corona.lmao.ninja/v2/countries';
export default async function getCountriesJson(
  minCases: number,
  sortProperty: CountryProps
) {
  let countriesJson: Country[] = [];

  try {
    countriesJson = await await (await fetch(countriesUrl)).json();
    const countries = countriesJson
      .filter((c) => c.cases > minCases)
      .sort((a, b) => b[sortProperty] - a[sortProperty])
      .map((c) => Object.assign(new Country(), c));

    return countries;
  } catch (error) {
    console.log(error);
    return [];
  }
}
