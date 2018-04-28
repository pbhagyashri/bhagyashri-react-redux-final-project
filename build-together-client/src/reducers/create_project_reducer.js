export default (state = {
  
  name: "",
  technology: "",
  description: "",
  duration: "",

}, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
  
    return {
      
      ...state,
      name: action.name,
      technology: action.technology,
      description: action.description,
      duration: action.duration,
    }
    default: 
      return state
  }
}