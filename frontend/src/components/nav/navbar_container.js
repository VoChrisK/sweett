import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import NavBar from './navbar';
import { openModal } from '../../actions/modal_actions';
import { updateUser } from '../../actions/user_actions';
import { receiveTime } from '../../actions/time_actions';

const mapStateToProps = (state, ownProps) => ({
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session.user,
    status: state.ui.tutorial,
    category: state.entities.categories[ownProps.location.pathname.split("/")[2]]
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

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(NavBar));