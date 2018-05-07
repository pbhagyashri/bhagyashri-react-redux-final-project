import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectShowpage from '../components/ProjectShowpage'

import { fetchProject, deletePost } from '../actions/project_actions'
class ProjectShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params
    if(!this.props.project){
      this.props.fetchProject(id);
    }
  }

  handleOnDelete(event) {
    
    const { id } = this.props.match.params

    this.props.deletePost(id)
    this.props.history.replace('/projects')
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
          <ProjectShowpage project={project} currentUser={this.props.user}/>
          {this.props.user.id === project.user_id ? <button onClick={(event) => this.handleOnDelete(event)} id="delete-button">Delete</button> : ""}
        </div>
        <div className="col-sm-3"></div>
      </div>
    )
  }
}

const mapStateToProps = ({projects, auth}, ownProps) => {
  console.log(auth)
  return { 
    project: projects[ownProps.match.params.id],
    user: auth.user
  }
}

export default connect(mapStateToProps, { fetchProject, deletePost })(ProjectShow);