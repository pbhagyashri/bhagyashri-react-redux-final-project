import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/auth_actions'

class Logout extends Component {

  handleLogout(event) {
    event.preventDefault();
    this.props.logout();
    this.props.history.push('/')
  }


  render() {
    return(
      <button className="logout-button" onClick={(event) => this.handleLogout(event)}>Logout</button>
    )
  }
}

export default connect(null, {logout})(Logout);