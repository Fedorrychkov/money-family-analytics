import React, { Component } from 'react';
import HomePage from './components/views/HomePage';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';

// import logo from './logo.svg';
import './App.scss';

library.add(faIgloo)

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
