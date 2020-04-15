import React, { useState, useEffect } from 'react';
import { TransitionGroup, Transition } from 'react-transition-group';
import { NovelCovid } from 'novelcovid';
import CountryCard from '../components/country-card';
import { ICountry, CountryCardProps } from '../interfaces';
import FilterMenu from '../components/countries-filter-menu';
import Country from '../models/country';
import './countries-container.css';
const track = new NovelCovid();
export default function CountriesContainer() {
  const [countries, setCountries] = useState<Country[]>(
    (JSON.parse(localStorage.getItem('countries') || '[]') as Country[]) || []
  );
  const [sortProperty, setSortProperty] = useState<keyof Country>('cases');

  useEffect(() => {
    // get the countries data
    const getCountries = async () => {
      const newCountries = (((await track.countries()) as unknown[]) as Country[])
        .filter((c) => c.cases > 1000)
        .sort((a, b) => b.cases - a.cases)
        .map((c) => Object.assign(new Country(), c))
        .map((c, i) => {
          if (countries[i]?.cases !== c.cases) {
            c.isNewData = true;
          }
          return c;
        });

      if (newCountries.length) {
        try {
          const countriesString = JSON.stringify(newCountries);
          localStorage.setItem('countries', countriesString);
          setCountries(newCountries as Country[]);
        } catch (error) {
          console.log(error);
        }
      }
    };

    //WATCH
    getCountries();
  }, []);

  const handleSort = (
    property: keyof Country = 'cases',
    type: 'ASC' | 'DESC' = 'DESC'
  ) => {
    setSortProperty(property);
    const sortFunction = (a: Country, b: Country): 1 | -1 | 0 => {
      if (b[property] > a[property]) return 1;
      if (b[property] < a[property]) return -1;
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
          <CountryCard
            country={country}
            key={country.country}
            activeProperty={sortProperty}
          />
        ))}
      </div>
    </>
  );
}
