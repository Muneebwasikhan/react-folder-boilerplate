/* global it,  */
import React from 'react';
import ReactDOM from 'react-dom';
/* NormalPage needs the router since 
it has route and switch defined in it */
import { BrowserRouter as Router } from 'react-router-dom';
import NormalPage from '../NormalPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <NormalPage />
    </Router>,
    div
  );
});
