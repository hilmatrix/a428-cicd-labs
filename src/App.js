import React, { Component } from 'react';
import logo from './logo.svg';
import buffcatman from './buffcatman-circle.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome from Buffcatman !</h1>
        </header>
        <p className="App-intro">
          <img src={buffcatman} className="App-logo-alternate" alt="logo" />
        </p>
      </div>
    );
  }
}

export default App;
