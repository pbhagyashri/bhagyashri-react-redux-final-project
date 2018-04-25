
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Project from '../components/Project'

class Projects extends Component {
  
  // constructor(props) {
  //   super();

  //   this.state = {
      
  //   }

  // }

  render() {
    return(
      <div>
        <Project />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects.projects,
    user: state.auth.user
  }
}


export default connect(mapStateToProps)(Projects);