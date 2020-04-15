import React, { useState, useEffect } from 'react';
import { NovelCovid } from 'novelcovid';
import CountryCard from '../components/country-card';
import { countriesObject } from '../services/countries';
import { Country } from '../interfaces';
import FilterMenu from '../components/countries-filter-menu';
const track = new NovelCovid();
export default function CountriesContainer() {
  const [countries, setCountries] = useState<Country[]>(
    (JSON.parse(localStorage.getItem('countries') || '[]') as Country[]) || []
  );

  useEffect(() => {
    // get the countries data
    const getCountries = async (sortBy: keyof Country = 'cases') => {
      const newCountries = (((await track.countries()) as unknown[]) as Country[])
        .filter((c) => c.cases > 1000)
        .sort((a, b) => {
          if (b[sortBy] > a[sortBy]) return 1;
          if (b[sortBy] < a[sortBy]) return -1;
          return 0;
        });

      if (newCountries) {
        localStorage.setItem('countries', JSON.stringify(newCountries));
        setCountries(newCountries as Country[]);
      }
    };
    process.env.NODE_ENV !== 'production'
      ? getCountries()
      : setCountries(countriesObject.sort((a, b) => b.deaths - a.deaths));
  }, []);

  return (
    <>
      <FilterMenu onSort={() => {}} />

      <div className="grid md:grid-cols-3 gap-4  xl:grid-cols-3">
        {countries?.map((country) => (
          <CountryCard country={country} />
        ))}
      </div>
    </>
  );
}
