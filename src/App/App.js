import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage.js';
import NormalPage from '../pages/NormalPage.js';
import UnknownPage from '../pages/UnknownPage.js';
import './assets/css/App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/normal" component={NormalPage} />
    <Route component={UnknownPage} />
  </Switch>
);

export default App;
