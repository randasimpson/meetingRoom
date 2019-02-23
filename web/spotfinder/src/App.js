import React, { Component } from 'react';
import Filter from './Components/filter';
import Results from './Components/results';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="filter">
          <Filter />
        </div>
        <div className="results">
          <Results />
        </div>
      </div>
    );
  }
}

export default App;
