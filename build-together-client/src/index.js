import React from 'react';
import ReactDOM from 'react-dom';
import Redux from 'redux'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import {rootReducer} from './reducers/index'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  
  document.querySelector('.container')
);
registerServiceWorker();