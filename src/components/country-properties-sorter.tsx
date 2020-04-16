import React from 'react';
import Country from '../models/country';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CircularProgress from '@material-ui/core/CircularProgress';

interface FilterMenuOptions {
  onSort: (property?: keyof Country, mode?: 'ASC' | 'DESC') => void;
}

export default function PropertiesSorter({ onSort }: FilterMenuOptions) {
  const handleSort = (e: React.ChangeEvent<{ value: unknown }>) => {
    const value = e.target.value as keyof Country;

    onSort(value);
  };
  return (
    <>
      <FormControl variant="outlined" style={{ minWidth: 180 }}>
        <InputLabel id="select-label">Sort by</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          onChange={handleSort}
          label="Sort by"
        >
          <MenuItem value="cases">cases</MenuItem>
          <MenuItem value="todayCases">today cases</MenuItem>
          <MenuItem value="deaths">deaths</MenuItem>
          <MenuItem value="todayDeaths">today deaths</MenuItem>
          <br />
          <MenuItem value="lethality">lethality</MenuItem>

          <MenuItem value="casesPerOneMillion">cases per 1M</MenuItem>
          <MenuItem value="deathsPerOneMillion">deaths per 1M</MenuItem>
          <br />
          <MenuItem value="tests">tests</MenuItem>
          <MenuItem value="testsPerOneMillion">tests per 1M</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
