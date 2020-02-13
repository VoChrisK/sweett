import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      window.history.push('/dashboard');
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors })
  }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2
        };
        this.props.processForm(user, this.props.history)
        .then(() => {
            if(this.state.errors.length === 0) {
              this.props.createCategory({ title: "Leetcode", taskName: "Questions", progress: 0 });
              this.props.createCategory({ title: "Cracking The Coding Interview", taskName: "Questions", progress: 0 })
                .then(() => {
                  this.props.history.push('/dashboard');
                  this.props.closeModal();
                });
            }
        });
    }

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
          <div className="signup-component">
            <div className="signin-container">
              <p className="auth-title">
                <span>Welcome Back!</span>
              </p>
              <p className="auth-description">
                <span>
                  To keep connected with us please login with your personal info
                </span>
              </p>
              {this.props.otherForm}
            </div>
            <div className="signup-form-container">
              <form onSubmit={this.handleSubmit}>
                <div className="signup-form">
                  <p className="auth-form-title">
                    <span>Create Account</span>
                  </p>
                  {this.renderErrors()}
                  <input
                    className="auth-form-email"
                    type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                    placeholder="Email"
                    autoFocus="autofocus"
                  />
                  <input
                    className="auth-form-email"
                    type="text"
                    value={this.state.username}
                    onChange={this.update("username")}
                    placeholder="Username"
                  />
                  <input
                    className="auth-form-password"
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    placeholder="Password"
                  />
                  <input
                    className="auth-form-password"
                    type="password"
                    value={this.state.password2}
                    onChange={this.update("password2")}
                    placeholder="Confirm Password"
                  />
                  <input
                    className="auth-form-submit"
                    type="submit"
                    value="SIGN UP"
                  />
                </div>
              </form>
            </div>
          </div>
        );
    }
}

export default withRouter(SignupForm);