import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import FlexBox from './components/body/flexBox';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="appHeader">
          <Header />
        </div>
          <FlexBox />
      </div>
    );
  }
}

export default App;
