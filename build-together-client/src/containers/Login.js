import React, { Component } from 'react';

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

  render() {
    return (
      <div className="custom-container">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <form>
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

export default Login;