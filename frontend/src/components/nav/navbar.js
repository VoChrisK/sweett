import React from 'react';
import { Link } from 'react-router-dom'
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
        if (dropdown.style.display === "none") {
          dropdown.style.display = "block";
        } else {
          dropdown.style.display = "none";
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
                    src="https://en.meming.world/images/en/thumb/2/2c/Surprised_Pikachu_HD.jpg/300px-Surprised_Pikachu_HD.jpg"
                ></img>
                <div id="dropdown">
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
              </div>
            );
        } else {
            return (
                <div>
                    <Link to={'/signup'}>Signup</Link>
                    <Link to={'/login'}>Login</Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="navbar">
                <h1 className="logo" onClick={this.handleClick.bind(this)}>SWETT</h1>
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;