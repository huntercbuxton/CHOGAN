import React from 'react';
import { Counter } from './redux/Counter';
import './Chogan.css';
import Home from './pages/home/Home';

function Chogan() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <Home/>
    </div>
  );
}

export default Chogan;
