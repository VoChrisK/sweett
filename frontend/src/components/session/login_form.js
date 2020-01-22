import React from 'react';
import { withRouter } from 'react-router-dom';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/dashboard');
        }

        // Set or clear errors
        this.setState({ errors: nextProps.errors })
    }

    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.processForm(user).then(this.props.closeModal);
    }

    // Render the session errors if there are any
    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="signin-component">
                <div className="signin-form-container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="signin-form">
                            <p className="auth-form-title">
                                <span>Sign in to SWETT</span>
                            </p>
                            {this.renderErrors()}
                            <input className="auth-form-email" type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                placeholder="Email"
                            />
                            <input className="auth-form-password" type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="Password"
                            />
                            <input className="auth-form-submit" type="submit" value="SIGN IN" />
                        </div>
                    </form>
                </div>
                <div className="signup-container">
                    <p className="auth-title">
                        <span>Hello, Friend!</span>
                    </p>
                    <p className="auth-description">
                        <span>Enter your personal details and start journey with us</span>
                    </p>
                    {this.props.otherForm}
                </div>
            </div>
        );
    }
}

export default withRouter(LoginForm);