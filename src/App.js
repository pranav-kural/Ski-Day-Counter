import React, { Component } from 'react';
import './App.css';

import { SkiDayList } from "./components/SkiDayList";
import { SkiDayCount } from "./components/SkiDayCount";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>

          <SkiDayCount />

          {/* <SkiDayList days={
            [
              {
                resort: "Squaw Valley",
                date: new Date("1/2/2017"),
                powder: true,
                backcountry: false
              },
              {
                resort: "Kirkwood",
                date: new Date("2/28/2017"),
                powder: false,
                backcountry: false
              },
              {
                resort: "Mt. Tallac",
                date: new Date("4/2/2017"),
                powder: false,
                backcountry: true
              }
            ]
          } /> */}
      </div>
    );
  }
}

export default App;
