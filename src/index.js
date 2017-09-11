import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
