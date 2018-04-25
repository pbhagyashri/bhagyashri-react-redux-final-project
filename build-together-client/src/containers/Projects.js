
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Project from '../components/Project'

class Projects extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      projects: [],
      user: {}
    }

  }

  setProjects(projects) {
    this.setState = {
      projects: projects.concat(projects)
    }
  }

  componentDidMount() {
    fetch("http://192.168.1.190:3001/api/projects", {
      method: "GET",
      headers: {
        'Authorization': localStorage.Token,
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(jsonres => {
      debugger
      this.setProjects(jsonres)
    })
  }

  render() {
    return(
      <div>
        <Project projects={projects}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}


export default connect(mapStateToProps)(Projects);