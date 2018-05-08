export default (state = {
  title: "",
  description: ""
  
}, action) => {
  switch (action.type) {
  
    case 'CREATE_PROJECT':

    return {
      ...state,
      title: action.payload.title,
      description: action.payload.description
    }
    default: 
      return state
  }
}