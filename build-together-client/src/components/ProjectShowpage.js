import React from 'react';
import Comment from '../components/Comment'
const ProjectShowpage = ({project, currentUser}) => {  
  
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
            <p><a href={project.github_link} target="_blank" className="github-link">Github</a></p>
          
            <div className="comment-container">
              
              {project.comments ? project.comments.map(comment => 
                <Comment comment={comment} key={comment.id}/>
              ) : ''}
            </div>
          </div>
        : <p>Loading...</p>}
      </div>
    </div>
  
  )
}

export default ProjectShowpage;
