import React, { Component } from 'react';
import { connect } from 'react-redux';

const API_URL = "http://192.168.1.190:3001/api"

class ProjectForm extends Component {
  
  constructor(props) {

    super(props);
    
    this.state = {
      name: "",
      languages: "",
      description: "",
      duration: "",
      user_id: this.props.user_id
    }
  }//constructor

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  createProject (project) {
    
    fetch(`${API_URL}/projects`, {
      method: 'POST',
      body: JSON.stringify({project: project}),
      header: {
        'Authorization': localStorage.Token,
        'Content-Type': 'application/json'
      }
      
    })
    .then(res => res.json())
    .then(jres => {
      console.log("Form Submit", jres)
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    
    if(this.state.name !== "") {
      this.createProject(this.state)
    }
  }

  render() {
 
    return (
      <div className="custom-container row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <label>Name:</label>
            <input 
            type="text" 
            className="form-control"
            placeholder="Please Choose a name"
            name="name"
            onChange={(event) => this.handleChange(event)}
            
            />

            <label>Languages:</label>
            <input 
            type="text" 
            className="form-control"
            name="languages"
            placeholder="Please enter the languages and frameworks"
            onChange={(event) => this.handleChange(event)}
            />
            
            <label>Description:</label>
            <textarea 
            type="text" 
            className="form-control"
            name="description"
            placeholder="Please enter a descriptiong of your project."
            onChange={(event) => this.handleChange(event)}
            />

            <label>Duration:</label>
            <input 
            type="text" 
            className="form-control"
            name="duration"
            placeholder="Please enter the duration of your project"
            onChange={(event) => this.handleChange(event)}
            />

            <button type="submit" className="btn custom-btn">Submit</button>

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

export default connect(mapStateToProps)(ProjectForm);