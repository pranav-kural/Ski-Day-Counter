import React, { Component } from 'react';
import './App.css';

import { SkiApp } from "./components/SkiApp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>

          <SkiApp />
      </div>
    );
  }
}

export default App;
