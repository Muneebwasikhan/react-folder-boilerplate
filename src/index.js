import React from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import './assets/shared/css/bootstrap.min.css';
import './assets/shared/css/lay_.css';
import './assets/shared/css/index.css';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
