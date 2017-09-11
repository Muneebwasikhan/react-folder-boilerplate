/* global it,  */
import React from 'react';
import ReactDOM from 'react-dom';
import UnknownPage from '../../pages/UnknownPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UnknownPage />, div);
});
