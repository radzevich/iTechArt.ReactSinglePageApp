import React, { Component } from 'react';
import Header from './common/components/header/header';
import Footer from './common/components/footer/footer';
import RouterContainer from './router/routerContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <Header />
        </div>
        <RouterContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
