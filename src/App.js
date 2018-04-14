import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, hashHistory } from 'react-router-dom';
import './App.css';

import { SkiApp } from "./components/SkiApp";
import { Whoops404 } from "./components/Whoops404";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route path="/" exact component={SkiApp} />
        <Route path="/list-days" exact component={SkiApp}/>
        <Route path="/list-days/:filter" component={SkiApp} />
        <Route path="/add-day" exact component={SkiApp} />
        <Route component={Whoops404} />
        </Switch>
      </Router>
    );
  }
}

export default App;
