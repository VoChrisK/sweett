import React from 'react';
import { Link } from 'react-router-dom'
import Modal from '../modal/modal';

// import './navbar.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
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
        return (
            console.log('henlo')
        )
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
                    <button onClick={this.props.login}>Login</button>
                    &nbsp;or&nbsp;
                    <button onClick={this.props.signup}>Signup</button>
                </nav>
            );
        }
    }

    render() {
        return (
            <div className="navbar">
                <h1 className="logo" onClick={this.handleClick.bind(this)}>SWETT</h1>

            <div>
                <Modal />
                <h1>SWETT</h1>
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;