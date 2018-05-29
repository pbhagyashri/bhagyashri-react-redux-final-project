export default (state = {
  comments: [],
}, action) => {
  switch (action.type) {
  
    case 'CREATE_COMMENT':
    
      return {
        ...state,
        comments: state.comments.concat(action.payload)
      }
    case 'GET_COMMENTS':
      
      return {
        ...state,
        comments: action.payload
      }

    default: 
      return state
  }
}