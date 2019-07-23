import React, { Component } from 'react';
import './App.css';
import LowerText from './LowerText';
import ImageGenerator from './ImageGenerator';
import UpperText from './UpperText';
import Header from './Header';

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <ImageGenerator/>
      </div>
    );
  }
}

export default App;
