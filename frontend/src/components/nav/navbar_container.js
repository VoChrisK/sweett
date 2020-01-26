import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavBar from './navbar';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session.user
});

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch(openModal("login")),
        signup: () => dispatch(openModal("signup")),
        logout: () => dispatch(logout())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NavBar);