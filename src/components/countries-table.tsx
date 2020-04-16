import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';

import Country from '../models/country';

interface CountriesTableProps {
  countries: Country[];
  sortProperty?: keyof Country;
}
export default function CountriesTable({
  countries,
  sortProperty = 'cases',
}: CountriesTableProps) {
  const sortedStyle = 'bg-gray-200';
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead className=" bg-gray-200  ">
          <TableRow>
            <TableCell align="center">
              <span className="font-bold">#</span>
            </TableCell>
            <TableCell>Country</TableCell>
            <TableCell align="center">Cases</TableCell>
            <TableCell align="center">Today cases</TableCell>
            <TableCell align="center">Deaths</TableCell>
            <TableCell align="center">Today deaths</TableCell>
            <TableCell align="center">Lethality</TableCell>
            <TableCell align="center">Cases per 1M</TableCell>
            <TableCell align="center">Deaths per 1M</TableCell>
            <TableCell align="center">Tests</TableCell>
            <TableCell align="center">Tests per 1M</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries.map((country, i) => (
            <TableRow key={country.country}>
              <TableCell align="right">
                <span className="font-bold">{i + 1}</span>
              </TableCell>

              <TableCell component="th" scope="row">
                <span className="flex items-center">
                  <img
                    className="w-4 mr-2"
                    src={`${country.countryInfo?.flag}`}
                    alt=""
                  />
                  <span>{country.country}</span>
                </span>
              </TableCell>

              <TableCell
                className={`${sortProperty === 'cases' && sortedStyle}`}
                align="right"
              >
                {country.cases.toLocaleString()}
              </TableCell>

              <TableCell
                className={`${sortProperty === 'todayCases' && sortedStyle}`}
                align="right"
              >
                {country.todayCases.toLocaleString()}
              </TableCell>

              <TableCell
                className={`${sortProperty === 'deaths' && sortedStyle}`}
                align="right"
              >
                {country.deaths.toLocaleString()}
              </TableCell>

              <TableCell
                className={`${sortProperty === 'todayDeaths' && sortedStyle}`}
                align="right"
              >
                {country.todayDeaths.toLocaleString()}
              </TableCell>

              <TableCell
                className={`${sortProperty === 'lethality' && sortedStyle}`}
                align="right"
              >
                {country.lethality.toLocaleString()}%
              </TableCell>

              <TableCell
                className={`${
                  sortProperty === 'casesPerOneMillion' && sortedStyle
                }`}
                align="right"
              >
                {country.casesPerOneMillion.toLocaleString()}
              </TableCell>

              <TableCell
                className={`${
                  sortProperty === 'deathsPerOneMillion' && sortedStyle
                }`}
                align="right"
              >
                {country.deathsPerOneMillion.toLocaleString()}
              </TableCell>

              <TableCell
                className={`${sortProperty === 'tests' && sortedStyle}`}
                align="right"
              >
                {country.tests.toLocaleString()}
              </TableCell>

              <TableCell
                className={`${
                  sortProperty === 'testsPerOneMillion' && sortedStyle
                }`}
                align="right"
              >
                {country.testsPerOneMillion.toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
