import React from 'react';
import { withRouter } from 'react-router-dom'
import CategoryIndexContainer from '../category/category_index_container';
import { formatDate } from './../../util/formats';

class Dashboard extends React.Component {
    
  

    render() {
        
        return (
          <div className="dashboard">
            <div className="dashboard-header">
                <h1 className="todays-date">Today is {formatDate()}. The time is <p id="txt"></p>.</h1>
                <h1 className="categories-header">Here are your categories:</h1>
              </div>
            <CategoryIndexContainer />
          </div>
        );
    }
}

export default withRouter(Dashboard);