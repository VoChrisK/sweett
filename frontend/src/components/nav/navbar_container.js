import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavBar from './navbar';
import { openModal } from '../../actions/modal_actions';
import { updateUser } from '../../actions/user_actions';
import { receiveTime } from '../../actions/time_actions';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session.user
});

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch(openModal("login")),
        signup: () => dispatch(openModal("signup")),
        logout: () => dispatch(logout()),
        updateUser: user => dispatch(updateUser(user)),
        saveDay: day => dispatch(receiveTime(day))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NavBar);