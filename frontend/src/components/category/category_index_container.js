import { connect } from 'react-redux';
import CategoryIndex from './category_index';
import { requestCategories } from './../../actions/category_actions';

const mapStateToProps = (state) => {
    return ({
        categories: Object.values(state.entities.categories)
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        requestCategories: () => dispatch(requestCategories())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryIndex);