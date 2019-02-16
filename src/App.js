import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter/counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <Counter />
        </div>
      </div>
    );
  }
}

export default App;
