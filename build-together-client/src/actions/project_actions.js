import fetch from 'isomorphic-fetch';

const API_URL = "http://192.168.1.190:3001/api"

const fetchProjectSuccess = (projects) => {
  return {
    type: 'ADD_ALL_PROJECTS',
    projects: projects
  }
}

const fetchProjectById = (project) => {
  return {
    type: 'GET_PROJECT',
    project: project
  }
}

const editProjectById = (project) => {
  return {
    type: 'EDIT_PROJECT',
    project: project
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

    .then(response => {
      if (project.message) {
        throw Error(project.message.name, project.message.user);
      } else{
      dispatch({
        type: 'ADD_PROJECT',
        payload: response
    })}
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export const fetchProjects = () => {
  return dispatch => {

    fetch(`${API_URL}/projects`, {
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

export const fetchProject = (id) => {
  return dispatch => {
    fetch(`${API_URL}/projects/${id}`, {
      method: "GET",
      headers: {
        'Authorization': localStorage.Token,
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(jres => {
      dispatch(fetchProjectById(jres))
    })
    .catch(error => {
      console.log(error)
    })
  }
}

export const editProject = (project) => {
  
  return dispatch => {
    fetch(`${API_URL}/projects/${project.id}`, {
      method: "PUT",
      headers: {
        'Authorization': localStorage.Token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({project: project})
    })
    .then(res => res.json())
    .then(response => {
      dispatch(fetchProjectById(response))
    })
    .catch(error => {
      console.log(error)
    })
    
  }
}