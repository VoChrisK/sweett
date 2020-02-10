import React from 'react';
import { withRouter } from 'react-router-dom'
import SidebarContainer from '../sidebar/sidebar_container';
import QuestionIndexContainer from '../question/question_index_container';
import GoalIndexContainer from '../goal/goal_index_container';


class Leetcode extends React.Component {

    render() {
        return (
            <div className="leetcode">
                <SidebarContainer />
                <QuestionIndexContainer category={this.props.category} />
                <GoalIndexContainer categoryId={this.props.category._id}/>
            </div>
        );
    }
}

export default withRouter(Leetcode);