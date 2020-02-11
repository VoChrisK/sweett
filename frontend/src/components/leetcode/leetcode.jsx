import React from 'react';
import { withRouter } from 'react-router-dom'
import SidebarContainer from '../sidebar/sidebar_container';
import QuestionIndexContainer from '../question/question_index_container';
import GoalIndexContainer from '../goal/goal_index_container';


class Leetcode extends React.Component {
    toggleSidebar() {
        const sidebar = document.getElementById("sidebar");
        const questionIndex = document.getElementsByClassName("question-index")[0];

        // re-style question div
        if (sidebar.style.display === "none") {
            sidebar.style.display = "block";
            questionIndex.style.width = "64%";
        } else {
            sidebar.style.display = "none";
            questionIndex.style.width = "80%";
        }
    }

    render() {
        return (
            <div className="leetcode">
                <button id="sidebar-toggle-button" onClick={this.toggleSidebar}>
                </button>
                <SidebarContainer />
                <QuestionIndexContainer category={this.props.category} />
                <GoalIndexContainer categoryId={this.props.category._id}/>
            </div>
        );
    }
}

export default withRouter(Leetcode);