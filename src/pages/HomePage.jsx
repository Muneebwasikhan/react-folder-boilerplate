import React from 'react';
import logo from './assets/img/shared/logo.svg';

const HomePage = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React Folder Boilerplate</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/pages/App.js</code> and save to reload.
      <br />
      For more information, checkout{' '}
      <a
        href="https://github.com/Tinitto/react-folder-boilerplate"
        rel="noopener noreferrer"
        target="_blank"
      >
        our github repo
      </a>
    </p>
  </div>
);

export default HomePage;
