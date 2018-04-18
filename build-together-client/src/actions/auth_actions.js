const API_URL = "http://192.168.1.190:3001/api"

function authRequest() {
  return {
    type: 'AUTHENTICATE_USER'
  }
}

function authSuccess(user) {
  debugger
  return {
    type: 'USER_AUTHENTICATED',
    user
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
              localStorage.setItem('Token', token["token"]);
              
              return getUser(token)
          })
          .then((user) => {
              dispatch(authSuccess(user, localStorage.token))
          })
          .catch((errors) => {
              console.log(errors);
              // dispatch(authFailure(errors))
              // localStorage.clear()
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
