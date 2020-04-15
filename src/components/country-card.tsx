import React, { useState, useEffect } from 'react';
import { ICountry } from '../interfaces';
interface CountryCardProps {
  country: ICountry;
}
export default function CountryCard({ country }: CountryCardProps) {
  const lethality = ((country.deaths / country.cases) * 100)
    .toFixed(2)
    .replace(/[.,]00$/, '');
  var color = 'green<';
  return (
    <div className="shadow rounded-md overflow-hidden hover:shadow-md  transition duration-300 ease-in-out cursor-pointer">
      {/* header */}
      <div
        className="w-full flex justify-center items-center p-5 "
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.04)' }}
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
          <div>{country.cases.toLocaleString()}</div>
        </div>
        <div className=" flex justify-between">
          <div>Today cases:</div>
          <div>{country.todayCases.toLocaleString()}</div>
        </div>
        <br />
        <div className=" flex justify-between">
          <div>Deaths:</div>
          <div>{country.deaths.toLocaleString()}</div>
        </div>
        <div className=" flex justify-between">
          <div>Today deaths:</div>
          <div>{country.todayDeaths.toLocaleString()}</div>
        </div>
        <br />
        <div className=" flex justify-between">
          <div>Lethality:</div>
          <div>{lethality}%</div>
        </div>
        <div className=" flex justify-between">
          <div>Cases per 1M:</div>
          <div>{country.casesPerOneMillion.toLocaleString()}</div>
        </div>
        <div className=" flex justify-between">
          <div>Deaths per 1M:</div>
          <div>{country.deathsPerOneMillion}</div>
        </div>
      </div>
    </div>
  );
}
