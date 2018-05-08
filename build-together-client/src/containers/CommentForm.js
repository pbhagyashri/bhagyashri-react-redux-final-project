import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createComment } from '../actions/comment_actions'

class CommentForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: "",
      description: "",
      project_id: null
    }
  }

  handleChange(event) {
    
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit(event) {

    event.preventDefault();
    debugger
    this.props.createComment(this.state);
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

const mapStateToProps = ({projects, new_comment}, ownProps) => {
  return {
//     project: projects[ownProps.match.params.id],
//     comment: new_comment

 }
}

export default connect(mapStateToProps, {createComment})(CommentForm)