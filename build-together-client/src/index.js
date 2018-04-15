import React from 'react';
import ReactDOM from 'react-dom';
import Redux from 'redux'
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  
  <App />, 
  
  document.querySelector('.container')

);
registerServiceWorker();
