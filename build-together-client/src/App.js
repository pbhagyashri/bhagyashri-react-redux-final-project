import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Header from './components/Header'
import Login from './containers/Login'
import Signup from './containers/Signup'
import Home from './components/Home'
import Projects from './containers/Projects';
import ProjectForm from './containers/ProjectForm';



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
            <Route path="/signup" component={Signup} />
            <Route exact path="/projects" component={Projects} />
            
            <Route exact path={"/projects/new"} component={ProjectForm} />
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

