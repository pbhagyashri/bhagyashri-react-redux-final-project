import React from 'react';

const Project = ({project}) => {
  
  return(
    
    <div className="col-sm-4">
      { project ? 
        
        <div className="project-card">
        <h3>{project.name}</h3>
        <h4>{project.description}</h4>
        <h6>Technologies: {project.technology}</h6>
        <h6>Duration: {project.duration}</h6>
        
        </div>
      : <p>Loading...</p>}
    </div>
    
  )
}

export default Project;