import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from '../../actions/session_actions'


const mapState = state => {
    return (
        state
    )
}

const mapDispatch = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(
    mapState,
    mapDispatch
)(Dashboard);