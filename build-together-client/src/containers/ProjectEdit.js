import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editProject } from '../actions/project_actions'

class ProjectEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      technology: "",
      description: "",
      duration: "",
      user_id: this.props.user_id,
      user_name: this.props.user_name 
    }
  }

  componentDidMount() {
    if(this.props.projects.length > 0) {
      
      const projectToEdit = this.props.projects.filter(project => project.id === parseInt(this.props.match.params.id))["0"]

      this.setState({
        id: projectToEdit.id,
        name: projectToEdit.name,
        technology: projectToEdit.technology,
        description: projectToEdit.description,
        duration: projectToEdit.duration
      })
      
    } 
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleProjectSubmit(event) {
    event.preventDefault()
    
    this.props.editProject(this.state)
    this.props.history.replace(`/projects/${this.state.id}`)
  }

  render() {
    
    return (
      <div>
        <h1>Edit Project</h1>
        <form onSubmit={(event) => this.handleProjectSubmit(event)}>
           <div className="form-group">
            <label>Name:</label>
            <input 
            onChange={(event) => this.handleChange(event)}
            name="name"
            className="form-control"
            type="text" 
            placeholder="Please Choose a name"
            value={this.state.name}
            />

            <label>Technology:</label>
            <input 
            onChange={(event) => this.handleChange(event)}
            className="form-control"
            name="technology"
            type="text" 
            placeholder="Please enter the technologies used in your project"
            value={this.state.technology}
            />
            
            <label>Description:</label>
            <textarea
             
            onChange={(event) => this.handleChange(event)}
            name="description"
            className="form-control" 
            placeholder="Please enter a descriptiong of your project."
            value={this.state.description}
            />

            <label>Duration:</label>
            <input 
            onChange={(event) => this.handleChange(event)}
            name="duration"
            className="form-control"
            type="text" 
            placeholder="Please enter the duration of your project"
            value={this.state.duration}
            />

            <button type="submit" className="btn custom-btn">Submit</button>
          </div>
          </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects.projects
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    editProject: editProject
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectEdit);