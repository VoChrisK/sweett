import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CategoryShow from './category_show';
import { requestCategory } from '../../actions/category_actions';
import { openModal, closeModal } from "../../actions/modal_actions";
import { updateCategory } from "../../actions/category_actions";
import { requestCategoryAttempts } from '../../actions/attempt_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        category: state.entities.categories[ownProps.match.params.categoryId],
        goals: Object.values(state.entities.goals)
    });
}

const mapDispatchToProps = (dispatch) => {
    return {
      edit: category => dispatch(updateCategory(category)),
      requestCategory: categoryId => dispatch(requestCategory(categoryId)),
      requestCategoryAttempts: categoryId => dispatch(requestCategoryAttempts(categoryId)),
      updateCategory: category => dispatch(updateCategory(category)),
      editCat: () => dispatch(openModal("updateCategory"))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryShow));