import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CategoryShow from './category_show';
import { requestCategory } from '../../actions/category_actions';
import { openModal, closeModal } from "../../actions/modal_actions";
import { updateCategory } from "../../actions/category_actions";

const mapStateToProps = (state, ownProps) => {
    return ({
        category: state.entities.categories[ownProps.match.params.categoryId]
    });
}

const mapDispatchToProps = (dispatch) => {
    return {
      edit: category => dispatch(updateCategory(category)),
      requestCategory: categoryId => dispatch(requestCategory(categoryId)),
      editCat: () => dispatch(openModal("updateCategory"))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryShow));