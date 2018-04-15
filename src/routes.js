import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
import Container from './container.js'
import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory()

const routes = (
  <HashRouter history={customHistory} >
    <div>
      <Route path="/" component={Container} />
      <Redirect from='*' to='/login' />
    </div>
  </HashRouter>
)

export default routes;
