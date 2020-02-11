import React from 'react';
import { withRouter } from 'react-router-dom'
import SidebarContainer from '../sidebar/sidebar_container';
import TaskIndexContainer from '../tasks/task_index_container';
import GoalIndexContainer from '../goal/goal_index_container';


class CrackingTheCoding extends React.Component {
    toggleSidebar() {
        const sidebar = document.getElementById("sidebar");

        // re-style question div
        if (sidebar.style.display === "none") {
            sidebar.style.display = "block";
        } else {
            sidebar.style.display = "none";
        }
    }
    
    render() {
        return (
            <div className="leetcode">
                <button id="sidebar-toggle-button" onClick={this.toggleSidebar}>
                </button>
                <SidebarContainer />
                <TaskIndexContainer category={this.props.category}/>
                <GoalIndexContainer categoryId={this.props.category._id} />
            </div>
        );
    }
}

export default withRouter(CrackingTheCoding);