import React, { Component } from 'react';
import './App.css';

import { SkiDayComponent } from "./components/SkiDayCount";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <SkiDayComponent total={50}
                            powder={20}
                            backcountry={10}
                            goal={100} />
      </div>
    );
  }
}

export default App;
