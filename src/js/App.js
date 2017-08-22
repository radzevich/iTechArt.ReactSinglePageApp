import React, { Component } from 'react';
import Header from './common/components/header/header';
import Footer from './common/components/footer/footer';
import Router from './router/router';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <Header />
        </div>
        <Router />
        <Footer />
      </div>
    );
  }
}

export default App;
