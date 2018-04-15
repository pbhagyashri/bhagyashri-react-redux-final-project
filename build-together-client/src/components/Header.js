import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
const Header = () => {
  return(
    <div>
      <NavLink className="navbar-links" to="/" exact>Home</NavLink>
      <NavLink className="navbar-links" to="/login" exact>Login</NavLink>
    </div>
  )
} 

export default Header;

<ul class="nav nav-pills">
  <li role="presentation" class="active"><a href="#">Home</a></li>
  <li role="presentation"><a href="#">Profile</a></li>
  <li role="presentation"><a href="#">Messages</a></li>
</ul>