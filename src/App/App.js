import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NormalPage from '../pages/NormalPage';
import UnknownPage from '../pages/UnknownPage';
import './assets/css/App.css';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/normal" component={NormalPage} />
      <Route component={UnknownPage} />
    </Switch>
  </Router>
);

export default App;
