import React from 'react';
import './App.scss';
import MyAccordion from './Component/MyAccordion/MyAccordion';
import data from './data';

function App() {
  return (
    <main >
      <MyAccordion data={data} />
    </main>
  );
}

export default App;
