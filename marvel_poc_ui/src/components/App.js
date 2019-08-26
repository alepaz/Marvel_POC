import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Landing from './Landing';
import Footer from './Footer';

class App extends Component {
  // componentDidMount() {
  //     /* Call Actions Creator, those are imported by the export statement */
  //     //this.props.fetchUser();
  // }

  render() {
    return (
      <div className="container" >
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
