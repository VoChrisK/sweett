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

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div>
                    <Link to={'/'}>placeholder</Link>
                    <Link to={'/'}>placeholder</Link>
                    <Link to={'/'}>placeholder</Link>
                    <button onClick={this.logoutUser}>Logout</button>
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
            <div>
                <Modal />
                <h1>SWETT</h1>
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;