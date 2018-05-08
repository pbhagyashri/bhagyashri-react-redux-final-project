import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectShowpage from '../components/ProjectShowpage'
import { Link } from 'react-router-dom'
import { fetchProject, deletePost, loadComments } from '../actions/project_actions'

import CommentForm from './CommentForm'

class ProjectShow extends Component {

  componentDidMount() {
    
    const { id } = this.props.match.params
    if(!this.props.project){
      this.props.fetchProject(id);
      this.props.loadComments(id);
    }
  }

  handleOnDelete(event) {
    const { id } = this.props.match.params
      this.props.deletePost(id)
      this.props.history.replace('/projects')
  }

  render() {
    
    const { project } = this.props

    if (!project) {
      return <div>Loading...</div>
    }

    return (
    <div className="container-fluid create-project-container">
      <div className="row">
        <ProjectShowpage project={project} currentUser={this.props.user} comments={this.props.comments}/>
          
        {this.props.user.id === project.user_id ? <Link key={project.id} to={`/projects/${project.id}/edit`} className="project-show-page-links">Edit Project</Link> : ""}
        
        {this.props.user.id === project.user_id ? <a href="#" onClick={(event) => this.handleOnDelete(event)} id="delete-button" className="project-show-page-links">Delete</a> : ""}        
      </div>
      <CommentForm />
    </div>
    )
  }
}

const mapStateToProps = ({projects, auth}, ownProps) => {
  // console.log("Projects COmments?", projects.comments)
  return { 
    project: projects[ownProps.match.params.id],
    user: auth.user,
    comments: projects.comments
  }
}

export default connect(mapStateToProps, { fetchProject, deletePost, loadComments })(ProjectShow);