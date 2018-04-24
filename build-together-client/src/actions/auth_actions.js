import fetch from 'isomorphic-fetch';

const API_URL = "http://192.168.1.190:3001/api"

const authRequest = () => {
  return {
    type: 'AUTHENTICATE_USER',
  }
}

const authSuccess = (user, token) => {
 
  return {
    type: 'USER_AUTHENTICATED',
    user: user,
    token: token
  }
}

const authFailure = (errors) => {
  
  return {
    type: 'AUTHENTICATION_FAILURE',
    errors: errors.message
  }
}

export const signupUser = (credentials) => {

  return dispatch => {
    
    return fetch(`${API_URL}/signup`, {
      
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(credentials)
    })
    .then(res => res.json())
    .then(response => {
      const token = response["token"];
      localStorage.setItem('Token', token);
      return getUser(token)
    })
    .then((user) => {

      dispatch(authSuccess(user, localStorage.Token))
    })
    .catch( error => {
      console.log(error);
      
      dispatch(authFailure(error))
      localStorage.clear()
    })
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
        
          if (response.errors) {
            throw Error(response.errors);
          } else if (response.token){
            
            const token = response["token"];
            localStorage.setItem('Token', token);
            return getUser(token)
          }        
        })
        .then((user) => {
          dispatch(authSuccess(user, localStorage.Token))
        })
        .catch( error => {
          console.log(error);
          
          dispatch(authFailure(error))
          localStorage.clear()
        })
  }
}

export const getUser = (token) => {
  
  return fetch("http://192.168.1.190:3001/api/find_user", {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.Token}`,
    }),
    body: JSON.stringify({token: token})
  })
  .then((res) => res.json())
  .then((response, token) => {
    if (response.errors) {
      throw Error(response.errors);
      
    } else{
      
      return response
    }
  })
  .catch((error) => {
    return error;
    localStorage.clear()
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
