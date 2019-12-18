import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Home from "../routes/home";
class App extends Component {
  render() {
    return (
      <div className="App">
      <Route exact path="/" component={Home}/>
      </div>
    );
  }
}

export default App;
