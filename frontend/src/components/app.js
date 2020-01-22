import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import DashboardContainer from './dashboard/dashboard_container';
import Splash from './splash/splash';
const App = () => (
  <div className="big-boi">
    <NavBarContainer />
    <Switch>
      <ProtectedRoute path="/dashboard" component={DashboardContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route path="/" component={MainPage} />
  <div id="app">
    <NavBarContainer />
    <Switch>
      <ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
      <AuthRoute exact path="/" component={Splash} />
    </Switch>
  </div>
);

export default App;

