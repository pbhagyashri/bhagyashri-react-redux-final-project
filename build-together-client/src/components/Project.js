import React from 'react';
import { Link } from 'react-router-dom'

const Project = ({project}) => {
  
  return(
    
    <div className="col-md-4">
      { project ? 
        
        <div className="project-card">
          <h3>{project.name}</h3>
          <h4>By, {project.user_name}</h4>
          <p>{project.description}</p>
          <h6>Technologies: {project.technology}</h6>
          <h6>Duration: {project.duration}</h6>
          <p><a href={project.github_link} target="_blank">Github</a></p>
          <Link key={project.id} to={`/projects/${project.id}`}>Learn More</Link>
        </div>
      : <p>Loading...</p>}
    </div>
    
  )
}

export default Project;
