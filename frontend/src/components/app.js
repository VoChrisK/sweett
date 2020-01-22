import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import DashboardContainer from './dashboard/dashboard_container'

const App = () => (
  <div id="app">
    <NavBarContainer />
    <Switch>
      <ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
      <AuthRoute exact path="/" component={MainPage} />
    </Switch>
  </div>
);

export default App;