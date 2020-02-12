import { connect } from "react-redux";
import CategoryForm from './category_form'
import { openModal, closeModal } from "../../actions/modal_actions";
import { createCategory } from '../../actions/category_actions'
import { createTask } from '../../actions/task_actions'

const mapStateToProps = state => {
  return {
      state,
      errors: state.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processCat: category => dispatch(createCategory(category)),
    closeModal: () => dispatch(closeModal()),
    addCat: () => dispatch(openModal("addCategory")),
    addTask: task => dispatch(createTask(task))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);
