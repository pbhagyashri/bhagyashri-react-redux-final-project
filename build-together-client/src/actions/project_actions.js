import fetch from 'isomorphic-fetch';

const API_URL = "http://192.168.1.190:3001/api"

const fetchProjectSuccess = (projects) => {
  return {
    type: 'ADD_ALL_PROJECTS',
    projects: projects
  }
}


export const createProject = (project) => {
  
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
     
      if (project.message) {
        throw Error(project.message.name, project.message.user);
      } else{
      dispatch({
        type: 'ADD_PROJECT',
        payload: project
    })}
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export const fetchProjects = () => {
  return dispatch => {

    fetch("http://192.168.1.190:3001/api/projects", {
      method: "GET",
      headers: {
        'Authorization': localStorage.Token,
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(jsonres => {
    
      dispatch(fetchProjectSuccess(jsonres))
    })
    .catch( error => {
      console.log(error)
    })

  }
}