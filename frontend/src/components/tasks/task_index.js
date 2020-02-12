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

  componentDidUpdate(prevProps) {
    if (this.props.match.params.categoryId !== prevProps.match.params.categoryId) {
      this.props.requestCategoryTasks(this.props.category._id);
    }

    
    if(this.props.expectedTime !== prevProps.expectedTime) {
      let newCategory = Object.assign({}, this.props.category);
      newCategory.expected = this.props.expectedTime;
      this.props.updateCategory(newCategory);
    }

    if (this.props.actualTime !== prevProps.actualTime) {
      let newCategory = Object.assign({}, this.props.category);
      newCategory.actual = this.props.actualTime;
      this.props.updateCategory(newCategory);
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
    // let dropdown = document.getElementsByClassName("edit-time")[0];
    // let dropdownParent = document.getElementsByClassName("fa-hourglass")[0];
    // if (!!dropdownParent) {
    //   document.addEventListener('mouseup', e => {
    //     if ((e.target !== dropdownParent) &&
    //       (!Array.from(dropdownParent.children).includes(e.target)) &&
    //       (!Array.from(dropdown.children).includes(e.target))) {
    //       dropdown.classList.add("invisible");
    //     }
    //   })
    // }
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
                <div className="question-container" key={idx1}>
                  <p className="question-container-title">{task1.section}</p>
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
            {this.props.category.title}
                <i onClick={this.showForm.bind(this)} className="fa fa-hourglass">
              <form onClick={event => event.stopPropagation()} onSubmit={this.handleSubmit.bind(this)} className="edit-time invisible">
                <label onClick={event => event.stopPropagation()} htmlFor="edit-time-input">Input the time limit per question for all questions: </label>
                <input onClick={(event) => event.stopPropagation()} onChange={this.handleTimeLimit.bind(this)} type="number" id="edit-time-input" value={this.state.timeLimit} min="0" /><strong> minutes</strong>
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
          {this.renderHeader()}
          {this.renderTasks()}
      </div>
    );
  }
}
export default withRouter(TaskIndex);

