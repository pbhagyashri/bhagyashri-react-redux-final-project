export default (state = {
  
  name: "",
  technology: "",
  description: "",
  duration: "",
  github_link: ""

}, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
  
    return {
      
      ...state,
      name: action.name,
      technology: action.technology,
      description: action.description,
      duration: action.duration,
      github_link: action.github_link
    }
    default: 
      return state
  }
}