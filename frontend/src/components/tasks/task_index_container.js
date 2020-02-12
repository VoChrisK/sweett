import { connect } from "react-redux";
import TaskIndex from "./task_index";
import { openModal } from "../../actions/modal_actions";
import { requestCategoryTasks, deleteTask } from "../../actions/task_actions";
import { calculateActualTime, calculateExpectedTime } from '../../util/calculations';
import { updateCategory } from '../../actions/category_actions';

const mapStateToProps = (state, ownProps) => ({
  session: state.session,
  tasks: Object.values(state.entities.tasks).sort((task1, task2) => task1.section > task2.section ? 1 : -1),
  actualTime: calculateActualTime(ownProps.category.timeLimit, Object.values(state.entities.attempts), Object.values(state.entities.goals)),
  expectedTime: calculateExpectedTime(ownProps.category.timeLimit, Object.values(state.entities.goals))
});

const mapDispatchToProps = dispatch => {
  return {
    addTask: () => dispatch(openModal("addTask")),
    requestCategoryTasks: categoryId => dispatch(requestCategoryTasks(categoryId)),
    delTask: taskId => dispatch(deleteTask(taskId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);
