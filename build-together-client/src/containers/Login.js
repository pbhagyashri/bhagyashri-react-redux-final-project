import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { authenticate } from '../actions/auth_actions'

class Login extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      email: "",
      password: "",
      user: {}
    }
  }
  
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnLogin(event) {
    
    event.preventDefault();
   
    this.props.authenticate(this.state)
    .then(() => {
      if(this.props.name !== ""){
        this.props.history.push("/")
      } else {
        window.alert("Sorry, Email or Password is incorrect. Please try again")
      }
    })
    
    this.setState({
      email: "",
      password: ""
    })
    
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
              value={this.state.email}
              />

              <label>Password</label>
              <input 
              onChange={(event) => this.handleChange(event)} 
              name="password"
              className="form-control" 
              type="password" placeholder="please enter your password"
              value={this.state.password}
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
    email: state.email,
    password: state.password,
    name: state.auth.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    authenticate: authenticate
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);