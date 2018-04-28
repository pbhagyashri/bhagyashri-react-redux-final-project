import { combineReducers } from 'redux';
import auth_reducer from './auth_reducer'
import project_reducer from './project_reducer'
import create_project_reducer from './create_project_reducer';

export const rootReducer = combineReducers({
  auth: auth_reducer,
  new_project: create_project_reducer,
  projects: project_reducer
});

