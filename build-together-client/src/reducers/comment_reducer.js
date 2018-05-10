export default (state = {
  title: "",
  description: "",
  project_id: null
  
}, action) => {
  switch (action.type) {
  
    // case 'CREATE_COMMENT':
    
    // return {
    //   ...state,
    //   title: action.payload.title,
    //   description: action.payload.description,
    //   project_id: action.payload.project_id
    // }
    default: 
      return state
  }
}