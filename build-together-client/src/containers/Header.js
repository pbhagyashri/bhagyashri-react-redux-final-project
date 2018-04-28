import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../actions/auth_actions'
import people from '../people.jpg'

class Header extends Component {

  handleLogout(event) {
    event.preventDefault();
    this.props.logout();
  }

  render() {
    const LoggedOutnav = (
      <div className="header-links">
    
        <NavLink className="navbar-links" to="/login" exact>Login</NavLink>

        <NavLink className="navbar-links" to="/signup" exact>Signup</NavLink>
          
      </div>
    )

    const loggedInNav = (
      <div className="header-links">
        <div><NavLink className="navbar-links special-link" to="/projects" exact>Check Out Open Projects</NavLink></div>

        <NavLink className="navbar-links" to="/" exact>Home</NavLink>
        
        <NavLink className="navbar-links" to="/projects/new" exact>Create Project</NavLink>
        
        <NavLink onClick={(event) => this.handleLogout(event)} className="navbar-links" to="/" exact>Logout</NavLink>
        
      </div>
    )

    return(
      <div>
        
        <div className="row">
          
          <div className="col-sm-8">
            <img className="header-image" src={people} alt="image" />
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loguot: logout
  }, dispatch);
};


export default connect(mapStateToProps, {logout})(Header);
