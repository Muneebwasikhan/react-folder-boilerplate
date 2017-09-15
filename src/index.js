import React from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import './assets/css/bootstrap.min.css';
import './assets/css/lay_.css';
import './assets/css/index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
