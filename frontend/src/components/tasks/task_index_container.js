import { connect } from "react-redux";
import TaskIndex from "./task_index";
import { openModal } from "../../actions/modal_actions";
import { requestCategoryTasks } from "../../actions/task_actions";

const mapStateToProps = state => ({
  tasks: Object.values(state.entities.tasks),
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
  // actualTime: calculate
});

const mapDispatchToProps = dispatch => {
  return {
    addTask: () => dispatch(openModal("addTask")),
    requestCategoryTasks: categoryId => dispatch(requestCategoryTasks(categoryId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);
