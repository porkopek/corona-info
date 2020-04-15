import React from 'react';
import { Country } from '../interfaces';

interface FilterMenuOptions {
  onSort: (property: keyof Country, mode: 'ASC' | 'DESC') => void;
}
export default function FilterMenu({ onSort }: FilterMenuOptions) {
  return <div></div>;
}
