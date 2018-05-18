import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createComment } from '../actions/comment_actions'
import { fetchProject } from '../actions/project_actions'

class CommentForm extends Component {
  constructor(props) {
    
    super(props);
  
    this.state = {
      
      title: "",
      description: "",
      project_id: this.props.project_id,
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
    
    this.setState({
      title: "",
      description: "",
    })
  }

  render() {
    
    return(
      <div className="container-fluid create-project-container">
        <div className="row comment-form">
          <div className="row">
            <div className="col-sm-7">
              <h2>Write a Comment!</h2>
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
          </div>
          
          <div className="col-sm-3"></div>  
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({auth, projects}, ownProps) => {
  
  return {
    user_name: auth.user.name,
    project_id: ownProps.match.params.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createComment: createComment,
    fetchProject: fetchProject,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)