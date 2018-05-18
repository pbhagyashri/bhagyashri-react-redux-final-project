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

const fetchComments = (comments) => {
  return {
    type: 'ADD_COMMENTS',
    comments: comments
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
      debugger
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
     
      if (jsonres.error) {
        throw Error(jsonres.error);
      } else{
      dispatch(fetchProjectSuccess(jsonres))
      }
    })
    .catch( error => {
      console.log(error)
      window.alert("You must be logged in to view all projects")
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
      if (jres.error) {
        throw Error(jres.error);
      } else{
        dispatch(fetchProjectById(jres))
      }
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

export const deletePost = (id) => {
  return dispatch => {
    fetch(`${API_URL}/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': localStorage.Token,
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then( 
      dispatch({
      type: 'DELETE_PROJECT',
      payload: id
    }))
    .catch(error => console.log(error))
  }
}

export const loadComments = (id) => {
  return dispatch => {
    fetch(`${API_URL}/projects/${id}/comments`, {
      method: 'GET',
      headers: {
        'Authorization': localStorage.Token,
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(response => {
    
      dispatch(fetchComments(response))
    })
  }
}

export const editComment = (comment) => {
  
  return dispatch => {
    return fetch(`${API_URL}/comments/${comment.id}`, {
      method: "PUT",
      headers: {
        'Authorization': localStorage.Token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({comment: comment})
    })
    .then(res => res.json())
    .then(response => {
      
    })
  }
}