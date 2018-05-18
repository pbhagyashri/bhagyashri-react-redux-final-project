import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { editComment } from '../actions/project_actions'

class EditComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      title: "",
      description: "",
      user_id: this.props.user_id,
      project_id: null
    }
  }

  componentDidMount() {
    const { comment } = this.props

    this.setState({
      id: comment.id,
      title: comment.title,
      description: comment.description,
      project_id: comment.project_id
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  handleSubmit(event) {
    event.preventDefault()
    this.props.editComment(this.state)
    this.props.history.replace(`/projects/${this.state.project_id}`)
  }

  render() {
    return(
      <div className="row comment-form create-project-container">
        <h3>Edit Comment</h3>
        <div className="col-sm-7">
          <form onSubmit={(event) => this.handleSubmit(event)}>
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

const mapStateToProps = ({ auth, all_comments }, ownProps) => {
  return {
    user_id: auth.user.id,
    comment: all_comments.comments.filter(comment => comment.id === parseInt(ownProps.match.params.id))[0]
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    editComment: editComment
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EditComment);