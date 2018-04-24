import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = (props) => {

  return(
    <div>
      
    </div>
  )
} 

function mapStateToProps(state) {
  
  return {
    email: state.email,
    password: state.password,
    name: state.auth.name
  }
}

export default connect(mapStateToProps)(Home);
