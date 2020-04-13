import React from 'react';
import CountriesContainer from './containers/countries-container';

function App() {
  return (
    <div className="flex justify-center   ">
      <div className="container max-w-5xl bg-white">
        <CountriesContainer />
      </div>
    </div>
  );
}

export default App;
