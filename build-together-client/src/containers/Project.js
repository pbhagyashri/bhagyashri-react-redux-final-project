import React, { Component } from 'react';

class Project extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: "",
      languages: [],
      description: "",
      duration: "",
      user_id: "",
    }
  }//constructor

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
  
    return (
      <div className="custom-container row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <form>
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
            className="languages"
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
        <div className="col-sm-4"></div>
      </div>
    )
  }
}

export default Project