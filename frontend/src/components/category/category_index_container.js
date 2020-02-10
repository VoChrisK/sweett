import { connect } from 'react-redux';
import CategoryIndex from './category_index';
import { requestCategories, deleteCategory } from './../../actions/category_actions';
import {openModal} from '../../actions/modal_actions'

const mapStateToProps = (state) => {

    return ({
        categories: Object.values(state.entities.categories),
        currentUserId: state.session.user.id
    });
};

const mapDispatchToProps = (dispatch) => {
    return {
      delCat: categoryId => dispatch(deleteCategory(categoryId)),
      addCat: () => dispatch(openModal("addCategory")),
      editCat: () => dispatch(openModal("updateCategory")),
      requestCategories: currentUserId =>
        dispatch(requestCategories(currentUserId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryIndex);