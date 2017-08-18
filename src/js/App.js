import React, { Component } from 'react';
import Header from './common/components/header/header';
import FlexBox from './common/containers/flexBox/flexBox';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <Header />
        </div>
          <FlexBox />
      </div>
    );
  }
}

export default App;
