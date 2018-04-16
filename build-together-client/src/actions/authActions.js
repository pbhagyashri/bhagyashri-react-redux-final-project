const API_URL = "http://localhost:3001"

const authRequest = () => {
  return {
      type: 'AUTHENTICATE_USER'
  }
}

export const authenticate = (credentials) => {
  return dispatch => {
      dispatch(authRequest())

      return fetch(`${API_URL}/login`, {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({auth: credentials})
      })
          .then(res => res.json())
          .then((response) => {
              const token = response.jwt;
              localStorage.setItem('token', token);
              debugger
          })
          // .then((user) => {
          //     dispatch(authSuccess(user, localStorage.token))
          // })
          .catch((errors) => {
              console.log(errors);
              dispatch(authFailure(errors))
              localStorage.clear()
          })
  }
}