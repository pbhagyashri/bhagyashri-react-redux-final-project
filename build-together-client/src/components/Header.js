import React from 'react'
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
