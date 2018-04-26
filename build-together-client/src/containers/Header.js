import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../actions/auth_actions'

class Header extends Component {

  handleLogout(event) {
    event.preventDefault();
    this.props.logout();
  }

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
        
        <NavLink onClick={(event) => this.handleLogout(event)} className="right-navbar-links navbar-links" to="/" exact>Logout</NavLink>
        
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loguot: logout
  }, dispatch);
};


export default connect(mapStateToProps, {logout})(Header);
