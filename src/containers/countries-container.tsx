import React, { useState, useEffect } from 'react';
import { NovelCovid } from 'novelcovid';
import CountryCard from '../components/country-card';
import { ICountry, CountryCardProps } from '../interfaces';
import FilterMenu from '../components/countries-filter-menu';
const track = new NovelCovid();
export default function CountriesContainer() {
  const [countries, setCountries] = useState<ICountry[]>(
    (JSON.parse(localStorage.getItem('countries') || '[]') as ICountry[]) || []
  );

  useEffect(() => {
    // get the countries data
    const getCountries = async () => {
      const newCountries = (((await track.countries()) as unknown[]) as ICountry[])
        .filter((c) => c.cases > 1000)
        .sort((a, b) => b.cases - a.cases);

      if (newCountries.length) {
        try {
          const countriesString = JSON.stringify(newCountries);
          localStorage.setItem('countries', countriesString);
          setCountries(newCountries as ICountry[]);
        } catch (error) {
          console.log(error);
        }
      }
    };

    //WATCH
    getCountries();
  }, []);

  const handleSort = (
    property: keyof CountryCardProps = 'cases',
    type: 'ASC' | 'DESC' = 'DESC'
  ) => {
    const sortFunction = (a: ICountry, b: ICountry): 1 | -1 | 0 => {
      if (property !== 'lethality') {
        if (b[property] > a[property]) return 1;
        if (b[property] < a[property]) return -1;
        return 0;
      }
      if (b.deaths / b.cases > a.deaths / a.cases) return 1;
      if (b.deaths / b.cases < a.deaths / a.cases) return -1;
      return 0;
    };
    var newCountries = countries.slice().sort(sortFunction);

    setCountries(newCountries);
  };

  return (
    <>
      <FilterMenu onSort={handleSort} />

      <div className="grid md:grid-cols-3 gap-4  xl:grid-cols-3">
        {countries?.map((country) => (
          <CountryCard country={country} key={country.country} />
        ))}
      </div>
    </>
  );
}
