// const API_URL = "http://localhost:3001"

function authRequest() {
  return {
    type: 'AUTHENTICATE_USER'
  }
}

export const authenticate = (credentials) => {

  return dispatch => {
      dispatch(authRequest())
    
      return fetch("http://192.168.1.190:3001/api/login", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(credentials)
      })
          .then(res => res.json())
          .then((response) => {
        
              const token = response;
              localStorage.setItem('Token', token["token"]);
              debugger
              //return getUser(credentials)
          })
          // .then((user) => {
          //     dispatch(authSuccess(user, localStorage.token))
          // })
          .catch((errors) => {
              console.log(errors);
              // dispatch(authFailure(errors))
              // localStorage.clear()
          })
  }
}

// fetch("http://192.168.1.190:3001/api/users", {
//   method: "GET",
//   headers: {'Content-Type': 'application/json'}
// })
// .then(res => res.json())
// .then((response) => console.log(response))
// .catch(errors => console.log(errors))

// fetch("http://192.168.1.190:3001/api/login", {
//   method: "POST",
//   headers: {'Content-Type': 'application/json'},
//   body: JSON.stringify({

//     "email": "bman@gmail.com",
//     "password_digest": "cape"

//   })
// })
// .then(res => res.json())
// .then((response) => console.log(response))
// .catch(errors => console.log(errors))



