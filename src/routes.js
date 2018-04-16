import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
import App from './App.js'
import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory()

const routes = (
  <HashRouter history={customHistory} >
    <div>
      <Route path="/" component={App} />
      
    </div>
  </HashRouter>
)

export default routes;
