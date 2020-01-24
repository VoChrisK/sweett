import React from 'react';
import { withRouter } from 'react-router-dom'
import GoalIndexItem from './goal_index_item';


class GoalIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="goal-index">
                <p>Goals</p>
                <GoalIndexItem />
            </div>
        );
    }
}

export default withRouter(GoalIndex);