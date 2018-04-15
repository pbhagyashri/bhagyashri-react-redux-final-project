import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="custom-container">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <form>
            <div className="form-group">
              <label>Email</label>
              <input class="form-control" id="exampleInputEmail1" type="text" placeholder="please enter your email"/>
            </div>
          </form>
        </div>
        <div className="col-sm-3"></div>
      </div>
    )
  }
}

export default Login;