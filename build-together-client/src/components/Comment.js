import React from 'react';
import { Link } from 'react-router-dom'

const Comment = ({comment}) => {

  return (
    <div className="comment-card">
      <h6>{comment.user_name}</h6>
      <h4>{comment.title}</h4>
      <p>{comment.description}</p>
    </div> 
  )
}

export default Comment;