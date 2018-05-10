export default (state = {
  comments: []
  
}, action) => {
  switch (action.type) {
  
    case 'ADD_COMMENTS':

      return {
        ...state,
        comments: action.comments
      }
    
    case 'CREATE_COMMENT':
  
      return {
        ...state,
        comments: state.comments.concat(action.payload)
      }

    default: 
      return state
  }
}