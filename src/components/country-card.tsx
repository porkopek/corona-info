import React, { useState, useEffect } from 'react';

import CardProperty from './card-property';
import Country from '../models/country';
import './country-card.css';
interface CountryCardProps {
  country: Country;
  activeProperty: keyof Country;
}
export default function CountryCard({
  country,
  activeProperty,
}: CountryCardProps) {
  var color = 'green';
  return (
    <div className="shadow rounded-md overflow-hidden hover:shadow-md  transition duration-300 ease-in-out cursor-pointer">
      {/* header */}
      <div
        className="w-full flex justify-center items-center p-5"
        style={{ backgroundColor: 'rgba(0,0,0,.04)' }}
      >
        <img src={country.countryInfo?.flag} alt="" className="h-4 mr-2" />
        <h3 className="font-bold uppercase text-black text-lg">
          {country.country}
        </h3>
        {country.isNewData && <div className="blob green"></div>}
      </div>
      {/* body */}
      <div className="px-6 py-2">
        <CardProperty
          text="Cases"
          value={country.cases.toLocaleString()}
          isActive={activeProperty === 'cases'}
        />
        <CardProperty
          text="Today cases"
          value={country.todayCases?.toLocaleString()}
          isActive={activeProperty == 'todayCases'}
        />
        <br className="my-3" />
        <CardProperty
          text="Deaths"
          value={country.deaths?.toLocaleString()}
          isActive={activeProperty == 'deaths'}
        />
        <CardProperty
          text="Today deaths"
          value={country.todayDeaths?.toLocaleString()}
          isActive={activeProperty == 'todayDeaths'}
        />
        <br className="my-3" />
        <CardProperty
          text="Lethality"
          value={country.lethality ? country.lethality.toFixed(2) + '%' : '0%'}
          isActive={activeProperty == 'lethality'}
        />
        <CardProperty
          text="Cases per 1M"
          value={country.casesPerOneMillion.toLocaleString()}
          isActive={activeProperty == 'casesPerOneMillion'}
        />
        <CardProperty
          text="Deaths per 1M"
          value={country.deathsPerOneMillion.toLocaleString()}
          isActive={activeProperty == 'deathsPerOneMillion'}
        />
      </div>
    </div>
  );
}
