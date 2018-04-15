import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
// import App from './App';
import routes from './routes.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(  <Provider>
    { routes }
  </Provider>, document.getElementById('root'));
registerServiceWorker();
