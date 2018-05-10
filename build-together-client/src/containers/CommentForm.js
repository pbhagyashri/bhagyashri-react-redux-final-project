import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createComment } from '../actions/comment_actions'
import { fetchProject, loadComments } from '../actions/project_actions'
import { getUser } from '../actions/auth_actions';
import { Link } from 'react-router-dom'

class CommentForm extends Component {
  constructor(props) {
   
    super(props);
  
    this.state = {
      
      title: "",
      description: "",
      project_id: this.props.currentProject.id,
      user_name: this.props.user_name
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit(event) {
    
    event.preventDefault();
    this.props.createComment(this.state)
    
    // this.setState({
    //   title: "",
    //   description: "",
    // })

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
        </div>
        
        <div className="col-sm-3"></div>  
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user_name: state.auth.user.name,
    currentProject: state.projects[Object.getOwnPropertyNames(state.projects)[0]]
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createComment: createComment,
    fetchProject: fetchProject,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)