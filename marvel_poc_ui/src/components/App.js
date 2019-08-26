import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Axios from 'axios';
import Header from './Header';

class App extends Component {
  // componentDidMount() {
  //     /* Call Actions Creator, those are imported by the export statement */
  //     //this.props.fetchUser();
  // }

  render() {
      return (
          <div className="container" >

                      <Header />

          </div>
      );
  }
}

export default App;