import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
import App from './App.js'
import Login from './pages/login/login.js'
import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory()

const routes = (
  <HashRouter history={customHistory} >
    <div>
      <Route path="/" component={App} />
      <Route path="/login" component={Login}/>
      <Redirect from='*' to='/login' />
    </div>
  </HashRouter>
)

export default routes;
