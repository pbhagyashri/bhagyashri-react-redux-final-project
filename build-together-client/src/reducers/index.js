import { combineReducers } from 'redux';
import auth_reducer from './auth_reducer'
import project_reducer from './project_reducer'
import comment_reducer from './comment_reducer';

export const rootReducer = combineReducers({
  auth: auth_reducer,
  projects: project_reducer,
  comments: comment_reducer
});

