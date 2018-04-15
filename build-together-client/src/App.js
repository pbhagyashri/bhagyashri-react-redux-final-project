import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Login from './containers/Login'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to Build Together</h1>
          </header>
          <div className="App-intro">
            <Route path="/login" component={Login} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
