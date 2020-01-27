import React from 'react';
import Modal from '../modal/modal';
import { withRouter } from 'react-router-dom';
import { calculateDays } from './../../util/calculations';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    // componentDidMount() {
    //   if(!this.props.loggedIn) {
    //     document.getElementsByClassName("navbar")[0].classList.add("onsplash");
    //   } else {
    //     document.getElementsByClassName("navbar")[0].classList.remove("onsplash");
    //   }
    // }

    componentDidUpdate(preProps) {
      if(this.props.location.path !== preProps.location.path) {
        console.log("hi")
        if (!this.props.loggedIn) {
          document.getElementsByClassName("navbar")[0].classList.add("onsplash");
        } else {
          document.getElementsByClassName("navbar")[0].classList.remove("onsplash");
        }
      }
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout()
        this.props.history.push("/");
    }

    handleDropdown() {
        let dropdown = document.getElementById("dropdown");
        if (dropdown.style.display === "block") {
          dropdown.style.display = "none";
        } else {
          dropdown.style.display = "block";
        }
    }

    handleClick() {
      if(this.props.loggedIn) {
        this.props.history.push("/dashboard");
      } else {
        this.props.history.push("/");
      }
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
              <div className="dropdown-parent">
                <img
                  onClick={this.handleDropdown.bind(this)}
                  className="thumbnail"
                  alt=""
                  src="https://en.meming.world/images/en/thumb/2/2c/Surprised_Pikachu_HD.jpg/300px-Surprised_Pikachu_HD.jpg"
                ></img>
                <div id="dropdown">
                  <ul className="dropdown-list">
                    <li className="dropdown-profile">Profile</li>
                    <li className="dropdown-logout" onClick={this.logoutUser}>Logout</li>
                  </ul>
                </div>
              </div>
            );
        } else {
            return (
                <nav className="login-signup">
                    <button className="login" onClick={this.props.login}>Login</button>
                    &nbsp;or&nbsp;
                    <button className="signup" onClick={this.props.signup}>Signup</button>
                </nav>
            );
        }
    }

    render() {
      let clock;
      if (!!this.props.currentUser) {
        if (Object.keys(this.props.currentUser).length > 0) {
          clock = <h1 className="days-counter">Day: {calculateDays(new Date(this.props.currentUser.date), Date.now())}</h1>
        }
      }
        return (
          <div className="navbar">
            <h1 className="logo" onClick={this.handleClick.bind(this)}>
              Sweett
            </h1>

            <Modal />
            {clock}
            {this.getLinks()}
          </div>
        );
    }
}

export default withRouter(NavBar);