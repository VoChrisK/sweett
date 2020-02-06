import React from "react";
import { withRouter } from "react-router-dom";

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      this.props
        .requestCategoryTasks(this.props.match.params.categoryId)
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

  render() {
      const catTasks = this.props.tasks
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
            {catTasks.map(task => 
              <div>{task.name}
                <br></br>
                </div>
              )}
            </div>;
      }
  }
}
export default withRouter(TaskIndex);
