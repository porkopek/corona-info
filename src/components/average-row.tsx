import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';
import { CountryProps } from '../interfaces';
export function AverageRow({
  sortedStyle,
  average,
}: {
  sortedStyle: string;
  average: {
    [key: string]: number;
  };
}) {
  return (
    <TableRow key="average">
      <TableCell
        align="right"
        className={sortedStyle + ' font-bold'}
      ></TableCell>

      <TableCell component="th" scope="row" className={sortedStyle}>
        <span className="font-bold">Truncated average</span>
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
          <TableCell align="right" className={sortedStyle + ' font-bold'}>
            <span className="font-bold">
              {average[property].toLocaleString()}
              {property === 'lethality' && '.00%'}
            </span>
          </TableCell>
        );
      })}
    </TableRow>
  );
}
