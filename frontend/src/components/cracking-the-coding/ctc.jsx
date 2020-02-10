import React from 'react';
import { withRouter } from 'react-router-dom'
import SidebarContainer from '../sidebar/sidebar_container';
// import TaskIndexContainer from '../task/task_index_container';
import GoalIndexContainer from '../goal/goal_index_container';


class CrackingTheCoding extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // show side bar toggle btn
        document.getElementById("sidebar-toggle-button").style.display = "block";
    }

    render() {
        return (
            <div className="leetcode">
                <SidebarContainer />
                {/* <TaskIndexContainer /> */}
                <GoalIndexContainer categoryId={this.props.category._id} />
            </div>
        );
    }
}

export default withRouter(CrackingTheCoding);