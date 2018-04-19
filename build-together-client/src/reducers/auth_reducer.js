
export default (state = {
  token: null,
  name: "",
  authenticating: false,
  authenticated: false,
  errors: [],
  user: {}
}, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_USER':

      return {
        ...state,
        authenticating: true,
        token: action.tokenauthenticate
      }
    case 'USER_AUTHENTICATED':
    
      return {
        ...state,
        token: action.token,
        name: action.user.name,
        authenticated: true,
        user: action.user,
      
      }
    case 'AUTHENTICATION_FAILURE':
      return {
        token: null,
        name: "",
        authenticating: false,
        authenticated: false,
        errors: action.errors
      }
    default:
      return state
  }

}

