import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NormalPage from '../pages/NormalPage';
import UnknownPage from '../pages/UnknownPage';
import Nav from '../components/shared/children/Nav';
import Navbar from '../components/shared/children/Navbar';
import logo from '../assets/shared/img/logo.png';
import '../assets/pages/css/App_style.css';
import '../assets/shared/css/dashboard.css';

const linkArray = [
  {
    id: 'home',
    path: '/',
    anchor: 'home',
  },
  {
    id: 'normal',
    path: '/normal',
    anchor: 'normal',
  },
  {
    id: 'unknown',
    path: '/random',
    anchor: '404',
  },
];

const App = () => (
  <Router>
    <div className="lay_fluid-container">
      <Navbar Navs={Nav} links={linkArray} siteTitle="ShoppingList" logo={logo} onlyLogo={false} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/normal" component={NormalPage} />
        <Route component={UnknownPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
