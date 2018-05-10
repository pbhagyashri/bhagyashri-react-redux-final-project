import React from 'react';
import { Link } from 'react-router-dom'
import Comment from './Comment'

const ProjectShowpage = ({project, currentUser, comments}) => {  

  return(
    
    <div>
      <div>
        { project ?   
          <div className="project-show-card">
            <h3>{project.name}</h3>
            <h4>By, {project.user_name}</h4>
            <p>{project.description}</p>
            <h6>Technologies: {project.technology}</h6>
            <h6>Duration: {project.duration}</h6>
            <div className="linkDiv">
            {currentUser.id === project.user_id ? <Link key={project.id} to={`/projects/${project.id}/edit`} className="project-links">Edit Project</Link> : ""}
            
            {currentUser.id === project.user_id ? <a href="#" onClick={(event) => this.handleOnDelete(event)} id="delete-button" className="project-links">Delete</a> : ""}        
            <Link key={project.id} to={'/comments/new'} className="project-links">Create Comment</Link>

          </div>
            <div className="comment-container">
              <h3>Comments:</h3> 
              {comments.map((comment, index) => comment.project_id === project.id ? 
              < Comment comment={comment} currentUser={currentUser}/>
              : "")} 
            </div>
          </div>
        : <p>Loading...</p>}
      </div>
    </div>
  
  )
}

export default ProjectShowpage;
