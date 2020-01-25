import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import DashboardContainer from './dashboard/dashboard_container';
import Splash from './splash/splash';
import LeetcodeContainer from './leetcode/leetcode_container';
import SplashContainer from './splash/splash_container'



const App = () => (
  <div className="app">
    <NavBarContainer />
    <Switch>
      <ProtectedRoute path="/dashboard" component={DashboardContainer} />
      <AuthRoute exact path="/" component={SplashContainer} />
      <ProtectedRoute path="/leetcode" component={LeetcodeContainer} />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  </div>
);

export default App;

