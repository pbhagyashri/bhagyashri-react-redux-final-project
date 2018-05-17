import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {signupUser} from '../actions/auth_actions';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      username: "",
      email: "",
      password: ""
    }
  }

  handleChange(event) {
  
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault()
    this.props.signupUser(this.state);
    this.props.history.replace('/projects')
  }

  render() {
    return (
        <div className="custom-container row create-project-container">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <h2> Signup </h2>
            <form onSubmit={(event) => this.handleOnSubmit(event)}>
              <label>Name:</label>
              <input
              name="name" 
              className="form-control" 
              type="text" placeholder="Please enter your full name"
              onChange={(event) => this.handleChange(event)}
              value={this.state.name}
              />

              <label>Username:</label>
              <input 
              name="username"
              className="form-control" 
              type="text" placeholder="Please choose a username"
              onChange={(event) => this.handleChange(event)}
              value={this.state.username}
              />

              <label>Email:</label>
              <input
              name="email" 
              className="form-control" 
              type="text" placeholder="Please enter your email"
              onChange={(event) => this.handleChange(event)}
              value={this.state.email}
              />

              <label>Password:</label>
              <input 
              name="password"
              className="form-control" 
              type="password" placeholder="Please choose a password"
              onChange={(event) => this.handleChange(event)}
              value={this.state.password}
              />

              <button type="submit" className="btn custom-btn">Submit</button>
            </form>
          </div>  
        <div className="com-sm-4"></div> 
      </div>
    )
  }
}


function mapStateToProps(state) {
  
  return {
    name: state.name,
    username: state.username,
    email: state.email,
    password: state.password,
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    signupUser: signupUser
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
