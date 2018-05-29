export default (state = {
  projects: []
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
    
    const filteredProjects = state.projects.filter(project => project.id !== parseInt(action.payload))
      return {
        ...state,
        projects: filteredProjects
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

