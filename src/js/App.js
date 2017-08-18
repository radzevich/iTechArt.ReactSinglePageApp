import React, { Component } from 'react';
import Header from './common/components/header/header';
import Router from './router/router';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <Header />
        </div>
          <Router />
      </div>
    );
  }
}

export default App;
