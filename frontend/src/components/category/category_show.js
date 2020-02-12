import React from 'react';
import { calculateTotalProgress } from './../../util/calculations';
import SidebarContainer from './../sidebar/sidebar_container';
import TaskIndexContainer from './../tasks/task_index_container';
import GoalIndexContainer from './../goal/goal_index_container';
import { withRouter } from 'react-router-dom';

class CategoryShow extends React.Component {

  componentDidMount() {
    this.props.requestCategory(this.props.match.params.categoryId)
      .then(categoryData => this.props.requestCategoryAttempts(categoryData.category._id)
        .then(attemptsData => {
          // categoryData.category.actual = calculateActualTime(attemptsData.attempts);
          // categoryData.category.expected = calculateExpectedTime(categoryData.category.timeLimit, this.props.goals);
          categoryData.category.progress = calculateTotalProgress(this.props.goals);
          this.props.updateCategory(categoryData.category)
        })
      )
      this.props.requestCategoryTasks(this.props.match.params.categoryId);

      this.toggleSidebar();
    }

    componentDidUpdate(prevProps) {
      if (this.props.match.params.categoryId !== prevProps.match.params.categoryId) {
        this.props.requestCategoryTasks(this.props.match.params.categoryId)
      }
    }

  toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const main = document.getElementsByClassName("question-index")[0];

    // re-style question div
    if (sidebar.style.display === "none") {
      sidebar.style.display = "block";
      main.style.width = "64%";
    } else {
      sidebar.style.display = "none";
      main.style.width = "80%";
    }
  }

  render() {
    if (!this.props.category) return null;
    
    // if (this.props.category.title === "Leetcode") {
      return (
        <div className="leetcode">
          <button id="sidebar-toggle-button" onClick={this.toggleSidebar}>
          </button>
          <SidebarContainer />
          <TaskIndexContainer category={this.props.category} />
          <GoalIndexContainer categoryId={this.props.category._id} />
        </div>
      )
      // )    } else if (this.props.category.title === "CrackingTheCode") {
      // return <CrackingTheCodingContainer category={this.props.category} />;
      // } else {
        // return null;
    // }
  }
}

export default withRouter(CategoryShow);