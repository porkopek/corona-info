import React from 'react';
import { ICountry, CountryCardProps } from '../interfaces';
import Country from '../models/country';

interface FilterMenuOptions {
  onSort: (property?: keyof Country, mode?: 'ASC' | 'DESC') => void;
}

export default function FilterMenu({ onSort }: FilterMenuOptions) {
  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value as keyof Country;

    onSort(value);
  };
  return (
    <div className="p-5">
      <label htmlFor="country-properties">Sort by</label>

      <select
        id="country-properties"
        className="border-gray-300 border px-4 py-2 ml-2 rounded-md"
        onChange={handleSort}
      >
        <option value="cases">cases</option>
        <option value="todayCases">today cases</option>
        <option value="deaths">deaths</option>
        <option value="todayDeaths">today deaths</option>
        <option value="lethality">lethality</option>
        <option value="casesPerOneMillion">cases per 1M</option>
        <option value="deathsPerOneMillion">deaths per 1M</option>
      </select>
    </div>
  );
}
