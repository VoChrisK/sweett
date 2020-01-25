import { connect } from 'react-redux';
import { requestCategories } from './../../actions/category_actions';


import Sidebar from './sidebar';

const mapStateToProps = (state) => {
    return ({
        categories: Object.values(state.entities.categories),
        currentUserId: state.session.user.id
    });
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestCategories: currentUserId =>
            dispatch(requestCategories(currentUserId))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Sidebar);