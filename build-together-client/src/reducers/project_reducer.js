export default (state = {
  projects: [],
  comments: []
}, action) => {
  switch (action.type) {
    
    case 'ADD_ALL_PROJECTS':
    return {
      ...state,
      projects: action.projects
    }

    case 'ADD_PROJECT':
    
    return {
      ...state,
      projects: state.projects.concat(action.payload),

    }

    case 'GET_PROJECT':
      return {
        ...state,
        [action.project.id]: action.project
      }

    case 'DELETE_PROJECT':
      return {
        ...state,
        projects: state.projects.filter(project => project.id !== parseInt(action.payload))
      }

    case 'ADD_COMMENTS':
      return {
        ...state,
        comments: action.comments
      }

    default: 
      return state
  }
}