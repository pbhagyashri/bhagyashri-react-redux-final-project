import React from 'react';
import { Link } from 'react-router-dom'

const ProjectShowpage = ({project, currentUser, comments}) => {  
  debugger
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
            <div>
              Comments: {comments.map((comment, index) => comment.project_id === project.id ? <p key={index}>{comment.title}</p> : "")}
            </div>
          </div>
        : <p>Loading...</p>}
      </div>
    </div>
  
  )
}

export default ProjectShowpage;
