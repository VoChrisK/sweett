import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CategoryShow from './category_show';
import { requestCategory } from '../../actions/category_actions';
import { openModal } from "../../actions/modal_actions";
import { updateCategory } from "../../actions/category_actions";
import { requestCategoryAttempts } from '../../actions/attempt_actions';
import { requestCategoryTasks } from '../../actions/task_actions';
import { showTutorial } from '../../actions/tutorial_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        category: state.entities.categories[ownProps.match.params.categoryId],
        tasks: state.entities.tasks,
        goals: Object.values(state.entities.goals),
        status: state.ui.tutorial
    });
}

const mapDispatchToProps = (dispatch) => {
    return {
      edit: category => dispatch(updateCategory(category)),
      requestCategoryTasks: categoryId => dispatch(requestCategoryTasks(categoryId)),
      requestCategory: categoryId => dispatch(requestCategory(categoryId)),
      requestCategoryAttempts: categoryId => dispatch(requestCategoryAttempts(categoryId)),
      updateCategory: category => dispatch(updateCategory(category)),
      editCat: () => dispatch(openModal("updateCategory")),
      showTutorial: () => dispatch(showTutorial())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryShow));