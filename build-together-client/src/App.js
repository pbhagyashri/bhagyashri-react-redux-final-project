import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header'
import Login from './containers/Login'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <div className="App-intro">
        <Router>
          <div>
            <header className="App-header">
              <Route path="/" component={Home} />
              <Header />
            </header>  
            <Route path="/login" component={Login} />
          </div>
        </Router>
        </div>
      </div>
      
    );
  }
}

export default App;

