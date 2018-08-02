import { fetchProject } from "./project_actions";

const API_URL = "http://192.168.1.190:3001/api"

export const createComment = (comment) => {
  debugger
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
      debugger
      dispatch(fetchProject(response.project_id))
    })  
    .catch(err => console.log(err))
  }
}

export const fetchComments = (project_id) => {
  return dispatch => {
    return fetch(`${API_URL}/projects/${project_id}/comments`, {
      method: "Get",
      headers: {
        'Authorization': localStorage.Token,
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(json => {
      dispatch({
        type: 'GET_COMMENTS',
        payload: json
      })
    })
    .catch(err => console.log(err))
  }
}

