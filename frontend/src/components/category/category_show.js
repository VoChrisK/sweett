import React from 'react';
import LeetCodeContainer from './../leetcode/leetcode_container';
import SidebarContainer from "../sidebar/sidebar_container";

class CategoryShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestCategory(this.props.match.params.categoryId);
  }

  handleEdit() {
    let form = document.getElementById("edit-form");
    if (form) {
      form.style.visibility = "visible";
    } else {
      form.style.visibility = "hidden";
    }
  }

  toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const questionIndex = document.getElementsByClassName("question-index")[0];
    const goalIndex = document.getElementsByClassName("goal-index")[0];
    const sidebarToggleButton = document.getElementById(
      "sidebar-toggle-button"
    );

    // re-style question, goal divs
    if (sidebar.style.display === "none") {
      sidebar.style.display = "block";
      sidebarToggleButton.style.left = "0.2%";
    } else {
      sidebar.style.display = "none";
      sidebarToggleButton.style.left = "0.2%";
    }
  }

  handleSubmit() {
    let text = document.getElementById("title-input").value;
    this.state.title = text 
    this.props.edit(this.state)
    let form = document.getElementById("edit-form");
    if (form) {
      form.style.visibility = "hidden";
    } else {
      form.style.visibility = "visible";
    }
  }

  update(field) {
      
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  render() {
    this.state = this.props.category;

    if (!this.props.category) return null;

    if (this.props.category.title === "Leetcode") {
      return <LeetCodeContainer />;
    } else {
      return (
        <div className="show-category">
          <div className="sidebar">
            <button
              id="sidebar-toggle-button"
              onClick={this.toggleSidebar}
            ></button>
            <SidebarContainer />
          </div>
          <div className="cat-info">
            <div onClick={this.handleEdit} id="cat-show-title">
              {this.props.category.title}
            </div>
            <form id="edit-form">
              <h1>Edit Category</h1>
              <input
              id="title-input"
                onChange={this.update("title")}
                type="text"
                defaultValue={this.state.title}
              ></input>
              <button type="button" onClick={this.handleSubmit.bind(this)}>
                Submit
              </button>
            </form>
            <h3 className="show-actual">{`Questions: ${this.props.category.actual}/${this.props.category.expected}`}</h3>
            <br />
            <br />
            <h3 className="show-progress">{`Progress: ${this.props.category.progress} %`}</h3>
          </div>
        </div>
      );
    }
  }
}

export default CategoryShow;