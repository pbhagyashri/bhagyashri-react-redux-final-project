import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createProject } from '../actions/project_actions'

class ProjectForm extends Component {
  
  constructor(props) {

    super(props);
    
    this.state = {
      name: "",
      technology: "",
      description: "",
      duration: "",
      user_id: this.props.user_id,
    }
  }//constructor

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleProjectSubmit(event) {
    event.preventDefault() 
    this.props.createProject(this.state)

    if(this.state.name !== ""){
      this.props.history.push("/projects")
    }else{
      window.alert("sorry")
    }

  }

  render() {
 
    return (
      <div className="custom-container row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <h2>Create a  Project</h2>
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
            <input 
            onChange={(event) => this.handleChange(event)}
            name="description"
            className="form-control"
            type="text" 
            placeholder="Please enter a descriptiong of your project."
            value={this.state.value}
            />

            <label>Duration:</label>
            <input 
            onChange={(event) => this.handleChange(event)}
            name="duration"
            className="form-control"
            type="text" 
            placeholder="Please enter the duration of your project"
            value={this.props.duration}
            />

            <button type="submit" className="btn custom-btn">Submit</button>
          </div>
          </form>
        </div>
        <div className="col-sm-2"></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user_id: state.auth.user.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createProject: createProject
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);