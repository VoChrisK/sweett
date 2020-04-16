import React from 'react';
import { withRouter } from 'react-router-dom'
import CategoryIndexContainer from '../category/category_index_container';
import { formatDate } from './../../util/formats';

class Dashboard extends React.Component {

  componentDidMount() {
    this.startTime();
    // this.checkTime.bind(this);

    setTimeout( this.updateText, 2500);
  }
    
  startTime() {
    let today=new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let ampm = "a.m.";

    if (h > 12) {
      h -= 12;
      ampm = "p.m.";
    }

    m = this.checkTime(m);
    s = this.checkTime(s);
    let clock = document.getElementById('txt')
    if (clock) {
      clock.innerHTML = h + ":" + m + ":" + s + " " + ampm;
      setTimeout(this.startTime.bind(this),1000);
    }
}

  checkTime(i) {
      if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
  }

  updateText() {
    let header = document.getElementsByClassName("categories-header")[0];
    header.innerHTML = "Please select one from your categories:";
  }

  render() {
      return (
        <div className="dashboard">
          <div className="dashboard-header">
              <h1 className="todays-date">Today is {formatDate()}. The time is <p id="txt"></p></h1>
              <h1 className="categories-header">Welcome to SWEETT!</h1>
            </div>
          <CategoryIndexContainer />
        </div>
      );
  }
}

export default withRouter(Dashboard);