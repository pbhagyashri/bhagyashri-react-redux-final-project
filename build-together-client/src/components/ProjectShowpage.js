import React from 'react';
import { Link } from 'react-router-dom'

const ProjectShowpage = ({project}) => {
  
  return(
    
    <div>
      { project ?   
        <div className="project-show-card">
          <h3>{project.name}</h3>
          <h4>By, {project.user_name}</h4>
          <p>{project.description}</p>
          <h6>Technologies: {project.technology}</h6>
          <h6>Duration: {project.duration}</h6>
          <Link key={project.id} to={`/projects/${project.id}/edit`}>Edit Project</Link>
        </div>
      : <p>Loading...</p>}
    </div>
    
  )
}

export default ProjectShowpage;
