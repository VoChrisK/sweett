import { connect } from "react-redux";
import TaskIndex from "./task_index";
import { openModal } from "../../actions/modal_actions";
import { requestCategoryTasks } from "../../actions/task_actions";

const mapStateToProps = state => ({
  tasks: Object.values(state.entities.tasks)
});

const mapDispatchToProps = dispatch => {
  return {
    addTask: () => dispatch(openModal("addTask")),
    requestCategoryTasks: categoryId => dispatch(requestCategoryTasks(categoryId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);
