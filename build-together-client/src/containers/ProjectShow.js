import React, { Component } from 'react';
import { connect } from 'react-redux';
import Project from '../components/Project'

import { fetchProject } from '../actions/project_actions'
class ProjectShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchProject(id);
  }

  render() {
    const { project } = this.props;

    if (!project) {
      return <div>Loading...</div>
    }

    return (
      <div className="create-project-container">
        <Project project={project}/>
      </div>
    )
  }
}

const mapStateToProps = ({projects}, ownProps) => {
  
  return { project: projects[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchProject })(ProjectShow);