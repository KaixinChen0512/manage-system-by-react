import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Container from './container'
import Login from './pages/login'
import createBrowserHistory from 'history/createBrowserHistory'
import notFound from './pages/notFound';

const customHistory = createBrowserHistory()

const routes = (
  <HashRouter>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/app/index" push />} />        
            <Route path="/app" component={Container} />
            <Route path="/404" component={notFound} />
            <Route path="/login" component={Login} />
            <Route component={notFound} />
        </Switch>
    </HashRouter>
)

export default routes;
