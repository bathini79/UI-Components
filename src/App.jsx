import { useState } from 'react';
import './App.css';
import Tabs from './Tabs';
import Accordian from './Accordian';
import Corousal from './Corousal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Tab</div>
        <Tabs />
        <div>Accordian</div>
        <Accordian/>
        <div>Corousal</div>
        <Corousal/>
      </header>
    </div>
  );
}

export default App;
