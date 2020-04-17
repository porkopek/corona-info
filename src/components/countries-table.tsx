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
import LanguageIcon from '@material-ui/icons/Language';
import Country from '../models/country';
import { AverageRow } from './average-row';
import { CountryProps } from '../interfaces';

interface CountriesTableProps {
  countries: Country[];
  sortProperty: CountryProps;
}
export default function CountriesTable({
  countries,
  sortProperty = 'cases',
}: CountriesTableProps) {
  const sortedStyle = 'font-bold';
  const average = getTruncatedAverage(countries);
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table" stickyHeader>
        <TableHead className=" bg-gray-300  ">
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
          {/***Average row***/}
          <AverageRow sortedStyle={sortedStyle} average={average} />

          {countries.map((country, i) => {
            const averageStyle = getAverageStyle(
              country,
              sortProperty,
              average
            );
            return (
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
                {([
                  'cases',
                  'todayCases',
                  'deaths',
                  'todayDeaths',
                  'lethality',
                  'casesPerOneMillion',
                  'deathsPerOneMillion',
                  'tests',
                  'testsPerOneMillion',
                ] as CountryProps[]).map((property) => {
                  return (
                    <TableCell
                      style={
                        sortProperty === property
                          ? {
                              fontWeight: 'bold',
                              borderRight: '1px solid rgba(0,0,0,.3)',
                              borderLeft: '1px solid rgba(0,0,0,.3)',
                              boxShadow: '0 0 5px rgba(0,0,0,.1)',
                              zIndex: 11,
                            }
                          : undefined
                      }
                      className={`${getAverageStyle(
                        country,
                        property,
                        average
                      )}`}
                      align="right"
                    >
                      {country[property]?.toLocaleString()}
                      {property === 'lethality' && '%'}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const getTruncatedAverage = (countries: Country[]) => {
  const properties = [
    'cases',
    'todayCases',
    'deaths',
    'todayDeaths',
    'lethality',
    'casesPerOneMillion',
    'deathsPerOneMillion',
    'tests',
    'testsPerOneMillion',
  ];
  let truncatedAverage: { [key: string]: number } = {};

  properties.map((property) => {
    const truncated = countries.map((c: any) => c[property] as number).sort();
    truncated.pop();
    truncated.pop();
    truncated.shift();
    truncated.shift();

    const sum = truncated.reduce((a, b) => a + b);
    const average = sum / countries.length;
    const result = Math.round(average);
    truncatedAverage[property] = result;
  });

  return truncatedAverage;
};

const getAverageStyle = (
  country: Country,
  property: CountryProps,
  average: { [key: string]: number }
) => {
  const averageProperty = average[property];
  const countryProperty = country[property];
  const ratio = averageProperty / countryProperty;
  if (property === 'tests' || property === 'testsPerOneMillion') {
    if (ratio < 0.1) return 'bg-green-300';
    if (ratio < 0.2) return 'bg-green-200';
    if (ratio < 0.3) return 'bg-green-100';

    if (averageProperty > countryProperty * 8) return 'bg-red-300';
    if (averageProperty > countryProperty * 6) return 'bg-red-200';
    if (averageProperty > countryProperty * 4) return 'bg-red-100';

    return 'bg-white';
  }

  if (property === 'lethality') {
    if (averageProperty > countryProperty * 6) return 'bg-green-300';
    if (averageProperty > countryProperty * 4) return 'bg-green-200';
    if (averageProperty > countryProperty * 2) return 'bg-green-100';

    if (countryProperty > averageProperty * 3) return 'bg-red-300';
    if (countryProperty > averageProperty * 2.5) return 'bg-red-200';
    if (countryProperty > averageProperty * 2) return 'bg-red-100';

    return 'bg-white';
  }

  if (ratio < 0.1) return 'bg-red-300';
  if (ratio < 0.2) return 'bg-red-200';
  if (ratio < 0.3) return 'bg-red-100';

  if (averageProperty > countryProperty * 8) return 'bg-green-300';
  if (averageProperty > countryProperty * 7) return 'bg-green-200';
  if (averageProperty > countryProperty * 5) return 'bg-green-100';

  return 'bg-white';
};
