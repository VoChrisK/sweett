import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import DashboardContainer from './dashboard/dashboard_container';
import SplashContainer from './splash/splash_container'
import CategoryShowContainer from './category/category_show_container';

const App = () => (
  <div className="app">
    <NavBarContainer />
    <Switch>
      <ProtectedRoute path="/categories/:categoryId" component={CategoryShowContainer} />
      <ProtectedRoute path="/dashboard" component={DashboardContainer} />
      <AuthRoute exact path="/" component={SplashContainer} />
      <Route path="*">
        <Redirect to="/" />
      </Route>

    </Switch>
  </div>
);

export default App;

