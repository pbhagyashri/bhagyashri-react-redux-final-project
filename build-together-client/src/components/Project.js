import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Like from '../containers/LikeButton'

class Project extends Component {
    
  render () {
    
    const {project} = this.props

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
            
            <div><Like project={project}/></div>
            <div><h2>{project.likes.length}</h2></div>
          </div>
        : <p>Loading...</p>}
      </div>
        
    )
  }  
}

export default Project;
