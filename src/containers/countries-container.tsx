import React, { useState, useEffect } from 'react';
import { NovelCovid } from 'novelcovid';
import CountryCard from '../components/country-card';
import PropertiesSorter from '../components/country-properties-sorter';
import Country from '../models/country';
import './countries-container.css';
import { CircularProgress } from '@material-ui/core';
import CountryFilter from '../components/country-filter';
import CountriesTable from '../components/countries-table';
import ViewSelector from '../components/view-selector';
const track = new NovelCovid();
export default function CountriesContainer() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [previousData, setPreviousData] = useState<Country[]>(
    (JSON.parse(localStorage.getItem('countries') || '[]') as Country[]) || []
  );
  const [sortProperty, setSortProperty] = useState<keyof Country>('cases');
  const [view, setView] = useState<'cards' | 'table'>('cards');

  useEffect(() => {
    // fetch the countries data
    const getCountries = async () => {
      const newData = (((await track.countries()) as unknown[]) as Country[])
        .filter((c) => c.cases > 1000)
        .sort((a, b) => b.cases - a.cases)
        .map((c) => Object.assign(new Country(), c));

      if (newData.length) {
        try {
          const countriesString = JSON.stringify(newData);
          localStorage.setItem('countries', countriesString);
          setCountries(newData as Country[]);
        } catch (error) {
          console.log(error);
        }
      }
    };

    //WATCH
    getCountries();
  }, []);

  const handleSort = (property: keyof Country = 'cases') => {
    setSortProperty(property);
    const sortFunction = (a: Country, b: Country): 1 | -1 | 0 => {
      if (b[property]! > a[property]!) return 1;
      if (b[property]! < a[property]!) return -1;
      return 0;
    };
    var newCountries = countries.slice().sort(sortFunction);
    var oldCountries = previousData.slice().sort(sortFunction);
    setCountries(newCountries);
    setPreviousData(oldCountries);
  };

  const handleChangeView = (view: 'cards' | 'table') => {
    setView(view);
  };

  const data = countries || previousData;
  return (
    <>
      <div className="flex mb-2  flex-auto">
        <PropertiesSorter onSort={handleSort} />
        <ViewSelector view={view} onChangeView={handleChangeView} />
      </div>
      {/* <CountryFilter countries={countries.map((c) => c.country || '')} /> */}
      {data?.length === 0 && (
        <div className="flex justify-center items-center">
          <CircularProgress color="primary" size={20} />
          <span className="ml-2">Loading</span>
        </div>
      )}
      {view === 'cards' ? (
        <div className="grid md:grid-cols-3 gap-4  xl:grid-cols-3">
          {data?.map((country, id) => (
            <CountryCard
              index={id + 1}
              country={country}
              key={country.country}
              activeProperty={sortProperty}
              previousData={previousData[id]}
            />
          ))}
        </div>
      ) : (
        <CountriesTable countries={countries} sortProperty={sortProperty} />
      )}
    </>
  );
}
