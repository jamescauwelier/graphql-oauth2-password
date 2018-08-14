
// external imports
import React from "react";
import { hot } from 'react-hot-loader';

// internal imports

import "./App.css";
import Browser from './UI/Browser';

class App extends React.Component {
  render(){
    return (
      <Browser />
    );
  }
}

export default hot(module)(App);