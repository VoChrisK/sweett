import { connect } from "react-redux";
import TaskIndex from "./task_index";
import { openModal } from "../../actions/modal_actions";
import { requestCategoryTasks, deleteTask } from "../../actions/task_actions";
import { calculateActualTime, calculateExpectedTime } from '../../util/calculations';

const mapStateToProps = (state, ownProps) => ({
  tasks: Object.values(state.entities.tasks),
  // For CrackingTheCodingInterview
  chapterOneTasks: Object.values(state.entities.tasks).filter(task => task.section === "Chapter One"),
  chapterTwoTasks: Object.values(state.entities.tasks).filter(task => task.section === "Chapter Two"),
  chapterThreeTasks: Object.values(state.entities.tasks).filter(task => task.section === "Chapter Three"),
  chapterFourTasks: Object.values(state.entities.tasks).filter(task => task.section === "Chapter Four"),
  chapterFiveTasks: Object.values(state.entities.tasks).filter(task => task.section === "Chapter Five"),
  chapterSixTasks: Object.values(state.entities.tasks).filter(task => task.section === "Chapter Six"),
  chapterSevenTasks: Object.values(state.entities.tasks).filter(task => task.section === "Chapter Seven"),
  chapterEightTasks: Object.values(state.entities.tasks).filter(task => task.section === "Chapter Eight"),
  chapterNineTasks: Object.values(state.entities.tasks).filter(task => task.section === "Chapter Nine"),
  chapterTenTasks: Object.values(state.entities.tasks).filter(task => task.section === "Chapter Ten"),
  chapterElevenTasks: Object.values(state.entities.tasks).filter(task => task.section === "Chapter Eleven"),
  chapterTwelveTasks: Object.values(state.entities.tasks).filter(task => task.section === "Chapter Twelve"),
  chapterThirteenTasks: Object.values(state.entities.tasks).filter(task => task.section === "Chapter Thirteen"),
  chapterFourteenTasks: Object.values(state.entities.tasks).filter(task => task.section === "Chapter Fourteen"),
  chapterFifteenTasks: Object.values(state.entities.tasks).filter(task => task.section === "Chapter Fifteen"),
  chapterSixteenTasks: Object.values(state.entities.tasks).filter(task => task.section === "Chapter Sixteen"),
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
