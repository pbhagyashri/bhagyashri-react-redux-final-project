
export default (state = {
  token: null
}, action) => {
  switch (action.type) {
    case 'AUTHENTICATE_USER':
      return {
        ...state,
        token: action.token
      }
    default:
      return state
  }

}

