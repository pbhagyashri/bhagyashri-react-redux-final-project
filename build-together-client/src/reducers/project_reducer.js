export default (state = {
  projects: []
}, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
  
    return {
      ...state,
      projects: state.projects.concat(action.payload) 
    }
    default: 
      return state
  }
}