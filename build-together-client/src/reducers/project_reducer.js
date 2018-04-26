export default (state = {
  name: "",
  technology: "",
  description: "",
  duration: "",
  projects: []
}, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
   
    return {
      ...state,
      name: action.payload.name,
      technology: action.payload.technology,
      description: action.payload.description,
      duration: action.payload.duration
    }

    case 'ADD_ALL_PROJECTS':
    return {
      ...state,
      projects: state.projects.concat(action.projects)
    }


    default: 
      return state
  }
}