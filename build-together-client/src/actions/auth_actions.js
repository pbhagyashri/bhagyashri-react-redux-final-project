const API_URL = "http://192.168.1.190:3001/api"

const authRequest = () => {
  return {
    type: 'AUTHENTICATE_USER',
  }
}

const authSuccess = (user, token) => {
  return {
    type: 'USER_AUTHENTICATED',
    user: user
  }
}

const authFailure = (errors) => {
  return {
    type: 'AUTH_FAILURE',
    errors: errors
   
  }
}

export const authenticate = (credentials) => {

  return dispatch => {
      dispatch(authRequest())
    
      return fetch(`${API_URL}/login`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(credentials)
      })
          .then(res => res.json())
          .then((response) => {
        
              const token = response["token"];
              localStorage.setItem('Token', token);
              return getUser(token)
          })
          .then((user) => {
            debugger
            let token = user.returned_token.token
            dispatch(authSuccess(user, token))
            return token
          })
          .catch((errors) => {
              console.log(errors);
              dispatch(authFailure(errors))
              localStorage.clear()
          })
  }
}

export const getUser = (token) => {
  
  return fetch("http://192.168.1.190:3001/api/find_user", {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({token: token})
  })
  .then((res) => res.json())
  .then((response) => {
    return response
  })
}


// fetch("http://192.168.1.190:3001/api/projects", {
//           method: 'POST',
//           headers: {'Authorization': localStorage.Token},
//       })
//           .then(res => res.json())
//           .then((response) => {
//             console.log(response)
//           })
