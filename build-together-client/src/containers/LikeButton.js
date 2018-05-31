import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addLike } from '../actions/project_actions'
import {fetchProjects} from '../actions/project_actions'

const API_URL = "http://192.168.1.190:3001/api"

class Like extends Component {
  constructor(props) {
    
    super(props),

    this.state = {
      num_of_likes: 1,
      project_id: props.project.id
    }
  }

  handleClick = () => {
    this.props.addLike(this.state)
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>Like</button>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addLike: addLike,
    fetchProjects: fetchProjects
  }, dispatch);
};

export default connect(null,mapDispatchToProps)(Like);