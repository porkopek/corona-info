import React, { useState, useEffect } from 'react';
import { NovelCovid } from 'novelcovid';
import CountryCard from '../components/country-card';
import PropertiesSorter from '../components/country-properties-sorter';
import Country from '../models/country';
import './countries-container.css';
import { CircularProgress, FormControlLabel, Switch } from '@material-ui/core';
import CountryFilter from '../components/country-filter';
import CountriesTable from '../components/countries-table';
import ViewSelector from '../components/view-selector';
import { CountryProps } from '../interfaces';
import getCountriesJson from '../models/dataProvider';
const track = new NovelCovid();
export default function CountriesContainer() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [previousData, setPreviousData] = useState<Country[]>(
    (JSON.parse(localStorage.getItem('countries') || '[]') as Country[]) || []
  );
  const [sortProperty, setSortProperty] = useState<CountryProps>('cases');
  const [view, setView] = useState<'cards' | 'table'>('table');

  useEffect(() => {
    // fetch the countries data
    const getCountries = async () => {
      const newData = await getCountriesJson(1000, 'cases');

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

  const handleSort = (property: CountryProps = 'cases') => {
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
      <div
        className="flex mb-2  flex-auto  p-2"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.04)' }}
      >
        <PropertiesSorter onSort={handleSort} />
        <ViewSelector view={view} onChangeView={handleChangeView} />
        <span className="ml-4 flex">
          <FormControlLabel
            control={<Switch name="checkedA" />}
            label="Secondary"
          />
        </span>
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
        data.length && (
          <CountriesTable countries={data} sortProperty={sortProperty} />
        )
      )}
    </>
  );
}
