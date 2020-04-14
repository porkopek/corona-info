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
      const newCountries = (((await track.countries()) as unknown[]) as Country[]).sort(
        (a, b) => b.deaths - a.deaths
      );

      setCountries(newCountries as Country[]);
    };
    process.env.NODE_ENV === 'production'
      ? getCountries()
      : setCountries(countriesObject.sort((a, b) => b.deaths - a.deaths));
  }, []);

  return (
    <>
      {/* <div className="w-5 ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M12 12l8-8V0H0v4l8 8v8l4-4v-4z" />
        </svg>
      </div> */}
      <div className="grid md:grid-cols-3 gap-4  xl:grid-cols-3">
        {countries?.map((country) => (
          <CountryCard country={country} />
        ))}
      </div>
    </>
  );
}
