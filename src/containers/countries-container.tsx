import React, { useState, useEffect } from 'react';
import { NovelCovid } from 'novelcovid';
import CountryCard from '../components/country-card';
import { countriesObject } from '../services/countries';
import { Country } from '../interfaces';
const track = new NovelCovid();
export default function CountriesContainer() {
  const [countries, setCountries] = useState<Country[] | null>();
  useEffect(() => {
    const getCountries = async () => {
      const newCountries = (await track.countries()) as any[];
      setCountries(newCountries as Country[]);
    };
    process.env.NODE_ENV === 'production'
      ? getCountries()
      : setCountries(countriesObject);
  }, []);
  return (
    <div className="grid md:grid-cols-3 gap-4  xl:grid-cols-3">
      {countries?.map((country) => (
        <CountryCard country={country} />
      ))}
    </div>
  );
}
