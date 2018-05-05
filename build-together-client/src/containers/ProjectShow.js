import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectShowpage from '../components/ProjectShowpage'

import { fetchProject } from '../actions/project_actions'
class ProjectShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params
    if(!this.props.project){
      this.props.fetchProject(id);
    }
  }

  render() {
    const { project } = this.props;

    if (!project) {
      return <div>Loading...</div>
    }

    return (
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <ProjectShowpage project={project}/>  
        </div>
        <div className="col-sm-3"></div>
      </div>
    )
  }
}

const mapStateToProps = ({projects}, ownProps) => {
  return { project: projects[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchProject })(ProjectShow);