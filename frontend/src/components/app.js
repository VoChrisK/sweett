import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import DashboardContainer from './dashboard/dashboard_container';
import Splash from './splash/splash';
const App = () => (
  <div className="app">
    <NavBarContainer />
    <Switch>
      <ProtectedRoute path="/dashboard" component={DashboardContainer} />
      <AuthRoute exact path="/" component={Splash} />
    </Switch>
    </div>
);

export default App;

