import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Project from './components/project'

import './App.css';
import Header from './components/Header'
import Login from './containers/Login'
import Home from './components/Home'
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

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
            <Project store={this.props.store}/>
          </div>
        </Router>
        </div>
      </div>
      
    );
  }
}
const mapStateToProps = (state) => {
  return {  
    user: state.auth
  }
}

export default App = connect(mapStateToProps, {})(App);


