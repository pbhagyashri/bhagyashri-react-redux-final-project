
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProjects } from '../actions/project_actions'

import Project from '../components/Project'
import Footer from '../components/Footer'

class Projects extends Component {

  componentDidMount() {
    
    this.props.fetchProjects()
    window.scroll(0, 400);
  }

  render() {
    const { projects } = this.props
    
    return(
      <div>
        <div className="create-project-container container-fluid" id="project-element" ref="test">
          <div className="row">
            <h2>Open Projects</h2>
            <div>
              { projects.projects.length > 0 ?
                projects.projects.map((project) => <Project project={project} key={project.id} />) : <p>Not Found</p>
              }
            </div>
          </div>
        </div>
        
        <div className="row">
          <Footer />
        </div>
      
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  
  return {
    user: state.auth.user,
    projects: state.projects
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchProjects: fetchProjects
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);

