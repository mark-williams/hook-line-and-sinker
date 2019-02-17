import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import Root from './root/root';

const Container = styled.div`
  padding: 2rem;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Container>
          <Root />
        </Container>
      </div>
    );
  }
}

export default App;
