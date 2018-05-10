import React from 'react';

const Comment = ({comment}) => {
  
  return (
    <div className="comment-card">
     
      <h4>{comment.title}</h4>
      <p>{comment.description}</p>
    </div> 
  )
}

export default Comment;