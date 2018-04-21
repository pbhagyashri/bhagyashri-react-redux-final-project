import React from 'react'
import { NavLink } from 'react-router-dom';
const Header = () => {
  
  return(
    <div className="header">
      <div><h1 id="logo">Build Together</h1></div>
      <div className="left-header">
        <NavLink className="left-navbar-links navbar-links" to="/" exact>Home</NavLink>
        <NavLink className="left - navbar-links navbar-links" to="/login" exact>Login</NavLink>
      </div>
      <div className="right-header">  
        <NavLink className="right-navbar-links navbar-links" to="/signup" exact>Signup</NavLink>
        {/* <NavLink className="right-navbar-links navbar-links" to="/about" exact>About Us</NavLink> */}
      </div>
    </div>
  )
} 

export default Header;
