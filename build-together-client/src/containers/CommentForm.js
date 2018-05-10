import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createComment } from '../actions/comment_actions'
import { fetchProject, loadComments } from '../actions/project_actions'
import { Link } from 'react-router-dom'

class CommentForm extends Component {
  constructor(props) {
    
    super(props);
    
    this.state = {
      title: "",
      description: "",
      project_id: this.props.currentProject.id
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit(event) {
    
    event.preventDefault();

    if(this.props.createComment(this.state)){
      this.props.history.replace(`/projects/${this.state.project_id}`)
    } else {
      window.alert("sorry")
    }

  }

  render() {
    
    return(
      <div className="row comment-form">
        
        <div className="col-sm-7">
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <div className="form-group">
              <label>Title</label>
              <input 
              type="text"
              onChange={(event) => this.handleChange(event)}
              name="title"
              value={this.state.title}
              className="form-control"
              />

              <label>Description</label>
              <textarea 
              onChange={(event) => this.handleChange(event)}
              name="description"
              value={this.state.description}
              className="form-control"
              />
              
              <button type="submit" className="btn custom-btn">Submit</button>
            </div>
          </form>
          {/* <Link  to={`/projects/${this.props.currentProject.id}`} className="project-show-page-links">Back</Link> */}
        </div>
        
        <div className="col-sm-3"></div>  
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  
  return {
    commentor: state.auth.user.name,
    currentProject: state.projects[Object.getOwnPropertyNames(state.projects)[0]]
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createComment: createComment,
    fetchProject: fetchProject,
    // loadComments: loadComments
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)