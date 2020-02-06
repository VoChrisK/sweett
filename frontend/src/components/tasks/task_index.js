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
      if (this.props.tasks.length === 0) return null;
      return <div className="category-tasks">
          {catTasks.map(task => task.name)}
          </div>;
  }
}
export default withRouter(TaskIndex);
