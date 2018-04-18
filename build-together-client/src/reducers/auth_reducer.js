
export default (state = {
  token: null,
  user: ""
}, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_USER':

      return {
        ...state,
        token: action.token
      }
    case 'USER_AUTHENTICATED':
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }

}

