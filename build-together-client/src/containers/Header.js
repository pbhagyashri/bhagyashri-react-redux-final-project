import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import people from '../people.jpg'
import Logout from './Logout'
import Footer from '../components/Footer'

class Header extends Component {

  render() {
    const LoggedOutnav = (
      <div> 
        <NavLink className="navbar-links" to="/login" exact>Login</NavLink>
        <NavLink className="navbar-links" to="/signup" exact>Signup</NavLink>       
      </div>
    )

    const loggedInNav = (
      <div>
        <div>
          <NavLink className="navbar-links special-link" to="/projects" exact>Check Out Open Projects</NavLink>
        </div>

        <NavLink className="navbar-links" to="/" exact>Home</NavLink>
        <NavLink className="navbar-links" to="/projects/new" exact>Create Project</NavLink>     
        <Route path="/" component={Logout} />
      </div>
    )

    return(
      <div>
        <div className="row">
          
          <div className="col-md-8">
            <img className="header-image" src={people} alt="header image of people fist bumping."/>
          </div>
          
          <div className="col-sm-4 sub-titles">
            <h1 id="logo">Build Together</h1>
            <div className="dash"></div>
            <h3>build better</h3>            
            <div>
              {this.props.authenticated ? loggedInNav : LoggedOutnav}
            </div>
          </div>
        
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Header);
