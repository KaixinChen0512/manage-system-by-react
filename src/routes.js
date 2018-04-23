import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Container from './container'
import Login from './pages/login'
// import createBrowserHistory from 'history/createBrowserHistory'
import notFound from './pages/notFound';
// import customAnalysis from './pages/customAnalysis';

// const customHistory = createBrowserHistory()

const routes = (
  <HashRouter>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/login" push />} />        
            <Route path="/app" component={Container} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/404" component={notFound} />
            <Route component={notFound} />
            {/*<Redirect from="*" to="/login" />*/}
        </Switch>
    </HashRouter>
)

export default routes;
