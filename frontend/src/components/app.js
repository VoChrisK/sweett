import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import DashboardContainer from './dashboard/dashboard_container';
import Splash from './splash/splash';
import LeetcodeContainer from './leetcode/leetcode_container';



const App = () => (
  <div className="app">
    <NavBarContainer />
    <Switch>
      <ProtectedRoute path="/dashboard" component={DashboardContainer} />
      <AuthRoute exact path="/" component={Splash} />
      
      <ProtectedRoute path="/leetcode" component={LeetcodeContainer} />

    </Switch>
    </div>
);

export default App;

