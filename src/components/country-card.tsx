import React, { useState, useEffect } from 'react';
import { Country } from '../interfaces';
interface CountryCardProps {
  country: Country;
}
export default function CountryCard({ country }: CountryCardProps) {
  const lethality = ((country.deaths / country.cases) * 100)
    .toFixed(2)
    .replace(/[.,]00$/, '');

  return (
    <div className="shadow rounded-md overflow-hidden hover:shadow-2xl  transition duration-300 ease-in-out">
      {/* header */}
      <div
        className="w-full flex justify-center items-center p-5 "
        style={{ backgroundColor: 'rgba(0, 0, 0, .04)' }}
      >
        <img src={country.countryInfo.flag} alt="" className="h-4 mr-2" />
        <h3 className="font-bold uppercase text-black text-lg">
          {country.country}
        </h3>
      </div>
      {/* body */}
      <div className="px-6 py-2">
        <div className=" flex justify-between">
          <div>Cases:</div>
          <div>{country.cases}</div>
        </div>

        <div className=" flex justify-between">
          <div>Today cases:</div>
          <div>{country.todayCases}</div>
        </div>

        <br />

        <div className=" flex justify-between">
          <div>Deaths:</div>
          <div>{country.deaths}</div>
        </div>

        <div className=" flex justify-between">
          <div>Today deaths:</div>
          <div>{country.todayDeaths}</div>
        </div>

        <br />

        <div className=" flex justify-between">
          <div>Lethality:</div>
          <div>{lethality}%</div>
        </div>

        <div className=" flex justify-between">
          <div>Cases per 1M:</div>
          <div>{country.casesPerOneMillion}</div>
        </div>

        <div className=" flex justify-between">
          <div>Deaths per 1M:</div>
          <div>{country.deathsPerOneMillion}</div>
        </div>
      </div>
    </div>
  );
}
