import React from 'react';
import './App.css';
import GetFirebase from './containers/getFirebase';
import Salary from './containers/salary';

function App() {
  return (
    <div className="App">
      <GetFirebase />
      <Salary />
    </div>
  );
}

export default App;
