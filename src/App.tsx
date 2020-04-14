import React from 'react';
import CountriesContainer from './containers/countries-container';
import Navbar from './components/navbar';

function App() {
  return (
    <div className=" ">
      <Navbar />
      <div className="container max-w-5xl bg-white mx-auto">
        <CountriesContainer />
      </div>
    </div>
  );
}

export default App;
