
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
        token: action.tokenauthenticate
      }
    case 'USER_AUTHENTICATED':
      return {
        ...state,
        token: action.token,
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
    case 'LOGGEDIN':
      return {
        ...state,
        user: action.user
      }

    default:
      return state
      console.log("Current State", state)
  }

}

