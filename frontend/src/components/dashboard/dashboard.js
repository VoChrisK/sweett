import React from 'react';
import { withRouter } from 'react-router-dom'
import CategoryIndexContainer from '../category/category_index_container';
import { formatDate } from './../../util/formats';

class Dashboard extends React.Component {

  componentDidMount() {
    this.startTime();
    // this.checkTime.bind(this);
  }
    
  startTime() {
    let today=new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = this.checkTime(m);
    s = this.checkTime(s);
    let clock = document.getElementById('txt')
    if (clock) {
      clock.innerHTML = h + ":" + m + ":" + s;
      setTimeout(this.startTime.bind(this),1000);
    }
}

  checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

    render() {
        
        return (
          <div className="dashboard">
            <div className="dashboard-header">
                <h1 className="todays-date">Today is {formatDate()}. The time is <p id="txt"></p></h1>
                <h1 className="categories-header">Here are your categories:</h1>
              </div>
            <CategoryIndexContainer />
          </div>
        );
    }
}

export default withRouter(Dashboard);