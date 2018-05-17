import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectShowpage from '../components/ProjectShowpage'
import { Link } from 'react-router-dom'
import { createComment } from '../actions/comment_actions'
import { fetchProject, deletePost, loadComments } from '../actions/project_actions'

import Comment from '../components/Comment'

import CommentForm from './CommentForm'

class ProjectShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params
    if(!this.props.project){
      this.props.fetchProject(id)
      this.props.loadComments(id)
    }
  
  }

  handleOnDelete(event) {
    const { id } = this.props.match.params
      this.props.deletePost(id)
      this.props.history.replace('/projects')
  }

  render() {
    
    const { project, comments, user } = this.props
    
    if (!project) {
      return <div>Loading...</div>
    }

    return (
    <div className="container-fluid create-project-container">
      <div className="row">
        <ProjectShowpage project={project} currentUser={user} comments={comments}/>
        <div className="linkDiv">
            {user.id === project.user_id ? <Link key={project.id} to={`/projects/${project.id}/edit`} className="project-links">Edit Project</Link> : ""}
            
            {user.id === project.user_id ? <a href="#" onClick={(event) => this.handleOnDelete(event)} id="delete-button" className="project-links">Delete Project</a> : ""}        
            <div className="comment-container">
              <h3>Comments:</h3> 
              {this.props.comments.map((comment, index) => comment.project_id === project.id ? 
              < Comment comment={comment} />
              : "")} 
            </div>
          </div>  
        <CommentForm />
      </div>
      
    </div>
    )
  }
}

const mapStateToProps = ({projects, auth}, ownProps) => {
  
  return { 
    project: projects[ownProps.match.params.id],
    user: auth.user,
    comments: projects.comments
  }
}

export default connect(mapStateToProps, { fetchProject, deletePost, loadComments, createComment })(ProjectShow);