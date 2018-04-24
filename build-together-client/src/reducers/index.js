import { combineReducers } from 'redux';
import auth_reducer from './auth_reducer'
import project_reducer from './project_reducer'

export const rootReducer = combineReducers({
  auth: auth_reducer,
  projects: project_reducer
});

