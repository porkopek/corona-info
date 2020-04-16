import React from 'react';
import { Button } from '@material-ui/core';
import { Apps, FormatListNumbered } from '@material-ui/icons';

interface ViewSelectorProps {
  view: 'cards' | 'table';
  onChangeView: (view: 'cards' | 'table') => void;
}
export default function ViewSelector({
  view,
  onChangeView,
}: ViewSelectorProps) {
  return (
    <div className="ml-3 flex items-center">
      <Button
        style={{ height: '100%' }}
        onClick={() => {
          const nextView = view === 'cards' ? 'table' : 'cards';
          return onChangeView(nextView);
        }}
      >
        {view !== 'cards' ? <Apps /> : <FormatListNumbered />}
        <span className="ml-3 normal-case">
          {' '}
          {view !== 'cards' ? 'Cards View' : 'Table View'}
        </span>
      </Button>
    </div>
  );
}
