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
import { getUser } from './actions/auth_actions';

class App extends Component {

  componentDidMount() {
    const token = localStorage.Token

    if(token) {
      this.props.getUser(token)
    }
  }


  render() {
    console.log("User", this.props.user)
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
    user: state.auth,
    projects: state.projects
  }
}

export default App = connect(mapStateToProps, {getUser})(App);

