import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

import Navbar from "./components/layout/Navbar";
import Background from "./components/layout/Background";

class App extends Component {


  render() {


    return (
      <Router>
        <div className="flyout">
          <Navbar></Navbar>
          <Background></Background>
        </div>
      </Router>
    );
  }
}

export default App;
