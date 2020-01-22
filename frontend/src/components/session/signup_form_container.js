import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

import SignupForm from './signup_form';

const mapStateToProps = (state) => {
    console.log(state, "state")
    return {
        signedIn: state.session.isSignedIn,
        errors: state.errors.session,
        formType: 'signup',
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <button className="auth-button" onClick={() => dispatch(openModal('login'))}>
                Login
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupForm);