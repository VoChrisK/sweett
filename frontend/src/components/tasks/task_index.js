import React from "react";
import { withRouter } from "react-router-dom";
import TaskIndexItemContainer from "./task_index_item_container";

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLimit: this.props.category.timeLimit
    }

    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.props.requestCategoryTasks(this.props.category._id);
    // Close dropdown onclick outside
    let dropdown = document.getElementsByClassName("edit-time")[0];
    let dropdownParent = document.getElementsByClassName("fa-hourglass")[0];
    if (!!dropdownParent) {
      document.addEventListener('mouseup', e => {
        if ((e.target !== dropdownParent) &&
          (!Array.from(dropdownParent.children).includes(e.target)) &&
          (!Array.from(dropdown.children).includes(e.target))) {
          dropdown.classList.add("invisible");
        }
      })
    }
  }

  // For when hourglass is working
  componentDidUpdate(prevProps) {
    if (
      (prevProps.tasks.length !== this.props.tasks.length) &&
      (prevProps.session.user === this.props.session.user) &&
      (prevProps.match.params.categoryId !== this.props.match.params.categoryId)
    ){
      this.props.requestCategoryTasks(this.props.category._id);
    }
    let dropdown = document.getElementsByClassName("edit-time")[0];
    let dropdownParent = document.getElementsByClassName("fa-hourglass")[0];
    if (!!dropdownParent) {
      document.addEventListener('mouseup', e => {
        if ((e.target !== dropdownParent) &&
          (!Array.from(dropdownParent.children).includes(e.target)) &&
          (!Array.from(dropdown.children).includes(e.target))) {
          dropdown.classList.add("invisible");
        }
      })
    }
  }

  toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const questionIndex = document.getElementsByClassName("question-index")[0];
    // const goalIndex = document.getElementsByClassName("goal-index")[0];
    const sidebarToggleButton = document.getElementById("sidebar-toggle-button");

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
 // <button className="task-remove" onClick={() => this.props.delTask(task2._id)}></button>
  renderTasks() {
    let start = 0;
    let flag = true;

    return (
      <div id="question-index-container">
        {
          this.props.tasks.map((task1, idx1) => {
            flag = true;
            if(idx1 !== start) {
              return null;
            } else {
              return (
                <div className="question-container">
                  {task1.section}
                  {
                    this.props.tasks.slice(idx1).map((task2, idx2) => {
                      if(task1.section !== task2.section) {
                        if(flag) {
                          start = idx2 + idx1;
                          flag = false;
                        }
                        return null;
                      } else {
                        return (
                          <TaskIndexItemContainer key={idx2 + idx1} task={task2} idx={idx2 + idx1} />
                        )
                      }
                    })
                  }
                </div>
              )}
          })
        }
      </div>
    )
  }

  renderHeader() {
    return (
      <div className="question-title-description-add">
        <div className="question-title-description">
          <div className="question-index-title">
            TASKS
                <i onClick={this.showForm.bind(this)} className="fa fa-hourglass">
              <form onSubmit={this.handleSubmit.bind(this)} className="edit-time invisible">
                <label htmlFor="edit-time-input">Input the time limit per question for all questions: </label>
                {/* <input onClick={event => event.stopPropagation()} onChange={this.handleTimeLimit.bind(this)} type="number" id="edit-time-input" value={this.state.timeLimit} min="0" /><strong> minutes</strong> */}
              </form>
            </i>
          </div>
          <p className="question-index-description">{this.props.actualTime} / {this.props.expectedTime} minutes completed</p>
        </div>
        <div id="question-add" onClick={() => this.props.addTask()}>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" className="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="question-index">
        <button id="sidebar-toggle-button" onClick={this.toggleSidebar}></button>
          {this.renderHeader()}
          {this.renderTasks()}
      </div>
    );
  }
}
export default withRouter(TaskIndex);

