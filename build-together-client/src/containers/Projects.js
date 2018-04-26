
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProjects } from '../actions/project_actions'

import Project from '../components/Project'

class Projects extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      projects: []
    }

  }

  componentDidMount() {
    this.props.fetchProjects()
  }

  render() {
    
    return(
      <div>
        <Project projects={this.props.projects}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    projects: state.projects.projects
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchProjects: fetchProjects
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);