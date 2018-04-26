import React from 'react'
import { connect } from 'react-redux';
import people from '../people.jpg'

const Home = (props) => {

  return(
    <div className="row">
      {/* <div className="image-container container-fluid">
        <div className="col-sm-6">
          <img className="header-image" src={people} alt="image" />
        </div>
        <div className="col-sm-6 sub-titles">
          <h1>Build Together</h1>
          <div className="dash"></div>
          <h3>build better</h3>
          <h5>Check out all open projects!</h5>
        </div>
        
      </div> */}
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
