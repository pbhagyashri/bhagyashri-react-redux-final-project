
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProjects } from '../actions/project_actions'

import Project from '../components/Project'

class Projects extends Component {

  componentDidMount() {
    this.props.fetchProjects()
  }

  render() {
    
    return(
      <div className="project-container container-fluid" id="project-element" ref="test">
        <div className="row">
          <h2>Open Projects</h2>
          <div>
            { this.props.projects.projects.length > 0 ?
              this.props.projects.projects.map((project, index) => <Project project={project} key={index} />) : <p>Not Found</p>
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.auth.user,
    projects: state.projects
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchProjects: fetchProjects
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);

