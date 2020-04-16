import React from 'react';

import CardProperty from './card-property';
import Country from '../models/country';
import './country-card.css';
interface CountryCardProps {
  country: Country;
  previousData: Country;
  activeProperty: keyof Country;
  index: number;
}
export default function CountryCard({
  country,
  activeProperty,
  index,
  previousData,
}: CountryCardProps) {
  return (
    <div className="shadow rounded-md overflow-hidden hover:shadow-md  transition duration-300 ease-in-out cursor-pointer">
      {/* header */}
      <div
        className="w-full flex justify-center items-center p-5 font-bold uppercase text-black text-lg relative"
        style={{ backgroundColor: 'rgba(0,0,0,.04)' }}
      >
        <span className="absolute" style={{ left: '2rem' }}>
          {index}.
        </span>
        <img src={country.countryInfo?.flag} alt="" className="h-4 mr-2" />
        <h3>{country.country}</h3>
        {country.isNewData && (
          <div
            className="blob green"
            title="there is new data from the last time you visited the site"
          ></div>
        )}
      </div>
      {/* body */}
      <div className="px-6 py-2">
        <CardProperty
          text="Cases"
          value={country.cases.toLocaleString()}
          isActive={activeProperty === 'cases'}
          isNew={previousData?.cases !== country.cases}
        />
        <CardProperty
          text="Today cases"
          value={country.todayCases?.toLocaleString()}
          isActive={activeProperty === 'todayCases'}
          isNew={previousData?.todayCases !== country.todayCases}
        />
        <br className="my-3" />
        <CardProperty
          text="Deaths"
          value={country.deaths?.toLocaleString()}
          isActive={activeProperty === 'deaths'}
          isNew={previousData?.deaths !== country.deaths}
        />
        <CardProperty
          text="Today deaths"
          value={country.todayDeaths?.toLocaleString()}
          isActive={activeProperty === 'todayDeaths'}
          isNew={previousData?.todayDeaths !== country.todayDeaths}
        />
        <br className="my-3" />
        <CardProperty
          text="Lethality"
          value={country.lethality ? country.lethality.toFixed(2) + '%' : '0%'}
          isActive={activeProperty === 'lethality'}
          isNew={previousData?.lethality !== country.lethality}
        />
        <CardProperty
          text="Cases per 1M"
          value={country.casesPerOneMillion.toLocaleString()}
          isActive={activeProperty === 'casesPerOneMillion'}
          isNew={
            previousData?.casesPerOneMillion !== country.casesPerOneMillion
          }
        />
        <CardProperty
          text="Deaths per 1M"
          value={country.deathsPerOneMillion.toLocaleString()}
          isActive={activeProperty === 'deathsPerOneMillion'}
          isNew={
            previousData?.deathsPerOneMillion !== country.deathsPerOneMillion
          }
        />
        <br />
        <CardProperty
          text="Tests"
          value={country.tests.toLocaleString()}
          isActive={activeProperty === 'tests'}
          isNew={previousData?.tests !== country.tests}
        />
        <CardProperty
          text="Tests per 1M"
          value={country.testsPerOneMillion.toLocaleString()}
          isActive={activeProperty === 'testsPerOneMillion'}
          isNew={
            previousData?.testsPerOneMillion !== country.testsPerOneMillion
          }
        />
      </div>
    </div>
  );
}
