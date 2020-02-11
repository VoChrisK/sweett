import React from "react";
import { withRouter } from "react-router-dom";
// import TaskIndexItemContainer from "./task_index_item_container";

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedChapterOneTasks: false,
      loadedChapterTwoTasks: false,
      loadedChapterThreeTasks: false,
      loadedChapterFourTasks: false,
      loadedChapterFiveTasks: false,
      loadedChapterSixTasks: false,
      loadedChapterSevenTasks: false,
      loadedChapterEightTasks: false,
      loadedChapterNineTasks: false,
      loadedChapterTenTasks: false,
      loadedChapterElevenTasks: false,
      loadedChapterTwelveTasks: false,
      loadedChapterThirteenTasks: false,
      loadedChapterFourteenTasks: false,
      loadedChapterFifteenTasks: false,
      loadedChapterSixteenTasks: false,
      timeLimit: this.props.category.timeLimit
    }

    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
      this.props
        .requestCategoryTasks(this.props.match.params.categoryId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.tasks.length !== this.props.tasks.length) {
      this.props.requestCategoryTasks(this.props.category._id);
    }
  }

  toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const questionIndex = document.getElementsByClassName("question-index")[0];
    const sidebarToggleButton = document.getElementById(
      "sidebar-toggle-button"
    );

    // re-style question div
    if (sidebar.style.display === "none") {
      sidebar.style.display = "block";
      questionIndex.style.width = "64%";
      sidebarToggleButton.style.left = "0.2%";
    } else {
      sidebar.style.display = "none";
      questionIndex.style.width = "80%";
      sidebarToggleButton.style.left = "0.2%";
    }
  }

  // renderMoreTasks(tasks, length) {
  //   return tasks.slice(3).map((task, idx) => <TaskIndexItemContainer key={idx + 3 + length} task={task} idx={idx + 3 + length} />);
  // }

  handleInput(input) {
    this.setState({ [input]: !this.state[input] });
  }

  handleTimeLimit(event) {
    this.setState({ timeLimit: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let newCategory = Object.assign({}, this.props.category);
    newCategory.timeLimit = this.state.timeLimit;
    this.props.updateCategory(newCategory)
      .then(
        () => document.getElementsByClassName("edit-time")[0].classList.add("invisible")
      );
  }

  showForm(event) {
    const editTime = document.getElementsByClassName("edit-time")[0];
    if (editTime.classList.contains("invisible")) {
      editTime.classList.remove("invisible");
    } else {
      editTime.classList.add("invisible");
    }
  }

  renderLoadMore(length, input) {
    if (length > 3) {
      return (
        <div onClick={event => this.handleInput(input)} className="load-more">
          <h1>Load More</h1>
        </div>
      );
    }
  }

  render() {
      const catTasks = this.props.tasks
      const chapterOneTaskLength = this.props.chapterOneTasks.length;
      const chapterTwoTaskLength = this.props.chapterTwoTasks.length;
      const chapterThreeTaskLength = this.props.chapterThreeTasks.length;
      const chapterFourTaskLength = this.props.chapterFourTasks.length;
      const chapterFiveTaskLength = this.props.chapterFiveTasks.length;
      const chapterSixTaskLength = this.props.chapterSixTasks.length;
      const chapterSevenTaskLength = this.props.chapterSevenTasks.length;
      const chapterEightTaskLength = this.props.chapterEightTasks.length;
      const chapterNineTaskLength = this.props.chapterNineTasks.length;
      const chapterTenTaskLength = this.props.chapterTenTasks.length;
      const chapterElevenTaskLength = this.props.chapterElevenTasks.length;
      const chapterTwelveTaskLength = this.props.chapterTwelveTasks.length;
      const chapterThirteenTaskLength = this.props.chapterThirteenTasks.length;
      const chapterFourteenTaskLength = this.props.chapterFourteenTasks.length;
      const chapterFifteenTaskLength = this.props.chapterFifteenTasks.length;
      const chapterSixteenTaskLength = this.props.chapterSixteenTasks.length;

      if (this.props.tasks.length === 0) {
        return <div className="category-tasks"> Tasks 
         <div id="task-add" onClick={() => this.props.addTask()}>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
          </div></div>;
      } else {
        return <div className="category-tasks"> Tasks
        <div id="task-add" onClick={() => this.props.addTask()}>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
          </div>
            {catTasks.map((task, idx) => 
              <div key={idx}>{task.name}
                <br></br>
                </div>
              )}
            </div>;
      }
  }
}
export default withRouter(TaskIndex);

