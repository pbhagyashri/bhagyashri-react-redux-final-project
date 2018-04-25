import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loguot: logout
  }, dispatch);
};

export default connect(null, {logout})(Logout);