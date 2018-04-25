
export default (state = {
  token: null,
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
        authenticated: false,
        token: action.tokenauthenticate
      }
    case 'USER_AUTHENTICATED':
      return {
        ...state,
        token: action.token,
        authenticated: true,
        authenticating: false,
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
    case 'LOGGEDIN':
      return {
        ...state,
        user: action.user
      }
    
      case 'LOGGEDOUT':
      return {
        ...state,
        token: null,
        authenticated: false,
        authenticating: false,
        user: {}
      }

    default:
      return state
      console.log("Current State", state)
  }

}

