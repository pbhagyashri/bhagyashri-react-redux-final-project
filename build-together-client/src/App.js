import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Header from './containers/Header'
import Login from './containers/Login'
import Signup from './containers/Signup'
import Home from './components/Home'
import Projects from './containers/Projects';
import ProjectForm from './containers/ProjectForm';
import ProjectShow from './containers/ProjectShow';
import { getUser } from './actions/auth_actions';
import ProjectEdit from './containers/ProjectEdit';
import CommentForm from './containers/CommentForm';
import Logout from './containers/Logout'

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = { 
      projects: []
    }
  }

  componentDidMount() {
    
    const token = localStorage.Token
    
    if(token) {
      debugger
      this.props.getUser(token)
    }
  }

  render() {
   
    return (
      
      <div className="App">
        <div className="App-intro">
        <Router>
          <div>
            <header className="App-header">
              
              <Header />
              <Route path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              {/* <Route path="/" component={Logout} /> */}
              <Route exact path={"/projects/new"} component={ProjectForm} />
              <Route exact path={"/projects/:id"} component={ProjectShow} />
              <Route exact path={"/projects/:id/edit"} component={ProjectEdit} />
              <Route exact path="/projects" component={Projects} projects={this.state.projects}/>
              <Route exact path="/projects/:id" component={CommentForm} />

            </header>  
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
    authenticated: state.auth.authenticated,
    // currentProject: state.projects[Object.getOwnPropertyNames(state.projects)[0]]
  }
}

export default App = connect(mapStateToProps, {getUser})(App);

