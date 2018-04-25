import fetch from 'isomorphic-fetch';

const API_URL = "http://192.168.1.190:3001/api"

export const fetchProjects = (project) => {
  
  return dispatch => {

    return fetch(`${API_URL}/projects`, {
      method: "POST",
    
      headers: {
        'Authorization': localStorage.Token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({project: project})
      
    })
    .then(res => res.json())
    .then(project => {
      dispatch({
        type: 'ADD_PROJECT',
        payload: project
    })
    })
    .catch(err => console.log(err))
  }
}