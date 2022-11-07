import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Hilmatrix">
        <header className="Hilmatrix">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome from Buffcatman !</h1>
        </header>
        <p className="App-intro">
          <img src={buffcatman-circle} className="App-logo-reverse" alt="logo" />
        </p>
      </div>
    );
  }
}

export default App;
