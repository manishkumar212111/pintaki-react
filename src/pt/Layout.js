'use strict';

import React from 'react';
import Header from './components/widgets/Header';
import Footer from './components/widgets/Footer';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Header />
          <div className="app-content">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}
