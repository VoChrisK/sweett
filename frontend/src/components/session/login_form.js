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
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            window.history.push('/dashboard');
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


    demoButton() {
        return (
            <button className="auth-form-submit auth-form-submit-demo"
                onClick={this.handleDemoSubmit}
                value="Demo Sign In">
                <span>DEMO</span>
            </button>
        );
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.processForm(user).then(() => {
            if(this.state.errors.length === 0) {
                this.props.closeModal();
            }
        });
    }

    demo(user) {
        const intervalSpeed = 75;
        const { email, password } = user;
        const demoEmailTime = email.length * intervalSpeed;
        const demoPasswordTime = password.length * intervalSpeed;
        const buffer = intervalSpeed * 2;
        const totalDemoTime = demoEmailTime + demoPasswordTime + buffer;
        this.demoEmail(email, intervalSpeed);
        setTimeout(() => this.demoPassword(password, intervalSpeed), demoEmailTime);
        setTimeout(() => this.props.processForm(user), totalDemoTime)
        setTimeout(() => this.props.closeModal(), totalDemoTime + buffer)
    }

    demoEmail(email, intervalSpeed) {
        let i = 0;
        setInterval(() => {
            if (i <= email.length) {
                this.setState({ email: email.slice(0, i) })
                i++
            } else {
                clearInterval()
            }
        }, intervalSpeed);
    }

    demoPassword(password, intervalSpeed) {
        let j = 0;
        setInterval(() => {
            if (j <= password.length) {
                this.setState({ password: password.slice(0, j) })
                j++
            } else {
                clearInterval();
            }
        }, intervalSpeed);
    }

    handleDemoSubmit() {
        const user = {
            email: "demo@sweett.io",
            password: "123123"
        };
        this.demo(user);
    }

    // Render the session errors if there are any
    renderErrors() {
        return (
            <ul className="errors">
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
                                <span>Sign in to SWEETT</span>
                            </p>
                            {this.renderErrors()}
                            <input className="auth-form-email" type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                placeholder="Email"
                                autoFocus="autofocus"
                            />
                            <input className="auth-form-password" type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="Password"
                            />
                            <input className="auth-form-submit" type="submit" value="SIGN IN" />
                        </div>
                    </form>
                    {this.demoButton()}
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