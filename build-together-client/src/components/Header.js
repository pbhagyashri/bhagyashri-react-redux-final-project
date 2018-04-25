import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {

  render() {

    const LoggedOutnav = (
      <div>
        <NavLink className="left - navbar-links navbar-links" to="/login" exact>Login</NavLink>

        <NavLink className="right-navbar-links navbar-links" to="/signup" exact>Signup</NavLink>
          
      </div>
    )

    const loggedInNav = (
      <div>
        <NavLink className="left-navbar-links navbar-links" to="/" exact>Home</NavLink>

        <NavLink className="right-navbar-links navbar-links" to="/projects/new" exact>Create Project</NavLink>
        
      </div>
    )

    return(
      <div className="header">
        <div><h1 id="logo">Build Together</h1></div>
          <div className="left-header">
            <div className="navbar-links">
              {this.props.authenticated ? loggedInNav : LoggedOutnav}
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
