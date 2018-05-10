const API_URL = "http://192.168.1.190:3001/api"

export const createComment = (comment) => {
  
  return dispatch => {

    return fetch(`${API_URL}/comments`, {
      method: "POST",

      headers: {
        'Authorization': localStorage.Token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({comment: comment})
    })
    .then(res => res.json())
    .then(response => {
  
      dispatch({
        type: 'CREATE_COMMENT',
        payload: response
      })
    })
    .catch(err => console.log(err))

  }

}
