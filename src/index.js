import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import rootReducer from 'reducers';
// import { createStore } from 'redux';
import './index.css';
import routes from './routes.js'
import registerServiceWorker from './registerServiceWorker';
// import createStore from 'antd/lib/table/createStore';

// const store = createStore()

ReactDOM.render(  
  <div>
    { routes }
  </div>
  , document.getElementById('root'));
registerServiceWorker();
