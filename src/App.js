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
      </div>
    );
  }
}

export default App;
