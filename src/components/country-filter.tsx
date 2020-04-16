import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Country from '../models/country';

interface CountryFilterProps {
  countries: string[];
}

export default function CountryFilter({ countries }: CountryFilterProps) {
  return (
    <Autocomplete
      onInputChange={(e, value) => alert(value)}
      multiple
      id="fixed-tags-demo"
      options={countries}
      getOptionLabel={(option: any) => option}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip label={option} {...getTagProps({ index })} />
        ))
      }
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Select countries" variant="outlined" />
      )}
    />
  );
}
