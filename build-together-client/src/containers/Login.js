import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { authenticate } from '../actions/auth_actions'

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnLogin(event) {
    event.preventDefault()
    this.props.authenticate(this.state)
  }

  render() {
    return (
      <div className="custom-container">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <form onSubmit={(event) => this.handleOnLogin(event)}>
            <div className="form-group">
              
              <label>Email</label>
              <input 
              onChange={(event) => this.handleChange(event)} 
              name="email"
              className="form-control" 
              type="text" placeholder="please enter your email"
              />

              <label>Password</label>
              <input 
              onChange={(event) => this.handleChange(event)} 
              name="password"
              className="form-control" 
              type="text" placeholder="please enter your password"
              />

              <button type="submit" className="btn custom-btn">Submit</button>
            </div>
          </form>
        </div>
        <div className="col-sm-4"></div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    token: state.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    authenticate: authenticate
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);