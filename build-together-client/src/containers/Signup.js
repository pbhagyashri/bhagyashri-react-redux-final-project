import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { authenticate } from '../actions/auth_actions'

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

  render() {
    return (
      <div>
        <form>
          <label>Name:</label>
          <input
          name="name" 
          className="form-control" 
          type="text" placeholder="Please enter your full name"
          onChange={(event) => this.handleChange(event)}
          />

          <label>Username:</label>
          <input 
          name="username"
          className="form-control" 
          type="text" placeholder="Please choose a username"
          onChange={(event) => this.handleChange(event)}
          />

          <label>Email:</label>
          <input
          name="email" 
          className="form-control" 
          type="text" placeholder="Please enter your email"
          onChange={(event) => this.handleChange(event)}
          />

          <label>Password:</label>
          <input 
          name="password"
          className="form-control" 
          type="password" placeholder="Please choose a password"
          onChange={(event) => this.handleChange(event)}
          />

          <button type="submit" className="btn custom-btn">Submit</button>

        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  
  return {
    name: state.name,
    username: state.username,
    email: state.email,
    password: state.password
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     authenticate: authenticate
//   }, dispatch);
// };

export default connect(mapStateToProps)(Signup);